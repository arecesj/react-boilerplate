import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { addNewEventSuccess, addNewEventError } from './actions';
import { ADD_NEW_EVENT } from './constants';
import { makeNewEventSelector } from './selectors';

export function* addNewEvent() {
  const newEvent = yield select(makeNewEventSelector());
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: newEvent,
    }),
  };
  try {
    yield call(request, 'http://localhost:8000', data);
    yield put(addNewEventSuccess());
  } catch (error) {
    yield put(addNewEventError());
  }
}

// Individual exports for testing
export default function* HomePageSaga() {
  yield takeLatest(ADD_NEW_EVENT, addNewEvent);
}
