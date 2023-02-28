import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/colors'


const AuthScreen = () => {
    return (
        <KeyboardAvoidingView behavior='height' style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <Text>Form</Text>
                <View style={styles.prompt}>
                    <Text  style={styles.promptMessage}>Your have account</Text>
                    <TouchableOpacity onPress={ ()=> console.log("mensaje auth")}>
                        <Text style={styles.button}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: "#ccc",
        borderRadius: 1,
        borderColor: 10,
        backgroundColor: "white",
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        color: "#3222"
    },
    promptButton: {
        fontSize: 16,

    },
    button: {
        backgroundColor: COLORS.primary,
        marginVertical: 20,
    }

})