import {
  compose,
  withProps,
  withHandlers  
} from 'recompose';

import Welcome from './Welcome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { name } from '../helpers';
import {
  setName,
  setLocale
} from '../store/actions';

const withReduxConnect = connect(
  state => ({
    user : state.app.user,
    loc : state.settings.locale
  }),
  dispatch =>
    bindActionCreators({setName, setLocale}, dispatch),
);



export default compose(withReduxConnect)(Welcome);