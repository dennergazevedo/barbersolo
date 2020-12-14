import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Home from '../page/Homepage';
import Contact from '../page/Contact';
import Success from '../page/Success';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/success" exact component={Success} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
