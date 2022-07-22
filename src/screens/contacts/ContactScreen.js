import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ContactList from 'src/components/contacts/ContactList';

const ContactScreen = () => {

  return (
    <View>
      <ContactList />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ContactScreen;
