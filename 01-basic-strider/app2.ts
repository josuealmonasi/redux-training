import { Action } from './fake-ngrx/ngrx';
import * as counterActions from './counter/counter.actions';

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
    case 'RESET':
      return (state = 0);
    default:
      break;
  }
}

console.log(reducer(10, counterActions.increaseAction));
console.log(reducer(10, counterActions.decreaseAction));
console.log(reducer(10, counterActions.multiplyAction));
console.log(reducer(10, counterActions.divideAction));
console.log(reducer(10, counterActions.resetAction));
