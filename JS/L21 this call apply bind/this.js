// Rule 1: Global
console.log(this); // window (browser)



// Rule 3: Method call
const obj = {
  name: "JS",
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // JS

//Rule4 : Constructor
function User(name) {
  this.name = name;
}
const u = new User("Vansh");


//this does npt work with arrow functions 

const obj1 = {
  name: "JS",
  arrow: () => {
    console.log(this.name);
  },
  normal() {
    console.log(this.name);
  }
};

obj1.arrow();  // undefined
obj1.normal(); // JS


const animal = {
  eats: true
};

const dog = {
  barks: true
};

dog.__proto__ = animal;
// Object.__proto__=animal

console.log(dog.eats); // true
