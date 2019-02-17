/*
 *
 * HomePage actions
 *
 */

import {
  ADD_NEW_EVENT,
  EDIT_NEW_EVENT,
  ADD_NEW_EVENT_SUCCESS,
  ADD_NEW_EVENT_ERROR,
  CLEAR_NEW_EVENT,
} from './constants';

export function addNewEvent() {
  return {
    type: ADD_NEW_EVENT,
  };
}
export function editNewEvent(newEvent) {
  return {
    type: EDIT_NEW_EVENT,
    newEvent,
  };
}

export function addNewEventSuccess(newEvent) {
  return {
    type: ADD_NEW_EVENT_SUCCESS,
    newEvent,
  };
}

export function addNewEventError(error) {
  return {
    type: ADD_NEW_EVENT_ERROR,
    error,
  };
}

export function clearNewEvent() {
  return {
    type: CLEAR_NEW_EVENT,
  };
}
