//promise.all---> if multiple parallell api calls are made , we use prmise.all
// promise.all takes an array of promises and
//returns a single promise that resolves when all of the promises in the array have resolved,
//or rejects if any of the promises in the array reject.

Promise.all([p1,p2,p3])
// waits for all of them if all resolve but
// if any one of them reject it will reject right away and ignore the rest of the promises in the array.

// Case1
// IF :::: p1-> 3s ,p2->1s ,p3->2s
// output-> after ***3s -> [p1,p2,p3]---> [data1,data2,data3] and wait for all of them to finish

// Case2
// if any of the promises reject, the entire Promise.all will reject with that reason.
// for example, if p2 rejects after 1s, the output will be:
// after 1s -> Promise.all will reject with the reason from p2, 
// and the other promises (p1 and p3) will be ignored.


// Case2
// New condition : p1 3s , p2 1s (rejects) , p3 2s 
// as soon any of the promises reject, the entire Promise.all will reject with that reason.
// after **1s -> Promise.all will reject with the reason from p2, (right away throw the error)
// and the other promises (p1 and p3) will be **ignored.

// Case3
// p1 3s , p2 1s and p3 2s but p3 rejects after 2s
// after 2s -> Promise.all will reject with the reason from p3, (right away throw the error)
// even if one fails the entire thing fails






// 2.
Promise.allSettled([p1,p2,p3])
// even if one promise rejects, 
// Promise.allSettled will wait for all promises to settle (either resolve or reject) 
// and then return an array of objects indicating the status and value/reason of each promise.

// Case1
// if p1 3s and p2 2s and p3 2s and all resolve
// after 3s -> Promise.allSettled will resolve with an array of objects indicating the status and value of each promise:
// [
//   { status: 'fulfilled', value: data1 },
//   { status: 'fulfilled', value: data2 },
//   { status: 'fulfilled', value: data3 }
// ]

// case 2
// if p1 3s and p2 1s and p3 2s but p2 rejects after 1s
// wait for all promises to settle (either resolve or reject)
// after **3s -> Promise.allSettled will resolve with an array of objects indicating the status and value/reason of each promise:
// [
//   { status: 'fulfilled', value: data1 },
//   { status: 'rejected', reason: error2 },
//   { status: 'fulfilled', value: data3 }
// ]






// 3.
Promise.race([p1,p2,p3])
// the person who finishes first wins 
// and race will give you result of fisrt whether is rejected or resolved Promise

// Case1
// EG1
// if p1 3s and p2 1s and p3 2s and all resolve
// after 1s -> Promise.race will resolve with the value of p2, which is data2, because it finishes first.
// op-> (val2)

// Eg2
// if p1 3s p2 5s and p3 2s and all resolve
// after 2s -> Promise.race will resolve with the value of p3, which is data3, because it finishes first.
// op-> (val3)

// Case 2:
//if p1 3s p2 5s and p3 2s but p3 rejects after 2s
// after 2s -> Promise.race will reject with the reason from p3, because it finishes first.
// op-> (error3) an return result of first one to settle (resolve or reject) among the promises in the array.






// 4.
promise.any([p1,p2,p3])
// Promise.any takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array resolve,
// or rejects if all of the promises in the array reject.
// wait for first sucess or resolved promise

// Case1
// if p1 3s and p2 1s and p3 2s and all resolve
// after 1s -> Promise.any will resolve with the value of p2, which is data2, because it resolves first.
// op-> (val2)

// Case 2:
// if p1 3s p2 1s and p3 2s but p2 rejects after 1s 
// and p1 and p3 resolve after 3s and 2s respectively
// after 2s -> Promise.any will resolve with the value of p3, which is data3, because it resolves first among the remaining promises.
// op-> (val3)
// (so when first sucees happens it will ignore the rejected one and wait for the next one to resolve)


// Case3
// if p1 3s and p2 1s and p3 2s, but all reject
// after 3s -> Promise.any will reject with an AggregateError containing the reasons from all the promises, because all of them reject.
// op-> (AggregateError: All promises were rejected) with an array of errors from all the promises.
// it will be array of all the errors from all the promises.   
// op->[error1, error2, error3]



