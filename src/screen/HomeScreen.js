import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity ,TextInput } from 'react-native';
import Logo from "../../ImgSvg/logo.svg";


const HomeScreen = (props) => {
    const {navigation}=props; 
    const [userAno, onChangeUserAno] = React.useState("");
    return(
        <View style={styles.container}>
          <View style={{flex:0.3,justifyContent:"center"}}>
            <Logo height={170}width={200} />    
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
              navigation.push("SignIn")
          }}
            >
            <Text style={{ color:"white"}}>Créer un compte</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:0.05,justifyContent:"center"}}>
            <Text style={{ color:"white",fontSize:25}}>Ou</Text>

        </View>
        <View style={{flex:0.2}}>
            
         <TextInput
            style={styles.bottom}
            onChangeText={(value)=>{
              onChangeUserAno(value);
            }}
            value={userAno}
            placeholder="Anonyme"
            placeholderTextColor='white'
            
        />
        <View style={styles.buttonHome}>
          <TouchableOpacity
              style={{ backgroundColor:"#5BC9D7",    
              alignItems: "center",
              borderRadius: 18,
              height:40,
              justifyContent:"center",
              marginTop:20
              }}
              onPress={()=>{
                  navigation.push("Login")
              }}
              >
              <Text style={{ color:"white"}}>Jouer</Text>
          </TouchableOpacity>
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
export default HomeScreen
