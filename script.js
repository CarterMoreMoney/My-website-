// === Mobile Navigation Toggle ===
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');
hamburger.onclick = () => nav.classList.toggle('show');

// === Search Toggle ===
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');
searchBtn.onclick = () => {
  searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
};

// === Load Main Collections ===
const container = document.getElementById('products-container');
if (container) {
  function loadProducts() {
    products.forEach(p => {
      const a = document.createElement('a');
      a.className = 'product-card';
      a.href = p.link;
      a.setAttribute('data-name', p.title);
      a.innerHTML = `
        <picture>
          <source srcset="images/${p.image}" type="image/webp">
          <img src="images/${p.fallback}" loading="lazy" alt="${p.title}">
        </picture>
        <h3>${p.title}</h3>`;
      container.appendChild(a);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    // Scroll-Reveal Animation
    const cards = document.querySelectorAll('.product-card');
    window.addEventListener('scroll', () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add('visible');
        }
      });
    });
  });
}

// === Slider with Swipe Support ===
(() => {
  const slider = document.getElementById('trend-slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.slide');
  let current = 0;
  let startX = 0;
  let endX = 0;

  function show(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  let auto = setInterval(() => show(current + 1), 4000);

  // Manual buttons
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');

  if (prevBtn && nextBtn) {
    prevBtn.onclick = () => {
      clearInterval(auto);
      show(current - 1);
    };
    nextBtn.onclick = () => {
      clearInterval(auto);
      show(current + 1);
    };
  }

  // Swipe Support
  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      clearInterval(auto);
      diff > 0 ? show(current + 1) : show(current - 1);
    }
  });
})();
