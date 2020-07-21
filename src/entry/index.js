import React from 'react';
import ReactDom from 'react-dom';
import ZHCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Router from '../routes';

const renderDom = () => {
  ReactDom.render(
    <ConfigProvider>
      <Router locale={ZHCN} />
    </ConfigProvider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  // enable HMR
  module.hot.accept('../routes', () => renderDom());
}

renderDom();
