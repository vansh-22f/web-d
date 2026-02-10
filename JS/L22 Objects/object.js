// object literal
const user1 = {
  name: "Vansh",
  greet() {
    console.log("Hi");
  }
};

// object create and prototypal inheritance
const parent = {
  greet() {
    console.log("Hello");
  }
};
// creates parent object with greet() method

const child = Object.create(parent);

// Creates a new object with parent as its prototype.
//  The child inherits from parent.

child.name = "Vansh";       //Adds a name property to the child object.
console.log(child.name);        // "Vansh" (own property)
child.greet();                  // "Hello" (inherited from parent)
console.log(child.hasOwnProperty('greet')); // false
console.log(child.hasOwnProperty('name')); // true



// ES6 Classes (syntax sugar)
class User {
  constructor(name) {
    this.name = name;
  }
}

const user = new User("Vansh");