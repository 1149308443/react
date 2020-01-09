import undoable, { distinctState } from 'redux-undo';
import { createReducer } from '@/utils/reduxUtil';

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER
} from './actions';

const reducer = createReducer({
  filter: 'SHOW_ALL',
  todos: []
}, {
  [SET_VISIBILITY_FILTER]: (state, action) => ({
    ...state,
    filter: action.payload.filter
  }),
  [ADD_TODO]: (state = [], action) => ({
    ...state,
    todos: [...state.todos, {
      text: action.payload.text,
      completed: false
    }]
  }),
  [TOGGLE_TODO]: (state = [], action) => ({
    ...state,
    todos: state.todos.map((todo, index) => {
      if (index === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    })
  })
});

const undoableTodos = undoable(reducer);

export default undoableTodos;
