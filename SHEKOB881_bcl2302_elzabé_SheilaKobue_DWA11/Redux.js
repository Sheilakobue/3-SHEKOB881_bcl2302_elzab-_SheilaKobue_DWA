// Define action types
const ActionTypes = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  RESET: 'RESET'
};

// Define reducer function
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ActionTypes.ADD:
      return { count: state.count + 1 };
    case ActionTypes.SUBTRACT:
      return { count: state.count - 1 };
    case ActionTypes.RESET:
      return { count: 0 };
    default:
      return state;
  }
}

// Define store
function createStore(reducer) {
  let state = reducer(undefined, {}); // Initialize state
  const subscribers = []; // Array to hold subscribers

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    subscribers.forEach(subscriber => subscriber());
  }

  function subscribe(subscriber) {
    subscribers.push(subscriber);

    // Return unsubscribe function
    return function unsubscribe() {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  }

  return { getState, dispatch, subscribe };
}

// Create store with counterReducer
const store = createStore(counterReducer);

// Test user stories

// SCENARIO: Increment the counter by one
console.log('SCENARIO: Increment the counter by one');
console.log('Initial state:', store.getState());

// Subscribe to state changes and log new state to console
const unsubscribe1 = store.subscribe(() => {
  console.log('New state:', store.getState());
});

// Dispatch ADD action twice
store.dispatch({ type: ActionTypes.ADD });
store.dispatch({ type: ActionTypes.ADD });

unsubscribe1(); // Unsubscribe from state changes

// SCENARIO: Increment the counter by one
console.log('\nSCENARIO: Increment the counter by one');
console.log('Initial state:', store.getState());

// Subscribe to state changes and log new state to console
const unsubscribe2 = store.subscribe(() => {
  console.log('New state:', store.getState());
});

// Dispatch SUBTRACT action
store.dispatch({ type: ActionTypes.SUBTRACT });

unsubscribe2(); // Unsubscribe from state changes

// SCENARIO: Resetting the Tally Counter
console.log('\nSCENARIO: Resetting the Tally Counter');
console.log('Initial state:', store.getState());

// Subscribe to state changes and log new state to console
const unsubscribe3 = store.subscribe(() => {
  console.log('New state:', store.getState());
});

// Dispatch RESET action
store.dispatch({ type: ActionTypes.RESET });

unsubscribe3(); // Unsubscribe from state changes