import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import commonReducer from '@/views/common/reducer';
import demoReducer from '@/views/demo/reducer';
import loginReducer from '@/views/login/reducer';

export default combineReducers({
  module: combineReducers({
    demo: demoReducer,
    login: loginReducer
  }),
  common: commonReducer,
  router: routerReducer,
  form: formReducer
});
