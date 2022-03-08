import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
//import {observer,inject} from 'mobx-react'
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import SignInScreen from '../screen/SignInScreen';
import {observer,inject} from 'mobx-react'
import RoomScreen from "../screen/RoomScreen"
import SelectScreen from '../screen/SelectScreen';
const RootStack = createStackNavigator();
const StackNavigation = (props) => {
  const{navigation,storeConnexion}=props;
  const[connecter,SetConnecte]=React.useState(true);
//Permet au démarrage du composant d'aller chercher la valeurs de l'access token.
//SI cette valeurs est déinie on estime que l'utilisateur est connecté
  useEffect(() => {
      if(storeConnexion.getAccess()){
        SetConnecte(true);
      }else{
        SetConnecte(false);

      }
  }, [])
  //Si il n'est pas connecter on estime que l'utilisateur doit être dirigé vers l'écran d'acceuil
  if (!connecter) {
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
              name="Room"
              component={RoomScreen}
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
        </RootStack.Navigator>
      );
  } else {
    //Si l'utilisateur est connecté alors je peux l'envoyer sur la navigation standart
    return(            
    <RootStack.Navigator >            
        <RootStack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={({ navigation }) => ({
          headerShown: false
          })}
        />
    </RootStack.Navigator>);
  }

}
export default inject('storeConnexion')(observer(StackNavigation))