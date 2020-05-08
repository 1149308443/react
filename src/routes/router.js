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
    // exact: true,
    children: [{
      path: '/detail/nofind',
      component: loadable(() => import('../views/404'))
    }]
  },
  {
    path: '/404',
    component: loadable(() => import('../views/404')),
    exact: true
  },
  { // 所有错误页面都跳转这边,必须放置在最后
    component: loadable(() => import('../views/404'))
  }
];
export default router;
