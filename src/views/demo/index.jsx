import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import PropTypes from 'prop-types';
import Qs from 'qs';
import HOC from '@views/common/HOC';
import * as style from './style.scss';
import MessageList from './component/Context';
import ContextNew from './component/ContextNew';
import UseRedux from './component/useRedux';
import UseMemo from './component/useMemo';
import StyledComponent from './component/styleComponent';

const Index = ({ globalData, history }) => {
  console.log('isLogin:', globalData.isLogin);
  const message = [{
    color: 'purple', text: 'one'
  }];
  const query = {
    pathname: '/404',
    query: { name: 'hello' }
  };
  const go = (params) => {
    // let url = '';
    // if (Object.keys(params).length > 0) {
    //   Object.keys(params).forEach((i) => { url += url ? `&${i}=${params[i]}` : `?${i}=${params[i]}`; });
    // }
    // const urlStr = `?${Qs.stringify(params)}`;
    // console.log(urlStr, 'xxx');
    // console.log(url);
    // history.push(`/404${url}`);
    history.push({
      pathname: '/404',
      query: params
    });
  };

  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = '测试页面';
    console.log('componentDidmount');

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
      <br />
      <NavLink to="/404?name=hello">去404</NavLink>
      <br />
      <NavLink to={query}>query方式去404</NavLink>
      <p onClick={() => go({ name: 'hello', age: 20 })}>函数方式去404</p>

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

Index.propTypes = {
  globalData: PropTypes.shape({
    isLogin: PropTypes.bool
  }),
  history: PropTypes.object
};

Index.defaultProps = {
  globalData: {
    isLogin: true
  }
};

const IndexHOC = HOC('index')(Index);

export default IndexHOC;
