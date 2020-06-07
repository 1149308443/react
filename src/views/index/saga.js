
import {
  takeLatest, put, all, select, call
} from 'redux-saga/effects';
import * as actions from './action';
import { loadDatas } from '@/axios/api';


function* loadData(params) {
  console.log('参数测试', params);
  try {
    yield put(
      actions.setModuleState({
        loading: true
      })
    );
    const store = yield select();
    const { index } = store.module;
    const { current = 1, pageSize = 10, conditions = {} } = index;
    const { data } = yield call(loadDatas, { current, pageSize, conditions });
    console.log(data);
    yield put(
      actions.setModuleState({
        data: data.results,
        // total: data.results.length,
        loading: false
      })
    );
  } catch (e) {
    console.error(e);
  } finally {
    yield put(
      actions.setModuleState({
        loading: false
      })
    );
  }
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
