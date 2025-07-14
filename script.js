// Dark Mode Toggle
const theme = document.getElementById('theme');
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  theme.classList.toggle('dark');
  darkToggle.textContent = theme.classList.contains('dark') ? '☀️' : '🌙';
});

// Cart Functionality
const cartToggle = document.getElementById('cart-toggle');
const cartPopup = document.getElementById('cart-popup');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const nameInput = document.getElementById('customer-name');
const emailInput = document.getElementById('customer-email');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.qty * item.price;
    const div = document.createElement('div');
    div.innerHTML = `${item.name} x${item.qty} - GH₵${item.qty * item.price}`;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = 'Total: GH₵ ' + total.toFixed(2);
}

function addToCart(name, price) {
  const product = cart.find(item => item.name === name);
  product ? product.qty++ : cart.push({ name, price, qty: 1 });
  updateCart();
}

cartToggle.addEventListener('click', () => {
  cartPopup.classList.toggle('show');
  renderCart();
});

checkoutBtn.addEventListener('click', () => {
  if (!nameInput.value || !emailInput.value) return alert('Enter name and email');
  let message = `Order from ${nameInput.value} (${emailInput.value}):\n`;
  cart.forEach(item => {
    message += `${item.name} x${item.qty} = GH₵${item.qty * item.price}\n`;
  });
  message += cartTotal.textContent;
  window.location.href = `mailto:hello@thriftvintage.com?subject=New Order&body=${encodeURIComponent(message)}`;
  cart = [];
  updateCart();
  cartPopup.classList.remove('show');
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
  updateCart();
  const reveals = document.querySelectorAll('.scroll-reveal');
  window.addEventListener('scroll', () => {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) el.classList.add('visible');
    });
  });
});