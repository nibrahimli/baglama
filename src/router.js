import { StackNavigator } from 'react-navigation';
import React from 'react';
import WelcomeScreen from './containers/WelcomeHOC';
import RegisterScreen from './components/Register';
import LoginScreen from './components/LoginV1';
import SignUpScreen from './components/signUp';
import SplashScreen from './screens/splash';


const RootNavigator = StackNavigator({
  Splash: {
    screen: SplashScreen
  },
  LoginV1: {
    screen: LoginScreen
  },
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
    }
  },
  Register: {
    screen: RegisterScreen
  },  
  SignUp: {
    screen: SignUpScreen
  }
});

export default RootNavigator;
