import React,{useEffect,useRef,useState} from 'react';
import {View,StyleSheet,Animated,Easing,Text} from 'react-native';

const Progress = (props) =>{
    
    const {percent} = props;
    const [currentPercent,setCurrentPercent] = useState(0)
    const progression = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if(!isNaN(percent)){
            setCurrentPercent(percent)
        }
        Animated.timing(progression, {
            toValue: currentPercent,
            duration: 1000,
            easing:Easing.ease,
            useNativeDriver:false
        }).start();
    },[percent])

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