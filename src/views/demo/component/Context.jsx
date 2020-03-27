// eslint-disable-next-line max-classes-per-file
import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
// 根组件
class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: { color: 'purple', text: 'one' }
    };
  }

  getChildContext() {
    const { obj } = this.state;
    return obj;
  }

  setNew = (message) => {
    console.log(message);
    // this.setState({
    //   obj: message
    // });
  }

  render() {
    const { messages } = this.props;
    const { obj } = this.state;
    const children = messages.map((message, i) => {
      console.log(isEqual(message, obj));
      if (!isEqual(message, obj)) {
        this.setNew(message);
      }
      return (<Message key={i.toString()} text={message.text} />);
    });
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};
MessageList.propTypes = {
  messages: PropTypes.array
};

// 中间组件
const Message = () => (
  <div>
    <MessageItem />
    <Button>Delete</Button>
  </div>
);

// 孙组件(接收组件)
const MessageItem = (props, { text }) => (
  <div>
    {text}
  </div>
);
MessageItem.contextTypes = {
  text: PropTypes.string
};

const Button = ({ children }, { color }) => (
  <button style={{ background: color }}>
    {children}
  </button>
);

Button.contextTypes = {
  color: PropTypes.string
};
Button.propTypes = {
  children: PropTypes.node
};


export default MessageList;
