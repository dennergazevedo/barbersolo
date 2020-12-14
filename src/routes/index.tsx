import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Home from '../page/Homepage';
import Contact from '../page/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/contact" exact component={Contact} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
