// Slide: Array Methods (map, filter, reduce)


// map() – Transform Each Element
// Creates a new array by applying a function to every element.

let nums = [1, 2, 3, 4];

let squares = nums.map(n => n * n);
console.log(squares);   //[1, 4, 9, 16]

// 👉 Use map() when you want to change values.



// filter() – Select Elements Based on Condition
// Returns a new array with elements that pass a condition.

let nums1 = [10, 25, 30, 15];

let result = nums1.filter(n => n > 20);
console.log(result);//[25, 30]

// 👉 Use filter() when you want to remove unwanted elements.





// reduce() – Reduce Array to a Single Value
// Used to accumulate values (sum, product, object, etc.).

let nums3 = [1, 2, 3, 4];

let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);//10

//acc → accumulator
//curr → current value

// Quick Comparison
// map() → transforms elements         
//  filter() → selects elements     
// reduce() → combines into one value

// Real-World Example
let prices = [100, 200, 300];

// Apply 10% discount and get total
let total = prices
  .map(p => p * 0.9)
  .reduce((a, b) => a + b, 0);

console.log(total);