import React,{useState} from 'react';
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native';

const StatItem = (props) =>{
    const [modalVisible, setModalVisible] = useState(false);
    const {item} = props;

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={{flex:1,marginVertical:5}}>
            <View style={styles.card}>
                <View style={styles.img_container}>
                    <Image source={{uri: `${item.track.album.images[0].url}`}} style={styles.images} resizeMode="contain"/>
                </View>
                <View style={styles.txt_container}>
                    <Text style={styles.txt_song}>{item.track.name}</Text>
                    <Text style={styles.txt_artist}>{item.track.artists[0].name}</Text>
                </View>
            </View>
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


export default StatItem