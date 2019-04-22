import React from 'react'
import {
    createStackNavigator, createSwitchNavigator, createBottomTabNavigator
} from 'react-navigation'
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Entypo
} from 'react-native-vector-icons'
import {Image} from 'react-native';
import Login from "./screens/LoginScreen/Login";
import Signup from "./screens/SignupScreen/Signup"
import Chat from "./screens/Chat"
import Messages from "./screens/Messages"


import CarouselScreen from "./screens/crouselScreen/CarouselScreen"
import { isModuleSpecifier } from '@babel/types';

const LogInStack = createStackNavigator(
    {
        Login: Login,
        Signup: Signup,
    },
    {
        initialRouteName: "Login",
        navigationOptions: { header: null }
    }
)

let TabStack = createBottomTabNavigator({
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarIcon: ({ ac }) => (
                <Image
                    style={{ marginTop: 10, height: 30, width: 30 }}
                    source={require('./asset/Snapchat-534407325.jpg')}
                />
            )
        }
    },
    Message: {
        screen: Messages,
        navigationOptions: {
            tabBarIcon: ({ ac }) => (
                <Image
                    style={{ marginTop: 10, height: 30, width: 30 }}
                    source={require('./asset/Snapchat-534407325.jpg')}
                />
            )
        }
    },
})



export const AuthNavigator = createSwitchNavigator({
    LogIn: { screen: LogInStack },
    Chat: { screen: TabStack }
})
