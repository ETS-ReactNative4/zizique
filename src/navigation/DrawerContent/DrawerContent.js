import React from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet,Button } from 'react-native';
import {    
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import {observer,inject} from 'mobx-react'

const CustomDrawerContent = (props) => {
    const{navigation,storeConnexion}=props;    
return (
    <DrawerContentScrollView {...props}
    style={{backgroundColor:"#FFB100"}}
    
    >
      <DrawerItemList {...props} />
      <DrawerItem
        label="Déconnexion"
        onPress={()=>{
            storeConnexion.setLogin('');
            storeConnexion.setRefresh('');
            storeConnexion.setAccess('');
            storeConnexion.setProfilPicture(1);
        }}
      />
    </DrawerContentScrollView>
  );
}
export default inject('storeConnexion')(observer(CustomDrawerContent))