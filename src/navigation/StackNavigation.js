import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
//import {observer,inject} from 'mobx-react'
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import SignInScreen from '../screen/SignInScreen';
import { observer, inject } from 'mobx-react'
import RoomScreen from "../screen/RoomScreen"
import SelectScreen from '../screen/SelectScreen';
import { TouchableOpacity } from 'react-native';
import LeftArrow from "../../ImgSvg/left-arrow.svg";
import Logo from "../../ImgSvg/Logo.svg";
import { Audio } from 'expo-av';

const RootStack = createStackNavigator();
const StackNavigation = (props) => {
  const { navigation, storeConnexion } = props;
  //Permet au démarrage du composant d'aller chercher la valeurs de l'access token.
  //SI cette valeurs est déinie on estime que l'utilisateur est connecté
  this.sound = new Audio.Sound();

  //Si il n'est pas connecter on estime que l'utilisateur doit être dirigé vers l'écran d'acceuil
  if (!storeConnexion.isConnected) {
    return (
      <RootStack.Navigator >
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerShown: false
          })}

        />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <RootStack.Screen
          name="SignIn"
          component={SignInScreen}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <RootStack.Screen
          name="Select"
          component={SelectScreen}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <RootStack.Screen
          name="Room"
          component={RoomScreen}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
      </RootStack.Navigator>
    );
  } else {
    //Si l'utilisateur est connecté alors je peux l'envoyer sur la navigation standart
    return (
      <RootStack.Navigator >
        <RootStack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={({ navigation }) => ({
            headerShown: false
          })}
        />
        <RootStack.Screen name="Room" component={RoomScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: "Partie",
            headerStyle: {
              backgroundColor: '#FFB100',
            },
            headerTitleStyle: {
              color: 'white'
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => {
                // tu met la fonction que tu veux avant la fermeture de la page room
                this.sound.unloadAsync();
                navigation.pop()
              }} style={{ margin: 10 }}>
                <LeftArrow width={25} height={25} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Logo height={50} width={150} style={{ margin: 10 }} />

            ),

          })}


        />
      </RootStack.Navigator>);
  }

}
export default inject('storeConnexion')(observer(StackNavigation))