function x(z){
    console.log("x");
    z()
}

function y(){
    console.log("y")
}


x(y)