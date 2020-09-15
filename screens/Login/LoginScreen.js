import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import LoginForm from './components/LoginForm'
import { useSelector } from 'react-redux'
import { Feather } from '@expo/vector-icons';
//import TestLoginForm from '../TestLogin/TestLoginScreens';
import Colors from '../../ultils/Colors';

const { height } = Dimensions.get('window')

const LoginScreen = ({ navigation }) => {
    const user = useSelector(state => state.user)
    console.log("PROPS LOGIN SCREEN", user);
    // trang thai luc dau
    return (
        <ImageBackground blurRadius={10} source={require('../../images/bglogin6.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.backIcon}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left-circle" size={28} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleprimary}>VNPT</Text>
                <Text style={styles.title}>ĐĂNG NHẬP</Text>

                <LoginForm navigation={navigation} />
            </View>
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        //opacity: 0.2
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleprimary: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.Active,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.Active,
        marginBottom: 20,
    },
    backIcon: {
        position: 'absolute',
        top: 40,
        left: 20
    },
    Login: {
        marginBottom: 20,
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
    icon: {
    },
    textInput: {
    }
})
export default LoginScreen
