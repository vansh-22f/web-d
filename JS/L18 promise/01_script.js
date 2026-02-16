// A Promise represents a value that will be available later. 
// Eventual completion of an asynchronous operation.
// Promises -> resolve or rejected

//works with aync await

//fetch() we have  url in this to get response from 

// promises use microtask queue ie after call stack and before setTimeout or events(macrotask queue)



const promise = new Promise((resolve, reject) => {
  // The executor runs immediately.
  setTimeout(() => {
    resolve("Success!");
    reject("Error!");   // calls firts one only and ignore the rest
  }, 1000);
});

//consuming a promise
promise
  .then(result => {
    console.log(result);
    return result + " 🎉";
  })
  .then(newResult => {
    console.log(newResult);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Always runs");
  });

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Success 2!");
  }, 2000);
});

// console.log("promise:", promise); // pending at this moment

promise2
.then((value) => console.log("resolved:", value));


//promise chaining
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});


//promise chaining --> returning another promise under 'then'
promise3
  .then((value) => {
    console.log("step 1:", value); // 5
    return value * 2;              // passes 10 to next then
  })
  .then((value) => {
    console.log("step 2:", value); // 10
    return new Promise((resolve) => {
      setTimeout(() => resolve(value + 3), 500);  //Because it returned a promise, the chain waits for it.
    });
  })
  .then((value) => {
    console.log("step 3:", value); // 13
  })
  .catch((error) => {
    console.log("error:", error);
  });
