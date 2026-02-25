// 📄 Slide: Functions in JavaScript (Basics)
// What is a Function?

// A function is a reusable block of code designed to perform a specific task.

// Functions help in:

// Code reusability

// Better readability

// Modular programming

// Function Declaration
function greet() {
  console.log("Hello, JavaScript!");
}

greet();

// Output
// Hello, JavaScript!


// Function with Parameters
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Output
// 5



// Parameters vs Arguments
function multiply(x, y) { // parameters
  return x * y;
}
multiply(4, 5); // arguments


// Why Use Functions?
// Avoid code duplication
// Easy maintenance
// Logical separation of tasks





// 📄 Slide: Function Expression & Arrow Functions
// Function Expression

// A function stored in a variable.

const greet = function () {
  console.log("Hello from function expression");
};

greet();

// Output

// Hello from function expression

// 👉 Function expressions are not hoisted like function declarations.

// Anonymous Function

// A function without a name, often used as a value.

setTimeout(function () {
  console.log("Executed after 1 second");
}, 1000);
// Arrow Function (ES6)

// Shorter syntax and cleaner code.

const add = (a, b) => {
  return a + b;
};

console.log(add(3, 4));

// Arrow Function (Implicit Return)
const square = n => n * n;

console.log(square(5));

// Output

// 25


