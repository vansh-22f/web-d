//Why async/await exists

    // Promises are powerful but hard to read
    // async/await = syntax sugar
    // Makes async code look synchronous



async function foo(){
    return 10
    // console.log("hello")
}    
foo().then(console.log)
// async always returns a promise



//error handling with async await

async function getUser() {
  try {
    const res = await fetch("/user");
    if (!res.ok) throw new Error("Failed");
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

// console.log(getUser)


//doubt
async function test() {
  console.log(1);
  await Promise.resolve();      // await pushes the rest of code into microtask as it is same as promise with resolve and then....
  console.log(2);
}

console.log(0);
test();
console.log(3);
    
// output-> 0 1 3 2