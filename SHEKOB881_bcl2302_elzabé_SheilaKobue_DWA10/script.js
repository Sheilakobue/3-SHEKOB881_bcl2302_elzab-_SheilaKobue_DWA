const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const Reset = document.querySelector('[data-key="Reset"]');
const confirmationMessage = document.getElementById('confirmationMessage');
const subtractHandler = () => {
  const newValue = parseInt(number.value) - 1;
  number.value = newValue;
  if (add.disabled === true) {
    add.disabled = false;
  }
  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
};
const addHandler = () => {
  const newValue = parseInt(number.value) + 1;
  number.value = newValue;
  if (subtract.disabled === true) {
    subtract.disabled = false;
  }
  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
};
const resetHandler = () => {
  const initialValue = 0;
  number.value = initialValue;
  alert('Are sure you want to reset?');
  subtract.disabled = false;
  add.disabled = false;
};
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
Reset.addEventListener('click', resetHandler);
