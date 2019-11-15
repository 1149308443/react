import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavLink to="/detail">去detail</NavLink>
      </div>
    );
  }
}
