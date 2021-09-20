import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react';
import Router from '../routes';
import store from '../store';

const renderDom = (): void => {
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
