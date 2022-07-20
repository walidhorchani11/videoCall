import React from 'react';

import ContactItem from './ContactItem';

import {
  StyleSheet,
  FlatList,
} from 'react-native';

const CONTACTS = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'First Item',
},
{
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Second Item',
},
{
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third Item',
},
{
  id: '3ac68fc-c605-48d3-a4f8-fbd91aa97f63',
  title: '444 Item',
},
{
  id: '58694a0f-3da1-471f-b96-145571e29d72',
  title: '5555 Item',
},
{
  id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
  title: '66666 Item',
},
{
  id: '58694a0f-3da1-471f-bd96-15571e29d72',
  title: '777777 Item',
},
{
  id: '3a68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: '88888 Item',
},
{
  id: '586a0f-3da1-471f-bd96-145571e29d72',
  title: '999999 Item',
},

];

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
