import React from 'react';
import CustomDrawerContent from './DrawerContent/DrawerContent';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SelectScreen from '../screen/SelectScreen'
import {observer,inject} from 'mobx-react'
import ProfileScreen from '../screen/ProfilScreen'
const Drawer=createDrawerNavigator();

const DrawerNavigation = (props) => {
  const{navigation,storeConnexion}=props;
  
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>}>
        <Drawer.Screen name="Selection" component={SelectScreen}       
          options={({ navigation }) => ({
            headerShown: false,
          })} 
        />

        <Drawer.Screen name="Profil" component={ProfileScreen}       
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />

      </Drawer.Navigator>
    );
   
  
}
export default inject('storeConnexion')(observer(DrawerNavigation))