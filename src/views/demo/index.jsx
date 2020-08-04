import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
// import method from 'lodash/intersection';
import { test, testNode, testRap2 } from '@/axios/api';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import UndoRedo from './containers/UndoRedo';
import Ahooks from './components/ahooks';
import * as style from './style.less';

const obj = {};
class Index extends Component {
  componentDidMount() {
    // const result = method([2, 1], [4, 2], [1, 3]);
    // console.log(result);

    // this.loadTest(); // 本地mockJs请求
    // this.loadTestNode(); // 测试自己的服务端的node请求
    this.loadRap2(); // 测试直接请求在线的mock,不存在跨域
    this.init().then(() => {
      console.log(obj);
    });
  }

  init = async () => {
    await this.promise().then(async (data) => {
      await this.promise2().then((data2) => {
        console.log(data2);
        obj.name = data2.age;
      });
      obj.age = data.age;
    });
  }

  promise = () => new Promise((resolve) => {
    console.log(1);
    setTimeout(() => {
      resolve({
        name: '张三',
        age: 18
      });
    }, 1000);
  })

  promise2 = () => new Promise((resolve) => {
    console.log(2);
    setTimeout(() => {
      resolve({
        name: '张三2',
        age: 182
      });
    }, 500);
  })

  loadTest = async () => {
    const response = await test();
    console.log('mock请求到的数据', response);
  }

  loadTestNode = async () => {
    const result = await testNode();
    console.log(result);
  }

  loadRap2 = async () => {
    const result = await testRap2();
    console.log(result);
  }

  render() {
    return (
      <div className={style.container}>
        <DatePicker />
        <Button type="primary">121</Button>
        <div className={style.empty} />
        <div className={style.py} />
        <NavLink to="/detail">去detail</NavLink>
        <AddTodo />
        <VisibleTodoList listId="1" />
        <Footer />
        <UndoRedo />
        <Ahooks />
      </div>
    );
  }
}

export default Index;
