const promiseOne=new Promise(function(resolve,reject){

    //do an async task
    //db calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is complete');
        resolve();
    },1000)
}).then(function(){
    console.log("Promise Consumed 2")
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 3 is complete');
        resolve({
            username:"vansh",
            age:"23"
        });
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 4 is complete');
        let error=false;
        if(!error){
            resolve({
                username:"vansh",
                age:"23"
            });
        }
        else{
            reject("Error: Something went wrong");
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The Promise is resolved or rejected"))



const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 5 is complete');
        let error=true;
        if(!error){
            resolve({
                username:"vansh",
                age:"23"
            });
        }
        else{
            reject("Error: Something went wrong");
        }
    },1000)
})

async function consumePromise(){
    try {
        const response=await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromise();

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log("Promise rejected", err);
    })
