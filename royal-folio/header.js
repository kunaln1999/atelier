/**
 * Royal Header Component
 * Dynamically injects the Royalistic Header and Mobile Menu into the DOM.
 */
function injectRoyalHeader() {
    const headerHTML = `
    <!-- ================= ROYAL REVEAL HEADER ================= -->
    <header id="royal-header" class="royal-header">

        <!-- Inner Frame -->
        <div class="header-inner-frame"></div>

        <div class="header-container">

            <!-- Left: Logo -->
            <a href="index.html" class="header-logo">
                <img src="images/crown.png" class="header-logo-img" alt="Crown">
                <span class="header-logo-text">The Gilded Atelier</span>
            </a>

            <!-- Center: Navigation -->
            <nav class="header-nav font-cinzel">
                <a href="catalog.html" class="header-link">Jewellery</a>
                <a href="bespoke.html" class="header-link">Bespoke</a>
                <a href="editorial.html" class="header-link">Editorial</a>
                <a href="contact.html" class="header-link">Contact</a>
            </nav>

            <!-- Right: Desktop CTA -->
            <a href="catalog.html" class="header-cta">Explore</a>

            <!-- Mobile Hamburger -->
            <button id="royal-hamburger" class="header-hamburger" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </header>

    <!-- ================= ROYAL MOBILE MENU ================= -->
    <div id="royal-mobile-menu" class="mobile-menu">

        <div class="mobile-menu-inner-frame"></div>

        <div class="mobile-menu-content">

            <!-- Decorative Divider -->
            <div class="mobile-menu-divider">
                <div class="mobile-divider-line"></div>
                <div class="mobile-divider-diamond"></div>
                <div class="mobile-divider-line"></div>
            </div>

            <nav class="mobile-nav">
                <a href="catalog.html" class="mobile-link">Jewellery</a>
                <a href="bespoke.html" class="mobile-link">Bespoke</a>
                <a href="editorial.html" class="mobile-link">Editorial</a>
                <a href="contact.html" class="mobile-link">Contact</a>

                <div class="mobile-menu-separator"></div>

                <a href="catalog.html" class="mobile-cta" style="text-decoration: none; display: flex; align-items: center; justify-content: center;">Explore</a>
            </nav>
        </div>
    </div>`;

    // Inject as the first child of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // --- Dynamic Header Behavior for Specific Pages ---
    // --- Dynamic Header Behavior for Specific Pages ---
    // Robust page detection handling extensions and clean URLs
    const path = window.location.pathname;
    // Get filename, remove query params/hashes
    let currentPage = path.split('/').pop().split('?')[0].split('#')[0];

    // Handle root/index cases if necessary, though inner pages usually have names
    if (currentPage === '') currentPage = 'index.html';

    // List includes both .html and extensionless versions for robustness
    const innerPages = [
        'contact.html', 'contact',
        'faq.html', 'faq',
        'catalog.html', 'catalog',
        'product.html', 'product',
        'documentation.html', 'documentation',
        'privacy.html', 'privacy',
        'terms.html', 'terms',
        'bespoke.html', 'bespoke'
    ];

    if (innerPages.includes(currentPage)) {
        const header = document.getElementById('royal-header');
        if (header) {
            const toggleHeader = () => {
                // Fallback for mobile scrolling
                const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

                if (scrollTop > 20) {
                    header.classList.add('visible');
                } else {
                    header.classList.remove('visible');
                }
            };

            // Initial check
            toggleHeader();

            // Add listeners for scroll and touchmove (for mobile responsiveness)
            window.addEventListener('scroll', toggleHeader);
            window.addEventListener('touchmove', toggleHeader);
        }
    }
    // --- Mobile Menu Toggle Logic ---
    const hamburger = document.getElementById('royal-hamburger');
    const mobileMenu = document.getElementById('royal-mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents document click from firing immediately
            const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isOpen);
            mobileMenu.classList.toggle('active', !isOpen);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (isOpen && !isClickInsideMenu && !isClickOnHamburger) {
                hamburger.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('active');
            });
        });
    }
}

// Execute injection immediately
injectRoyalHeader();
