import React,{useState,useEffect} from 'react';
import {View,ActivityIndicator,StyleSheet,Text} from 'react-native';
import Waiting from '../../ImgSvg/waiting.svg'


const Loading = (props) =>{
    const [modalVisible, setModalVisible] = useState(false);
    const {genre,joinRoom} = props;

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }
    
    useEffect(() => {
       
    },[genre]);

    return (
        <View style={{flex:1,alignItems:"center",justifyContent:"center",}}>
            <Waiting height={300} width={"100%"} />
            <ActivityIndicator size="large" color="#FFFF" />
            <Text style={{color:"white",fontSize:50}}>Loading ....</Text>
        </View>
    )  
}

const styles = StyleSheet.create({
    images: {
        width: 130,
        height: 130,
        borderRadius:10
    },

});


export default Loading