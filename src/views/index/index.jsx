import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadData } from './action';

@connect(
  (state) => ({
    ...state.module.index
  }), {
    loadData
  }
)
class Index extends PureComponent {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    return (<div>111</div>);
  }
}
Index.propTypes = {
  loadData: PropTypes.func
};
export default Index;
