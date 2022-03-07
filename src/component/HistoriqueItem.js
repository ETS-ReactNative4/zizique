import React,{useState} from 'react';
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native';
import ModalInfo from './ModalInfo';

const HistoricItem = (props) =>{
    const [modalVisible, setModalVisible] = useState(false);
    const {item} = props;

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={{flex:1,marginVertical:5}}>
            <TouchableOpacity onPress={()=>toggleModal()} style={styles.card}>
                <View style={styles.card}>
                    <View style={styles.img_container}>
                        <Image source={{uri: `${item.images[0].url}`}} style={styles.images} resizeMode="contain"/>
                    </View>
                    <View style={styles.txt_container}>
                        <Text style={styles.txt_song}>{item.song}</Text>
                        <Text style={styles.txt_artist}>{item.artist}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <ModalInfo toggleVisibility={toggleModal} visibility={modalVisible} id={item.id} text="Fermer"/>
        </View>
    )  
}

const styles = StyleSheet.create({
    images: {
        width:"100%",
        height:70
    },
    card:{
        backgroundColor:"#FFB100",
        flexDirection:"row",
    },
    txt_container:{
        justifyContent:"center",
        padding:5,
        width:"60%"
    },
    img_container:{
        width:"40%"
    },
    txt_artist:{
        color:"white",
        fontSize:9,
    },
    txt_song:{
        color:"white",
        fontSize:12,
    }
});


export default HistoricItem