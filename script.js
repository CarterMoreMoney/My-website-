// Toggle hamburger menu on mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional: Scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.scroll-reveal');
  
  const reveal = () => {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal(); // Trigger on load
});
