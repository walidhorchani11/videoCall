

import React, { useEffect, useContext } from "react";
import { useNavigation } from '@react-navigation/core';
import { TextInput, View, Pressable, Text } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { AuthContext } from 'contexts/AuthContext';
import { CONTACT_ROUTE } from 'src/navigation/stack/constants';

import { Voximplant } from 'react-native-voximplant';
const client = Voximplant.getInstance();

const SignIn = () => {
  const { login } = useContext(AuthContext);

  const navigation = useNavigation();

  useEffect(() => {
    const connect = async () => {
      try {
        const state = await client.getClientState();
        // if (state === Voximplant.ClientState.LOGGED_IN) {
        //   await client.disconnect();
        // }
        // const stateTwo = await client.getClientState();

        // console.log({ stateTwo });

        if (state === Voximplant.ClientState.DISCONNECTED) {
          await client.connect();
        }
        // else if (state === Voximplant.ClientState.LOGGED_IN) {
        //   navigation.navigate(CONTACT_ROUTE);
        // }

      } catch (error) {
        console.error({ error });
      }
    }
    connect();
  }, [])

  const handleLogin = async ({ password, username }) => {
    try {
      // on le recupere a partir du menu --> application
      // videocall.walidhorchani11.n6.voximplant.com

      const authRes = await client.login(`${username}@videocall.walidhorchani11.voximplant.com`, password);
      login(authRes.tokens.accessToken);
      navigation.navigate(CONTACT_ROUTE);

    } catch (error) {
      console.error({ error });

    }
  }

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: yup.object({
      username: yup.string().required('enter username:'),
      //email: yup.string().required('email walidos required').email('entrez valid email walidos ...'),
      password: yup.string().required('entrer password walidos').min(3, '3 caracter minimum walidos')
    }),
    initialValues: { username: '', password: '' },

    onSubmit: (values) => {
      handleLogin(values)
    },



  })

  return (
    <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <TextInput
        style={{ width: '100%' }}
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        placeholder='enter username here ....' />
      <TextInput
        style={{ width: '100%' }}

        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        placeholder='enter password here ....'
        secureTextEntry
      />
      <Pressable onPress={() => {
        formik.errors
        console.log('subbmiiiit errorsss::::', formik.errors);
        formik.handleSubmit()
      }} style={{ width: '100%', backgroundColor: 'red' }} >
        <Text>submit</Text>
      </Pressable>
    </View>
  );
}

export { SignIn }