"use strict";
//generics
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
wrapInArray(5); //[5]
wrapInArray("hello"); //["hello"]
function pair(a, b) {
    return [a, b];
}
pair(1, "one"); //[1,"one"]
pair("hello", true); //["hello", true]
const numberBox = {
    content: 5
};
const stringBox = {
    content: "hello"
};
//# sourceMappingURL=generics.js.map