import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

const HOC = (options) => (WrappedComponent) => {
  console.log('initApp', options);
  return function App(props) {
    // eslint-disable-next-line react/prop-types
    const { isLogin, history } = props;
    const [globalData, setGlobalData] = useState({
      loginState: false
    });
    if (!globalData.loginState && isLogin) {
      console.log(1);
      history.push('/login');
    }
    // useEffect(() => {
    //   setGlobalData({ isLogin: true });
    // }, []);
    console.log('HOCprops', props, globalData);

    return <WrappedComponent globalData={globalData} setGlobalData={setGlobalData} {...props} />;
  };
};
// HOC.propTypes = {
//   isLogin: PropTypes.bool,
//   history: PropTypes.object
// };

export default HOC;
