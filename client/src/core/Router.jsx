import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'src/pages/Home';
import After from 'src/pages/After';
import Admin from 'src/pages/Admin';

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route path="/after" component={After} />
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default RouterComponent;
