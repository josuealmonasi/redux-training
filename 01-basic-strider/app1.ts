// Actions

interface Action {
  type: string;
  payload?: any;
}

const increaseAction: Action = {
  type: 'INCREASE',
};

function reducer(state = 10, action: Action) {
  if (action.type === 'INCREASE') {
    return (state += 1);
  }
  return state;
}

console.log(reducer(10, increaseAction));
