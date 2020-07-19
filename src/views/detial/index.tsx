import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

interface DetialProps {
  children?: React.ReactNode;
}
export default class Detial extends PureComponent<DetialProps> {
  render(): JSX.Element {
    const { children } = this.props;

    return (
      <div>
        <NavLink to="/">去index</NavLink>
        <br />
        <NavLink to="/detail">detail</NavLink>
        <br />
        <NavLink to="/detail/nofind">nofind</NavLink>
        {children}
      </div>
    );
  }
}
