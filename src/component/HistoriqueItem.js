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
        <View style={styles.card}>
            <TouchableOpacity onPress={()=>toggleModal()}>
                <View style={styles.card_header}>
                    <Image source={{uri: `${item.images[0].url}`}} style={styles.images} />
                    <View style={styles.txt_container}>
                        <Text style={styles.txt}>{item.artist}</Text>
                        <Text style={styles.txt}>{item.song}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <ModalInfo toggleVisibility={toggleModal} visibility={modalVisible} id={item.id}/>
        </View>
    )  
}

const styles = StyleSheet.create({
    images: {
        width: 70,
        height: 70,
    },
    card:{
        backgroundColor:"#FFB100"
    },
    card_header:{
        flexDirection:"row"
    },
    txt_container:{
        marginLeft:5
    },
    txt:{
        color:"white"
    }
});


export default HistoricItem