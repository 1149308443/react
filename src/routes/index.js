import React from 'react';
import {
  BrowserRouter, Route, Switch, Router
} from 'react-router-dom';
import history from '../utils/historyUtil';
import Demo from '../views/demo';
import Detail from '../views/detial';
import NoFind from '../views/404';

const BasicRoute = () => (
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Demo} />
        <Route
          path="/detail"
          render={() => (
            <Detail>
              <Route path="/detail/nofind" component={NoFind} />
            </Detail>
          )}
        />
      </Switch>
    </Router>
  </BrowserRouter>
);

export default BasicRoute;
