// script.js
const counterDisplay = document.getElementById('counter');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const resetButton = document.getElementById('resetButton');

let counter = 0;

addButton.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;
});

subtractButton.addEventListener('click', () => {
  if (counter > 0) {
    counter--;
    counterDisplay.textContent = counter;
  }
});

resetButton.addEventListener('click', () => {
  counter = 0;
  counterDisplay.textContent = counter;
  // Show a confirmation message using Shoelace Toast component or any other suitable component
});