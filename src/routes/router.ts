import Demo from '../views/demo';
import Detail from '../views/detial';
import NoFind from '../views/404';
import Mobx from '../views/mobx';
import Skeleton from '../views/skeleton';

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
  },
  {
    path: '/skeleton',
    component: Skeleton,
    exact: true
  },
];
export default router;
