import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Router from '../routes';

import todoApp from '../views/index/reducer';

const loggerMiddleware = createLogger({
  collapsed: true // 折叠日志组
});

const store = createStore(todoApp, applyMiddleware(
  thunkMiddleware, // 允许我们 dispatch() 函数
  loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
));

const renderDom = () => {
  ReactDom.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  // enable HMR
  module.hot.accept('../routes', () => renderDom());
}

renderDom();
