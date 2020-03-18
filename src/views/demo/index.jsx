import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import method from 'lodash/intersection';
import * as style from './style.scss';

const Index = () => {
  const result = method([2, 1], [4, 2], [1, 2]);
  console.log(result);

  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  return (
    <div className={style.container}>
      <DatePicker />
      <Button type="primary">primary</Button>
      <div className={style.empty} />
      <div className={style.py} />
      <NavLink to="/detail">去detail</NavLink>

      <p>{`You clicked ${count} times`}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};


export default Index;
