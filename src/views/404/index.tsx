import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class NoFound extends PureComponent {
  render(): JSX.Element {
    return (
      <div>
        <NavLink to="/">404</NavLink>
      </div>
    );
  }
}
export default NoFound;
