import Demo from '../views/demo';
import Detail from '../views/detial';
import NoFind from '../views/404';
import Mobx from '../views/mobx';

const router = [
  {
    path: '/',
    component: Demo,
    exact: true
  },
  {
    path: '/mobx',
    component: Mobx,
    exact: true
  },
  {
    path: '/detail',
    component: Detail,
    children: [{
      path: '/detail/nofind',
      component: NoFind
    }]
  }
];
export default router;
