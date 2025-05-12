document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("box");
  const button = document.getElementById("animateBtn");
  const title = document.getElementById("title");

  // Store data in localStorage
  localStorage.setItem("visited", "true");

  // Retrieve and use it
  if (localStorage.getItem("visited") === "true") {
    title.textContent = "Welcome Back, Baker!";
  }

  // Trigger animation on button click
  button.addEventListener("click", function () {
    box.classList.remove("animate"); // reset if re-clicked
    void box.offsetWidth; // trick to re-trigger animation
    box.classList.add("animate");
  });
});
