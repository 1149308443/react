import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import cls from 'classnames';
import { DatePicker, Button } from 'antd';
import style from './style.less';
import MapMathod from './components/map';

const arr = [
  {group:0, name:'第一个'},
  {group:0, name:'第二个'},
  {group:1, name:'第三个'},
  {group:1, name:'第四个'},
  {group:2, name:'第五个'},
  {group:2, name:'第六个'},
  {group:3, name:'第七个'},
  {group:3, name:'第八个'}
];

const Index = (): JSX.Element => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = '测试页面';

    // window.addEventListener("beforeunload", function(e) {
    //   console.log(123,e);

    //   e.returnValue = "我在这写点东西...";
    //   // return 2;
    //   });
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
      <MapMathod />
      <div className={style.box}>
      {arr.map((el,i)=>{
        const isFirst = el.group !== arr[i-1]?.group;
        const isLast = el.group !== arr[i+1]?.group;
        console.log(i, isFirst, isLast);
        return<div key={i.toString()} className={cls([isFirst?style.isFirst:'',isLast? style.isLast:''])}>{el.name}</div>;
      })}
      </div>
      
    </div>
  );
};

export default Index;
