import React, { useEffect, useState } from 'react';

const HOC = (options) => (WrappedComponent) => {
  console.log('initApp', options);
  return function App(props) {
    const [globalData, setGlobalData] = useState({
      isLogin: false
    });
    useEffect(() => {
      setGlobalData({ isLogin: true });
    }, []);

    return <WrappedComponent globalData={globalData} {...props} />;
  };
};

export default HOC;
