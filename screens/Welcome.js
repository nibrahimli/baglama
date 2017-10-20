import React from 'react';
import Greeting from '../components/Greeting';
import GlobalStyles from '../assets/GlobalStyles';
import { View } from 'react-native';

const Welcome = ({user}) => <View style={GlobalStyles.container}><Greeting user={user}/></View>

export default Welcome;