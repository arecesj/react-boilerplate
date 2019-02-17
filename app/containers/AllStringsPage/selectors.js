import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the allStringsPage state domain
 */

const selectAllStringsPageDomain = state =>
  state.get('allStringsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AllStringsPage
 */

const makeSelectAllStringsPage = () =>
  createSelector(selectAllStringsPageDomain, substate => substate.toJS());

const makeEventsSelector = () =>
  createSelector(selectAllStringsPageDomain, substate =>
    substate.get('events'),
  );

const makeEventLoading = () =>
  createSelector(selectAllStringsPageDomain, substate =>
    substate.get('loading'),
  );

const makeEventError = () =>
  createSelector(selectAllStringsPageDomain, substate => substate.get('error'));
export default makeSelectAllStringsPage;
export {
  selectAllStringsPageDomain,
  makeEventsSelector,
  makeEventLoading,
  makeEventError,
};
