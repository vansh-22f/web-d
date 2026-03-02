// Select by ID
const title = document.getElementById("heading");
// Select first matching element
const box = document.querySelector(".box");
// Select all matching elements
const items = document.querySelectorAll(".item");

// Changing Styles
const box2 = document.querySelector(".box");
box2.style.backgroundColor = "lightblue";
box2.style.padding = "20px";
box2.style.borderRadius = "8px";


// Creating New Elements
const para = document.createElement("p");
para.textContent = "This paragraph is created using JavaScript";
// Adding Elements to DOM
const container = document.getElementById("container");
container.appendChild(para);


// Removing Elements
para.remove();
// Replacing Content
container.innerHTML = "<h2>Content Replaced</h2>";

// âš ï¸ innerHTML replaces everything inside the element.

// Common DOM Methods

// createElement()

// appendChild()

// remove()

// classList.add()

// classList.remove()

// Q: Difference between innerHTML and textContent?
// A: innerHTML parses HTML, textContent inserts plain text and is safer.
// in JavaScript
// What is DOM Traversing?

// DOM traversing means moving through the DOM tree to access parent, child, or sibling elements.

// Parent Element
const child = document.querySelector(".item");
const parent = child.parentElement;
console.log(parent);// <ul class="list">...</ul>
// Child Elements
const list = document.querySelector("ul");
console.log(list.children);      // HTMLCollection
console.log(list.firstElementChild);// <li class="item">Item 1</li>
console.log(list.lastElementChild);// <li class="item">Item 3</li>
