import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import CarrouselItem from './CarrouselItem';
import { AntDesign } from '@expo/vector-icons';

const Carrousel = (props) => {

    const { slides, setIcon } = props
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatlistRef = useRef();



    const onViewableItemsChanged = ({ viewableItems, changed }) => {
        const current = viewableItems.filter((slide) => {
            return slide.isViewable == true
        })
        setCurrentIndex(current[0].index);
        setIcon(current[0].index);
    };
    const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

    const slideLeft = () => {
        if (currentIndex == 0) {
            flatlistRef.current.scrollToIndex({ index: slides.length - 1 });

        } else {
            flatlistRef.current.scrollToIndex({ index: currentIndex - 1 });

        }
    };

    const slideRight = () => {
        if (currentIndex === slides.length - 1) {
            flatlistRef.current.scrollToIndex({ index: 0 });

        } else {
            flatlistRef.current.scrollToIndex({ index: currentIndex + 1 });

        }
    };

    return (
        <View style={styles.container}>
            {
                slides && slides.length != 0 ?
                    <View style={styles.container}>
                        <TouchableOpacity onPress={slideLeft} >
                            <AntDesign name="caretleft" size={24} color="black" />
                        </TouchableOpacity>
                        <FlatList
                            data={slides}
                            renderItem={({ item, index }) => <CarrouselItem item={item} index={index} />}
                            keyExtractor={item => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            style={{ flex: 1 }}
                            horizontal={true}
                            pagingEnabled={true}
                            viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                            ref={flatlistRef}

                        />
                        <TouchableOpacity onPress={slideRight} >
                            <AntDesign name="caretright" size={24} color="black" />
                        </TouchableOpacity>
                    </View> : null
            }

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
});

export default Carrousel