import {
  compose,
  withProps,
  withHandlers  
} from 'recompose';

import Welcome from '../components/Welcome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeLocale } from '../models';
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

const withLocale = withHandlers({
  updateLocale: ({ setLocale }) => () => {
    setLocale(changeLocale());
  }
});

export default compose(withReduxConnect, withLocale)(Welcome);