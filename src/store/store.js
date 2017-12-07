import { createStore, combineReducers, applyMiddleware } from 'redux';
import { appReducer, settingsReducer } from './reducers';
import logger from "redux-logger";

export default createStore(
  combineReducers({
    app: appReducer,
    settings: settingsReducer    
  }),
  applyMiddleware(logger)
);