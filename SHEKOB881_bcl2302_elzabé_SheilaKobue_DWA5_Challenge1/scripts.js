// scripts.js
//@ts-check
/**
 * 
 * @param {string} label 
 * @returns {HTMLElement}
 */

const getHtml = (label) => {
    const node = document.querySelector(`[data-${label}]`)
    if (!(node instanceof HTMLElement)){
        throw new Error(
            `[data-${label}] was not found in HTML`
        )
    }
    return node
}

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents form from submission
  const entries = new FormData(event.target);
  const {dividend,divider}=Object.fromEntries(entries);
 
  const isWholeNumber = Number.isInteger(result); // checks if results is a whole number

if (divider === "" || dividend === ""){
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
} else if (divider <= 0 || dividend <= 0) {
  result.innerText = "Division not performed. Invalid number provided. Try again.";
  
} else {
  result.innerText = dividend / divider;
}
});