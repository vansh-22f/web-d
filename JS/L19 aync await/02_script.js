// async function always return a promise

// const p=new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Promise resolved")
//     }, 2000);
// });

// async function getdata(){
//     return p;

// }

// const dataPromise=getdata()
// // console.log(dataPromise) // pending promise

// dataPromise.then(res=>{
//     console.log(res) // hello
// });

// 2.
// aync await are used to handle promises
// await is a keyworkd that can be used inside an async function
// to pause the execution of the function until the promise is resolved or rejected.
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 10000);
});

async function handlePromise() {
  // js engine waits for that promise to resolve and will move to line 37 when promise is resolved
  const val = await p; // wait for the promise to resolve and then return the resolved value
  console.log("waiting"); //wait for 10s an d then log the resolved value of promise

  console.log(val);
}
handlePromise();

// function getData(){
//     p.then((res)=>{
//         console.log(res)
//     })
//     console.log("Fetching data...") // this will log first because of async nature of promises and then after 10s it will log the resolved value of promise
// }

// getData()

//fetch

async function handlePromise1() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    const jsonvalue = await data.json(); // this will also return a promise
    console.log(jsonvalue);
  } catch (err) {
    console.error(err);
    // console.log(jsonvalue);
  }
}
handlePromise1();
