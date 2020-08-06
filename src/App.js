import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { PROGRAMMING, INSTALLATION } from './constants/routes';
import Programming from './Programming';
import Installation from './Installation';

const App = ({ title }) => {
  return (
    <Router>
      <h1>{title}</h1>

      <ul>
        <li>
          <Link to={PROGRAMMING}>Programming</Link>
        </li>
        <li>
          <Link to={INSTALLATION}>Installation</Link>
        </li>
      </ul>

      <Switch>
        <Route path={PROGRAMMING} element={<Programming />} />
        <Route path={INSTALLATION} element={<Installation />} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};
export default App;
