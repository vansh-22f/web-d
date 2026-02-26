function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data Loaded"), 1000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);  //Data Loaded
}

getData();


async function greet() {
  return "Hello Async";
}

greet().then(msg => console.log(msg));
//Hello Async


//error handling with try catch
async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();


async function example() {
  try {
    await Promise.reject("Failed");
  } catch (err) {
    console.log(err);
  }
}

example();


async function runParallel() {
  const p1 = fetchData();
  const p2 = fetchData();

  const results = await 
    Promise.all([p1, p2]);
  console.log(results);
}