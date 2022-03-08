import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation'
import { Provider } from 'mobx-react';
import {storeConnexion} from './src/store/Store';
import {configure} from 'mobx';
import ApiContext,{Api} from './src/service/Axios'

export default function App() {
  configure({
    enforceActions:'never'
  });
  const stores = {storeConnexion}
  return (
    <Provider {...stores}>
        <NavigationContainer>
        <ApiContext.Provider value={Api}>
          <StackNavigation/>           
        </ApiContext.Provider>
       </NavigationContainer>
    </Provider>

      

  );
}

