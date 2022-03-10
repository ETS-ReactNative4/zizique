import React, {useEffect,useRef,useState} from 'react';
import {FlatList,View,StyleSheet,TouchableOpacity} from "react-native";
import CarrouselItem from './CarrouselItem';
import { AntDesign } from '@expo/vector-icons'; 

const Carrousel = (props) =>{
    
    const {slides,setIcon} = props
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatlistRef = useRef();

    useEffect(()=>{
        console.log(slides)
    },[])

    const onViewableItemsChanged = ({ viewableItems, changed }) => {
        const current =  viewableItems.filter((slide)=>{
            return slide.isViewable == true
        })
        setCurrentIndex(current[0].index);
        setIcon(current[0].index);
    };
    const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

    const slideLeft = () => {
        flatlistRef.current.scrollToIndex({index: currentIndex-1});
    };

    const slideRight = () => {
        flatlistRef.current.scrollToIndex({index: currentIndex+1});
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={slideLeft} disabled={currentIndex!=0?false:true}>
                <AntDesign name="caretleft" size={24} color="black" />
            </TouchableOpacity>
            <FlatList
                data={slides}
                renderItem={({item,index}) => <CarrouselItem item={item} index={index} />}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                style={{flex:1}}
                horizontal={true}
                pagingEnabled={true}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                ref={flatlistRef}

            />
            <TouchableOpacity onPress={slideRight} disabled={currentIndex!=slides.length-1?false:true}>
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