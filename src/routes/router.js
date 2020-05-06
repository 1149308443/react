import loadable from '@loadable/component';
// import Demo from '../views/demo';
// import Detail from '../views/detial';
// import NoFind from '../views/404';


const router = [
  {
    path: '/',
    component: loadable(() => import('../views/demo')),
    exact: true
  },
  {
    path: '/detail',
    component: loadable(() => import('../views/detial')),
    children: [{
      path: '/detail/nofind',
      component: loadable(() => import('../views/404'))
    }]
  }
];
export default router;
