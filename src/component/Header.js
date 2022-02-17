import React,{useRef} from 'react';
import {View,StyleSheet,Image,} from 'react-native';

export const Header = () => {
   
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/logo.svg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:0.2,
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
    }
})