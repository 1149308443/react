import loadable from '@loadable/component';
// import Demo from '../views/demo';
// import Detail from '../views/detial';
// import NoFind from '../views/404';
// const fun = (component) => {
//   if (typeof component === 'string') {
//     return loadable(() => import('../../component'));
//     // return loadable(() => import(`${component}`));
//   }
//   return component;
// };

// /**
//  * @description loadableComponent 动态加载资源
//  * @param {string} component 需加载的组件路径
//  * @param {string} dir 加载组件跟路径
//  * @returns {Function} 返回组件或loadable动态组件
//  */
// export const loadableComponent = (
//   component: ComponentBuildOptions,
//   dir = 'page/',
// ): React.ComponentType<any> => {
//   if (typeof component === 'string') {
//     return loadable(() => import(`../../${dir}${component}`));
//   }
//   return component;
// };

const router = [
  {
    path: '/',
    component: loadable(() => import('../views/demo')),
    exact: true
  },
  {
    path: '/login',
    component: loadable(() => import('../views/login')),
    exact: true,
    isLogin: true
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
