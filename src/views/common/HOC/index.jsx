import React, { useEffect, useState } from 'react';

const HOC = (WrappedComponent) => {
  console.log('initApp');
  return function App() {
    const [globalData, setGlobalData] = useState({
      isLogin: false
    });
    useEffect(() => {
      setGlobalData({ isLogin: true });
    }, []);

    return <WrappedComponent globalData={globalData} />;
  };
};

export default HOC;
