import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import style from './style';

class NoFound extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div className={style.container}>
        <NavLink to="/">返回首页</NavLink>
        {/* <div className={style.box}>
          <div className={style.left}>

          </div>
          <div className={style.right}></div>
        </div> */}
      </div>
    );
  }
}
export default NoFound;
