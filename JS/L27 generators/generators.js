// A Generator is a special function that:
// Can pause execution         // Can resume later         // Produces an iterator automatically
// function*


//eg1
function* numbers() {
  yield 1;
  yield 2;
  yield 3; 
}
//each yield produces a value and 
//pauses the function until the next() method is called on the generator object.

const gen = numbers();

console.log(gen.next());
// { value: 1, done: false }

console.log(gen.next());
// { value: 2, done: false }

console.log(gen.next());
// { value: 3, done: false }

console.log(gen.next());
// { value: undefined, done: true }



// eg2  //infinite generator
function* counter() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const count = counter();

console.log(count.next().value); // 0
console.log(count.next().value);//1
console.log(count.next().value);//2    // goes on indefinitely until we stop it

// console.log(count.throw(new Error("Something went wrong!")));
// This will throw an error inside the generator, which can be caught and handled if needed.

console.log(count.next().value); // 3 (generator continues after the error if not handled)

console.log(count.return("Done!"));
// This will stop the generator and set done to true. 
// The value "Done!" will be returned as the final value.

console.log(count.next().value); // undefined (generator is done)


// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let generator = generateSequence();

// for(let value of generator) {
//   console.log(value); // 1, then 2 and 3 
// }


// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let generator = generateSequence();

// for(let value of generator) {
//   console.log(value); // 1, then 2 and not 3 because return is not included in iteration
// }