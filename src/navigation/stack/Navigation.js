import React, { useContext, useEffect } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// contacts-outline 
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactScreen from 'src/screens/contacts/ContactScreen';
import CallingScreen from 'src/screens/calling/CallingScreen';
import IncomingCallScreen from 'src/screens/calling/IncomingCallScreen';
import { SettingScreen } from 'screens/setting/SettingScreen';
import { HistoryScreen } from 'screens/history/HistoryScreen';
import { SignIn } from 'screens/auth/SingIn';
import { Register } from 'screens/auth/Register';
import { AuthScreen } from 'screens/auth/AuthScreen';
import { Voximplant } from 'react-native-voximplant';
import calls from '../../screens/calling/Store';

import { TabBackground } from 'navigation/stack/TabBackground';

import { AuthContext } from 'contexts/AuthContext';

import { CONTACT_ROUTE, CALLING_ROUTE, SETTING_ROUTE, HISTORY_ROUTE } from 'src/navigation/stack/constants';

const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();


const MenuTab = () => {
  const voximplant = Voximplant.getInstance();
  useEffect(() => {
    voximplant.on(Voximplant.ClientEvents.IncomingCall, (incomingCallEvent) => {
      calls.set(incomingCallEvent.call.callId, incomingCallEvent.call);
      navigation.navigate('IncommingCall', {
        callId: incomingCallEvent.call.callId,
      });
    });
    return function cleanup() {
      voximplant.off(Voximplant.ClientEvents.IncomingCall);
    };
  }, []);
  return (
    <TabBottom.Navigator screenOptions={({ route }) => (
      {
        tabBarIcon: ({ focused }) => {
          let iconName = '';
          if (route.name === SETTING_ROUTE.name) {
            iconName = focused ? 'settings' : 'settings-applications';
          } else if (route.name === CONTACT_ROUTE.name) {
            iconName = focused ? 'people-alt' : 'people-outline';
          } else if (route.name === HISTORY_ROUTE.name) {
            iconName = focused ? 'history' : 'history-toggle-off';
          }
          return <Icon name={iconName} size={25} />
        }

      }
    )} >
      <TabBottom.Screen name={SETTING_ROUTE.name} component={SettingScreen} />
      <TabBottom.Screen name={CONTACT_ROUTE.name} component={ContactScreen} />
      <TabBottom.Screen name={HISTORY_ROUTE.name} component={HistoryScreen} />
    </TabBottom.Navigator>
  )
}

const NavigationStack = () => {
  const { isLogued, logout } = useContext(AuthContext);
  return (
    <>
      <NavigationContainer>
        {isLogued ?
          (<Stack.Navigator screenOptions={{
            headerRight: (props) => {
              return (
                <Pressable onPress={async () => {
                  logout();
                }}>
                  <Icon name="logout" size={25} style={{ backgroundColor: 'red', padding: 10 }} />
                </Pressable>
              )
            }
          }}>
            <Stack.Screen name={CONTACT_ROUTE.name} component={ContactScreen} />
            <Stack.Screen name={CALLING_ROUTE.name} component={CallingScreen} />
            <Stack.Screen name='MenuTab' component={MenuTab} />
            <Stack.Screen name='IncommingCall' component={IncomingCallScreen} />
          </Stack.Navigator>)
          :
          (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='auth' component={AuthScreen} />
              <Stack.Screen name='login' component={SignIn} />
              <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
          )
        }
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({

})

export { NavigationStack };