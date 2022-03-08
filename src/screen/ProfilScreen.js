import React,{useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity ,TextInput } from 'react-native';
import Logo from "../../ImgSvg/Logo.svg";


const ProfilScreen = (props) => {
    const {navigation} = props; 

    useEffect(() => {
      connectSocket()
    },[]);

    return(
        <View style={styles.container}>
          
        
    
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB100',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottom: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    height:50,
    width:250,
    flex:0.3,
    color:"white",

  },
  buttonHome:{
    width:250,
    flex:0.3,
    justifyContent: 'center',

  }
});
export default ProfilScreen
