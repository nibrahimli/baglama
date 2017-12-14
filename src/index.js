import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import RootNavigator from './router';
import I18n from './i18n/index';

export default class BogcaApp extends React.Component {

  constructor(props) {
    super(props);      
  }

  componentWillMount() {
     I18n.initAsync();
  }
  
  render() {
    return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
  }
}
