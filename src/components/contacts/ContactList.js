import React from 'react';
import {
  StyleSheet,
  SectionList,
} from 'react-native';

import ContactItem from '@components/contacts/ContactItem';
import HeaderSection from '@components/contacts/HeaderSection';

import { CONTACTSFORMATTED } from './data';

const renderItem = ({ item }) => {
  return (
    <ContactItem item={item} />
  )
}

const ContactList = ({ search }) => {

  const res = CONTACTSFORMATTED.reduce((acc, elem, index, tab) => {
    const { data } = elem;
    const exist = data.some((el) => {
      if (el.indexOf(search) != -1) {
        return true;
      }
      return false;
    });

    if (exist) {
      acc.push(elem);
    }

    return acc;

  }, [])

  return (
    <SectionList
      sections={res}
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
