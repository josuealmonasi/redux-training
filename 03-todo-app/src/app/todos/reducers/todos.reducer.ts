import { Action, createReducer, on } from '@ngrx/store';
import * as todosActions from '@app/todos/actions/todos.actions';
import { Todo } from '@app/todos/models/todo.model';
import * as uuid from 'uuid';

export const initialState: Array<Todo> = [
  {
    completed: false,
    id: '1',
    text: 'test todo',
  },
];

const _todosReducer = createReducer(
  initialState,
  on(todosActions.createTodo, (state, { text }) => [
    ...state,
    { id: uuid.v4(), text, completed: false },
  ]),
);

export function todoReducer(state: Todo[], action: Action) {
  return _todosReducer(state, action);
}
