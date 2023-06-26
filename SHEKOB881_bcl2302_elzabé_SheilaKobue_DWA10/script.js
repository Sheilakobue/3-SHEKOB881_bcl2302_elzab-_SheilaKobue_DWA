/**
 * Constants
 */
const MAX_NUMBER = 15; // The maximum allowed value for the number
const MIN_NUMBER = -5; // The minimum allowed value for the number
const STEP_AMOUNT = 5; // The amount by which the number is incremented or decremented

/**
 * DOM elements
 */
const number = document.querySelector('[data-key="number"]'); // Input field for the number
const subtract = document.querySelector('[data-key="subtract"]'); // Subtract button
const add = document.querySelector('[data-key="add"]'); // Add button
const reset = document.querySelector('[data-key="Reset"]'); // Reset button
const confirmationMessage = document.getElementById('confirmationMessage'); // Confirmation message element

/**
 * Event handler for subtract button
 */
const subtractHandler = () => {
  const newValue = parseInt(number.value) - 1; // Subtract STEP_AMOUNT from the current value
  number.value = newValue; // Update the input field with the new value

  // Enable the add button if it was disabled
  if (add.disabled === true) {
    add.disabled = false;
  }

  // Disable the subtract button if the new value is less than or equal to the minimum value
  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};

/**
 * Event handler for add button
 */
const addHandler = () => {
   const newValue = parseInt(number.value) + 1; // Add STEP_AMOUNT to the current value
  number.value = newValue; // Update the input field with the new value

  // Enable the subtract button if it was disabled
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }

  // Disable the add button if the new value is greater than or equal to the maximum value
  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};

/**
 * Event handler for reset button
 */
const resetHandler = () => {
  const initialValue = 0; // The initial value to reset the number to
  number.value = initialValue; // Update the input field with the initial value

  // Display a confirmation message
  alert('counter has been reset');

  // Enable both the subtract and add buttons
  subtract.disabled = false;
  add.disabled = false;
};

// Add event listeners to the buttons
subtract.addEventListener('click', subtractHandler); // Subtract button click event
add.addEventListener('click', addHandler); // Add button click event
reset.addEventListener('click', resetHandler); // Reset button click event