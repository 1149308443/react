import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  reduxForm, Field
} from 'redux-form';
import { submit, navTo } from './action';
import * as style from './style';
import RenderInput from '@/views/component/input';

@connect(
  (state) => ({
    ...state.module.login
  }),
  {
    submit,
    navTo
  }
)
class Login extends PureComponent {
  constructor(props) {
    super(props);
    document.title = '登录';
    this.state = {

    };
  }

  componentDidMount() {

  }

  goTo = () => {
    const { navTo } = this.props;
    navTo('/');
  }

  submitForm = () => {
    const { submit } = this.props;
    submit();
  }

  render() {
    const { userName, password } = this.props;
    return (
      <div className={style.container}>
        <div>{userName}</div>
        <div>{password}</div>
        <button onClick={this.goTo}>点击跳转回首页</button>
        <div className={style.group}>
          <span>账号</span>
          <Field name="name" type="text" component={RenderInput} />
        </div>
        <div className={style.group}>
          <span>密码</span>
          <Field name="password" type="password" component={RenderInput} />
        </div>
        <div className={style.btn} onClick={this.submitForm}>登录</div>
      </div>
    );
  }
}

Login.propTypes = {
  submit: PropTypes.func,
  navTo: PropTypes.func,
  userName: PropTypes.string,
  password: PropTypes.string
};

export default reduxForm({
  form: 'login'
})(Login);
