// Event Handler (Basic Way)
const btn = document.querySelector("#btn");

btn.onclick = function () {
  alert("Button Clicked");
};



// addEventListener() (Best Practice)
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("Clicked using addEventListener");
});