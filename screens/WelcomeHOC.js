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
  setName
} from '../store/actions';

const withReduxConnect = connect(
  state => ({
    user : state.user
  }),
  dispatch =>
    bindActionCreators({setName}, dispatch),
);



export default compose(withReduxConnect)(Welcome);