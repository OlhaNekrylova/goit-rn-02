import { StyleSheet, Text, ImageBackground,
    View, TouchableOpacity, TextInput, KeyboardAvoidingView, 
    Keyboard,TouchableWithoutFeedback,
    Platform } from "react-native";
import React, { useState } from "react";

const buttonImg = require('../../assets/images/add.png');

const initialState = {
    login: "",
    email: "",
    password: "",
};

const RegistrationScreen = () => {
    const [state, setState] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };

    const submitForm = () => {
        console.log(state);
        setIsShowKeyboard(false);
        setState(initialState);
    };

    const passwordShow =()=> alert(`Your password is: ${state.password}`);

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView 
            behavior={Platform.OS == "ios" ? "padding" : "height"} 
            // style={ styles.container } 
            >
            <View style={{...styles.form,
                    bottom: isShowKeyboard ? -180 : 0, }}>
                <View style={ {...styles.pfotoContainer,
                    top: isShowKeyboard ? -230 : -60, }}>
                    <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
                        <ImageBackground source={buttonImg} style={{width: '100%', height: '100%'}}></ImageBackground>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.form}> */}
                    <Text style={ {...styles.title,
                    top: isShowKeyboard ? -190 : 0, } }>Registration</Text>
                    <TextInput 
                    style={{...styles.input,
                        marginTop: isShowKeyboard ? 0 : 16, 
                        top: isShowKeyboard ? -190 : 0,}} 
                    placeholder="Login"
                    inputMode="text"
                    onFocus={() => setIsShowKeyboard(true)}
                    value={ state.login }
                    onChangeText={(value) =>
                        setState((prevState) => ({ ...prevState, login: value }))}
                    />
                    <TextInput 
                    style={{...styles.input,
                        marginTop: isShowKeyboard ? 0 : 16, 
                        top: isShowKeyboard ? -190 : 0,}} 
                    placeholder="Email address" 
                    inputMode="email" 
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.email} 
                    onChangeText={(value) =>
                        setState((prevState) => ({ ...prevState, email: value }))}
                    />
                    <TextInput 
                    style={{...styles.input,
                        marginTop: isShowKeyboard ? 0 : 16,
                        top: isShowKeyboard ? -190 : 0, }} 
                    placeholder="Password" 
                    secureTextEntry={true} 
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}  
                    onChangeText={(value) =>
                        setState((prevState) => ({ ...prevState, password: value }))}
                    />
        
                <TouchableOpacity style={ {...styles.pasShow,
                        top: isShowKeyboard ? -224 : -34, } } activeOpacity={0.5} onPress={passwordShow}>
                    <Text style={ styles.passwShowText }>Show</Text>
                </TouchableOpacity>  

                <TouchableOpacity style={{...styles.registerButton,
                        marginTop: isShowKeyboard ? 5 : 43, }} 
                    activeOpacity={0.5} onPress={submitForm}>
                    <Text style={ styles.registerText }>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.loginLink } activeOpacity={0.5}>
                    <Text style={ styles.loginLinkText }>Have you already had an account? Log in</Text>
                </TouchableOpacity> 
                {/* </View> */}
            </View>
        </KeyboardAvoidingView> 
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    form: {
        // position: 'relative',
        // flex: 0.75,
        alignItems: "center",
        // justifyContent: "flex-end",
        width: 360,
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#ffffff",
    },
    pfotoContainer: {
    //  position: "absolute",
    //  alignSelf: "center",
        // top: -60,
        // alignItems: 'center',
        zIndex: 1,
        // left: 128,
        // top: 203,
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    addButton: {
        position: 'absolute',
        bottom: 15,
        right: -12,
        // left: 100,
        // top: 284,
        zIndex: 2,
        width: 25,
        height: 25,
    },
    title: {
        color: "#212121",
        marginTop: -45,              
        marginBottom: 16,
        fontSize: 30,
        lineHeight: 35.16,
    },
    input: {
        position: 'relative',
        width: 343,
        height: 50,
        // marginTop: 16,
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
        // top: -34,
        left: 130,
    },
    passwShowText: {
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    }, 
    registerButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 343,
        height: 51,
        // marginTop: 43,
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
    },
});

export default RegistrationScreen;
