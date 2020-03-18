import Demo from '../views/demo';
import Index from '../views/index';
import Detail from '../views/detial';
import NoFind from '../views/404';
import Login from '../views/login';

export default [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/demo',
    component: Demo,
    exact: true
  },
  {
    path: '/detail',
    component: Detail,
    children: [{
      path: '/detail/nofind',
      component: NoFind
    }]
  },
  {
    path: '/login',
    component: Login,
    exact: true
  }
];
