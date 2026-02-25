// Slide: Event Bubbling, Capturing & Delegation
// Event Flow in JavaScript

// Events move in three phases:

// Capturing (top â†’ target)

// Target

// Bubbling (target â†’ top)

// Event Bubbling (Default)
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

// ðŸ‘‰ Clicking child logs:

// Child clicked
// Parent clicked
// Event Capturing
parent.addEventListener("click", () => {
  console.log("Parent capturing");
}, true);

// ðŸ‘‰ true enables capturing phase.

// Event Delegation (ðŸ”¥ Very Important)
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// âœ… Handles dynamic elements
// âœ… Improves performance

// Prevent Default Behavior
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
// Stop Event Propagation
button.addEventListener("click", (e) => {
  e.stopPropagation();
});
