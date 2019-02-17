import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());

const makeNewEventSelector = () =>
  createSelector(selectHomePageDomain, substate => substate.get('newEvent'));

const makeEventSuccessSelector = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('successNewEvent'),
  );

const makeEventErrorSelector = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('errorNewEvent'),
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeNewEventSelector,
  makeEventSuccessSelector,
  makeEventErrorSelector,
};
