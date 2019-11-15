import React from 'react';
import ReactDom from 'react-dom';
import Router from '../routes';

const renderDom = () => {
  ReactDom.render(
    <div>
      <Router />
    </div>,
    document.getElementById('root')
  );
};

if (module.hot) {
  // enable HMR
  module.hot.accept('../routes', () => renderDom());
}

renderDom();
