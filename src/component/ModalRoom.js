import React,{useEffect,useState} from "react";
import { Modal, StyleSheet,Text,View,ActivityIndicator} from "react-native";
import {useNavigation } from '@react-navigation/native';
import Victoire from '../../ImgSvg/victoire.svg'
import Avatar1 from '../../ImgSvg/avatar1.svg'
import Avatar2 from '../../ImgSvg/avatar2.svg'
import Avatar3 from '../../ImgSvg/avatar3.svg'
import Loading from "./Loading";

const ModalRoom = (props) => {
    const {visibility,isLoading,isFinish,place,icon} = props
  

    useEffect(() => {
        
    },[]);
    

    return (
        <Modal animationType="slide" transparent={true} visible={visibility}>   
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    {
                        isLoading? <Loading />:null
                    }
                    {
                        isFinish?
                        <View style={{flex:1,width:"100%",alignItems:"center"}}>
                            <View style={{flex:.7,position:"relative",alignItems:"center"}}>
                                <Victoire height={"100%"} width={100}/>
                                <View style={{position:"absolute",bottom:-30,marginLeft:100,right:-30}}>
                                    {
                                        icon===1?<Avatar1 height={30} width={30} />
                                        :null
                                    }
                                    {
                                        icon===2?<Avatar2 height={30} width={30}/>
                                        :null
                                    }
                                    {
                                        icon===3?<Avatar3 height={30} width={30}/>
                                        :null
                                    }
                                </View>
                            </View>
                            <View style={{flex:.3,marginTop:30}}>
                                <Text style={styles.placeTxt}>1er</Text>
                            </View>                              
                        </View>
                        :null
                    }
                </View>
                <View style={styles.modalBody}>
                    <ActivityIndicator size="large" color="#FFFF" />
                    <Text style={styles.modalTxt}>La musique arrive bientôt connio</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalView: {
        padding: 20,
        backgroundColor: "black",
        borderTopLeftRadius:29,
        borderTopRightRadius:29,
        justifyContent:"center",
        opacity:0.8,
        flex:1
    }, 
    modalHeader:{
        flex:0.4,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
    },
    modalBody:{
        marginTop:20,
        flex:.6,
        alignItems:'center',
    },
    modalTxt:{
        color:'white',
        fontSize:25,
    },
    placeTxt:{
        color:'white',
        fontSize:50,
    }
});

export default ModalRoom;