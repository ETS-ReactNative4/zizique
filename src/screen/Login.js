import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity ,TextInput } from 'react-native';
import Logo from "../../ImgSvg/logo.svg";


const Home = (props) => {
    const {navigation}=props;
    const [text, onChangeText] = React.useState("");
    return(
        <View style={styles.container}>
          <View style={{flex:0.3,justifyContent:"center"}}>
            <Logo height={170}width={200} />    
          </View>


        <View style={{flex:0.2}}>
            
         <TextInput
            style={styles.bottom}
            onChangeText={onChangeText}
            value={text}
            placeholder="Anonyme"
            placeholderTextColor='white'
            
        />

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
            <Text style={{ color:"pink"}}>Retour</Text>
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
export default Home
