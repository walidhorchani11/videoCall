import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ContactList from 'components/contacts/ContactList';
import CustomInput from 'components/input/CustomInput';

const ContactScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={{}}>
      <CustomInput
        style={{ borderWidth: 3, borderColor: 'blue' }}
        placeholder='search contact'
        onChangeText={(val) => {
          setSearch(val);
        }}
      />
      <ContactList search={search} />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ContactScreen;
