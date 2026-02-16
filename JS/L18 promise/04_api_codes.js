const p1= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p1 resolved")
    }, 3000)
})

const p2= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p2 resolved")
    }, 1000)
   
    // setTimeout(() => {
    //     reject("p2 rejected")
    // }, 1000)
})

const p3= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p3 resolved")
    }, 2000)
})

// Promise.all([p1,p2,p3])
// .then(res=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })
// in all it will wait for all of them if all resolve but if any one of them reject it will reject right away and ignore the rest of the promises in the array.



// Promise.allSettled([p1,p2,p3])
// .then(res=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })
// in settled it will wait for all the promises to settle and give the result in array of objects with status and value/reason



// Promise.race([p1,p2,p3])
// .then(res=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.error(err)
// })
// the first settled promise irrespective of resolved or rejected will give the result in race


Promise.any([p1,p2,p3])
.then(res=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
    console.log(err.errors) // gives array of all the errors from the promises in the array if all of them reject
})
// the first resolved promise will give the result in any 
// and if all of them reject it will give AggregateError after all the time of promises in the array.
