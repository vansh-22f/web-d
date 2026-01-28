"use strict"  // treat all js code as newer version. //do not need it explicitly

// number
// bigInt
// null -->representation of empty value/ standlone value
// string
// boolean
// undefined-->no value assigned till now
//symbol-->unique value

//object
console.log(typeof 123) //number
console.log(typeof 123n) //bigInt
console.log(typeof null) //object (bug//khaami)
console.log(typeof "hello") //string
console.log(typeof true) //boolean
console.log(typeof undefined) //undefined


let name="vansh"
console.log(typeof name) //string
firstname=Number(name) //type conversion
console.log(firstname) //NaN

