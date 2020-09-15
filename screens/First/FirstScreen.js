import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import Colors from '../../ultils/Colors';

const { width, height } = Dimensions.get('window')

const FirstScreen = ({ navigation }) => {
    return (
        <ImageBackground blurRadius={4} source={require('../../images/bglogin1.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.buttonGroup}>
                    <View style={styles.button}>
                        <TouchableOpacity style={{ height: 50, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('LoginStack')}>
                            <Text style={styles.textButton}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity style={{ height: 50, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.textButton}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonGroup: {
        width,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        width: '80%',
        backgroundColor: 'rgba(0,182,230,0.2)',
        borderRadius: 50,
        marginBottom: 20,
        borderColor: Colors.Active,
        borderWidth: 1,
    },
    textButton: {
        fontWeight: "bold",
        color: '#fff'
    }
})

export default FirstScreen
