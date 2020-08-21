export default [
  {
    path: '/',
    component: '/index',
    exact: true
  },
  {
    path: '/demo',
    component: '/demo',
    exact: true
  },
  {
    path: '/detail',
    component: '/detial',
    children: [{
      path: '/detail/nofind',
      component: '/404'
    }]
  },
  {
    path: '/login',
    component: '/login',
    exact: true
  },
  {
    path: '/ycomment',
    component: '/ycomment',
    exact: true
  },
  { // 所有错误页面都跳转这边,必须放置在最后
    component: '/404',
    exact: true
  }
];
