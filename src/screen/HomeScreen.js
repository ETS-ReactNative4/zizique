import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Logo from "../../ImgSvg/Logo.svg";
import { connectSocket } from "../service/Socket"
import { observer, inject } from 'mobx-react'
import Carrousel from "../component/Carrousel"
import { FancyAlert } from 'react-native-expo-fancy-alerts';


const HomeScreen = (props) => {
  const { navigation, storeConnexion } = props;
  const [userAno, onChangeUserAno] = React.useState("");
  const [slides, setSlides] = React.useState();
  const [IconIndex, setIconIndex] = React.useState(0);
  const [modalVisibility, setModalVisibility] = React.useState(0);


  useEffect(() => {
    connectSocket();
    setSlides([
      {
        id: 1,
        image: require('../../assets/avatar1.png')
      },
      {
        id: 2,
        image: require('../../assets/avatar2.png')
      },
      {
        id: 3,
        image: require('../../assets/avatar3.png')
      },
      {
        id: 4,
        image: require('../../assets/avatar4.png')
      }
    ])

  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, justifyContent: "center" }}>
        <Logo height={170} width={200} />
      </View>
      <View style={styles.buttonHome}>
        <TouchableOpacity
          style={{
            backgroundColor: "#5BC9D7",
            alignItems: "center",
            borderRadius: 18,
            height: 40,
            justifyContent: "center",
            marginBottom: 10,
            marginTop: 10
          }}
          onPress={() => {
            navigation.push("Login")
          }}
        >
          <Text style={{ color: "white" }}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#E43F6F",
            alignItems: "center",
            borderRadius: 18,
            height: 40,
            justifyContent: "center",
            marginBottom: 10,
            marginTop: 10
          }}
          onPress={() => {
            navigation.push("SignIn")
          }}
        >
          <Text style={{ color: "white" }}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ color: "white", fontSize: 25 }}>Ou</Text>
      </View>
      <View style={{ flex: 0.2 }}>

        <TextInput
          style={styles.bottom}
          onChangeText={(value) => {
            onChangeUserAno(value);
          }}
          value={userAno}
          placeholder="Anonyme"
          placeholderTextColor='white'

        />
        <View style={styles.buttonHome}>
          <TouchableOpacity
            style={{
              backgroundColor: userAno != "" ? "#5BC9D7" : "#888485",
              alignItems: "center",
              borderRadius: 18,
              height: 40,
              justifyContent: "center",
              marginTop: 20
            }}
            disabled={userAno != "" ? false : true}

            onPress={() => {
              setModalVisibility(!modalVisibility)
            }}
          >
            <Text style={{ color: "white" }}>Jouer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FancyAlert
        visible={modalVisibility}
        icon={<View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 50,
          width: '100%',
        }}><TouchableOpacity
        style={{flex:1,alignItems:"center",justifyContent:"center"}}
          onPress={() => {
            setModalVisibility(!modalVisibility)
          }}
        >
            <Text>X</Text>
          </TouchableOpacity>
        </View>}
        style={{ backgroundColor: 'white' }}
      >
        <View style={{ height: 200, alignItems: "center", justifyContent: "center" }}>
          <Text>Veuillez choisir une image</Text>
          <Carrousel style={{ flex: 1 }} slides={slides} setIcon={setIconIndex} />
          <View style={[styles.buttonHome,{marginBottom:20}]}>
            <TouchableOpacity
              style={{
                backgroundColor:"#5BC9D7",
                alignItems: "center",
                borderRadius: 18,
                height: 40,
                justifyContent: "center",
              }}

              onPress={() => {
                console.log("crotte")
                storeConnexion.setLogin(userAno)
              }}
            >
              <Text style={{ color: "white" }}>Jouer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </FancyAlert>
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
    height: 50,
    width: 250,
    flex: 0.3,
    color: "white",

  },
  buttonHome: {
    width: 250,
    flex: 0.3,
    justifyContent: 'center',

  }
});
export default inject('storeConnexion')(observer(HomeScreen))