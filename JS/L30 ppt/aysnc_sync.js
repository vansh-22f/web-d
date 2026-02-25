//sync
console.log("Start");
function task() {
  console.log("Task running");
}
task();
console.log("End");

// Start
// End
// Async Task


//async example
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");