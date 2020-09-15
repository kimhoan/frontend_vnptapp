import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Setting Screen</Text>
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

export default SettingScreen
