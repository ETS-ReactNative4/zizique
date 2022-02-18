import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity ,TextInput } from 'react-native';
import Logo from "../../ImgSvg/logo.svg";
import LeftArrow from "../../ImgSvg/left-arrow.svg"

const Login = (props) => {
    const {navigation}=props;
    const [mail, setMail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return(
        <View style={styles.container}>
          <View style={{flex:0.3,justifyContent:"center"}}>
            <Logo height={170}width={200} />    
          </View>


        <View style={{flex:0.2,alignItems: 'center',justifyContent: 'space-around'}}>
        <TextInput
            style={styles.bottom}
            onChangeText={(value)=>{
                setMail(value);
            }}
            value={mail}
            placeholder="Mail"
            placeholderTextColor='white'
            
        />
        <TextInput
            style={styles.bottom}
            onChangeText={(value)=>{
                setPassword(value);
            }}
            value={password}
            placeholder="UserName"
            placeholderTextColor='white'
            
        />

        </View>
        <View style={styles.buttonHome}>
        <TouchableOpacity
            style={{ backgroundColor:"#5BC9D7",    
            alignItems: "center",
            borderRadius: 18,
            height:40,
            justifyContent:"center",
            marginBottom:10,
            marginTop:10
            }}
            onPress={()=>{
                navigation.push("Login")
            }}
            >
            <Text style={{ color:"white"}}>Se connecter</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonHome}>
          <TouchableOpacity
            style={{ backgroundColor:"#E43F6F",    
            alignItems: "center",
            borderRadius: 18,
            height:40,
            justifyContent:"center",
            marginBottom:10,
            marginTop:10
            }}
            onPress={()=>{
                navigation.pop();
            }}
            >
            <LeftArrow  width={25} height={25}/>
        </TouchableOpacity>

        </View>
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
export default Login
