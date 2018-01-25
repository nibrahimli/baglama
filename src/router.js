import { StackNavigator } from 'react-navigation';
import React from 'react';
import WelcomeScreen from './containers/WelcomeHOC';
import RegisterScreen from './components/Register';
import LoginScreen from './components/LoginV1';


const RootNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
    }
  },
  Register: {
    screen: RegisterScreen
  },
  LoginV1: {
    screen: LoginScreen
  }
});

export default RootNavigator;
