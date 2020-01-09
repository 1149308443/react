import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos = [], onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Todo key={index.toString()} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
