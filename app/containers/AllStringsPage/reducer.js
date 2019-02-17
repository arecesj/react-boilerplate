/*
 *
 * AllStringsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_EVENTS,
  LOAD_EVENTS_ERROR,
  LOAD_EVENTS_SUCCESS,
} from './constants';

export const initialState = fromJS({
  events: [],
  loading: false,
  error: true,
});

function allStringsPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EVENTS:
      return state.set('loading', true).set('error', false);
    case LOAD_EVENTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('events', action.events);
    case LOAD_EVENTS_ERROR:
      return state.set('loading', false).set('error', action.error);
    default:
      return state;
  }
}

export default allStringsPageReducer;
