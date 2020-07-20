import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ZHCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import createStore from '../store';
import Router from '../routes';

const store = createStore();

const renderDom = () => {
  ReactDom.render(
    <Provider store={store}>
      <ConfigProvider>
        <Router locale={ZHCN} />
      </ConfigProvider>
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  // enable HMR
  module.hot.accept('../routes', () => renderDom());
}

renderDom();
