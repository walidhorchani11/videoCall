import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import ContactScreen from 'src/screens/contacts/ContactScreen';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ContactScreen />
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
