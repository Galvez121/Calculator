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
      key.classList.add("is-depressed");
    }

    // When clicking the decimal
    if (action === "decimal") {
      display.textContent = displayNum + ".";
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
      console.log("equal key!");
    }
  }
});
