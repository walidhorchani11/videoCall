import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Dimensions, StatusBar } from 'react-native';
import Animated, { useSharedValue, interpolate, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
import { Svg, Ellipse, ClipPath, Image, Defs, LinearGradient, Stop } from 'react-native-svg';
// todo changer vers components not screens for signin and register
import { SignIn } from 'screens/auth/SingIn';
import { Register } from 'screens/auth/Register';

const SIGNIN_PAGE = 'SignIn';
const REGISTER_PAGE = 'Register';

const AuthScreen = () => {
  const [requestedPage, setRequestedPage] = useState(SIGNIN_PAGE);
  const imgTranslate = useSharedValue(0);
  const scaleBtn = useSharedValue(1);
  const { height, width } = Dimensions.get("window")
  StatusBar.setHidden(true)

  const animeStyle_Image = useAnimatedStyle(() => {
    const prog = interpolate(imgTranslate.value, [0, 1], [0, -(height / 2) + StatusBar.currentHeight / 2 - 100])
    return {
      transform: [
        { translateY: prog }
      ]
    }
  })

  const animeStyle_Btn = useAnimatedStyle(() => {
    const progOpacity = interpolate(imgTranslate.value, [0, 1], [1, 0]);
    const progTranslate = interpolate(imgTranslate.value, [0, 1], [0, 150])
    return {
      opacity: progOpacity,
      transform: [
        { translateX: progTranslate },
        { scale: scaleBtn.value }
      ]
    }
  })

  const animeStyle_Content = useAnimatedStyle(() => {
    const prog = interpolate(imgTranslate.value, [0, 1], [0, -(height / 2) + StatusBar.currentHeight / 2 + 120]);
    const opacityProg = interpolate(imgTranslate.value, [0, 1], [0, 1]);
    return ({
      transform: [
        { translateY: prog }
      ],
      opacity: opacityProg
    })
  })

  return (
    <View style={styles.container}>

      <Animated.View style={[styles.imageStyle, animeStyle_Image]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            height={height + 100}
            width={width}
            href={require('assets/FXbuHrTWQAEiQYP.jpg')}
            preserveAspectRatio='xMidYMid slice'
            clipPath="url(#clipPathId)"
          />
        </Svg>

        <View style={styles.cancelContainerStyle}>
          <Pressable style={styles.pressableBtnStyle} onPress={() => {
            imgTranslate.value = withTiming(0, { duration: 1000 });
          }}>
            <Text style={styles.cancelBtnStyle}>X</Text>
          </Pressable>
        </View>
      </Animated.View>


      <View style={styles.btnContainerStyle}>
        <Animated.View style={[styles.btnViewStyle, animeStyle_Btn]}>
          <Pressable
            style={styles.pressableBtnStyle}
            onPress={() => {
              imgTranslate.value = withTiming(imgTranslate.value === 1 ? 0 : 1, { duration: 1000 });
              scaleBtn.value = withSpring(1.2);
              if (requestedPage !== SIGNIN_PAGE) {
                setRequestedPage(SIGNIN_PAGE)
              }
            }} >
            <Text style={styles.textBtn}>login</Text>
          </Pressable>
        </Animated.View>

        <Animated.View style={[styles.btnViewStyle, animeStyle_Btn]}>
          <Pressable
            style={styles.pressableBtnStyle}
            onPress={() => {
              imgTranslate.value = withTiming(imgTranslate.value === 1 ? 0 : 1, { duration: 1000 });
              scaleBtn.value = withSpring(1.2);
              if (requestedPage !== REGISTER_PAGE) {
                setRequestedPage(REGISTER_PAGE)
              }
            }} >
            <Text style={styles.textBtn}>Register</Text>
          </Pressable>
        </Animated.View>
      </View>

      <Animated.View style={[styles.formStyle, animeStyle_Content]}>
        {requestedPage === SIGNIN_PAGE && <SignIn />}
        {requestedPage === REGISTER_PAGE && <Register />}
      </Animated.View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageStyle: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center'
  },
  btnContainerStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formStyle: {
    width: '100%',
  },
  btnViewStyle: {
    height: 50,
    width: '40%',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  pressableStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBtn: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 3
  },
  pressableBtnStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelBtnStyle: {
    color: 'black',
    fontSize: 22
  },
  cancelContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 25,
    width: 50,
    height: 50,
    borderColor: 'blue',
    elevation: 8,
    borderWidth: 1,
    transform: [{ translateY: -25 }]
  }
})

export { AuthScreen }