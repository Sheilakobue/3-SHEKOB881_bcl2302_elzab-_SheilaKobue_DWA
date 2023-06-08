// scripts.js
//@ts-check
/**
 * 
 * @param {string} label 
 * @returns {HTMLElement}
 */

/**const getHtml = (label) => {
    const node = document.querySelector(`[data-${label}]`)
    if (!(node instanceof HTMLElement)){
        throw new Error(
            `[data-${label}] was not found in HTML`
        )
    }
    return node
}
*/
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents form from submission behavior, which can cause page reload
    const entries = new FormData(event.target);
    const {dividend,divider}=Object.fromEntries(entries);
 
    const isWholeNumber = Number.isInteger(result); // checks if results is a whole number

try{
  //checks if any input is missing
if (divider === "" || dividend === ""){
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";

  //checks if the input is less tha 0 or equals to 0
} else if (divider <= 0 || dividend <= 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";

  //checks if the input is not a number 
}else if (isNaN(dividend) || isNaN(divider)) {
    
  //if its not a number it logs an error msg to the console
    console.error("Invalid input. Expected numbers.");
    console.trace(); // Logs call stack
    document.body.innerHTML = "Something critical went wrong. Please reload the page."; // Clear the screen & replace the contect of the document.body with a msg

} else {
    const resultForDivision = dividend / divider;
    result.innerText = Math.floor(resultForDivision)
}


 } catch (error) {
    console.error("Invalid input. Expected numbers.");
    console.trace(); // Logs call stack
    document.body.innerHTML = "Something critical went wrong. Please reload the page."; // Clear the screen
  }
});
