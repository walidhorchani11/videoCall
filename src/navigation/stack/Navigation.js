import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ContactScreen from 'src/screens/contacts/ContactScreen';
import CallingScreen from 'src/screens/calling/CallingScreen';

import { CONTACT_ROUTE, CALLING_ROUTE } from 'src/navigation/stack/constants';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={CONTACT_ROUTE.name} component={ContactScreen} />
        <Stack.Screen name={CALLING_ROUTE.name} component={CallingScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})

export { NavigationStack };