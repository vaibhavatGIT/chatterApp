import React from 'react';
import { ScrollView, KeyboardAvoidingView, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Block from '../../component/Block';
import Toast from 'react-native-simple-toast';
import { GradientText } from "../../theme";
const { height, width } = Dimensions.get('window');

export default class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleInputChange = (name, val) => {
        this.setState({ [name]: val });
    }

    render() {
        return (
            <ScrollView>

                <KeyboardAvoidingView style={{ height: height, width: width }}>
                    <LinearGradient colors={["#d90646", "#eb402c"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={{ flex: 1, paddingHorizontal: 45 }}>
                        <Block center middle>
                            <Text style={{ fontFamily: "Lato-Black", fontSize: 64, color: 'white' }}>
                                Signup
                        </Text>
                            <Text style={{ paddingBottom: 70, fontSize: 20, color: '#fff' }}>
                                dEMOLA sCERRZZa
                        </Text>
                            <Block
                                flex={0.15}
                                color={"rgba(0,0,0,0.3)"}
                                style={{ width: "100%", marginBottom: 25, borderRadius: 60 }}
                            >
                                <TextInput
                                    style={{ marginLeft: 20, fontSize: 20, color: '#fff' }}
                                    placeholder="Jhon Macros"
                                    name={'name'}
                                    placeholderTextColor='#cec6c6'
                                    underlineColorAndroid='transparent'
                                    value={this.state.name}
                                    autoCapitalize="none"
                                    onChangeText={(e) => this.handleInputChange('name', e)}
                                    returnKeyType={"next"}
                                    onSubmitEditing={() => { this.email.focus(); }} />
                            </Block>
                            <Block
                                flex={0.15}
                                color={"rgba(0,0,0,0.3)"}
                                style={{ width: "100%", marginBottom: 25, borderRadius: 60 }}>
                                <TextInput
                                    ref={(input) => { this.email = input }}
                                    style={{ marginLeft: 20, fontSize: 20, color: '#fff' }}
                                    placeholder="TestEmail@gmail.com"
                                    placeholderTextColor='#cec6c6'
                                    name='email'
                                    returnKeyType={"next"}
                                    underlineColorAndroid='transparent'
                                    value={this.state.email}
                                    autoCapitalize="none"
                                    onChangeText={(e) => this.handleInputChange('email', e)}
                                    returnKeyType={"next"}
                                    onSubmitEditing={() => { this.password.focus(); }} />
                            </Block>
                            <Block
                                flex={0.15}
                                color={"rgba(0,0,0,0.3)"}
                                style={{ width: "100%", marginBottom: 25, borderRadius: 60 }}
                            >
                                <TextInput
                                    ref={(input) => { this.password = input }}
                                    style={{ marginLeft: 20, fontSize: 20, color: '#fff' }}
                                    placeholder="Password"
                                    name='password'
                                    secureTextEntry
                                    placeholderTextColor='#cec6c6'
                                    returnKeyType={"next"}
                                    underlineColorAndroid='transparent'
                                    value={this.state.password}
                                    autoCapitalize="none"
                                    onChangeText={(e) => this.handleInputChange('password', e)}
                                    returnKeyType={"next"}
                                    onSubmitEditing={() => { this.confirmPassword.focus(); }} />
                            </Block>
                            <Block
                                flex={0.15}
                                color={"rgba(0,0,0,0.3)"}
                                style={{ width: "100%", marginBottom: 25, borderRadius: 60 }}>
                                <TextInput
                                    ref={(i) => { this.confirmPassword = i }}
                                    style={{ marginLeft: 20, fontSize: 20, color: '#fff' }}
                                    secureTextEntry
                                    placeholder="Confirm Password"
                                    name='confirmPassword'
                                    placeholderTextColor='#cec6c6'
                                    returnKeyType={"next"}
                                    underlineColorAndroid='transparent'
                                    value={this.state.confirmPassword}
                                    autoCapitalize="none"
                                    onChangeText={(e) => this.handleInputChange('confirmPassword', e)} />
                            </Block>
                            <TouchableOpacity
                                onPress={() => alert(JSON.stringify(this.state))}
                                style={{ flex: 0.12, width: "100%", marginBottom: 20, marginTop: 20 }}>
                                <Block white center middle style={{ borderRadius: 60 }}>
                                    <GradientText style={{ fontSize: 20 }}>Sign Up</GradientText>
                                </Block>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={{ fontSize: 20, color: '#fff', fontWeight: "bold" }}>
                                    Already have account? Login.
                                </Text>
                            </TouchableOpacity>
                        </Block>
                    </LinearGradient>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}