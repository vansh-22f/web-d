let user = {
  name: "Vansh",
  age: 22,
  isDeveloper: true
};
console.log(user.name); //Vansh    
console.log(user["age"]);//22  


// Adding & Updating Properties
user.city = "Delhi";
user.age = 23;
console.log(user);
//{ name: 'Vansh', age: 23, isDeveloper: true, city: 'Delhi' }


// Deleting Properties
delete user.isDeveloper;
console.log(user);
//{ name: 'Vansh', age: 23, city: 'Delhi' }