const container = document.getElementById('products-container');

function loadProducts() {
  if (!Array.isArray(products)) {
    console.error("Products list is missing or broken.");
    return;
  }

  products.forEach(product => {
    const card = document.createElement('a');
    card.className = 'product-card';
    card.href = product.link;
    card.setAttribute('data-name', product.title);

    card.innerHTML = `
      <picture>
        <source srcset="images/${product.image}" type="image/webp">
        <img src="images/${product.fallback}" loading="lazy" alt="${product.title}">
      </picture>
      <h3>${product.title}</h3>
    `;

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadProducts);
