import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Articles from './pages/Articles';

const Routes = (props) => {
  return (
    <BrowserRouter {...props}>
      <Switch>
        <Route exact path='/articles' component={Articles} replace />
        <Redirect to='/articles' />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
