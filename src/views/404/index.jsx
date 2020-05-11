import React from 'react';
import {
  NavLink, useParams, useHistory, useLocation
} from 'react-router-dom';
import HOC from '@views/common/HOC';

const NoFound = () => {
  const params = useParams();
  console.log('params', params);
  const history = useHistory();
  console.log('history', history);

  const location = useLocation();
  console.log('location', location);

  return (
    <div>
      <NavLink to="/">404</NavLink>
    </div>
  );
};

const NoFoundHOC = HOC('NoFound')(NoFound);
export default NoFoundHOC;
