import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App.jsx';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* Add more routes as needed */}
    </Switch>
  </BrowserRouter>
);

export default Router;
