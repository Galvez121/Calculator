"use strict";

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");

const display = document.querySelector(".calculator__display");

keys.addEventListener("click", function (evt) {
  if (evt.target.matches("button")) {
    //Buttons
    const key = evt.target;
    const action = key.dataset.action;

    //Display screen
    const keyContent = key.textContent;
    const displayNum = display.textContent;

    if (!action) {
      if (displayNum === "0") {
        display.textContent = keyContent;
      } else {
        /*If the calculator shows a non-zero number, 
        we want to append the clicked key to the displayed number. 
        To append a number, we concatenate a string. */
        display.textContent = displayNum + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      calculator.dataset.previousKeyType = "operator";

      calculator.dataset.firstValue = displayNum;
      calculator.dataset.operator = action;
    }

    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNum + keyContent;
      }
    }

    // When clicking the decimal
    if (action === "decimal") {
      display.textContent = displayNum + ".";
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    // Calculate the result function
    const calculate = (n1, operator, n2) => {
      let result = "";

      if (operator === "add") {
        result = parseFloat(n1) + parseFloat(n2);
      } else if (operator === "subtract") {
        result = parseFloat(n1) - parseFloat(n2);
      } else if (operator === "multiply") {
        result = parseFloat(n1) * parseFloat(n2);
      } else if (operator === "divide") {
        result = parseFloat(n1) / parseFloat(n2);
      }

      return result;
    };

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});
