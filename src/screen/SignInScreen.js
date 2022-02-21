import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity ,TextInput,ScrollView } from 'react-native';
import Logo from "../../ImgSvg/logo.svg";
import LeftArrow from "../../ImgSvg/left-arrow.svg";
import RightArrow from "../../ImgSvg/right-arrow.svg";
import Avatar1 from '../../ImgSvg/avatar1.svg';
import Avatar2 from '../../ImgSvg/avatar2.svg';
import Avatar3 from '../../ImgSvg/avatar3.svg';
import Avatar4 from '../../ImgSvg/avatar4.svg';

const SignInScreen = (props) => {
    const profilPicture=()=>{
        switch (IconIndex) {
            case 0:
                return (
                    <Avatar1 width={100} height={100} />
                );    
            case 1:
                return (
                    <Avatar2 width={100} height={100} />
                ); 
            case 2:
                return (
                    <Avatar3 width={100} height={100} />
                ); 
            case 3:
                return (
                    <Avatar4 width={100} height={100} />
                ); 
            default:
                return (
                    <Avatar1 width={100} height={100} />
                );
                   
        }

     
    }

    const {navigation}=props;
    const [mail, setMail] = React.useState("");
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [IconIndex,setIconIndex]=React.useState(0);
    
    const updateCarroussel=(value)=>{
        
        if (value!=IconIndex) {
            if ( value>3 ) {
                setIconIndex(0)
            }else{
                if (value<0 ) {
                    setIconIndex(3)
                } else {
                    setIconIndex(value);
                }
            }
        }
  
    }
    return(
        <View style={styles.container}>
          <View style={{flex:0.3,justifyContent:"center"}}>
            <Logo height={170}width={200} />    
          </View>
          <View  style={{flex:0.15,flexDirection:"row",alignItems:"center",justifyContent:"space-around" }} >
          <TouchableOpacity
          onPress={ ()=>{updateCarroussel(IconIndex-1)}}
          >
            <LeftArrow  width={25} height={25}/>
          </TouchableOpacity>

            {
              profilPicture()
            }
            <TouchableOpacity
            onPress={ ()=>{updateCarroussel(IconIndex+1)}}
            >
              <RightArrow  width={25} height={25}/>
            </TouchableOpacity>


          </View>



        <View style={{flex:0.2 ,alignItems: 'center',justifyContent: 'space-around' }}>
            
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
                setUserName(value);
            }}
            value={username}
            placeholder="UserName"
            placeholderTextColor='white'
            
        /> 
        <TextInput
            style={styles.bottom}
            onChangeText={(value)=>{
                setPassword(value)
            }}
            value={password}
            placeholder="Password"
            placeholderTextColor='white'
            secureTextEntry={true}
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
    flex:0.1,
    justifyContent: 'center',

  }
});
export default SignInScreen
