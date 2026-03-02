// Slide: Event Bubbling, Capturing & Delegation
// Event Flow in JavaScript

// Events move in three phases:

// Capturing (top â†’ target)

// Target

// Bubbling (target â†’ top)

// Event Bubbling (Default)
document.getElementById("child")
.addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent")
.addEventListener("click", () => {
  console.log("Parent clicked");
});

parent.addEventListener("click", () => {
  console.log("Parent capturing");
}, true);
// true enables capturing phase.
// Clicking child logs:
// Parent capturing
// Child clicked

// Event Delegation (Very Important)
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// Handles dynamic elements
// Improves performance

// Prevent Default Behavior
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// Stop Event Propagation
button.addEventListener("click", (e) => {
  e.stopPropagation();
});
