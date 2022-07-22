import React from 'react';
import {
  StyleSheet,
  SectionList,
} from 'react-native';

import ContactItem from 'src/screens/contacts/ContactItem';
import HeaderSection from 'src/screens/contacts/HeaderSection';

import { CONTACTSFORMATTED } from './data';

const renderItem = ({ item }) => {
  return (
    <ContactItem item={item} />
  )
}

const ContactList = () => {

  return (
    <SectionList
      sections={CONTACTSFORMATTED}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (<HeaderSection title={title} />)}
      style={styles.flatListStyle}
    />
  )
}

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: 10,
  },
})

export default ContactList;
