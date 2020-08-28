import { createReducer } from '@/utils/reduxUtil';

import { SET_MODULE_STATE, LOADDATA } from './action';

const reducer = createReducer({
}, {
  [SET_MODULE_STATE]: (state, { payload }) => ({
    ...state,
    ...payload.state
  }),
  [LOADDATA]: (state, { payload }) => ({
    ...state,
    ...payload.state
  })
});

export default reducer;
