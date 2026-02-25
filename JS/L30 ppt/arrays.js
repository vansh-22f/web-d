// Creating Arrays
// Using array literal (most common)
let nums = [10, 20, 30, 40];

// Using new keyword
let fruits = new Array("Apple", "Banana", "Mango");

// Accessing Elements
let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red
console.log(colors[2]); // Blue

// Array Length
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);//5

// Modifying Array Elements
let scores = [50, 60, 70];
scores[1] = 65;

console.log(scores);//[50, 65, 70]


// Arrays Can Store Any Data Type
let mixed = [1, "JS", true, null, { lang: "JavaScript" }];

console.log(mixed);// [1, "JS", true, null, { lang: "JavaScript" }]




// push() – Add at End
let arr5 = [1, 2, 3];

arr5.push(4);
console.log(arr5);//[1, 2, 3, 4]



// pop() – Remove from End
let arr1 = [1, 2, 3];

arr1.pop();
console.log(arr1);   //[1, 2]


// unshift() – Add at Beginning
let arr2 = [2, 3];

arr2.unshift(1);
console.log(arr2);//[1, 2, 3]


// shift() – Remove from Beginning
let arr3 = [1, 2, 3];

arr3.shift();
console.log(arr3);   // [2, 3]



//
// Important Comparison

// push / pop → end of array

// shift / unshift → start of array


// slice() – Does NOT Modify Original Array
let arr6 = [10, 20, 30, 40, 50];
let part = arr6.slice(1, 4);
console.log(part);//20, 30, 40
console.log(arr6);//10, 20, 30, 40, 50


// splice() – Modifies Original Array
let arr7 = [10, 20, 30, 40];

arr7.splice(1, 2);// start at index 1, remove 2 elements

console.log(arr7);//[10, 40]

//concat() – Combine Arrays
let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);
console.log(result); //[1, 2, 3, 4]