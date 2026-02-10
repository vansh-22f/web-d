//\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\

// function add(a,b,c){
//     return a+b+c;
// }

// console.log(add(2,3,4))



function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(2)(3)(4))


// normal function
function sendEmail(to, subject, body) {
  return `To: ${to}\nSubject: ${subject}\nBody: ${body}`;
}

// curried version
function sendEmailCurried(to) {
  return function (subject) {
    return function (body) {
      return `To: ${to}\nSubject: ${subject}\nBody: ${body}`;
    };
  };
}
console.log(sendEmail("vansh@gmail.com","Notice","We will see it "));

// usage
const draft = sendEmailCurried("alice@example.com")
const obh=draft("Hello");
console.log(obh("Let’s meet at 5 PM."));

