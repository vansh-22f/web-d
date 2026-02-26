const user = {
  name: "Vansh",
  greet() {
    console.log(this.name);
  }
};

user.greet();//Vansh

const user2 = {
  name: "Vansh",
  greet: () => {
    console.log(this.name);
  }
};

user2.greet();//undefined


function greet(city) {
  console.log(this.name+" from "+city);
}
const user3 = { name: "Vansh" };

// bind
const greetUser = greet.bind(user3);
greetUser("Chennai");
//Vansh from Chennai



greet.call(user3, "Delhi");
//Vansh from Delhi

greet.apply(user3, ["Mumbai"]);
//Vansh from Mumbai