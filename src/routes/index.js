import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Router,
  HashRouter
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../utils/historyUtil';
import router from './router';
import loadCom from './loadable';

const renderRoute = (routerArr) => routerArr.map((el, index) => {
    const {
      component, path, exact, children
    } = el;
    const Component = loadCom(component);
    return (
      <Route
        key={index.toString()}
        path={path}
        exact={exact}
        render={(props) => {
          if (children) {
            return <Component {...props}>{renderRoute(children)}</Component>;
          }
          return <Component {...props} />;
        }}
      />
    );
  });

const BasicRoute = () => (
  // <BrowserRouter>
  <HashRouter>
    <Router history={history}>
      {/* <ConnectedRouter history={history}> */}
      <Switch history={history}>{renderRoute(router)}</Switch>
      {/* </ConnectedRouter> */}
    </Router>
  </HashRouter>
  // </BrowserRouter>
);

export default BasicRoute;
