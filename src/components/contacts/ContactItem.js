import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CALLING_ROUTE } from 'src/navigation/stack/constants';

const ContactItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.touchableAreaStyle}
      onPress={() => {
        console.log({ item });
        navigation.navigate(CALLING_ROUTE.name);
      }} >
      <Text style={styles.textStyle}>{item} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableAreaStyle: {
    backgroundColor: '#48C9B0',
    margin: 2,
    padding: 20,
    borderRadius: 10
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800'
  }
})

export default ContactItem;