import React from 'react';
import {
  StatusBar,
  SafeAreaView
} from 'react-native';

import { NavigationStack } from '@navigation/stack/Navigation';

const App = () => {

  return (
    <>
      <StatusBar barStyle='light-content' />
      <NavigationStack />
    </>
  );
};

export default App;
