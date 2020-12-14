import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Pages */
import Home from '../page/Homepage';
import Login from '../page/Login';
import Register from '../page/Register';
import ForgotPass from '../page/ForgotPass';
import Contact from '../page/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/sign-up" exact component={Register} />
    <Route path="/forgot-pass" exact component={ForgotPass} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/" component={Home} />
  </Switch>
);

export default Routes;
