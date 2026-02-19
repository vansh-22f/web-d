// method1;    
// function add(a,b){
//    return a+b;
// }
// add(2,5)

// function sub(a,b){
//     return a-b;
// }





// method2;
// module.exports-> this is an object which is used to export the functions or variables from a module. 
// we can export multiple functions or variables using this object. 
// we can also export a single function or variable using this object.
module.exports={    // this is default export
    add,
    sub,
};

//this is done explicitly by node js
// exports.add=(a,b)=>a+b;
// exports.sub=(a,b)=>a-b;