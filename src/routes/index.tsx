import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Home from '../page';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
