import React,{useState} from 'react';
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native';
import * as Linking from 'expo-linking';

const PlaylistItem = (props) =>{
    const {item} = props;
    
    return (
        <View style={{flex:1,marginVertical:5}}>
            <TouchableOpacity onPress={()=>{
                Linking.openURL(item.url);
            }}>
                <View style={styles.card}>
                    <View style={styles.img_container}>
                        <Image source={{uri: `${item.images[0].url}`}} style={styles.images} resizeMode="contain"/>
                    </View>
                    <View style={styles.txt_container}>
                        <Text style={styles.txt_title}>{item.title}</Text>                        
                        <Text style={styles.txt_song}>{item.song}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )  
}

const styles = StyleSheet.create({
    images: {
        width:"100%",
        height:70
    },
    card:{
        flexDirection:"row",
        borderBottomColor:"white",
        borderBottomWidth:"100%",
    },
    txt_container:{
        justifyContent:"center",
        padding:5,
        width:"60%"
    },
    img_container:{
        width:"40%"
    },
    txt_title:{
        color:"white",
        fontSize:12,
    },
    txt_song:{
        color:"white",
        fontSize:12,
    }
});


export default PlaylistItem