
import React, {Component} from 'react';
import Login from './src/screens/LoginScreen/Login';
import { AuthNavigator } from './src/router'
export default class App extends Component{
  render() {
    return (
      <AuthNavigator/>
    );
  }
}