import loadable from '@loadable/component';

/**
 * @description loadableComponent 动态加载资源
 * @param {string} component 需加载的组件路径
 * @returns {Function} 返回组件或loadable动态组件
 */
const loadCom = (component) => {
  if (typeof component === 'string') {
    return loadable(() => import(`../views${component}`));
  }
  return component;
};

export default loadCom;
