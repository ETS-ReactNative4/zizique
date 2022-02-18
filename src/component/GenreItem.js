import React,{useState} from 'react';
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native';
import ModalInfo from './ModalInfo';
const GenreItem = (props) =>{
    const [modalVisible, setModalVisible] = useState(false);
    const {genre} = props;

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={()=>toggleModal()}>
                <Image source={{uri: `${genre.icons[0].url}`}} style={styles.images} />
            </TouchableOpacity>
            <ModalInfo toggleVisibility={toggleModal} visibility={modalVisible} genreID={genre.id}/>
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