import {
  takeLatest, put, all, select
} from 'redux-saga/effects';
import { formValueSelector } from 'redux-form';
import * as actions from './action';

const selector = formValueSelector('login');

function* submit({ payload }) {
  const state = yield select();
  const files = ['username', 'password'];
  const value = selector(state, ...files);
  console.log(value);
  // yield put(actions.setModuleState({
  //   ...payload.info
  // }));
}
export default function* () {
  yield all([
    takeLatest(actions.SUBMIT, submit)
  ]);
}
