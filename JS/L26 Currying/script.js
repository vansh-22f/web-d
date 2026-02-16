// function greet(greettype,name){
//     console.log(`${greettype} ${name}`)
// }

function greet(greettype){
    return function(name){
        console.log(`${greettype} ${name}`)
    }
}

let sayhello=greet("Hello")
sayhello("John") // Hello John
sayhello("Vansh")//hello vansh

let sayhi=greet("Hi")
sayhi("John") // Hi John
sayhi("Vansh")//Hi vansh

// we can also do it in one line
greet("Hey")("John") // Hey John
greet("Hey")("Vansh") // Hey Vansh



// Why this is useful in your example:

// Reuse: define a **“pre-configured” greeter once (sayhello, sayhi).
// Separation of concerns: first decide greeting style, later pass names.
// Cleaner APIs when you often reuse the first argument.