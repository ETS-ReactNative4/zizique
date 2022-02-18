import React,{useState} from 'react';
import {View,StyleSheet,Text} from 'react-native';

const Progress = (props) =>{
    
    const {percent} = props;

    return (
        <View style={styles.progress_container}>
            <View style={[styles.progress_bar,{width:`${percent}%`}]}>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    progress_container:{
        flex:1,
        position:"relative",
        borderTopRightRadius:29,
        borderTopLeftRadius:29,
        backgroundColor:"rgba(0,0,0,.2)"
    },
    progress_bar : {
        flex:1,
        backgroundColor:"#5BC9D7",
        borderTopRightRadius:29,
        borderTopLeftRadius:29,
    },
   

});


export default Progress