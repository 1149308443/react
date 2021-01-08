import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
// import ESObj, { count } from '@/config/es6.js';
// const CommonJSObj = require('@/config/common.js');
// console.log('CommonJSObj-detial', CommonJSObj);
// console.log('ESObj-detial', ESObj, count);

export default class Detial extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavLink to="/">去index</NavLink>
        <br />
        <NavLink to="/demo">去demo</NavLink>
        <br />
        <NavLink to="/detail">detail</NavLink>
        <br />
        <NavLink to="/detail/nofind">nofind</NavLink>
        {this.props.children}
      </div>
    );
  }
}
