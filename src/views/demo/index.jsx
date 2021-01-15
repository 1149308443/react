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
import SortTable from './components/dragSortantdTable';
import BaseTable from './components/antdTable';
import TestEffect from './components/testEffect';
import * as style from './style.less';

// 二叉树遍历小实验
// import BinaryTree from '@/utils/binaryTree';
// const nodes = [8, 3, 6, 4, 9, 11, 2, 5, 7];
// const binaryTree = new BinaryTree(nodes);
// const tree = binaryTree.showTree();
// console.log('构建的二叉树是:', tree);
// const mapBinaryTree = binaryTree.mapRang(tree);
// console.log('二叉树广度遍历', mapBinaryTree);

// comonJs模块和ES6模块的区别小实验
// import ESObj, { count, Add } from '@/config/es6.js';
// const CommonJSObj = require('@/config/common.js');
// CommonJSObj.name = 'wwx';
// CommonJSObj.Add(); // 修改的是一个普通类型
// CommonJSObj.changeInfo(); // 修改的是一个引用类型
// console.log('CommonJSObj', CommonJSObj);
// ESObj.age = '18岁';
// ESObj.inAdd();
// console.log('before', count);
// Add();
// console.log('ESObj', ESObj, count);

const obj = {};

const tableData = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

let start = 0; // 存储按帧执行动画的第一帧
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      showObj: {}
    };
  }

  componentDidMount() {
    // const result = method([2, 1], [4, 2], [1, 3]);
    // console.log(result);

    // this.loadTest(); // 本地mockJs请求
    // this.loadTestNode(); // 测试自己的服务端的node请求
    // this.loadRap2(); // 测试直接请求在线的mock,不存在跨域
    this.init().then(() => {
      // console.log(obj);
    });
  }

  init = async () => {
    await this.promise().then(async (data) => {
      await this.promise2().then((data2) => {
        // console.log(data2);
        obj.name = data2.age;
      });
      obj.age = data.age;
    });
  }

  promise = () => new Promise((resolve) => {
    // console.log(1);
    setTimeout(() => {
      resolve({
        name: '张三',
        age: 18
      });
    }, 1000);
  })

  promise2 = () => new Promise((resolve) => {
    // console.log(2);
    setTimeout(() => {
      resolve({
        name: '张三2',
        age: 182
      });
    }, 500);
  })

  // 请求本地的mockJs接口
  loadTest = async () => {
    const response = await test();
    console.log('mock请求到的数据', response);
  }

  // 请求node接口
  loadTestNode = async () => {
    const result = await testNode();
    console.log(result);
  }

  // 请求在线mock接口
  loadRap2 = async () => {
    const result = await testRap2();
    console.log(result);
  }

  // 按照帧执行动画
  animation = (timestamp) => {
    console.log(1, timestamp);
    if (!start) start = timestamp;
    const progress = timestamp - start;
    if (progress < 2000) {
      window.requestAnimationFrame(this.animation);
    }
  }

  handleOk = () => {
    this.setState({
      visible: false
    });
  }

  onShowModal = (record) => {
    this.setState({
      visible: true,
      showObj: record
    });
  }

  render() {
    const { visible, showObj } = this.state;
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
        <div>serverless测试</div>
        <SortTable />

        <h2>基础表格action排序</h2>
        <BaseTable
          data={tableData}
          onShowModal={(record, index) => this.onShowModal(record, index)}
        />
        <TestEffect visible={visible} handleOk={this.handleOk} showObj={showObj} />
      </div>
    );
  }
}

export default Index;
