const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const searchBtn = document.getElementById('search-btn');
const userBtn = document.getElementById('user-btn');
const searchBar = document.getElementById('search-bar');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

searchBtn.addEventListener('click', () => {
  searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
});

userBtn.addEventListener('click', () => {
  alert('👤 Account feature coming soon!');
});

// PRODUCT SEARCH FUNCTIONALITY
const searchBarInput = document.querySelector('#search-bar input');
const productCards = document.querySelectorAll('.product-card');

searchBarInput.addEventListener('input', () => {
  const query = searchBarInput.value.trim().toLowerCase();
  productCards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    card.style.display = name.includes(query) ? 'flex' : 'none';
  });
});
