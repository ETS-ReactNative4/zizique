import React,{useEffect,useRef} from 'react';
import {View,StyleSheet,Animated,Easing,Text} from 'react-native';

const Progress = (props) =>{
    
    const {percent} = props;
    const progression = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progression, {
            toValue: percent,
            duration: 1000,
            easing:Easing.ease,
            useNativeDriver:false
        }).start();
    },[])

    return (
        <View style={styles.progress_container}>
            <Animated.View style={[styles.progress_bar,{width:progression.interpolate(
                {
                    inputRange: [0, 100],
                    outputRange: ['0%', '100%'],
                }
            )}]}></Animated.View>
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