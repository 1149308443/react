import React, { PureComponent } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import PropTypes from 'prop-types';

@inject('store')
@observer
class Mobx extends PureComponent {
  render() {
    const { store } = this.props;
    const { RootStore } = store;
    console.log(toJS(RootStore));
    return (
      <button>
        Seconds passed:
        {RootStore.age}
      </button>
    );
  }
}

Mobx.propTypes = {
  store: PropTypes.object
};

export default Mobx;
