import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ContactItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.touchableAreaStyle}>
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