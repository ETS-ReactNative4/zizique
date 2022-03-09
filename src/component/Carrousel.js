import React, {useCallback,useRef,useState} from 'react';
import {FlatList,View,StyleSheet,TouchableOpacity} from "react-native";
import CarrouselItem from './CarrouselItem';
import { AntDesign } from '@expo/vector-icons'; 

const Carrousel = (props) =>{
    
    const {slides} = props
    const slidesRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
        console.log(currentIndex)
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;




    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign name="caretleft" size={24} color="black" />
            </TouchableOpacity>
            <FlatList
                data={slides}
                renderItem={({item,index}) => <CarrouselItem item={item} index={index} />}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                style={{flex:1}}
                horizontal={true}
                // pagingEnabled={true}
                bounces={false}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}

                // onScroll={onScroll}

            />
            <TouchableOpacity>
                <AntDesign name="caretright" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:"row",
    },
});

export default Carrousel