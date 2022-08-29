import React from 'react';

import { TextInput, StyleSheet, View } from 'react-native';

const CustomInput = ({ width, height, icon, onChangeText, placeholder = '', autofocus = false, style = {}, ...rest }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
      <TextInput
        style={[styles.TextInputStyle, style]}
        placeholder={placeholder}
        onChangeText={onChangeText && onChangeText}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  TextInputStyle: {
    backgroundColor: 'white',
    borderColor: 'red',
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 30,
    paddingHorizontal: 10
  }
})

export default CustomInput;