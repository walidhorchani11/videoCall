import React, { useEffect, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, StyleSheet, View, Text, Alert, SafeAreaView, TouchableOpacity } from 'react-native';

import { Voximplant } from 'react-native-voximplant';
import calls from './Store';
import styles from './Styles';

const CallingScreen = ({ navigation, route }) => {
  const { isVideoCall, callId, isIncomingCall } = route.params;
  const [callState, setCallState] = useState('Connecting');
  const voximplant = new Voximplant.getInstance();
  const callIdRef = useRef(callId);
  const [localVideoStreamId, setLocalVideoStreamId] = useState('');
  const [remoteVideoStreamId, setRemoteVideoStreamId] = useState('');

  useEffect(() => {
    let callSettings = {
      video: {
        sendVideo: isVideoCall,
        receiveVideo: isVideoCall
      }
    };

    let call;
    async function makeCall() {
      call = await voximplant.call('nounou', callSettings);
      subscribeToCallEvents()
      callIdRef.current = call.callId;
      call.set(call.callId, call);

    }

    function subscribeToCallEvents() {
      call.on(voximplant.CallEvents.Connected, (callEvent) => {
        setCallState('Call connected');
      });
      call.on(voximplant.CallEvents.Disconnected, (callEvent) => {
        calls.delete(callEvent.call.callId);
        navigation.navigate('Main');
      });
      call.on(voximplant.CallEvents.Failed, (callEvent) => {
        showCallError(callEvent.reason);
      });
      call.on(voximplant.CallEvents.ProgressToneStart, (callEvent) => {
        setCallState('Ringing...');
      });
      call.on(voximplant.CallEvents.LocalVideoStreamAdded, (callEvent) => {
        setLocalVideoStreamId(callEvent.videoStream.id);
      });
      call.on(voximplant.CallEvents.EndpointAdded, (callEvent) => {
        console.log('endpoint added');
        endpoint = callEvent.endpoint;
        subscribeToEndpointEvents();
      });
    }

    function subscribeToEndpointEvents() {
      endpoint.on(
        voximplant.EndpointEvents.RemoteVideoStreamAdded,
        (endpointEvent) => {
          setRemoteVideoStreamId(endpointEvent.videoStream.id);
        },
      );
    }

    function showCallError(reason) {
      Alert.alert('Call failed', `Reason: ${reason}`, [
        {
          text: 'OK',
          onPress: () => {
            calls.delete(callId.current);
            navigation.navigate('Main');
          },
        },
      ]);
    }




    if (isIncomingCall) {
      answerCall();
    } else {
      makeCall();
    }


    return function cleanup() {
      call.off(voximplant.CallEvents.Connected);
      call.off(voximplant.CallEvents.Disconnected);
      call.off(voximplant.CallEvents.Failed);
      call.off(voximplant.CallEvents.ProgressToneStart);
      call.off(voximplant.CallEvents.LocalVideoStreamAdded);
      call.off(voximplant.CallEvents.EndpointAdded);
    };

  }, []);

  async function answerCall() {
    call = calls.get(callId.current);
    subscribeToCallEvents();
    endpoint = call.getEndpoints()[0];
    subscribeToEndpointEvents();
    await call.answer(callSettings);
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flex: 2 }}>
        <>
          <SafeAreaView style={styles.safearea}>
            <View style={styles.videoPanel}>
              <Voximplant.VideoView
                style={styles.remotevideo}
                videoStreamId={remoteVideoStreamId}
                scaleType={Voximplant.RenderScaleType.SCALE_FIT}
              />
              <Voximplant.VideoView
                style={styles.selfview}
                videoStreamId={localVideoStreamId}
                scaleType={Voximplant.RenderScaleType.SCALE_FIT}
                showOnTop={true}
              />
            </View>
            <View style={styles.callControlsVideo}>
              <Text style={styles.callConnectingLabel}>{callState}</Text>
              <TouchableOpacity onPress={() => endCall()} style={styles.button}>
                <Text style={styles.textButton}>END CALL</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </>

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

export default CallingScreen;