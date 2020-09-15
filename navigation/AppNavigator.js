import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackScreen, HomeTab } from './VnptNavigator'
import { useSelector } from 'react-redux';
//bottom tab 

const AppNavigator = () => {
    const user = useSelector(state => state.user);
    console.log('user', user);
    return (
        <NavigationContainer>
            {/** um ong, de chi cho cai header */}
            {Object.keys(user.user).length === 0 ? <AuthStackScreen /> : <HomeTab />}
            {/* <HomeTab /> */}
        </NavigationContainer>
    )
}

export default AppNavigator
