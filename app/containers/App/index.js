/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AllStringsPage from 'containers/AllStringsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import styled from 'styled-components';
import GlobalStyle from '../../global-styles';

const Container = styled.div`
  background: linear-gradient(
    60deg,
    rgb(162, 103, 214) 36%,
    rgb(83, 77, 253) 80%
  );
  height: 100vh;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export default function App() {
  return (
    <Container>
      <Nav>
        <NavLink
          style={{
            textDecoration: 'none',
            color: 'white',
            marginRight: '.5rem',
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/all">
          All
        </NavLink>
      </Nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all" component={AllStringsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Container>
  );
}
