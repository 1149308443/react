import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commonReducer from '@/views/common/reducer';
import demoReducer from '@/views/demo/reducer';
import ligonReducer from '@/views/login/reducer';

export default combineReducers({
  module: combineReducers({
    demo: demoReducer,
    login: ligonReducer
  }),
  common: commonReducer,
  router: routerReducer
});
