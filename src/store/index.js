import { createStore, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducer';

// 处理 compose 容器
let composeEnhancers = compose;
// 中间件容器
const middlewares = [];

// 开发环境-添加中间件
if (process.env.NODE_ENV === 'development') {
  // 设置redux-devtools
  composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  // 添加日志中间件
  const loggerMiddleware = createLogger({
    collapsed: true // 折叠日志组
  });
  middlewares.push(loggerMiddleware);
}
// middlewares.push(thunkMiddleware);

/**
 * 创建store函数
 * @param {Object} preloadedState 初始化store的默认值
 * @returns store
 */
const storeFn = (preloadedState) => {
  // 添加中间件
  const middlewareEnhancers = applyMiddleware(...middlewares);
  // 创建store
  const store = createStore(reducers, preloadedState, composeEnhancers(middlewareEnhancers));
  // 开发环境-热重载
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducer', () => store.replaceReducer(reducers));
  }
  return store;
};

export default storeFn;
