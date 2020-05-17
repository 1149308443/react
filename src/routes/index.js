import React from 'react';
import {
  BrowserRouter, Route, Switch, Router, Redirect
} from 'react-router-dom';
import history from '../utils/historyUtil';
import router from './router';
import loadCom from './loadable';

const renderRoute = (routerArr) => routerArr.map((el, index) => {
  const {
    component, children, path, exact, requiresAuth
  } = el;
  const Component = loadCom(component);
  return (
    <Route
      key={index.toString()}
      path={path}
      exact={exact}
      render={(props) => {
        if (requiresAuth) {
          return <Redirect to="/login" />;
        }
        if (children) {
          return (
            <Component {...props} isLogin={requiresAuth}>
              {renderRoute(children)}
            </Component>
          );
        }
        return <Component {...props} isLogin={requiresAuth} />;
      }}
    />
  );
});

const BasicRoute = () => (
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        {renderRoute(router)}
      </Switch>
    </Router>
  </BrowserRouter>
);

export default BasicRoute;
