// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Keyboard, TouchableWithoutFeedback } from 'react-native';

import RegistrationScreen from './Screens/RegistrationScreen';
// import LoginScreen from './Screens/LoginScreen';

const imageBackground = require('./assets/images/Wallpaper.jpg');

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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