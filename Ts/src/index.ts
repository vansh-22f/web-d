function greet(person:string):string{
  return `Hello ${person}`;
}

const username :string="Vansh";
console.log(greet(username));



// Type Inference (Important)
// You don’t always need to write type:

let city = "Delhi"; 
// TypeScript automatically understands it's a string.This is called Type Inference.

// TypeScript infers 'string'
let username1 = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
return a + b;
}

// Implicit Type Mismatch

// let score1 = 100;    // TypeScript infers 'number'
// score1 = "high";     // Error: Type 'string' is not assignable to type 'number'