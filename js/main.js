const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.keyCode === 13) {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  }
});
