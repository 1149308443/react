import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createStore from '../store';
import Router from '../routes';

const store = createStore();

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
