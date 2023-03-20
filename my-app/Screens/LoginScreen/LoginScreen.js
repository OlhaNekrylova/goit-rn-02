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

    const passwordShow =()=> alert(`Your password is: ${password}`);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"} 
            // style={ styles.container } 
        >
            <View style={styles.container}>
                <View style={styles.form}>
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
                <TouchableOpacity style={ styles.pasShow } activeOpacity={0.5} onPress={passwordShow}>
                    <Text style={ styles.passwordShowText }>Show</Text>
                </TouchableOpacity>  

                <TouchableOpacity style={ styles.registerButton } activeOpacity={0.5} onPress={register}>
                    <Text style={ styles.registerText }>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.loginLink } activeOpacity={0.5}  onPress={()=>changeScreen(1)} >
                    <Text style={ styles.loginLinkText }>Don't have an account? Register</Text>
                </TouchableOpacity> 
                </View>
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        flex: 1,
        alignItems: 'center',
    }, 
    // pfotoContainer: {
    //     position: absolute,
    //     left: 128,
    //     top: 203,
    //     width: 120,
    //     height: 120,
    //     borderRadius: 16,
    //     backgroundColor: "#F6F6F6",
    // },
    // addButton: {
    //     position: absolute,
    //     left: 235,
    //     top: 284,
    //     zIndex: 1,
    //     width: 25,
    //     height: 25,
    // },
    form: {
        width: 375,
        height: 489,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#ffffff",
    },
    title: {
        color: "#212121",
        marginTop: 32,
        marginBottom: 32,
        fontSize: 30,
        lineHeight: 35.16,
    },
    input: {
        position: 'relative',
        width: 343,
        height: 50,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",
        color: "#BDBDBD",
        backgroundColor: "#F6F6F6",
        fontSize: 16,
        lineHeight: 19,
    },
    pasShow: {
        position: 'absolute',
        top: -34,
        left: 130,
        fontSize: 16,
        lineHeight: 19,
        color: "#1B4371",
    },
    registerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 343,
        height: 51,
        marginTop: 43,
        marginBottom: 16,
        borderRadius: 100,
        color: "#ffffff",
        backgroundColor: "#FF6C00",
        // boxShadow: 0 4 4 rgba(0, 0, 0, 0.25),
        fontSize: 16,
        lineHeight: 19,
        
    },
    loginLinkText: {
        marginBottom: 144,
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    }

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