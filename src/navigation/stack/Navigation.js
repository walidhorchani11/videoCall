import React, { useContext } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// contacts-outline 
import Icon from 'react-native-vector-icons/MaterialIcons';
import ContactScreen from 'src/screens/contacts/ContactScreen';
import CallingScreen from 'src/screens/calling/CallingScreen';
import { SettingScreen } from 'screens/setting/SettingScreen';
import { HistoryScreen } from 'screens/history/HistoryScreen';
import { SignIn } from 'screens/auth/SingIn';
import { SignOut } from 'screens/auth/SignOut';

import { TabBackground } from 'navigation/stack/TabBackground';

import { AuthContext } from 'contexts/AuthContext';


import { CONTACT_ROUTE, CALLING_ROUTE, SETTING_ROUTE, HISTORY_ROUTE } from 'src/navigation/stack/constants';
import { LOGOUT } from 'reducers/AuthReducer';

const Stack = createNativeStackNavigator();
const TabBottom = createBottomTabNavigator();


const MenuTab = () => {
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
                  console.log('clicked -------logout---------------------');
                }}>
                  <Icon name="logout" size={25} style={{ backgroundColor: 'red', padding: 10 }} />
                </Pressable>
              )
            }
          }}>
            <Stack.Screen name={CONTACT_ROUTE.name} component={ContactScreen} />
            <Stack.Screen name={CALLING_ROUTE.name} component={CallingScreen} />
            <Stack.Screen name='MenuTab' component={MenuTab} />

          </Stack.Navigator>)
          :
          (
            <Stack.Navigator>
              <Stack.Screen name='login' component={SignIn} />
              <Stack.Screen name='sign up' component={SignOut} />
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