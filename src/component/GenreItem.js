import React,{useState,useEffect} from 'react';
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native';
import ModalInfo from './ModalInfo';

const GenreItem = (props) =>{
    const [modalVisible, setModalVisible] = useState(false);
    const {genre,joinRoom} = props;

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }
    
    useEffect(() => {
       
    },[genre]);

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={()=>toggleModal()}>
                {
                    genre.icons[0].url ? <Image source={{uri: `${genre.icons[0].url}`}} style={styles.images} />:null
                }
            </TouchableOpacity>
            <ModalInfo toggleVisibility={toggleModal} visibility={modalVisible} genre={genre} text="Rejoindre" joinRoom={joinRoom}/>
        </View>
    )  
}

const styles = StyleSheet.create({
    images: {
        width: 130,
        height: 130,
        borderRadius:10
    },
    card:{
        padding:5,
    },
});


export default GenreItem