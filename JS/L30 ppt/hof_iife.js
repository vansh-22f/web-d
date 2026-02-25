// ðŸ“„ Slide: Higher Order Functions (HOF)
// What is a Higher Order Function?

// A Higher Order Function is a function that:
// Takes another function as an argument, OR
// Returns a function
// Function as an Argument
function greet(name) {
  return "Hello " + name;
}

function processUser(callback) {
  console.log(callback("Vansh"));
}

processUser(greet);

// Output
// Hello Vansh

// Function Returning Another Function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5));//10

// Real-World Examples

// map(), filter(), reduce()

// Event handlers

// Callbacks in APIs


// Why HOFs Matter
// Clean & reusable code
// Functional programming style
// Used heavily in React / Vue


// Interview Question

// Q: Is map() a higher order function?
// A: Yes, because it accepts a function as an argument.

// ðŸ‘‰ Say â€œnextâ€
// âž¡ï¸ Next slide will be IIFE (Immediately Invoked Function Expression) ðŸ”¥

// iife 

// Perfect ðŸ‘
// Here is ONE FULL SLIDE on IIFE, code-heavy, clean, and ready to paste.

// ðŸ“„ Slide: IIFE (Immediately Invoked Function Expression)
// What is an IIFE?

// An Immediately Invoked Function Expression is a function that:

// Is defined

// And executed immediately

// Runs only once

// Basic IIFE Syntax
(function () {
  console.log("IIFE executed");
})();

// Output

// IIFE executed
// IIFE with Parameters
(function (name) {
  console.log("Hello " + name);
})("Vansh");

// Output

// Hello Vansh
// Arrow Function IIFE
(() => {
  console.log("Arrow IIFE");
})();
// Why Use IIFE?

// Avoid global variable pollution

// Create private scope

// Execute setup code once

// Real-World Use Case
const counter = (function () {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    }
  };
})();

counter.increment();
counter.increment();

// Output

// 1
// 2
// Important Note

// IIFE was widely used before ES6

// Today replaced mostly by modules
