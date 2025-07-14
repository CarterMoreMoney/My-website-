// Dark mode toggle
const themeEl = document.getElementById('theme'),
      darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  themeEl.classList.toggle('dark');
  darkToggle.textContent = themeEl.classList.contains('dark') ? '☀️' : '🌙';
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle'),
      navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

// Cart logic
const cartToggle = document.getElementById('cart-toggle'),
      cartPopup = document.getElementById('cart-popup'),
      cartCount = document.getElementById('cart-count'),
      cartItemsContainer = document.getElementById('cart-items'),
      cartTotalDiv = document.getElementById('cart-total'),
      checkoutBtn = document.getElementById('checkout-btn'),
      nameInput = document.getElementById('customer-name'),
      emailInput = document.getElementById('customer-email');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function syncCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0);
}
function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;
  cart.forEach((item,i)=>{
    total += item.qty*item.price;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <span>${item.name} x${item.qty}</span>
      <span>GH₵${(item.qty*item.price).toFixed(2)}</span>
      <span class="cart-item-remove" data-index="${i}">✖</span>`;
    cartItemsContainer.appendChild(div);
  });
  cartTotalDiv.textContent = 'Total: GH₵' + total.toFixed(2);
  cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(el=>{
    el.addEventListener('click', () => {
      cart.splice(el.dataset.index,1);
      syncCart(); renderCart();
    });
  });
}
function addToCart(name,price,img) {
  const ex = cart.find(i=>i.name===name);
  if(ex) ex.qty++;
  else cart.push({name,price:parseFloat(price),img,qty:1});
  syncCart();
}

// Initialize
syncCart();
cartToggle.addEventListener('click', () => {
  cartPopup.classList.toggle('show');
  renderCart();
});

// Checkout
checkoutBtn.addEventListener('click', () => {
  if(!nameInput.value || !emailInput.value){
    alert('Enter your name and email first!');
    return;
  }
  let body = `Order from ${nameInput.value} (${emailInput.value})%0D%0A`;
  cart.forEach(item=>{
    body += `${item.name} x${item.qty} - GH₵${(item.qty*item.price).toFixed(2)}%0D%0A`;
  });
  window.location.href = `mailto:hello@thriftvintage.com?subject=New Order&body=${body}`;
  cart = []; syncCart(); renderCart(); cartPopup.classList.remove('show');
});

// Handle add-to-cart buttons
document.querySelectorAll('.add-to-cart').forEach(btn=>{
  btn.addEventListener('click', () => addToCart(btn.dataset.name,btn.dataset.price,btn.dataset.img));
});

// WhatsApp buttons
document.querySelectorAll('.whatsapp-buy').forEach(btn=>{
  btn.addEventListener('click', () => {
    const msg = encodeURIComponent(`Hi! I'd like to buy the ${btn.dataset.name}.`);
    window.open(`https://wa.me/${btn.dataset.number}?text=${msg}`, '_blank');
  });
});

// Scroll animations
document.addEventListener('DOMContentLoaded',()=>{
  const reveals = document.querySelectorAll('.scroll-reveal');
  function onScroll(){
    reveals.forEach(el=>{
      if(el.getBoundingClientRect().top < window.innerHeight * 0.85){
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
