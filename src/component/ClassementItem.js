import React,{useState} from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';

const ClassementItem = (props) =>{
    
    const {item} = props;

    return (
        <View style={styles.card}>
            <View style={styles.img_container}>
                <Image source={require(`../../assets/avatar2.png`)} style={styles.images} resizeMode="contain"/>
            </View>
            <View style={styles.txt_container}>
                <Text style={styles.txt_nom}>{item.nom}</Text>
                <Text style={styles.txt_pt}>{item.point} pt</Text>

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
        marginVertical:5,
        alignItems:"center"
    },
    txt_container:{
        justifyContent:"center",
        padding:5,
        width:"80%"
    },
    img_container:{
        width:"20%"
    },
    txt_nom:{
        color:"white",
        fontSize:12,
    },
    txt_pt:{
        color:"white",
        fontSize:8,
    }
});


export default ClassementItem