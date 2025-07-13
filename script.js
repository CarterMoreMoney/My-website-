// ---- Dark Mode Toggle ----
const themeEl = document.getElementById('theme');
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  themeEl.classList.toggle('dark');
  darkToggle.textContent = themeEl.classList.contains('dark') ? '☀️' : '🌙';
});

// ---- Mobile Hamburger Menu ----
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
// --- Cart Logic ---
const cartToggle = document.getElementById('cart-toggle');
const cartCount = document.getElementById('cart-count');
const cartPopup = document.getElementById('cart-popup');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalDiv = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const nameInput = document.getElementById('customer-name');
const emailInput = document.getElementById('customer-email');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

updateCartDisplay();

cartToggle.addEventListener('click', () => {
  cartPopup.classList.toggle('show');
  renderCart();
});

function addToCart(name, price, img) {
  const key = name;
  const existing = cart.find(i => i.name === key);
  if (existing) existing.qty += 1;
  else cart.push({ name, price, img, qty: 1 });
  syncCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  syncCart();
  renderCart();
}

function syncCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

function updateCartDisplay() {
  cartCount.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
}

function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach((item, i) => {
    total += item.qty * parseFloat(item.price);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <span class="cart-item-name">${item.name} x${item.qty}</span>
      <span>GH₵${(item.qty * item.price).toFixed(2)}</span>
      <span class="cart-item-remove" data-index="${i}">✖</span>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotalDiv.textContent = 'Total: GH₵' + total.toFixed(2);

  cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(el => {
    el.addEventListener('click', () => removeFromCart(el.dataset.index));
  });
}

checkoutBtn.addEventListener('click', () => {
  if (!nameInput.value || !emailInput.value) {
    alert('Please enter your name and email to complete checkout.');
    return;
  }

  let body = `Order from: ${nameInput.value} (${emailInput.value})%0D%0A`;
  cart.forEach(i => {
    body += `${i.name} x${i.qty} - GH₵${(i.qty * i.price).toFixed(2)}%0D%0A`;
  });

  // Send email
  window.location.href = `mailto:hello@thriftvintage.com?subject=New Order&body=${body}`;

  // Clear cart
  cart = [];
  syncCart();
  renderCart();
  cartPopup.classList.remove('show');
});

// Activate all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    addToCart(btn.dataset.name, btn.dataset.price, btn.dataset.img);
  });
});
