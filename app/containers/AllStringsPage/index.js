/**
 *
 * AllStringsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import { take } from 'redux-saga/effects';
import styled from 'styled-components';
// import { NONAME } from 'dns';
import makeSelectAllStringsPage, {
  makeEventsSelector,
  makeEventLoading,
  makeEventError,
} from './selectors';
import { loadEvents } from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
/* eslint-disable react/prefer-stateless-function */
export class AllStringsPage extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    const { allStrings } = this.props;
    let display;

    // Prevents calling List component when the page first mounts as we don't yet
    // have the strings in props
    if (!this.props.loading) {
      display = allStrings.map(w => <li>{w.string}</li>);
    }
    return (
      <div>
        <Helmet>
          <title>AllStringsPage</title>
          <meta name="description" content="Description of AllStringsPage" />
        </Helmet>
        <Container>
          <h1>All Strings</h1>
          <ul style={{ listStyle: 'none', color: 'white' }}>{display}</ul>
        </Container>
      </div>
    );
  }
}

AllStringsPage.propTypes = {
  loading: PropTypes.bool,
  loadEvents: PropTypes.func,
  allStrings: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  showStrings: makeSelectAllStringsPage(),
  loading: makeEventLoading(),
  error: makeEventError(),
  allStrings: makeEventsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    loadEvents: () => dispatch(loadEvents()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'allStringsPage', reducer });
const withSaga = injectSaga({ key: 'allStringsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AllStringsPage);
