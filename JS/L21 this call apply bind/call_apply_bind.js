let userdetails = {
  name: "vansh",
  age: 23,
  city: "Delhi",

  printDetails: function () {
    console.log(this);
  },
};
userdetails.printDetails();

let userdetails2={
    name:"mouse",
    age:32,
    city:"Mumbai"
}
//function borrowing
userdetails.printDetails.call(userdetails2)

let userdetails3 = {
  name: "vansh",
  age: 23,
  city: "Delhi",
};
//if function is outside still we can use it using call
let printDetails3= function (state,country) {
    console.log(this.name+" "+state+" "+country);
  }
  //can also take many parameters
printDetails3.call(userdetails3,"lucknow","India");

let userdetails4={
    name:"mouse",
    age:32,
    city:"Mumbai"
}
//function borrowing
printDetails3.call(userdetails4 ,"Haryana","India")


//Apply--> same as call instead of passing individual items we canpass it as array 
printDetails3.apply(userdetails4,["Gujarat","India"])


//bind 
// Not invoke immediately , make copy and invoke when needed

let newfunction=printDetails3.bind(userdetails4)
newfunction("Rajasthan","India")
// newfunction()