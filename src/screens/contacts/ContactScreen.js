import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import ContentLoader, { Facebook, Rect, Circle, Code } from 'react-content-loader/native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

import ContactList from 'components/contacts/ContactList';
import CustomInput from 'components/input/CustomInput';

const MyLoader = () => <ContentLoader
  height={140}
  speed={1}
  animate={true}
  backgroundColor={'#333'}
  foregroundColor={'#999'}
>
  <Rect x="20" y="20" rx="5" ry="5" width="90%" height="50" />
  <Circle x="20" y="150" r="30" />
</ContentLoader>

const ContactScreen = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ window, screen });

  // useEffect pour faire ul listener pour updater state et du coups update UI whene dimension changed
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window, screen }) => {
      setDimensions({ window, screen });
    });
    return () => subscription.remove();
  }, []);

  //useEffect pour changer state loading, apres une duree , pour afficher initialement content loader ensuite our screen
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(idTimeOut)
    }
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <MyLoader />

      </View>
    )
  }

  return (
    <View style={{}}>
      <CustomInput
        style={{ borderWidth: 1, borderColor: 'blue' }}
        placeholder='search contact'
        onChangeText={(val) => {
          setSearch(val);
        }}
      />
      <ContactList search={search} />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ContactScreen;
