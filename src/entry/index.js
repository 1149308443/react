import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Router from '../routes';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;

ReactDom.render(<App />, document.getElementById('root'));
