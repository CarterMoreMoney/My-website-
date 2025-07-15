const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll reveal animations (Optional for smooth entrance)
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.scroll-reveal');
  const reveal = () => {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});