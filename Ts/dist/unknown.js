"use strict";
//unknown
// it is a type-safe counterpart of any.
//  It means that you can assign any value to unknown, 
// but you cannot access any properties or call it as a function without first asserting its type.
Object.defineProperty(exports, "__esModule", { value: true });
let value;
value = 10;
value = "hello";
value = true;
//no error but we cannot access any properties or call it as a function without first asserting its type
// value.toUpperCase(); // ❌ Error
// To use the value, we need to assert its type first
if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ Works fine
}
else {
    console.log("Value is not a string");
}
//type narrowing 
// **is a technique used by TypeScript to narrow down the type of a variable based on certain conditions.
//above code is an example of type narrowing 
// where we check if the value is of type string before calling the toUpperCase() method on it.
//# sourceMappingURL=unknown.js.map