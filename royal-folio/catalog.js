/**
 * Royal Folio - Catalog Injection System
 * Handles dynamic rendering of jewellery items with luxury styling and reveal animations.
 */

function injectCatalogItems() {
    const gridContainer = document.getElementById('catalog-grid');
    if (!gridContainer) return;

    // Clear existing items if any
    gridContainer.innerHTML = '';

    // 'catalogItems' is now provided by products.js
    catalogItems.forEach(item => {
        const article = document.createElement('article');
        article.className = 'catalog-item group cursor-pointer';

        // Wrap in a link to the product detail page
        article.onclick = () => {
            window.location.href = `product.html?id=${item.id}`;
        };

        article.innerHTML = `
            <div class="image-frame aspect-[3/4] bg-charcoal/20 mb-6">
                <img src="${item.image}" alt="${item.title}" class="catalog-image">
            </div>
            <div class="text-center flex flex-col items-center px-4">
                <h2 class="font-serif text-lg text-gold-light mb-1 item-title uppercase tracking-wide">${item.title}</h2>
                <p class="font-sans text-[10px] text-gold-dark/60 uppercase tracking-widest mb-2">${item.tag}</p>
                <p class="font-sans text-gold-light/90 text-sm">${item.price}</p>
            </div>
        `;

        gridContainer.appendChild(article);
    });
}

// Global function to refresh the reveal observer since items are injected dynamically
window.refreshRevealObserver = function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', injectCatalogItems);
