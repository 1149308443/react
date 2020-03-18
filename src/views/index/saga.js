
import {
  takeLatest, put, all, select
} from 'redux-saga/effects';
import * as actions from './action';

function* loadData() {
  const xxx = yield select();
  console.log(xxx);
}

export default function* () {
  yield all([
    takeLatest(actions.LOAD_DATA, loadData)
  ]);
}
