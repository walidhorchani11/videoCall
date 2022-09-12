import React, { useState } from "react";
import { TextInput, View, Pressable, Text } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const SignIn = () => {

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: yup.object({
      email: yup.string().required('email walidos required').email('entrez valid email walidos ...'),
      password: yup.string().required('entrer password walidos').min(8, '8 caracter minimum walidos')
    }),
    initialValues: { email: '', password: '' },

    onSubmit: (values) => {
      console.log(values);
    },



  })

  return (
    <View style={{ width: '80%', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <TextInput
        style={{ width: '100%' }}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        placeholder='enter email here ....' />
      <TextInput
        style={{ width: '100%' }}

        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        placeholder='enter password here ....'
        secureTextEntry
      />
      <Pressable onPress={() => {
        formik.errors
        console.log('subbmiiiit', formik.errors);
        formik.handleSubmit()
      }} style={{ width: '100%', backgroundColor: 'red' }} >
        <Text>submit</Text>
      </Pressable>
    </View>
  );
}

export { SignIn }