import React, { Component } from 'react';

class ReactKey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: 1, val: 'aa' }, { id: 2, val: 'bb' }, { id: 3, val: 'cc' }]
    };
  }

  click = () => {
    const { list } = this.state;
    list.reverse();
    console.log('reverse', list);
    this.setState({
      list
    });
  }

  splice = () => {
    const { list } = this.state;
    list.splice(1, 1);
    console.log('delete', list);
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <div onClick={this.splice}>delete</div>
        <div onClick={this.click}>reverse</div>
        <ul>
          { list.map((item, index) => (
            <li key={index.toString()}>
              <div>
                <span>{item.val}</span>
                <input type="text" />
              </div>

            </li>
          ))}
        </ul>
      </div>

    );
  }
}

// 不能使用数组的索引作为react 的key, 因为如果你的数组的顺序是可以改变的, 那么会存在原地复用带来不可 预知的bug

export default ReactKey;
