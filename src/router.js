import { StackNavigator } from 'react-navigation';
import React from 'react';
import WelcomeScreen from './containers/WelcomeHOC';
import RegisterScreen from './components/Register';


const RootNavigator = StackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
    }
  },
  Register: {
    screen: RegisterScreen
  }
});

export default RootNavigator;
