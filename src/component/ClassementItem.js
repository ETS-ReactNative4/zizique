import React,{useEffect,useState} from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';
import Avatar1 from '../../ImgSvg/avatar1.svg'
import Avatar2 from '../../ImgSvg/avatar2.svg'
import Avatar3 from '../../ImgSvg/avatar3.svg'

const ClassementItem = (props) =>{
    
    const {item} = props;
    const [color,setColor] = useState("")
    
    useEffect(() => {
        let step = 0
        if(item.answers.asArtist){
            step++
        }
        if(item.answers.asSong){
            step++
        }
        setColor(step == 1 ? "#FFA900": step == 2 ? "#E43F6F" : "#5BC9D7")
    },[item]);

    return (
        <View style={[styles.card,{backgroundColor:`${color}`}]}>
            <View style={styles.img_container}>
                {
                    item.profile_pic===0?<Image source={require('../../assets/avatar1.png')} height={30} width={30}/>
                    :null
                }
                {
                    item.profile_pic===1?<Image source={require('../../assets/avatar2.png')} height={30} width={30}/>
                    :null
                }
                {
                    item.profile_pic===2?<Image source={require('../../assets/avatar3.png')} height={30} width={30}/>
                    :null
                }
            </View>
            <View style={styles.txt_container}>
                <Text style={styles.txt_nom}>{item.username}</Text>
                <Text style={styles.txt_pt}>{item.score} pt</Text>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    images: {
        width:"100%",
    },
    card:{
        flexDirection:"row",
        marginVertical:5,
        alignItems:"center"
    },
    txt_container:{
        justifyContent:"center",
        padding:5,
        width:"80%"
    },
    img_container:{
        width:"20%"
    },
    txt_nom:{
        color:"white",
        fontSize:12,
    },
    txt_pt:{
        color:"white",
        fontSize:8,
    }
});


export default ClassementItem