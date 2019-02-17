/**
 *
 * HomePage
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
import styled, { css } from 'styled-components';
import {
  makeNewEventSelector,
  makeEventSuccessSelector,
  makeEventErrorSelector,
} from './selectors';
import { addNewEvent, editNewEvent, clearNewEvent } from './actions';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55vh;
  color: white;
`;

const Button = styled.button`
  margin-left: 1rem;
  height: 1.6rem;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  componentDidMount() {
    this.props.clearNewEvent();
  }

  render() {
    const message = this.props.errorNewEvent
      ? this.props.errorNewEvent
      : this.props.successNewEvent;
    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>
        <FormContainer>
          <h1>Enter a String</h1>
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="input"
              value={this.props.addNewEvent}
              onChange={this.props.handleChange}
              style={{ border: '3px solid #73AD21' }}
            />
            <Button primary type="submit">
              Submit
            </Button>
          </form>
          <p>{message}</p>
        </FormContainer>
      </div>
    );
  }
}

HomePage.propTypes = {
  addNewEvent: PropTypes.any,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  successNewEvent: PropTypes.string,
  errorNewEvent: PropTypes.string,
  clearNewEvent: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  addNewEvent: makeNewEventSelector(),
  successNewEvent: makeEventSuccessSelector(),
  errorNewEvent: makeEventErrorSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addNewEvent());
    },
    handleChange: evt => dispatch(editNewEvent(evt.target.value)),
    clearNewEvent: () => dispatch(clearNewEvent()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
