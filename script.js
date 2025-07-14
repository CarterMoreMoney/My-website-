// Dark Mode Toggle
const themeEl = document.getElementById('theme');
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  themeEl.classList.toggle('dark');
  darkToggle.textContent = themeEl.classList.contains('dark') ? '☀️' : '🌙';
});

// Cart Toggle
const cartToggle = document.getElementById('cart-toggle');
const cartPopup = document.getElementById('cart-popup');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const nameInput = document.getElementById('customer-name');
const emailInput = document.getElementById('customer-email');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  cartCount.textContent = cart.reduce((total, item) => total + item.qty, 0);
}

function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.qty * item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <span>GH₵${(item.qty * item.price).toFixed(2)}</span>
      <span style="color:red;cursor:pointer;" data-index="${index}">✖</span>
    `;
    div.querySelector('span:last-child').addEventListener('click', () => {
      cart.splice(index, 1);
      saveCart();
      renderCart();
    });
    cartItemsContainer.appendChild(div);
  });
  cartTotal.textContent = 'Total: GH₵' + total.toFixed(2);
}

function saveCart() {
  localStorage.setItem('cart', JSON
