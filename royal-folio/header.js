/**
 * Royal Header Component
 * Dynamically injects the Royalistic Header and Mobile Menu into the DOM.
 */
function injectRoyalHeader() {
    const headerHTML = `
    <!-- ================= ROYAL REVEAL HEADER ================= -->
    <header id="royal-header"
        class="fixed top-0 left-0 w-full h-16 bg-royal border-t border-gold-dark/40 transform -translate-y-full opacity-0 transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-50 shadow-[0_8px_30px_rgba(0,0,0,0.4)] px-6 md:px-8">

        <!-- Inner Frame -->
        <div class="absolute inset-2 border border-gold-dark/20 pointer-events-none"></div>

        <div class="max-w-[1300px] mx-auto h-full flex items-center justify-between relative">

            <!-- Left: Logo -->
            <a href="index.html" class="flex items-center space-x-3 group cursor-pointer transition-opacity duration-300 hover:opacity-100 opacity-90">
                <img src="images/crown.png" class="w-7 h-7" alt="Crown">
                <span class="font-cinzel uppercase tracking-[0.25em] text-gold-light text-xs group-hover:text-gold transition-colors duration-300">
                    The Gilded Atelier
                </span>
            </a>

            <!-- Center: Navigation -->
            <nav class="hidden md:flex space-x-10 text-[11px] uppercase tracking-[0.25em] text-gray-400">
                <a href="index.html" class="royal-link hover:text-gold transition duration-500">Home</a>
                <a href="catalog.html" class="royal-link hover:text-gold transition duration-500">Jewellery</a>
                <a href="editorial.html" class="royal-link hover:text-gold transition duration-500">Editorial</a>
                <a href="contact.html" class="royal-link hover:text-gold transition duration-500">Contact</a>
            </nav>

            <!-- Right: Desktop CTA -->
            <button
                class="hidden md:block px-6 py-2 border border-gold-dark/50 text-gold-light font-cinzel tracking-[0.25em] text-[10px] uppercase transition-all duration-500 hover:bg-gold-light hover:text-royal">
                Explore
            </button>

            <!-- Mobile Hamburger -->
            <button id="royal-hamburger" aria-expanded="false"
                class="md:hidden relative w-8 h-5 flex flex-col justify-between group">

                <span class="block h-[1.5px] bg-gold-dark transition-all duration-500 origin-left"></span>
                <span class="block h-[1.5px] bg-gold-dark transition-all duration-500"></span>
                <span class="block h-[1.5px] bg-gold-dark transition-all duration-500 origin-left"></span>
            </button>
        </div>
    </header>
    <!-- ================= ROYAL MOBILE MENU ================= -->
    <div id="royal-mobile-menu"
        class="fixed top-16 left-0 w-full bg-royal transform -translate-y-5 opacity-0 pointer-events-none transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-40">

        <div class="absolute inset-4 border border-gold-dark/20 pointer-events-none"></div>

        <div class="max-w-[1200px] mx-auto py-12 px-8 texture-grain">

            <!-- Decorative Divider -->
            <div class="flex items-center justify-center mb-12">
                <div class="w-12 h-[1px] bg-gold-dark/40"></div>
                <div class="w-3 h-3 border border-gold-dark/40 rotate-45 mx-4"></div>
                <div class="w-12 h-[1px] bg-gold-dark/40"></div>
            </div>

            <nav
                class="flex flex-col items-center space-y-8 text-[14px] uppercase tracking-[0.25em] font-cinzel text-gray-400">

                <a href="index.html" class="royal-link hover:text-gold transition duration-500">Home</a>
                <a href="catalog.html" class="royal-link hover:text-gold transition duration-500">Jewellery</a>
                <a href="editorial.html" class="royal-link hover:text-gold transition duration-500">Editorial</a>
                <a href="contact.html" class="royal-link hover:text-gold transition duration-500">Contact</a>

                <div class="w-16 h-[1px] bg-gold-dark/30 my-6"></div>

                <button
                    class="w-full max-w-xs px-8 py-3 border border-gold-dark/50 text-gold-light tracking-[0.25em] text-xs uppercase transition-all duration-500 hover:bg-gold-light hover:text-royal">
                    Explore
                </button>

            </nav>
        </div>
    </div>`;

    // Inject as the first child of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    // --- Dynamic Header Behavior for Specific Pages ---
    // This logic handles pages like Contact or FAQ that don't use the full-screen hero scroll effect from royal.js
    const currentPage = window.location.pathname.split('/').pop();
    const innerPages = ['contact.html', 'faq.html', 'catalog.html', 'product.html', 'documentation.html'];
    if (innerPages.includes(currentPage)) {
        const header = document.getElementById('royal-header');
        if (header) {
            // Ensure initial state is hidden but ready to animate
            header.style.transition = 'transform 0.4s ease, opacity 0.4s ease';

            // Function to toggle header visibility
            const toggleHeader = () => {
                if (window.scrollY > 20) {
                    header.style.transform = 'translateY(0)';
                    header.style.opacity = '1';
                    header.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
                } else {
                    header.style.transform = 'translateY(-100%)';
                    header.style.opacity = '0';
                    header.classList.add('pointer-events-none');
                }
            };

            // Initial check and event listener
            toggleHeader();
            window.addEventListener('scroll', toggleHeader);
        }
    }
}

// Execute injection immediately
injectRoyalHeader();
