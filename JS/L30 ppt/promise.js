// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Data received");
  } else {
    reject("Error occurred");
  }
});

//consuming a promise 
myPromise
  .then(result => {
    console.log(result);//Data received
  })
  .catch(error => {
    console.log(error);
  });

fetchData()
  .then(data => processData(data))
  .then(result => console.log(result))
  .catch(err => console.log(err));


  
//   Why Promises?

// ✔ Avoid callback hell
// ✔ Better readability
// ✔ Easier error handling