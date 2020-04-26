import React from 'react';
import ReactDom from 'react-dom';
import Router from '../routes';

const renderDom = (): void => {
  ReactDom.render(<Router />, document.getElementById('root'));
};

if (module.hot) {
  // enable HMR
  module.hot.accept('../routes', () => renderDom());
}

renderDom();
