import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

const HOC = (options) => (WrappedComponent) => {
  console.log('initApp', options);
  return function App(props) {
    const [globalData, setGlobalData] = useState({
      loginState: false
    });
    // useEffect(() => {
    //   setGlobalData({ isLogin: true });
    // }, []);

    return <WrappedComponent globalData={globalData} setGlobalData={setGlobalData} {...props} />;
  };
};
// HOC.propTypes = {
//   isLogin: PropTypes.bool,
//   history: PropTypes.object
// };

export default HOC;
