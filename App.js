import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation'
import RoomScreen from './src/screen/RoomScreen';

export default function App() {

  return (
      // <NavigationContainer>
      //   <StackNavigation/>    
      // </NavigationContainer>
      <RoomScreen />

  );
}

