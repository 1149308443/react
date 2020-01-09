import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { DatePicker, Button } from 'antd';
import method from 'lodash/intersection';
import * as style from './style.scss';

class Index extends Component {
  componentDidMount() {
    const array = [['fred', 30, 44], ['barney', 40]];
    const result = method([2, 1], [4, 2], [1, 3]);
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
      </div>
    );
  }
}

export default Index;
