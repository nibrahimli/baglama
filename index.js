import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Welcome from './screens/WelcomeHOC';

export default class BogcaApp extends React.Component {

  constructor(props) {
    super(props);      
  }

  
  render() {
    return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
  }
}
