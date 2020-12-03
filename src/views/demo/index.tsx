import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import Name from '@utils/index';
import style from './style.less';
import Test from './test';

const Index = (): JSX.Element => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:

  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = '测试页面';

    const obj = new Name();
    const newobj: any = {};

    console.log('?', newobj?.name ?? 'nihao');

    console.log(obj?.getData(), obj.apiUrl, '11111111111', obj, Name);

    console.log(Test.move());
    return (): void => {
      console.log('componentWillUnmount');
    };
  }, []);

  return (
    <div className={style.container}>
      <DatePicker disabledTime={(): object => ({})} />
      <Button type="primary">primary</Button>
      <br />
      <NavLink to="/detail">[去detail]</NavLink>

      <p>{`You clicked ${count} times`}</p>
      <button type="button" onClick={(): void => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Index;
