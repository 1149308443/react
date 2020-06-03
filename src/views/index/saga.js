
import {
  takeLatest, put, all, select, call
} from 'redux-saga/effects';
import * as actions from './action';
import { loadDatas } from '@/axios/api';


function* loadData() {
  const xxx = yield select();
  yield put(
    actions.setModuleState({
      isLoading: true
    })
  );
}

function* serach() {
  const xxx = yield select();
  console.log(xxx, 'search');
}

function* addSend() {
  const xxx = yield select();
  console.log(xxx, 'addsend');
}

export default function* () {
  yield all([
    takeLatest(actions.LOAD_DATA.REQUEST, loadData),
    takeLatest(actions.SUBMIT.REQUEST, serach),
    takeLatest(actions.ADDSEND.REQUEST, addSend)
  ]);
}
