"use strict";
//never
// The never type represents values that will never occur.
//  It is used in cases where a function never returns or throws an error.
Object.defineProperty(exports, "__esModule", { value: true });
let value; // Error: Type 'boolean' is not assignable to type 'never'
function throwError(message) {
    throw new Error(message);
}
// The function throwError will never return a value, it will always throw an error.
// Optional parameter (implicitly `string | undefined`)
function greet(name) {
    return `Hello, ${name || 'stranger'}`;
}
function assignRole(role) {
    if (role === "admin") {
        console.log("Admin role assigned");
        return;
    }
    else if (role === "user") {
        console.log("User role assigned");
        return;
    }
    role; // This line will never be reached, and TypeScript will recognize that the function has a return type of void.
}
//# sourceMappingURL=never.js.map