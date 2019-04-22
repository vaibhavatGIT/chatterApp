import React from "react";
import { TouchableOpacity, StatusBar, Text, TextInput, KeyboardAvoidingView, Platform, View, ScrollView,Dimensions } from "react-native";
import Block from "../../component/Block";
import LinearGradient from 'react-native-linear-gradient';
import { GradientText } from "../../theme";
import Toast from 'react-native-simple-toast';
const {height, width } = Dimensions.get('window');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleInputChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView style={{ height:height,width:width}}>
                    <LinearGradient
                        colors={["#d90646", "#eb402c"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={{ flex: 1, paddingHorizontal: 45 }}
                    >
                        {/* <StatusBar barStyle={"light-content"} /> */}
                        <Block center middle>
                            <Text style={{ fontFamily: "Lato-Black", fontSize: 64, color: 'white' }}>
                                ChatteR
                            </Text>   
                            <Text style={{ paddingBottom: 100, fontSize: 20, color: '#fff' }}>
                                dEMOLA sCERRZZa
                            </Text>
                            
                            <Block
                                flex={0.15}
                                color={"rgba(0,0,0,0.3)"}
                                style={{ width: "100%", marginBottom: 25, borderRadius: 60 }}
                            >
                                <TextInput
                                    style={{marginLeft:20, fontSize: 20, color: '#fff' }}
                                    placeholder="TestEmail@gmail.com"
                                    placeholderTextColor='#cec6c6'
                                    name='email'
                                    returnKeyType={"next"}
                                    underlineColorAndroid='transparent'
                                    value={this.state.email}
                                    autoCapitalize="none"
                                    onSubmitEditing={() => Toast.show("Email Submited")}
                                    onChangeText={(e) => this.handleInputChange('email', e)} />
                            </Block>

                            <Block
                                flex={0.15}
                                color={"rgba(0,0,0,0.3)"}
                                style={{ width: "100%", marginBottom: 50, borderRadius: 60 }}
                            >
                                <TextInput
                                    style={{ marginLeft:20, fontSize: 20, color: '#fff' }}
                                    placeholder="Password"
                                    placeholderTextColor='#cec6c6'
                                    secureTextEntry
                                    name='password'
                                    returnKeyType={"next"}
                                    underlineColorAndroid='transparent'
                                    value={this.state.password}
                                    autoCapitalize="none"
                                    onSubmitEditing={() => Toast.show("Password Submited")}
                                    onChangeText={(e) => this.handleInputChange('password', e)} />
                            </Block>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Chat')}
                                style={{ flex: 0.12, width: "100%", marginBottom: 20 }}
                            >
                                <Block white center middle style={{ borderRadius: 60 }}>
                                    <GradientText style={{ fontSize: 20 }}>Sign In</GradientText>
                                </Block>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Signup')}>
                                <Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold" }}>
                                    Don't have account? Sign up.
                        </Text>
                            </TouchableOpacity>

                        </Block>
                    </LinearGradient>
                </KeyboardAvoidingView>
            </ScrollView>

        );
    }
}

export default Login;