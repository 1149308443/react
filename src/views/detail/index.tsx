import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

export default class Detial extends PureComponent<any> {
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
