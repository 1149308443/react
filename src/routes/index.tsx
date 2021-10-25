import { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import history from '../utils/historyUtil';
import type { RouterType } from './router';
import router from './router';
import loadable from './loadable';

const renderRoute = (routerArr: any): JSX.Element =>
  routerArr.map((el: RouterType, index: number) => {
    const Com = loadable(el.componentPath)
    if (el.children) {
      return (
        <Route
          key={index.toString()}
          path={el.path}
          component={() => <Com>{renderRoute(el.children)}</Com>}
        />
      )
    }
    return (
      <Route
        key={index.toString()}
        exact={el.exact}
        path={el.path}
        component={Com}
      />
    )
  })

const BasicRoute = (): JSX.Element => (
  <BrowserRouter>
    <Router history={history}>
      <Suspense fallback={<>loading</>}>
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
      </Suspense>
    </Router>
  </BrowserRouter>
)

export default BasicRoute