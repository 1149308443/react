import { combineReducers } from 'redux';
import demoReducer from '@/views/demo/reducer';

export default combineReducers({
  demo: demoReducer
});
