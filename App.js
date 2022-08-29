import React from 'react';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';

import AsyncStorage from '@react-native-async-storage/async-storage';

RNAsyncStorageFlipper(AsyncStorage);
import {
  StatusBar,
} from 'react-native';

import { NavigationStack } from 'navigation/stack/Navigation';
import { AuthProvider } from 'contexts/AuthContext';

const App = () => {


  return (
    <AuthProvider>
      <StatusBar barStyle='light-content' />
      <NavigationStack />
    </AuthProvider>
  );
};

export default App;
