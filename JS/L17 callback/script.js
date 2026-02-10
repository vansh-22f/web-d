function greet(name, onGreeted) {
  console.log(`Hello, ${name}`);
  onGreeted();
}

function sayWelcome() {
  console.log("Welcome!");
}

greet("Vansh", sayWelcome);


//a function passed as an argument to another func to be executed later is known as callback

// Why callbacks exist ??
    // JavaScript is single-threaded
    // Long tasks must not block execution
    // Callbacks allow deferred execution


function greet1(name , function2){
    console.log( `Hello ${name}`);
    function2();
}

function bye(){
    console.log("bye")
}

greet1("Vansh", bye)


function calculate(a,b, callback){
    return callback(a,b);
}
function add(a,b){
    return a+b;
}
console.log(calculate(2,4, add))



// Callback Hell (🔥 VERY IMPORTANT)
// The problem

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 1000);
  }, 1000);
}, 1000);

// Issues:::
    // Pyramid of doom
    // Hard error handling
    // Hard debugging
    // Tight coupling

// 👉 This directly led to Promises