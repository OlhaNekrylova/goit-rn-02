import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const backImage = require('./assets/images/Wallpaper.jpg');

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScreen = (value) => { setActiveScreen(value) }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={backImage} style={styles.backImage} >
        { activeScreen === 0 ? <LoginScreen changeScreen={ changeScreen }/> :
          <RegistrationScreen changeScreen={ changeScreen }/>}
      </ImageBackground>
      <StatusBar style="auto" />  
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }, 
  backImage: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%'
  },
});