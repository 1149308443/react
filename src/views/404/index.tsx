import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class NoFound extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavLink to="/">404</NavLink>
      </div>
    );
  }
}
export default NoFound;
