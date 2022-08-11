import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

const TabBackground = () => {
  const image = { uri: "https://reactjs.org/logo-og.png" }
  return (
    <View style={styles.viewStyle}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    felx: 1
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
})

export { TabBackground };