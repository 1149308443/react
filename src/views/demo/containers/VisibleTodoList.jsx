import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibilityFilter = (state) => state.filter;
const getTodos = (state) => state.todos;

const getVisibleTodos = createSelector([getTodos, getVisibilityFilter], (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed);
    default:
      return null;
  }
});

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.module.demo.present)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
