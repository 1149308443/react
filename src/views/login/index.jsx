import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HOC from '../common/HOC';
import style from './style.scss';

@HOC('login')
export default class Login extends PureComponent {
    submitForm=() => {
      const { setGlobalData, history } = this.props;
      setGlobalData({
        loginState: true,
        userName: '吴维兴',
        password: '111111'
      });
      history.push('/');
    }

    render() {
      return (
        <div className={style.container}>
          <div className={style.group}>
            <span>账号</span>
            <input name="name" type="text" />
          </div>
          <div className={style.group}>
            <span>密码</span>
            <input name="password" type="password" />
          </div>
          <div className={style.btn} onClick={this.submitForm}>登录</div>
        </div>
      );
    }
}
Login.propTypes = {
  setGlobalData: PropTypes.func,
  history: PropTypes.object
};
