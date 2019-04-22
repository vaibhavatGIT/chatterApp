import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions, Image
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Chat extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[{  width: width, height: height , backgroundColor: 'green', alignItems: "center", justifyContent: 'center' },]}>
                    <Text style={{ color: "#fff", fontSize: 64 }}>Chat Screen</Text>
                </View>
            </View>
        );
    }
}