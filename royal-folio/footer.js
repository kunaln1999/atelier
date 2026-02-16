/**
 * Royal Footer Component
 * Dynamically injects the Royal footer into the DOM.
 */
function injectRoyalFooter() {
    const footerHTML = `
    <!-- ================= ROYAL FOOTER ================= -->
    <footer
        class="w-full bg-royal text-gold-light pt-28 pb-16 px-6 md:px-8 relative overflow-hidden border-t border-gold-dark/30">

        <!-- Subtle Top Gradient Glow -->
        <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gold/10 to-transparent pointer-events-none">
        </div>

        <!-- Decorative Divider -->
        <div class="flex items-center justify-center mb-20 relative z-10">
            <div class="w-20 h-[1px] bg-gold-dark/40"></div>
            <div class="w-3 h-3 border border-gold-dark/50 rotate-45 mx-4 bg-royal"></div>
            <div class="w-20 h-[1px] bg-gold-dark/40"></div>
        </div>

        <div class="max-w-[1300px] mx-auto relative z-20">

            <!-- MAIN GRID -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-16 border-y border-gold-dark/20 py-16 relative">

                <!-- Column 1: Brand -->
                <div class="space-y-6">
                    <div class="flex items-center space-x-4">
                        <img src="images/crown.png" class="w-12 h-12 opacity-80" alt="Crown">
                        <span class="font-cinzel tracking-[0.25em] text-sm uppercase">The Gilded Atelier</span>
                    </div>

                    <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
                        A tribute to heritage, craftsmanship, and the eternal brilliance of fine jewelry.
                    </p>

                    <h4 class="font-script text-3xl text-gold/70">
                        Designed for Brilliance
                    </h4>
                </div>

                <!-- Column 2 -->
                <div>
                    <h5 class="font-cinzel text-xs tracking-[0.3em] uppercase mb-8 text-gold-light">Collections</h5>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li><a href="index.html"
                                class="hover:text-gold transition duration-500 border-b border-transparent hover:border-gold">Home</a>
                        </li>
                        <li><a href="boutique.html"
                                class="hover:text-gold transition duration-500 border-b border-transparent hover:border-gold">Jewellery</a>
                        </li>
                        <li><a href="editorial.html"
                                class="hover:text-gold transition duration-500 border-b border-transparent hover:border-gold">Editorial</a>
                        </li>
                        <li><a href="contact.html"
                                class="hover:text-gold transition duration-500 border-b border-transparent hover:border-gold">Contact</a>
                        </li>
                    </ul>
                </div>

                <!-- Column 3 -->
                <div>
                    <h5 class="font-cinzel text-xs tracking-[0.3em] uppercase mb-8 text-gold-light">Resources</h5>
                    <ul class="space-y-4 text-sm text-gray-400">
                        <li><a href="documentation.html"
                                class="hover:text-gold transition duration-500 border-b border-transparent hover:border-gold">Documentation</a>
                        </li>
                        <li><a href="#"
                                class="hover:text-gold transition duration-500 border-b border-transparent hover:border-gold">Licensing</a>
                        </li>
                        <li><a href="contact.html"
                                class="hover:text-gold transition duration-500 border-b border-transparent hover:border-gold">Support</a>
                        </li>
                        <li><a href="faq.html"
                                class="hover:text-gold transition duration-500 border-b border-transparent hover:border-gold">FAQ</a>
                        </li>
                    </ul>
                </div>

                <!-- Column 4: Newsletter -->
                <div>
                    <h5 class="font-cinzel text-xs tracking-[0.3em] uppercase mb-8 text-gold-light">The Atelier Post</h5>

                    <p class="text-gray-400 text-sm mb-6">
                        Receive curated updates on our latest collections and bespoke creations.
                    </p>

                    <div class="relative">
                        <input type="email" placeholder="Your Email Address"
                            class="w-full bg-transparent border border-gold-dark/40 px-4 py-3 text-sm tracking-wide placeholder-gray-600 focus:outline-none focus:border-gold transition-all duration-500" />

                        <button
                            class="mt-4 w-full border border-gold-dark/50 py-3 text-xs font-cinzel tracking-[0.25em] uppercase transition-all duration-500 hover:bg-gold-light hover:text-royal">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <!-- Bottom Section -->
            <div
                class="mt-16 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest uppercase">

                <p class="font-cinzel tracking-[0.25em] text-gray-600">
                    The Gilded Atelier &copy; 2026
                </p>

                <div class="flex space-x-6 mt-6 md:mt-0">
                    <a href="#" class="hover:text-gold transition duration-500"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="hover:text-gold transition duration-500"><i class="fab fa-dribbble"></i></a>
                    <a href="#" class="hover:text-gold transition duration-500"><i class="fab fa-behance"></i></a>
                </div>

            </div>

        </div>

    </footer>`;

    // Inject at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Execute injection immediately
injectRoyalFooter();
