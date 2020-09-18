import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//Colors
import Colors from '../ultils/Colors'
//Screens
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ForgetPwScreen from '../screens/ForgetPw/ForgetPwScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import IntroScreen from '../screens/Intro/IntroScreen';
import FirstScreen from '../screens/First/FirstScreen';
import ProfileScreen from '../screens/User/ProfileScreen';
import SettingScreen from '../screens/Setting/SettingSreen';
import AddNewScreen from '../screens/AddNew/AddNewScreen';


// Check Stack màn hình


const LoginStack = createStackNavigator()
export const LoginStackScreen = () =>
    (<LoginStack.Navigator screenOptions={() => ({
        headerShown: false,
    })}>
        <LoginStack.Screen name='LoginScreen' component={LoginScreen} />
        <LoginStack.Screen name='ForgetPwScreen' component={ForgetPwScreen} />
    </LoginStack.Navigator>)


const AuthStack = createStackNavigator()

export const AuthStackScreen = () =>
    (<AuthStack.Navigator screenOptions={{ headerShown: false }}>
        {/* <AuthStack.Screen name='IntroScreen' component={IntroScreen} /> */}
        <AuthStack.Screen name='FirstScreen' component={FirstScreen} />
        <AuthStack.Screen name='LoginStack' component={LoginStackScreen} />
        <AuthStack.Screen name='SignUpScreen' component={SignUpScreen} />
    </AuthStack.Navigator>
    )

const HomeStack = createStackNavigator()
export const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={() => ({
        headerShown: false,
    })}>
        <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
        <HomeStack.Screen name='AddNewScreen' component={AddNewScreen} />
    </HomeStack.Navigator>
)

//khởi tạo bottom tab chứa stack auth

const Tab = createBottomTabNavigator();

export const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    const color = focused ? Colors.Active : Colors.inActive;
                    if (route.name === "HomeTab") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "information" : "information-outline";
                    }
                    else if (route.name === "Setting") {
                        iconName = focused ? "settings" : "settings-outline";
                    }
                    return (
                        <MaterialCommunityIcons name={iconName} size={25} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.Active,
                inactiveTintColor: Colors.inActive
            }}

        >
            <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{
                tabBarLabel: 'Trang Chủ',
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
            <Tab.Screen name="Setting" component={SettingScreen} options={{ tabBarLabel: 'Setting' }} />

        </Tab.Navigator>
    );
}
