import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';
import Logo from "../../ImgSvg/Logo.svg";
import LeftArrow from "../../ImgSvg/left-arrow.svg";
import { observer, inject } from 'mobx-react'
import ApiContext, { Api } from '../service/Axios'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import Carrousel from '../component/Carrousel';

const SignInScreen = (props) => {

  const { navigation, storeConnexion } = props;
  const [mail, setMail] = React.useState("coco1@gmail.com");
  const [username, setUserName] = React.useState("leHi");
  const [password, setPassword] = React.useState("123456789");
  const [visible, setVisible] = React.useState(false);
  const context = React.useContext(ApiContext);


  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, justifyContent: "center" }}>
        <Logo height={170} width={200} />
      </View>
      <FancyAlert
        visible={visible}
        icon={<View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 50,
          width: '100%',
        }}><Text>🤓</Text></View>}

        style={{ backgroundColor: '#FFB100' }}
      >


        <View style={styles.buttonHome}>
          <Text>Vous vous êtes bien enregistrer</Text>
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
              navigation.pop();
            }}
          >
            <LeftArrow width={25} height={25} />
          </TouchableOpacity>

        </View>
      </FancyAlert>
      <View style={{ flex: 0.15, flexDirection: "row", alignItems: "center", justifyContent: "space-around" }} >
        <Carrousel />
      </View>
      <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'space-around' }}>

        <TextInput
          style={styles.bottom}
          onChangeText={(value) => {
            setMail(value);
          }}
          value={mail}
          placeholder="Mail"
          placeholderTextColor='white'

        />
        <TextInput
          style={styles.bottom}
          onChangeText={(value) => {
            setUserName(value);
          }}
          value={username}
          placeholder="UserName"
          placeholderTextColor='white'

        />
        <TextInput
          style={styles.bottom}
          onChangeText={(value) => {
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
            context.Signup(
              {
                username: username,
                password: password,
                email: mail,
                profil_pic: storeConnexion.getProfilPicture()
              }
            ).then((res) => {

              storeConnexion.setAccess(res.access_token);
              storeConnexion.setRefresh(res.token);
              storeConnexion.setPassword(password);
              storeConnexion.setProfilPicture(res.profile_pic);
              storeConnexion.setMail(res.email)
              storeConnexion.setLogin(res.username);

            }).catch((err) => {
              console.log("err");
            })


          }}
        >
          <Text style={{ color: "white" }}>S'inscrire</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.buttonHome}>

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
            navigation.pop();
          }}
        >
          <LeftArrow width={25} height={25} />
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
    height: 50,
    width: 250,
    flex: 0.3,
    color: "white",

  },
  buttonHome: {
    width: 250,
    flex: 0.1,
    justifyContent: 'center',

  }
});
export default inject('storeConnexion')(observer(SignInScreen))