import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import ZHCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Router from '../routes';
import store from '../store';

const renderDom = (): void => {
  ReactDom.render(
    <ConfigProvider locale={ZHCN}>
      <Provider store={store}>
          <Router  />
      </Provider>
    </ConfigProvider>,

    document.getElementById('root')
  );
};

if (module.hot) {
  // enable HMR
  module.hot.accept('../routes', () => renderDom());
}

renderDom();
