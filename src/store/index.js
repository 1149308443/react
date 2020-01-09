import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducer';

// 处理 compose 容器
let composeEnhancers = compose;
// 中间件容器
const middlewares = [];

composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const loggerMiddleware = createLogger({
  collapsed: true // 折叠日志组
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
  loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
)));

export default store;
