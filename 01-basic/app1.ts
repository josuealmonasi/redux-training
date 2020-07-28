import { Action } from './fake-ngrx/ngrx';
import {
  decreaseAction,
  increaseAction,
  multiplyAction,
  divideAction,
} from './counter/counter.actions';

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case 'INCREASE':
      return (state += 1);
    case 'DECREASE':
      return (state -= 1);
    case 'MULTIPLY':
      return state * action.payload;
    case 'DIVIDE':
      return state / action.payload;
    default:
      break;
  }
}

console.log(reducer(10, decreaseAction));
console.log(reducer(10, increaseAction));
console.log(reducer(10, multiplyAction));
console.log(reducer(10, divideAction));
