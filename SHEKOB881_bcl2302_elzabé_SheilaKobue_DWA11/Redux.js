// redux

// Define constants
const MAX_NUMBER = 15; // The maximum value the counter can reach
const MIN_NUMBER = -5; // The minimum value the counter can reach
const STEP_AMOUNT = 1; // The amount by which the counter value is incremented or decremented

// Define action types
const ActionTypes = {
  INCREMENT: "INCREMENT", // Action type for incrementing the counter
  DECREMENT: "DECREMENT", // Action type for decrementing the counter
  RESET: "RESET", // Action type for resetting the counter
};

// Define action creators
function incrementCounter() {
  // Creates an action object for incrementing the counter
  return { type: ActionTypes.INCREMENT };
}

function decrementCounter() {
  // Creates an action object for decrementing the counter
  return { type: ActionTypes.DECREMENT };
}

function resetCounter() {
  // Creates an action object for resetting the counter
  return { type: ActionTypes.RESET };
}

// Define reducer function
function counterReducer(state = 0, action) {
  // Reducer function for updating the counter state based on actions
  switch (action.type) {
    case ActionTypes.INCREMENT:return state + STEP_AMOUNT;
    case ActionTypes.DECREMENT:return state - STEP_AMOUNT;
    case ActionTypes.RESET:
    return 0;
    default:
    return state;
  }
}

// Create a Redux store
const store = Redux.createStore(counterReducer);

// Update the UI with the initial state
let currentValue = store.getState();

function updateUI() {
  // Updates the user interface based on the current counter state
  currentValue = store.getState();
  number.value = currentValue.toString();
  if (currentValue <= MIN_NUMBER) {
    subtract.disabled = true;
  } else if (currentValue >= MAX_NUMBER) {
    add.disabled = true;
  } else {
    subtract.disabled = false;
    add.disabled = false;
  }
  console.log(currentValue);
}

// Subscribe to state changes and update the UI
store.subscribe(updateUI);

// Attach event listeners to the buttons
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

subtract.addEventListener("click", () => {
  // Dispatches the decrement action when the subtract button is clicked
  store.dispatch(decrementCounter());
});

add.addEventListener("click", () => {
  // Dispatches the increment action when the add button is clicked
  store.dispatch(incrementCounter());
});

const resetButton = document.querySelector("sl-button");

resetButton.addEventListener("click", () => {
  // Dispatches the reset action when the reset button is clicked
  store.dispatch(resetCounter());
  alert("The counter has been reset.");
});

// Initialize the UI
updateUI();