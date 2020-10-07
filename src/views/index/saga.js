
import {
  takeLatest, put, all, select, call, delay, cancel, cancelled, fork, race, take
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

function* pollingEffect(watchKey, callback, timer) {
  // watch
  const doWatch = function* (action) {
    try {
      while (true) {
        if (callback) {
          yield callback(action);
          console.log(11);
        }
        yield delay(timer || 1000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  //
  let cancelTask = null;
  while (true) {
    console.log('watch start');
    const { watch } = yield race({
      watch: take(watchKey),
      unwatch: take(`un${watchKey}`)
    });
    console.log('watch start 1');
    if (cancelTask) {
      yield cancel(cancelTask);
    }
    if (watch) {
      cancelTask = yield fork(doWatch, watch.payload);
    }
  }
}

export default function* () {
  yield all([
    takeLatest(actions.LOAD_DATA.REQUEST, loadData),
    takeLatest(actions.SUBMIT.REQUEST, serach),
    takeLatest(actions.ADDSEND.REQUEST, addSend),
    pollingEffect('INDEX_WATCH', function* (...arg) {
      yield delay(100);
      // console.log(arg);
    })
  ]);
}
