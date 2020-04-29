import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const MemoTest = () => {
  const [xiaohong, setXiaohong] = useState('小红待客状态');
  const [zhiling, setZhiling] = useState('志玲待客状态');
  return (
    <>
      <button onClick={() => { setXiaohong(new Date().getTime()); }}>小红</button>
      <button onClick={() => { setZhiling(`${new Date().getTime()},志玲向我们走来了`); }}>志玲</button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  );
};

const ChildComponent = ({ name, children }) => {
  const changeXiaohong = (names) => {
    console.log('小红');
    return `${names},小红向我们走来了`;
  };
  //   const actionXiaohong = changeXiaohong(name);
  const actionXiaohong = useMemo(() => changeXiaohong(name), [name]);
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  );
};

ChildComponent.propTypes = {
  name: PropTypes.any,
  children: PropTypes.node
};

export default MemoTest;
