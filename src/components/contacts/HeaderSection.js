import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderSection = ({ title }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    marginTop: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ABEBC6',
    backgroundColor: '#2ECC71',
  },
  textStyle: {
    color: 'white',
    fontSize: 29,
    fontWeight: '800',
  }
})

export default HeaderSection;