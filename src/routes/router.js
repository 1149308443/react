// 路由的component 路径是相对于 views文件夹的,要和loadable的 路径拼接起来
const router = [
  {
    path: '/',
    component: '/demo',
    exact: true,
    requiresAuth: false
  },
  {
    path: '/login',
    component: '/login',
    exact: true,
    requiresAuth: false
  },
  {
    path: '/def',
    component: '/classHook',
    exact: true,
    requiresAuth: false
  },
  {
    path: '/detail',
    component: '/detial',
    requiresAuth: true,
    // exact: true,
    children: [{
      path: '/detail/nofind',
      component: '/404'
    }]
  },
  { // 所有错误页面都跳转这边,必须放置在最后
    component: '/404',
    requiresAuth: false
  }
];
export default router;
