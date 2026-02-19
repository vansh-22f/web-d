"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//union type allows us to assign multiple types to a variable. 
// It is denoted by the pipe operator (|) and 
// it can be used to specify that a variable can be of multiple types. 
// It is useful when we want to allow a variable to have multiple types of values.
let subs = '100';
let apireq = "POST"; //literal type
// Avoid any When Possible  Avoid any When Possible  Avoid any When Possible  Avoid any When Possible
//any -> It essentially tells the compiler to skip type checking for a particular variable.
// it can be of any type and we can assign any type of value to it but it is not recommended to use it as it defeats the purpose of using typescript
// let currentOrder;   // here we have any type and to avoid that we can assign any type of value to it
let currentOrder;
const orders = ["123", "345", "567"];
for (let order of orders) {
    if (order === "345") {
        currentOrder = order;
        break;
    }
    else {
        currentOrder = "000";
    }
}
console.log(currentOrder);
//# sourceMappingURL=unionAndany.js.map