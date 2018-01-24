import React from 'react';
import GlobalStyles from '../assets/GlobalStyles';
import { Text, View, Button } from 'react-native';
import {RkButton} from 'react-native-ui-kitten';

const Register = ({navigation}) => (
  <View style={GlobalStyles.container}>
    <Text>Register Screen</Text>
    <Button
	  onPress={() => navigation.navigate('Welcome')}
	  title="Navig To Welcome"
	  color="#841584"
	  accessibilityLabel="Log"/>
	  <RkButton>Click me!</RkButton>
  </View>
);

export default Register;