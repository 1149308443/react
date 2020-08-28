import {
    takeLatest, put, all, select
  } from 'redux-saga/effects';
  import * as actions from './action';

  function* loadData() {
    const store = yield select();
    const { ycomment } = store.module;
    const { current = 1, pageSize = 10, conditions = {} } = ycomment;
    console.log(current, pageSize);
  }
  export default function* () {
    yield all([
      takeLatest(actions.LOADDATA, loadData)
    ]);
  }
