// Hamburger & Search
const hamburger=document.getElementById('hamburger');
const nav=document.getElementById('nav-links');
const searchBtn=document.getElementById('search-btn');
const searchBar=document.getElementById('search-bar');
hamburger.onclick=()=>nav.classList.toggle('show');
searchBtn.onclick=()=>searchBar.style.display = searchBar.style.display==='block'?'none':'block';

// Load main products
const container=document.getElementById('products-container');
function loadProducts(){
  products.forEach(p=>{
    const a=document.createElement('a');
    a.className='product-card';
    a.href=p.link;
    a.setAttribute('data-name',p.title);
    a.innerHTML=`
      <picture>
        <source srcset="images/${p.image}" type="image/webp">
        <img src="images/${p.fallback}" loading="lazy" alt="${p.title}">
      </picture><h3>${p.title}</h3>`;
    container.appendChild(a);
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  loadProducts();
  // scroll-reveal
  const cards=document.querySelectorAll('.product-card');
  window.addEventListener('scroll',()=>{
    cards.forEach(c=>{
      const rect=c.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) c.classList.add('visible');
    });
  });
});

// Slider
(() => {
  const slides=document.querySelectorAll('#trend-slider .slide');
  let current=0;
  function show(i){
    slides[current].classList.remove('active');
    current=(i+slides.length)%slides.length;
    slides[current].classList.add('active');
  }
  setInterval(()=>show(current+1),4000);
  document.getElementById('prev-slide').onclick=()=>show(current-1);
  document.getElementById('next-slide').onclick=()=>show(current+1);
})();
