import React from 'react';
import { Text } from 'react-native';

class Greeting extends React.Component {

  constructor(props) {
    super(props);      
  }

  render() {
    return (
      <Text>Hello {this.props.user}!</Text>
    );
  }
}

export default Greeting;