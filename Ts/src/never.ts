//never
// The never type represents values that will never occur.
//  It is used in cases where a function never returns or throws an error.

let value: never;  // Error: Type 'boolean' is not assignable to type 'never'

function throwError(message: string): never {
  throw new Error(message);
}
// The function throwError will never return a value, it will always throw an error.




// Optional parameter (implicitly `string | undefined`)
function greet(name?:string) {
  return `Hello, ${name || 'stranger'}`;
}

// Optional property in an interface
interface User {
  name: string;
  age?: number; // Same as `number | undefined` 
  }


//type
//is used to define a custom type that can be used to create variables, functions, or interfaces.
type Role="user" | "admin";
function assignRole(role:Role):void{
    if(role==="admin"){
        console.log("Admin role assigned");
        return 
    }
    else if(role==="user"){
        console.log("User role assigned");
        return
    }
    role;   // This line will never be reached, and TypeScript will recognize that the function has a return type of void.
}
