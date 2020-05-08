import React from 'react';
import {
  BrowserRouter, Route, Switch, Router
} from 'react-router-dom';
import history from '../utils/historyUtil';
import router from './router';


const renderRoute = (routerArr) => routerArr.map((el, index) => {
  if (el.children) {
    return (
      <Route
        key={index.toString()}
        path={el.path}
        exact={el.exact}
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
  <BrowserRouter>
    <Router history={history}>
      <Switch>
        {/* <Route exact path="/" component={Demo} />
        <Route
          path="/detail"
          component={() => (
            <Detail>
              <Route path="/detail/nofind" component={NoFind} />
            </Detail>
          )}
        /> */}
        {renderRoute(router)}
      </Switch>
    </Router>
  </BrowserRouter>
);

export default BasicRoute;
