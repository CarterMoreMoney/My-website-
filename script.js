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
  alert('👤 User account login/signup coming soon!');
});
