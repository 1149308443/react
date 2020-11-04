import React from 'react';
import PropTypes from 'prop-types';

class Index extends React.PureComponent {
  showMessage = () => {
    const { user } = this.props;
    alert(`Followed ${user}`);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    // const { user } = this.props;
    // const showMessage = () => {
    //     alert(`Followed ${user}`);
    // };

    // const handleClick = () => {
    //     setTimeout(showMessage, 3000);
    // };
    return <button onClick={this.handleClick}>Follow</button>;
  }
}

Index.propTypes = {
  user: PropTypes.string
};

export default Index;
