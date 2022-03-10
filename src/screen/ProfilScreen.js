import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet,Text,View,TouchableOpacity,TextInput,Image} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import ApiContext,{Api} from '../service/Axios'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import {observer,inject} from 'mobx-react'

const ProfilScreen = (props) => {
    
    const {storeConnexion} = props; 
    const [user,setUser] = useState({});
    const [isediting,setIsEditing] = useState(false);
    const [n_username,setN_username] = useState("")
    const context = useContext(ApiContext)

    useEffect(() => {
        setUser(context.GetProfil())
    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={require('../../assets/avatar1.png')} />
                {/* {
                    user.picture===1?<Avatar1 height={50} width={50}/>
                    :null
                }
                {
                    user.picture===2?<Avatar2 height={50} width={50}/>
                    :null
                }
                {
                    user.picture===3?<Avatar3 height={50} width={50}/>
                    :null
                } */}
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.username}>{user.username}</Text>
                    <TouchableOpacity onPress={()=>{setIsEditing(!isediting)}}>
                        <Feather name="edit" size={24} color="white" />
                    </TouchableOpacity>
                    <FancyAlert
                        visible={isediting}
                        icon={<Feather name="edit" size={24} color="white" />}
                        style={{ backgroundColor: 'white' }}
                    >
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>{setN_username(text)}}
                            value={n_username}
                        />
                        <TouchableOpacity onPress={()=>{setIsEditing(!isediting)}} style={{padding:14,backgroundColor:"#E43F6F",width:"100%"}}>
                            <AntDesign name="checkcircleo" size={24} color="white" />
                        </TouchableOpacity>
                    </FancyAlert>
                </View>
            </View>    
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB100',
    alignItems: 'center',
    justifyContent:"center"
  },
  avatar:{
    height:50,
    width:50
  },
  header:{
    flex:.4
  },
  username:{
    color:"white",
    fontSize:20,
    marginRight:10
  }
  
});

export default inject('storeConnexion')(observer(ProfilScreen))