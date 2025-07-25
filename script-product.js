const grid = document.getElementById('sub-products');
const phone = "233202451751"; // Ghana country code + your number ✅

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
      <a href="https://wa.me/${phone}?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(item.title)}" target="_blank" class="contact-btn">Contact Us to Order</a>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  if (typeof hoodieProducts !== 'undefined') renderProducts(hoodieProducts);
  if (typeof thriftProducts !== 'undefined') renderProducts(thriftProducts);
  if (typeof spectaclesProducts !== 'undefined') renderProducts(spectaclesProducts);
  if (typeof jewelriesProducts !== 'undefined') renderProducts(jewelriesProducts);
  if (typeof designerBagsProducts !== 'undefined') renderProducts(designerBagsProducts);
  if (typeof designerSocksProducts !== 'undefined') renderProducts(designerSocksProducts);
  if (typeof baseballCapsProducts !== 'undefined') renderProducts(baseballCapsProducts);
});
