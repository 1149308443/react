
import {
  takeLatest, put, all, select, call, delay, cancel, cancelled, fork
} from 'redux-saga/effects';
import * as actions from './action';
import { loadDatas } from '@/axios/api';


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
    const xxx = yield select();
    while (true) {
      console.log('search');
      yield delay(1000);
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (yield cancelled()) {
      console.log('task取消了');
      // yield put(actions.SUBMIT.cancel());
    }
  }
}

function* addSend() {
  try {
    const xxx = yield select();
    const task = yield fork(serach);
    yield cancel(task);
  } catch (e) {
    console.error(e);
  }
  // while (true) {
  //   try {
  //     const xxx = yield select();
  //     console.log(11);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     yield delay(1000);
  //   }
  // }
}

export default function* () {
  yield all([
    takeLatest(actions.LOAD_DATA.REQUEST, loadData),
    takeLatest(actions.SUBMIT.REQUEST, serach),
    takeLatest(actions.ADDSEND.REQUEST, addSend)
  ]);
}
