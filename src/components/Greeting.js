import React from 'react';
import { Text } from 'react-native';
import I18n from '../i18n/index';

class Greeting extends React.Component {

  constructor(props) {
    super(props);      
  }

  componentWillMount() {
    I18n.initAsync();
  }

  render() {
  	console.log("this.props.loc " + this.props.loc);
  	return (
      <Text>{I18n.t('greeting', {locale:this.props.loc})} {this.props.user}!</Text>
    );
  }
}

export default Greeting;