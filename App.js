import React from 'react';
import BogcaApp from './src/index';
import { View } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);      
  }
  
  render() {
    return (
    <BogcaApp/>
  );
  }
}
