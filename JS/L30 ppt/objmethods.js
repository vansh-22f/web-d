let user = {
  name: "Vansh",
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(user.greet());// Hello Vansh

//nested objects
let student = {
  name: "Vansh",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student.marks.math);//90

//spread operator
let obj1 = { a: 1 };
let obj2 = { b: 2 };

let merged = { ...obj1, ...obj2 };
console.log(merged);//{ a: 1, b: 2 }


//Object Utility Methods
let data = { x: 10, y: 20 };

console.log(Object.keys(data));//[ 'x', 'y' ]
console.log(Object.values(data));//[ 10, 20 ]
console.log(Object.entries(data));//[ [ 'x', 10 ], [ 'y', 20 ] ]