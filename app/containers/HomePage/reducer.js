/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_NEW_EVENT,
  EDIT_NEW_EVENT,
  ADD_NEW_EVENT_SUCCESS,
  ADD_NEW_EVENT_ERROR,
  CLEAR_NEW_EVENT,
} from './constants';

export const initialState = fromJS({
  newEvent: '',
  loading: false,
  successNewEvent: '',
  errorNewEvent: '',
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_EVENT:
      return state.set('loading', true);
    case EDIT_NEW_EVENT:
      return state.set('newEvent', action.newEvent);
    case ADD_NEW_EVENT_ERROR:
      return state
        .set('addingNewEvent', false)
        .set('successNewEvent', '')
        .set('errorNewEvent', `Error: ${action.error}`);
    case ADD_NEW_EVENT_SUCCESS:
      return state
        .set('addingNewEvent', false)
        .set('successNewEvent', 'Event added')
        .set('newEvent', '');
    case CLEAR_NEW_EVENT:
      return state.set('errorNewEvent', '').set('successNewEvent', '');
    default:
      return state;
  }
}

export default homePageReducer;
