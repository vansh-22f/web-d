// Using double quotes
let name1 = "Vansh";
// Using single quotes
let name2 = 'ABC';
// Using backticks (template literals)
let name3 = `Hello JS`;



let word = "HELLO";
console.log(typeof word);//string
console.log(word[0]);  // H
console.log(word[4]);  // O
console.log(word.length); // 5

word[0] = "h"; // Strings are immutable
console.log(word); // HELLO



////////
let text = "JavaScript";

console.log(text.toUpperCase()); //JAVASCRIPT
console.log(text.toLowerCase()); //javascript


let str = "FrontendDeveloper";
console.log(str.slice(0, 8));       // Frontend
console.log(str.substring(8, 17));  // Developer


let msg = "I love Java";
console.log(msg.replace("Java", "JavaScript")); // I love JavaScript


let sentence = "Learn JavaScript Fast";
let words = sentence.split(" ");// ["Learn", "JavaScript", "Fast"]
console.log(words);
let joined = words.join("-");
console.log(joined);// Learn-JavaScript-Fast