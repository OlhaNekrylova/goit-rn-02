// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";

import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

const imageBackground = require('./assets/images/Photo-image.jpg');

export default function App() {
  
  const keyboardHide = () => {
    Keyboard.dismiss();
  };


  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
    <View style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.imageBackground} >
        <RegistrationScreen />
        {/* <LoginScreen />  */}
      </ImageBackground>
      {/* <StatusBar style="auto" />   */}
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }, 
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});