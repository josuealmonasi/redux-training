import { createReducer, on } from '@ngrx/store';
import * as todosActions from '../actions/todos.actions';
import * as uuid from 'uuid';
import { Todo } from '../models/todo.model';

export const initialState: Array<Todo> = [];

const _todosReducer = createReducer(
  initialState,
  on(todosActions.createTodo, (state, { text }) => [
    ...state,
    { id: uuid.v4(), text, completed: false },
  ]),
);

export function todoReducer(state, action) {
  return _todosReducer(state, action);
}
