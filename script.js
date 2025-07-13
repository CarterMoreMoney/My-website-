// Dark Mode Toggle & Save
const toggleDark = document.getElementById('dark-toggle');
const body = document.getElementById('theme');
toggleDark.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleDark.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
  localStorage.setItem('dark', body.classList.contains('dark') ? '1' : '0');
});
if (localStorage.getItem('dark')==='1') {
  body.classList.add('dark');
  toggleDark.textContent = '☀️';
}

// Live Clock
function updateTime() {
  const tm = new Date();
  const hh = String(tm.getHours()).padStart(2,'0');
  const mm = String(tm.getMinutes()).padStart(2,'0');
  document.getElementById('time').textContent = `${hh}:${mm}`;
}
updateTime();
setInterval(updateTime,60000);

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});