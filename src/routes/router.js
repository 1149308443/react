import loadable from '@loadable/component';

export default [
  {
    path: '/',
    component: loadable(() => import('../views/index')),
    exact: true
  },
  {
    path: '/demo',
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
  },
  {
    path: '/login',
    component: loadable(() => import('../views/login')),
    exact: true
  },
  { // 所有错误页面都跳转这边,必须放置在最后
    component: loadable(() => import('../views/404')),
    exact: true
  }
];
