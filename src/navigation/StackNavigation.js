import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
//import {observer,inject} from 'mobx-react'
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import SignInScreen from '../screen/SignInScreen';
const RootStack = createStackNavigator();
const StackNavigation = (props) => {
  const{navigation,listStore}=props;
  const[connecter,SetConnecte]=React.useState(true);
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
        </RootStack.Navigator>
      );
  } else {
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
export default StackNavigation