// A closure is a function remembering variables from its lexical scope, 
// even after that scope has finished executing.

let x=100;
function foo(){
    let y=200;
    function bar() {
        console.log(x, y);
    }
    bar()
}
foo()


//example2
function outer() {
  let count = 0;

 function inner() {
    count++;
    return count;
  }
  inner()   
  //Why this works ?
    // inner keeps reference to count
    // Scope is preserved in memory
}

const counter = outer();
counter(); // 1
counter(); // 2


// Hoisting & TDZ
console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;

// 👉 let & const are hoisted but in Temporal Dead Zone



for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// 4 4 4
