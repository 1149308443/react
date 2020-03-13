import { createReducer } from '@/utils/reduxUtil';

import { SET_MODULE_STATE } from './action';

const reducer = createReducer({
  userName: '张珊',
  password: '123456'
}, {
  [SET_MODULE_STATE]: (state, { payload }) => ({
    ...state,
    ...payload.state
  })
});

export default reducer;
