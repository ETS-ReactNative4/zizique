import React,{useState} from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';

const ClassementItem = (props) =>{
    
    const {item} = props;

    return (
        <View style={styles.card}>
            <View style={styles.img_container}>
                <Image source={require(`../../ImgSvg/avatar3.svg`)} style={styles.images} resizeMode="contain"/>
            </View>
            <View style={styles.txt_container}>
                <Text style={styles.txt_song}>{item.nom}</Text>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    images: {
        width:"100%",
    },
    card:{
        backgroundColor:"#E43F6F",
        flexDirection:"row",
        marginVertical:5
    },
    txt_container:{
        justifyContent:"center",
        padding:5,
        width:"60%"
    },
    img_container:{
        width:"40%"
    },
    txt_artist:{
        color:"white",
        fontSize:9,
    },
    txt_song:{
        color:"white",
        fontSize:12,
    }
});


export default ClassementItem