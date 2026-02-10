const { startTransition } = require("react");

console.log("start");

setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => console.log("promise"));

console.log("end");



//output->
    // start
    // end 
    // promise
    // timeout