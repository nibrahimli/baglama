import React from 'react';
import Greeting from '../components/Greeting';
import GlobalStyles from '../assets/GlobalStyles';
import { View, Button } from 'react-native';

const Welcome = ({user, loc, setLocale}) =>(<View style={GlobalStyles.container}><Greeting user={user} loc={loc}/> 
									<Button
									  onPress={() => setLocale()}
									  title="Press me"
									  color="#841584"
									  accessibilityLabel="Log"/>
								</View>)

export default Welcome;