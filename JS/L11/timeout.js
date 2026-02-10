function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
        console.log(i);
        },1000);
    }
}
x();

//Closures keep references, and var creates one shared variable so  it print 6 6 6 6 6
//b/c pf closure ie func along with lexical scope
// ✅ Closure remembers the variable, not its value
// and points to same copy of i
    // MAIN REASON:::
// ✅ Closure remembers the variable, not its value




function y(){
    for(let i=1;i<=5;i++){       //since let is block scope so it will print 1 2 3 4 5
        setTimeout(function(){
        console.log(i);
        },1000);
    }
}
y();

function z() {
  for (var i = 1; i <= 5; i++) {
    function myfunc(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    myfunc(i);
  }
}
z();
