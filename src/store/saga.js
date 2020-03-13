import { all, fork } from 'redux-saga/effects';

import commonSaga from '../views/common/saga';

import loginSaga from '../views/login/saga';

export default function* () {
  yield all([
    fork(commonSaga),
    fork(loginSaga)
  ]);
}
