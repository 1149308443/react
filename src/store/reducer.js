import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import commonReducer from '@/views/common/reducer';

const files = require.context('../views', true, /\/reducer.(js|ts)$/);

const reducerModules = {};
files.keys().forEach((key) => {
  const name = key.substring(2, key.lastIndexOf('/'));
  if (name !== 'common') { reducerModules[name] = files(key).default || files(key); }
});

export default combineReducers({
  module: combineReducers(reducerModules),
  common: commonReducer,
  router: routerReducer,
  form: formReducer
});
