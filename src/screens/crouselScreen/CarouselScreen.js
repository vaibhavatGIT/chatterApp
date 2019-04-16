import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,Image
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
 
const { width, height } = Dimensions.get('window');
 
export default class CarouselScreen extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      size: { width, height },
    };
  }
 
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
 
  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
         // pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Image style={{width:width,height:height}} source={require('../../asset/Snapchat-534407325.jpg')} /></View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
        </Carousel>
      </View>
    );
  }
}