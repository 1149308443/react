import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Index from '../views/index';
import Detail from '../views/detial';
import history from '../utils/historyUtil';


const BasicRoute = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
