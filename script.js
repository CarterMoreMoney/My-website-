// Toggle Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    document.querySelector(".nav-links").classList.remove("show");
  });
});

// Form Handler


// Dark Mode Toggle
const darkToggle = document.getElementById("dark-toggle");
const body = document.getElementById("theme-toggle");

// Load saved preference
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  darkToggle.textContent = "☀️";
}

darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    darkToggle.textContent = "☀️";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    darkToggle.textContent = "🌙";
  }
});
// Toggle Mobile Nav
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
// Toggle Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
