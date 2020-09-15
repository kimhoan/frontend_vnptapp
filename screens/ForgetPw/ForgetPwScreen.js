import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const ForgetPwScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.formBackGround}>
                <AntDesign name="user" size={24} color="black" />
                <TextInput placeholder="Nhập vào email or tài khoản của bạn" style={styles.textInput}></TextInput>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formBackGround: {
        flexDirection: "row",
        borderRadius: 5,
        height: 50,
        width: 300,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    button: {
        width: '30%',
        backgroundColor: 'gray',
        borderRadius: 5,
    }
})

export default ForgetPwScreen
