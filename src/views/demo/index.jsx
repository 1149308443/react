import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import * as style from './style.less';
import MessageList from './component/Context';
import ContextNew from './component/ContextNew';
import UseRedux from './component/useRedux';
import UseMemo from './component/useMemo';
import StyledComponent from './component/styleComponent';

const Index = () => {
  const message = [{
    color: 'purple', text: 'one'
  }];

  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = '测试页面';

    return () => {
      console.log('componentWillUnmount');
    };
  }, []);
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

      <MessageList messages={message} />
      <ContextNew />
      <UseRedux />
      <StyledComponent />
      <UseMemo />

    </div>
  );
};


export default Index;
