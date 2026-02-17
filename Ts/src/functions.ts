function greet(name:string):string{
    return `Hello ${name}`;
}
greet("Vansh")//Hello Vansh




//void function
function print():void{
    console.log("Hello World");
}

function createUser(username:{
    type:string,
    name:string
}):void{
    console.log(`Creating user with username: ${username.name} and type: ${username.type}`);
}