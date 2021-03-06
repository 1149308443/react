import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import HOC from '@views/common/HOC';

@HOC('Detial')
export default class Detial extends PureComponent {
  render() {
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


Detial.propTypes = {
  children: PropTypes.node
};
