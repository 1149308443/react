import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from '../routes';

import todoApp from '../views/index/reducer';

const store = createStore(todoApp);

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
