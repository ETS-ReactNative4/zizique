import React,{useEffect,useState} from "react";
import { Modal, StyleSheet,Text,View, } from "react-native";
import {useNavigation } from '@react-navigation/native';
import Waiting from '../../ImgSvg/waiting.svg'
import Victoire from '../../ImgSvg/victoire.svg'

const ModalRoom = (props) => {
    const {toggleVisibility,visibility,isLoading,isFinish,place,icon} = props
  

    useEffect(() => {
        
    },[]);
    

    return (
        <Modal animationType="slide" transparent={true} visible={visibility}>   
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    {
                        isLoading? <Waiting />:null
                    }
                    {
                        isFinish?
                        <View style={styles.victoire}>
                            <Victoire />
                            <Text>{place}</Text>
                            {
                                icon===1?<Avatar1 />
                                :null
                            }
                            {
                                icon===2?<Avatar2 />
                                :null
                            }
                            {
                                icon===3?<Avatar3 />
                                :null
                            }
                        </View>
                        :null
                    }
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
        flex:0.3
    }
});

export default ModalRoom;