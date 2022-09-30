import React, { useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, StyleSheet, View, Text } from 'react-native';

import { Voximplant } from 'react-native-voximplant';

const CallingScreen = ({ navigation, route }) => {
  const { isVideoCall, callId } = route.params;

  const Voximplant = new Voximplant.getInstance();
  const callIdRef = useRef(callId);

  useEffect(() => {
    let callSettings = {
      video: {
        sendVideo: isVideoCall,
        receiveVideo: isVideoCall
      }
    };

    let call;
    async function makeCall() {
      call = await Voximplant.call('nounou', callSettings);
      subscribeToCallEvents()
      callIdRef.current = call.callId;
      call.set(call.callId, call);

    }
  }, []);
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flex: 2 }}>
        <Text>
          nom person receiver
      </Text>
        <Button title="tab menu test" onPress={() => { navigation.navigate('MenuTab', { params: { idd: 1254 } }) }} />

      </View>
      <View style={{ backgroundColor: 'black', height: '15%', borderTopRightRadius: 40, borderTopLeftRadius: 40, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
        <Text>
          <Icon name={"photo-camera"} size={50} color="white" />
        </Text>
        <Text>
          <Icon name={"volume-up"} size={50} color="white" />;
        </Text>
        <Text>
          <Icon name={"mic"} size={50} color="white" />;
        </Text>
        <View style={{ backgroundColor: 'red', borderRadius: 50, height: 70, width: 70, justifyContent: 'center', alignItems: 'center' }} >
          <Text>
            <Icon name={"call-end"} size={50} color="white" />;
        </Text>
        </View>

      </View>
    </View>
  )

}

const styles = StyleSheet.create({

})

export default CallingScreen;