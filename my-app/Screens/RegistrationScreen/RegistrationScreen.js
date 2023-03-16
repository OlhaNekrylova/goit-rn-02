import { StyleSheet, Text, ImageBackground,
    View, TouchableOpacity, TextInput, KeyboardAvoidingView, 
    Platform } from "react-native";
import React, { useState } from "react";

// const buttonImg = require('./new.png');

const RegistrationScreen = ({changeScreen}) => {

    const [login, setLogin] =useState('');
    const [mail, setMail] =useState('');
    const [password, setPassword] =useState('');

    const handleLogin =(text)=>{ setLogin(text)};
    const handleMail =(text)=>{ setMail(text)};
    const handlePassword =(text)=>{ setPassword(text)};

    const register =()=> {
        if (!login || !mail || !password) { alert("Enter all data please!!!"); return }
        console.log(`Login: ${login}, Email: ${ mail }, Password: ${password}`)
    }

    const passwShow =()=> alert(`Your password is: ${password}`);

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={ styles.containerKeyB } >
            <View style={ styles.container }>
                <View style={ styles.pfotoContainer }>
                    <TouchableOpacity style={ styles.addbutton } activeOpacity={0.5}>
                        <ImageBackground source={buttonImg} style={{width: '100%', height: '100%'}}></ImageBackground>
                    </TouchableOpacity>
                </View>
                <Text style={ styles.title }>Registration</Text>
                <TextInput 
                    style={ styles.input } 
                    placeholder="Login"
                    inputMode="text"
                    value={ login }
                    onChangeText={handleLogin}
                />
                <TextInput 
                    style={ styles.input } 
                    placeholder="Email address" 
                    inputMode="email" 
                    value={ mail } 
                    onChangeText={handleMail}
                />
                <TextInput style={ styles.inputMailPassw } placeholder="Password" secureTextEntry={true} value={ password }  onChangeText={handlePassword}/>
        
                <TouchableOpacity style={ styles.passwShow } activeOpacity={0.5} onPress={passwShow}>
                    <Text style={ styles.passwShowText }>Show</Text>
                </TouchableOpacity>  

                <TouchableOpacity style={ styles.registerButton } activeOpacity={0.5} onPress={register}>
                    <Text style={ styles.registerButtonText }>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.loginLink } activeOpacity={0.5} onPress={() => changeScrenn(0) }>
                    <Text style={ styles.loginLinkText }>Already have an account? Log in</Text>
                </TouchableOpacity> 
            </View>
        </KeyboardAvoidingView> 
    )
};
