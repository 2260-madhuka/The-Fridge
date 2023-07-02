import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';


export const history: any = createBrowserHistory();

export const TheFridgeWebAppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

