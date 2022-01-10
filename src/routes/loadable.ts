import { lazy } from 'react';
// import loadable from '@loadable/component';
/**
 * @description loadableComponent 动态加载资源
 * @param {string} component 需加载的组件路径
 * @returns {Function} 返回组件或loadable动态组件
 */
const loadCom = (component: string):  any => {
  if (typeof component === 'string') {
    // return lazy(()=> new Promise((resolve)=>{
    //   setTimeout(()=>{
    //     resolve(import(`../views${component}`))
    //   },3000)
    // })
    // );
    return lazy(()=>import(`../views${component}`));
  }
  return component;
};

export default loadCom;