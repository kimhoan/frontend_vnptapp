import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const IntroScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('FirstScreen')}>
                <Text>Go to Login Option</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default IntroScreen
