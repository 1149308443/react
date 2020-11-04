import React from 'react';
import ClassComponent from './component/classComponent';
import FnComponent from './component/fnComponent';
import FnState from './component/FnState';

class HookDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Dan'
    };
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <p>
          <b>Choose profile to view: </b>
          <select
            value={user}
            onChange={(e) => this.setState({ user: e.target.value })}
          >
            <option value="Dan">Dan</option>
            <option value="Sophie">Sophie</option>
            <option value="Sunil">Sunil</option>
          </select>
        </p>
        <h1>
      Welcome to
          {user}
’s profile!
        </h1>
        <p>
          <FnComponent user={user} />
          <b> (function)</b>
        </p>
        <p>
          <ClassComponent user={user} />
          <b> (class)</b>
        </p>
        <p>
      Can you spot the difference in the behavior?
        </p>

        <FnState />
      </>
    );
  }
}
export default HookDemo;
