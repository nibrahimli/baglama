import React from 'react';
import GlobalStyles from '../assets/GlobalStyles';
import { Text, View, Button } from 'react-native';
import I18n from '../i18n/index';

const Welcome = ({user, loc, updateLocale, navigation}) =>(<View style={GlobalStyles.container}>
					<Text>{I18n.t('app_title', {locale:loc})}</Text>
					<Text>{I18n.t('app_description', {locale:loc})}</Text>
						<Button
						  onPress={() => updateLocale()}
 						  title="Press me"
						  color="#841584"
						  accessibilityLabel="Log"/>

						 <Button
						  onPress={() => navigation.navigate('Register')}
 						  title="Navig to Register"
						  color="#841584"
						  accessibilityLabel="Log"/>
						   
								</View>)

export default Welcome;