const grid = document.getElementById('sub-products');

function renderProducts(list) {
  list.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <picture>
        <source srcset="images/${item.image}" type="image/webp">
        <img src="images/${item.fallback}" loading="lazy" alt="${item.title}">
      </picture>
      <h3>${item.title}</h3>
    `;
    grid.appendChild(card);
  });
}

// Detect correct product list to load
document.addEventListener('DOMContentLoaded', function() {
  if (typeof hoodieProducts !== 'undefined') renderProducts(hoodieProducts);
  if (typeof thriftProducts !== 'undefined') renderProducts(thriftProducts);
  if (typeof spectaclesProducts !== 'undefined') renderProducts(spectaclesProducts);
  // Add same checks for other product types
});