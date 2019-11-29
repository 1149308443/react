import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NavLink to="/detail">去detail</NavLink>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default Index;
