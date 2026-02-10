// NOTE: Every JS object has an internal prototype (accessible via `__proto__`).
// For primitives, JS boxes them into wrapper objects when you access properties.
let fname="Vansh"; // string primitive -> boxed as String object for property access
let x=99;          // number primitive -> boxed as Number object for property access

console.log(fname.__proto__);
console.log(x.__proto__);

// p3 ka proto link kr diya p2 ko ;
// p2 ka proto link kr diya p1 ko;
// p1 by default proto link hai Object ko
// and object ka __proto__ hota hai null  ;
// vo tab tak jaate rehga jab tak usse null nhi mil jata
// Also known as prototypal chain or prototype chain
// English note: property/method lookup walks up the chain until found or null.
let p1={
    name:"Vansh",
    foo:function(){
        console.log(this.name); // `this` is the object that called foo()
    }
}
let p2={
    name:"Mohan",
    __proto__:p1 // p2 inherits from p1
    
}
p2.foo()    // can access p1 method ie foo()

let p3={
    name:"Rohit",
    __proto__:p2        // can access p2 method (and p1 via chain)
}
p3.foo()



// Difference: `__proto__` vs `prototype`
// `__proto__` is on *instances* and points to their internal [[Prototype]] (parent).
// `prototype` is on *constructor functions* and becomes the [[Prototype]] of new instances.
// Example: obj.__proto__ === Constructor.prototype  (usually true for normal instances)

