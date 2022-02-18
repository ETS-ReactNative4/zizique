import React,{useRef} from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Logo from "../../ImgSvg/logo.svg";

export const Header = () => {
   
    return(
        <View style={styles.container}>
            <Logo height={100} width={100}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
    }
})