import {
  all, takeLatest, put
} from 'redux-saga/effects';
import { replace, push } from 'react-router-redux';
import * as actions from './action';
import { setScrollTop } from '@/utils';


function* navTo({ payload: { path, useReplace, option } }) {
  if (useReplace) {
    yield put(replace(path, option));
  } else {
    yield put(push(path, option));
  }
  setScrollTop(0);
}

export default function* () {
  yield all([
    takeLatest(actions.NAV_TO, navTo)
  ]);
}
