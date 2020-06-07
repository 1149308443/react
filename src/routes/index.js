import React from 'react';
import {
  BrowserRouter, Route, Switch, Router, HashRouter
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../utils/historyUtil';
import router from './router';

const renderRoute = (routerArr) => routerArr.map((el, index) => {
  if (el.children) {
    return (
      <Route
        key={index.toString()}
        path={el.path}
        component={() => (
          <el.component>
            {renderRoute(el.children)}
          </el.component>
        )}
      />
    );
  }
  return (
    <Route
      key={index.toString()}
      exact={el.exact}
      path={el.path}
      component={el.component}
    />
  );
});

const BasicRoute = () => (
  // <BrowserRouter>
  <HashRouter>
    <Router history={history}>
      {/* <ConnectedRouter history={history}> */}
      <Switch history={history}>
        {renderRoute(router)}
      </Switch>
      {/* </ConnectedRouter> */}
    </Router>
  </HashRouter>
  // </BrowserRouter>
);

export default BasicRoute;
