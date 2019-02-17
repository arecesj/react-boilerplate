import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { loadEventsSuccess, loadEventsError } from './actions';
import { LOAD_EVENTS } from './constants';

export function* fetchEvents() {
  // use action params and call API
  try {
    const resp = yield call(request, 'http://localhost:8000');

    yield put(loadEventsSuccess(resp));
  } catch (error) {
    yield put(loadEventsError(error));
  }
}

// Individual exports for testing
export default function* allStringsPageSaga() {
  yield takeLatest(LOAD_EVENTS, fetchEvents);
}
