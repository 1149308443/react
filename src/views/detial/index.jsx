import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class Detial extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavLink to="/">去index</NavLink>
      </div>
    );
  }
}
