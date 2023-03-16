import { StyleSheet, Text, ImageBackground,
    View, TouchableOpacity, TextInput, KeyboardAvoidingView, 
    Platform } from "react-native";
import React, { useState } from "react";

const LoginScreen = ({changeScreen}) => {
    const [mail, setMail] =useState('');
    const [password, setPassword] =useState('');

    const handleMail =(text)=>{ setMail(text)};
    const handlePassword =(text)=>{ setPassword(text)};

    const register =()=> {
        if (!mail || !password) { alert("Enter all data please!!!"); return }
        console.log(`Email: ${ mail }, Password: ${password}`);
    }

    const passwShow =()=> alert(`Your password is: ${password}`);

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={ styles.containerKeyB } >
            <View style={styles.container}>
                {/* <View style={styles.form}> */}
                    <Text style={ styles.inputTitle }>Login</Text>
                    <TextInput 
                    style={ styles.input }
                    placeholder="Email address"
                    inputMode="email"
                    value={ mail } 
                    onChangeText={handleMail}
                    />
                    <TextInput 
                    style={ styles.input }
                    placeholder="Password" 
                    secureTextEntry={true} 
                    value={ password }
                    onChangeText={handlePassword}
                    />
                {/* </View> */}
                <TouchableOpacity style={ styles.passwShow } activeOpacity={0.5} onPress={passwShow}>
                    <Text style={ styles.passwShowText }>Show</Text>
                </TouchableOpacity>  

                <TouchableOpacity style={ styles.registerButton } activeOpacity={0.5} onPress={register}>
                    <Text style={ styles.registerButtonText }>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.loginLink } activeOpacity={0.5}  onPress={()=>changeScreen(1)} >
                    <Text style={ styles.loginLinkText }>Don't have an account? Register</Text>
                </TouchableOpacity> 
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }, 
    // form: {
    //     marginHorizontal: 30,
    // },
    inputTitle: {
        color: "#f0f8ff",
        marginBottom: 10,
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        borderColor: "#f0f8ff",
        height: 30,
        borderRadius: 6,
    
        color: "#f0f8ff",
    },
    // btn: {
    //     backgroundColor: "#ffb6c1",
    //     height: 40,
    //     borderRadius: 6,
    //     marginTop: 40,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginHorizontal: 20,
    // },
    // btnTitle: {
    //     color: "#f0f8ff",
    //     fontSize: 18,
    // },
});

export default LoginScreen;