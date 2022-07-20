import React from 'react';

import ContactItem from './ContactItem';

import {
  StyleSheet,
  FlatList,
} from 'react-native';

import { CONTACTS } from './data'
const renderItem = ({ item }) => <ContactItem item={item} />


const ContactList = () => {

  return (
    <FlatList
      data={CONTACTS}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.flatListStyle}
      key={Date.now()}
      numColumns={1}
    />
  )
}

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: 10,
    backgroundColor: 'yellow'
  }
})

export default ContactList;
