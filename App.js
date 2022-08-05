import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import ContactScreen from 'src/screens/contacts/ContactScreen';
import CallingScreen from 'src/screens/calling/CallingScreen'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <CallingScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'black'
  }
})

export default App;
