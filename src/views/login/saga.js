import {
  takeLatest, put, all, select
} from 'redux-saga/effects';
import * as actions from './action';

function* submit({ payload }) {
  console.log(payload);
  const store = yield select();
  console.log(store);
  yield put(actions.setModuleState({
    ...payload.info
  }));
}
export default function* () {
  yield all([
    takeLatest(actions.SUBMIT, submit)
  ]);
}
