
import {
  takeLatest, put, all, select, call, delay, cancel, cancelled, fork, race, take
} from 'redux-saga/effects';
import { loadDatas } from '@/axios/api';
import pollingEffect from '@/utils/reduxPolling';
import * as actions from './action';

function* loadData() {
  try {
    yield put(
      actions.setModuleState({
        loading: true
      })
    );
    const store = yield select();
    const { index } = store.module;
    const { current = 1, pageSize = 10, conditions = {} } = index;
    const xxx = yield call(loadDatas, { current, pageSize, conditions });
    const { data } = xxx;
    console.log(data, xxx);
    yield put(
      actions.setModuleState({
        data: data.results,
        total: data.results.length,
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
  try {
    while (true) {
      console.log('search');
      yield delay(1000);
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (yield cancelled()) {
      console.log('task取消了');
    }
  }
}

function* addSend() {
  try {
    const task = yield fork(serach);
    yield delay(5 * 1000);
    yield cancel(task);
  } catch (e) {
    console.error(e);
  }
}

function* polling(payload) {
  yield delay(100);
  console.log(payload);
}

export default function* () {
  yield all([
    takeLatest(actions.LOAD_DATA.REQUEST, loadData),
    takeLatest(actions.SUBMIT.REQUEST, serach),
    takeLatest(actions.ADDSEND.REQUEST, addSend),
    pollingEffect(actions.WATCH, polling)
  ]);
}
