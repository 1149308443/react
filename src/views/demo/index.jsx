import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import PropTypes from 'prop-types';
import Qs from 'qs';
import HOC from '@views/common/HOC';
import { apiTest } from '@/axios/api';
import * as style from './style';
import MessageList from './component/Context';
import ContextNew from './component/ContextNew';
import UseRedux from './component/useRedux';
import UseMemo from './component/useMemo';
import StyledComponent from './component/styleComponent';
import ReactKey from './component/ReactKey';
import CssDemo from './component/cssTest';
import { generateCancelToken } from '@/utils/cancelToken';
import './component/test-class';

let cancelFn;
const Index = ({
  // globalData,
  history
}) => {
  // console.log('isLogin:', globalData);
  const pattern = /\{\{\s*(.*?)\s*\}\}/g;
  const data = {
    name: '李田所',
    age: 24,
    job: '学生'
  };
  const text = '我是{{name}}，今年{{ age }}岁，是个{{ job}}。';
  const renderResult = text.replace(pattern, (match, p1, offset, string) => {
    console.log(match, p1, offset, string);
    return data[p1];
  });
  console.log(renderResult);
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

  const req = async () => {
    const { cancelToken, cancel } = generateCancelToken();
    cancelFn = cancel;
    const data = await apiTest({}, { cancelToken });
    console.log(data);
  };

  const stop = () => {
    cancelFn && cancelFn('quxiao');
  };
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = '测试页面';
    // console.log('componentDidmount');

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
      <div onClick={req}>send Request</div>
      <div onClick={stop}>stop Request</div>

      <ReactKey />
      <CssDemo />
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
