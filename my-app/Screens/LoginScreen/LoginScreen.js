import { StyleSheet, Text, 
    View, TouchableOpacity, TextInput, KeyboardAvoidingView, 
    Platform } from "react-native";
import React, { useState } from "react";

const initialState = {
    email: "",
    password: "",
};

const LoginScreen = () => {
    const [state, setState] = useState(initialState);

    const submitForm = () => {
    console.log(state);
    setState(initialState);
    };

    const passwordShow =()=> alert(`Your password is: ${state.password}`);

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            // style={ styles.container } 
        >
            <View style={styles.form}>
                    <Text style={ styles.title }>Login</Text>
                    <TextInput 
                        style={ styles.input }
                        placeholder="Email address"
                        inputMode="email"
                        value={state.email} 
                        onChangeText={(value) =>
                            setState((prevState) => ({ ...prevState, email: value }))}
                    />
                    <TextInput 
                        style={ styles.input }
                        placeholder="Password" 
                        secureTextEntry={true} 
                        value={state.password}
                        onChangeText={(value) =>
                            setState((prevState) => ({ ...prevState, password: value }))}
                    />
                <TouchableOpacity style={ styles.pasShow } activeOpacity={0.5} onPress={passwordShow}>
                    <Text style={ styles.passwShowText }>Show</Text>
                </TouchableOpacity>  

                <TouchableOpacity style={ styles.registerButton } activeOpacity={0.5} onPress={submitForm}>
                    <Text style={ styles.registerText }>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.loginLink } activeOpacity={0.5} >
                    <Text style={ styles.loginLinkText }>Don't have an account? Register</Text>
                </TouchableOpacity> 
                </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    form: {
        alignItems: "center",
        width: 360,
        height: 456,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#ffffff",
    },
    title: {
        color: "#212121",
        marginTop: 32,
        marginBottom: 16,
        fontSize: 30,
        lineHeight: 35.16,
    },
    input: {
        position: 'relative',
        width: 343,
        height: 50,
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",
        color: "#BDBDBD",
        backgroundColor: "#F6F6F6",
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
    },
    pasShow: {
        // position: 'absolute',
        top: -34,
        left: 130,
    },
    passwShowText: {
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    }, 
    registerButton: {
        justifyContent: 'center',
        alignItems: "center",
        width: 343,
        height: 51,
        marginTop: 43,
        marginBottom: 16,
        borderRadius: 100,
        backgroundColor: "#FF6C00",
        shadowColor: "#000000",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    registerText: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 19,
    },
    loginLink: {
        // marginBottom: 45,
    },
    loginLinkText: {
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    }
});

export default LoginScreen;