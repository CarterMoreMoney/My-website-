// Dark Mode Default with Toggle
const body = document.getElementById('theme');
const darkToggle = document.getElementById('dark-toggle');

darkToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    darkToggle.textContent = '🌙';
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    darkToggle.textContent = '☀️';
  }
});

// Cart System
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
  cart.forEach((item) => {
    total += item.qty * item.price;
    const div = document.createElement('div');
    div.innerHTML = `${item.name} x${item.qty} = GH₵${item.qty * item.price}`;
    cartItems.appendChild(div);
  });
  cartTotal.textContent = 'Total: GH₵ ' + total.toFixed(2);
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

cartToggle.addEventListener('click', () => {
  cartPopup.classList.toggle('show');
  renderCart();
});

checkoutBtn.addEventListener('click', () => {
  if (!nameInput.value || !emailInput.value) {
    alert('Please fill in name and email!');
    return;
  }
  let message = `Order from ${nameInput.value} (${emailInput.value}):\n`;
  cart.forEach(item => {
    message += `${item.name} x${item.qty} = GH₵${item.qty * item.price}\n`;
  });
  message += cartTotal.textContent;
  window.location.href = `mailto:hello@thriftvintage.com?subject=New Order&body=${encodeURIComponent(message)}`;
  cart = [];
  updateCart();
  renderCart();
  cartPopup.classList.remove('show');
});

// Scroll Reveal Animations
document.addEventListener('DOMContentLoaded', () => {
  updateCart();
  const reveals = document.querySelectorAll('.scroll-reveal');
  const reveal = () => {
    reveals.forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});
