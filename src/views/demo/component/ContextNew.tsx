import React from 'react';

// 创建Context组件
const wrapContext = React.createContext('this is provider');

// 运行APP
const Father = () => (
  <wrapContext.Provider value="this is provider">
    <Child />
  </wrapContext.Provider>
);

export default Father;

// 接收组件
const getProviderValue = () => <wrapContext.Consumer>{(value) => <span>{value}</span>}</wrapContext.Consumer>;

const Child = () => (
  getProviderValue()
);


// 1. 在组件树中，如果中间某一个组件 ShouldComponentUpdate returning false 了，会阻碍 context 的正常传值，导致子组件无法获取更新。
// 2. 组件本身 extends React.PureComponent 也会阻碍 context 的更新。

// 注意点：

// 1. Context 应该是唯一不可变的
// 2. 组件只在初始化的时候去获取 Context
