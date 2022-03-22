import React,{useEffect,useState} from "react";
import { Modal, StyleSheet,Text,View,ActivityIndicator} from "react-native";
import {useNavigation } from '@react-navigation/native';
import Victoire from '../../ImgSvg/victoire.svg'
import Avatar1 from '../../ImgSvg/avatar1.svg'
import Avatar2 from '../../ImgSvg/avatar2.svg'
import Avatar3 from '../../ImgSvg/avatar3.svg'
import Loading from "./Loading";
import {observer,inject} from 'mobx-react'

const ModalRoom = (props) => {
    const {visibility,isLoading,isFinish,place,icon,storeConnexion} = props
  

    useEffect(() => {
        
    },[]);
    

    return (
        <Modal animationType="slide" transparent={true} visible={visibility}>   
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <View style={{flex:.3}}>
                        {
                            isLoading? <Loading />:null
                        }
                    </View>
                    
                    {
                        isFinish?
                        <View style={{flex:1,width:"100%",alignItems:"center"}}>
                            <View style={{flex:.7,position:"relative",alignItems:"center"}}>
                                <Victoire height={"100%"} width={100}/>
                                <View style={{position:"absolute",bottom:-30,marginLeft:100,right:-30}}>
                                    {
                                        storeConnexion.getProfilPicture()===0?<Image style={styles.avatar} source={require('../../assets/avatar1.png')} />
                                        :null
                                    }
                                    {
                                        storeConnexion.getProfilPicture()===1?<Image style={styles.avatar} source={require('../../assets/avatar2.png')} />
                                        :null
                                    }
                                    {
                                        storeConnexion.getProfilPicture()===2?<Image style={styles.avatar} source={require('../../assets/avatar3.png')} />
                                        :null
                                    }
                                    {
                                        storeConnexion.getProfilPicture()===3?<Image style={styles.avatar} source={require('../../assets/avatar4.png')} />
                                        :null
                                    }
                                    {
                                        storeConnexion.getProfilPicture() === undefined ?<Image style={styles.avatar} source={require('../../assets/avatar1.png')} />
                                        :null
                                    }
                                </View>
                            </View>                              
                        </View>
                        :null
                    }
                </View>
                <Text style={styles.modalTxt}>La musique arrive bientôt connio</Text>
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
        opacity:0.9,
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
export default inject('storeConnexion')(observer(ModalRoom))
