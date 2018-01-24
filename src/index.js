import React from 'react';
import {ActivityIndicator} from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import RootNavigator from './router';
import I18n from './i18n/index';
import {AppLoading, Asset} from 'expo';

export default class BogcaApp extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {isReady : false};     
  }

  componentWillMount() {
     I18n.initAsync();
     this._cacheResourcesAsync();
  }
  
  render() {
    if(!this.state.isReady){
      return (
         <ActivityIndicator />
      );
    }
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/icons/app-icon.png'),
      require('./assets/icons/bar.png'),
      require('./assets/icons/loading-icon.png'),
      require('./assets/icons/rocket.png')
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    this.state.isReady = true;
    return Promise.all(cacheImages)
  }

}
