import React,{useEffect,useRef} from 'react';
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native';
import ModalInfo from './ModalInfo';
const GenreItem = (props) =>{
    
    const {genre} = props;

    return (
        <View style={styles.card}>
            <TouchableOpacity>
                <Image source={{uri: `${genre.icons[0].url}`}} style={styles.images} />
            </TouchableOpacity>
            <ModalInfo />
        </View>
    )  
}

const styles = StyleSheet.create({
    images: {
        width: 150,
        height: 150,
        borderRadius:10
    },
    card:{
        paddingHorizontal:10,
    },
});


export default GenreItem