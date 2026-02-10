// Callback Hell (🔥 VERY IMPORTANT)
// The problem

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 1000);
  }, 1000);
}, 1000);

// Issues:::
    // Pyramid of doom
    // Hard error handling
    // Hard debugging
    // Tight coupling

// 👉 This directly led to Promises