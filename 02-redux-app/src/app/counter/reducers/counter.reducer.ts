import { multiply, divide } from './../actions/counter.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(multiply, (state, { factor }) => state * factor),
  on(divide, (state, { factor }) => state / factor),
  on(reset, state => 0),
);

export function counterReducer(state: number, action: Action) {
  return _counterReducer(state, action);
}
