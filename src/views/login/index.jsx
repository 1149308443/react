import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submit, navTo } from './action';

@connect(
  (state) => ({
    ...state.module.login
  }),
  (dispatch) => ({
    loginSubmit: (formData) => {
      dispatch(submit(formData));
    },
    loginNavTo: (url) => {
      dispatch(navTo(url));
    }
  })
)
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const { loginSubmit } = this.props;
    loginSubmit({
      userName: '李四',
      password: '999999'
    });
  }

  goTo = () => {
    const { loginNavTo } = this.props;
    loginNavTo('/');
  }

  render() {
    const { userName, password } = this.props;
    return (
      <div>
        <div>{userName}</div>
        <div>{password}</div>
        <button onClick={this.goTo}>点击跳转回首页</button>
      </div>
    );
  }
}

Login.propTypes = {
  loginSubmit: PropTypes.func,
  loginNavTo: PropTypes.func,
  userName: PropTypes.string,
  password: PropTypes.string
};

export default Login;
