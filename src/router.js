
import {
    createStackNavigator,createSwitchNavigator
} from 'react-navigation'

import Login from "./screens/LoginScreen/Login";
import Signup from "./screens/SignupScreen/Signup"
import CarouselScreen from "./screens/crouselScreen/CarouselScreen"

const LogInStack = createStackNavigator(
    {
        Login: Login,
        Signup: Signup,
        Crousel: CarouselScreen
    },
    {
        initialRouteName: "Login",
        navigationOptions: { header: null }
    }
)

export const AuthNavigator = createSwitchNavigator({
    LogIn: { screen: LogInStack },
})
