import React from 'react';
import { TouchableOpacity, Text, StyleSheet, PermissionsAndroid, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CALLING_ROUTE } from 'src/navigation/stack/constants';

const ContactItem = ({ item }) => {
  const navigation = useNavigation();

  const makeCall = async (isVideoCall) => {
    try {
      if (Platform.OS === 'android') {
        // preparation permissions si platform est android
        let permissions = [PermissionsAndroid.PERMISSIONS.RECORD_AUDIO];
        if (isVideoCall) {
          permissions.push(PermissionsAndroid.PERMISSIONS.CAMERA);
        }
        //request multiple permissions
        let granted = await PermissionsAndroid.requestMultiple(permissions);
        //recuperer les permission after avis user
        const recordAudioGranted = granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === PermissionsAndroid.RESULTS.GRANTED;
        const cameraGranted = granted[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED;
        console.log({ granted });

        if (recordAudioGranted) {
          if (isVideoCall && !cameraGranted) {
            console.warn('camera is not granted');

            return;
          }

        } else {
          console.warn('record audio is not granted');
          return;
        }
      }

      navigation.navigate(CALLING_ROUTE.name, { item, isVideoCall, isIncomingCall: false })
    } catch (error) {
      console.warn('makeCall failed ', error);
    }
  }

  return (
    <TouchableOpacity style={styles.touchableAreaStyle}
      onPress={() => {
        console.log({ item });
        makeCall(true);
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