import React, { lazy } from 'react';
import {
  BrowserRouter, Route, Switch, Router, Redirect
} from 'react-router-dom';
import history from '../utils/historyUtil';
import router from './router';


const renderRoute = (routerArr) => routerArr.map((el, index) => (
  <Route
    key={index.toString()}
    path={el.path}
    exact={el.exact}
    render={(props) => {
      console.log(props);
      // const Component = lazy(() => import(`${el.component}/index.jsx`));
      if (el.children) {
        return (
          <el.component {...props}>
            {renderRoute(el.children)}
          </el.component>
        );
      }
      return <el.component />;
    }}
  />
));

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
