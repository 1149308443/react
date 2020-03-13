import { createReducer } from '@/utils/reduxUtil';

import {
  SHOW_MODAL,
  SET_COMMON_STATE,
  REDIRECT_TO,
  SHOW_MESSAGE,
  CLEAR_MESSAGE
} from './action';

const reducer = createReducer({}, {
  [SHOW_MODAL]: (state, { payload }) => ({
    ...state,
    modalVisible: payload
  }),
  [SHOW_MESSAGE]: (state, { payload }) => ({
    ...state,
    msg: payload.msg,
    msgType: payload.msgType
  }),
  [CLEAR_MESSAGE]: (state) => ({
    ...state,
    msg: null,
    msgType: null
  }),
  [REDIRECT_TO]: (state, { payload }) => ({
    ...state,
    redirectTo: payload.path
  }),
  [SET_COMMON_STATE]: (state, { payload }) => ({
    ...state,
    ...payload.state
  })
});

export default reducer;
