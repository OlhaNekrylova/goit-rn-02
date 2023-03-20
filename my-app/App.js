import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";

const backImage = require('./assets/images/Wallpaper.jpg');

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const changeScreen = (value) => { setActiveScreen(value) }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={backImage} style={styles.backImage} >
        { activeScreen === 0 ? <LoginScreen changeScrenn={ changeScreen }/> :
          <RegistrationScreen changeScrenn={ changeScreen }/>}
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