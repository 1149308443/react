import React, { PureComponent } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import HOC from '@views/common/HOC';

// @HOC()
// export default class Detial extends PureComponent {
//   componentDidMount() {
//     console.log(this.props);
//   }

//   render() {
//     const { children } = this.props;
//     return (
//       <div>
//         <NavLink to="/">去index</NavLink>
//         <br />
//         <NavLink to="/detail">detail</NavLink>
//         <br />
//         <NavLink to="/detail/nofind">nofind</NavLink>
//         {children}
//       </div>
//     );
//   }
// }
const Detial = ({ children, history }) => {
  console.log(history);
  const his = useHistory();
  console.log('his', his);
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
};

Detial.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object
};

const DetialHOC = HOC('Detial')(Detial);

export default DetialHOC;
