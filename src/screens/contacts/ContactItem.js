import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ContactItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.touchableAreaStyle}>
      <Text style={styles.textStyle}>{item.title} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableAreaStyle: {
    backgroundColor: 'green',
    margin: 2,
    padding: 20
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800'
  }
})

export default ContactItem;