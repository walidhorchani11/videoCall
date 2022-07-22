import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import ContactsList from 'src/screens/contacts/ContactsList';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ContactsList />
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
