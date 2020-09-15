import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
//Colors
import Colors from '../../ultils/Colors';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
    const user = useSelector(state => state.user);

    console.log("US SETING", user);
    return (
        <ImageBackground blurRadius={4} source={require('../../images/profile.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                {/* <Text>ProfileScreen</Text> */}
                <Text style={styles.Name}> Xin chào {user && user.user.map(a => a.name)}</Text>
            </View>
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Name: {
        fontWeight: 'bold',
        color: Colors.Active
    }
})
export default ProfileScreen

