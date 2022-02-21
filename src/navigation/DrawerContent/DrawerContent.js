import React from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet,Button } from 'react-native';
import {    
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
const CustomDrawerContent = (props) => {
    const{navigation}=props;    
return (
    <DrawerContentScrollView {...props}
    style={{backgroundColor:"#FFB100"}}
    
    >
      <DrawerItemList {...props} />
      <DrawerItem
        label="Déconnexion"
      />
    </DrawerContentScrollView>
  );
}
  export default CustomDrawerContent
