import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions, Image
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class Messages extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[{  width: width, height: height , backgroundColor: 'red', alignItems: "center", justifyContent: 'center' },]}>
                    <Text style={{ color: "#fff", fontSize: 64 }}>Message</Text>
                </View>
            </View>
        );
    }
}