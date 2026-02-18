/**
 * Royal Footer Component
 * Dynamically injects the Royal footer into the DOM.
 */
function injectRoyalFooter() {
    const footerHTML = `
    <!-- ================= ROYAL FOOTER ================= -->
    <footer class="royal-footer">

        <!-- Subtle Top Gradient Glow -->
        <div class="footer-glow"></div>

        <!-- Decorative Divider -->
        <div class="footer-divider">
            <div class="footer-divider-line"></div>
            <div class="footer-divider-diamond"></div>
            <div class="footer-divider-line"></div>
        </div>

        <div class="footer-container">

            <!-- MAIN GRID -->
            <div class="footer-main-grid">

                <!-- Column 1: Brand -->
                <div class="footer-col">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <img src="images/crown.png" style="width: 2.2rem; height: 2.2rem; opacity: 0.8;" alt="Crown">
                        <h5 class="footer-title" style="margin-bottom: 0;">The Gilded Atelier</h5>
                    </div>

                    <p class="footer-text">
                        A tribute to heritage, craftsmanship, and the eternal brilliance of fine jewelry.
                    </p>

                    <h4 class="font-script" style="font-size: 1.875rem; color: rgba(230, 200, 136, 0.7); margin-top: 1rem;">
                        Designed for Brilliance
                    </h4>
                </div>

                <!-- Column 2: Collections -->
                <div class="footer-col">
                    <h5 class="footer-title">Collections</h5>
                    <ul class="footer-links-list">
                        <li><a href="catalog.html" class="footer-link">Jewellery</a></li>
                        <li><a href="bespoke.html" class="footer-link">Bespoke</a></li>
                        <li><a href="editorial.html" class="footer-link">Editorial</a></li>
                        <li><a href="contact.html" class="footer-link">Contact</a></li>
                    </ul>
                </div>

                <!-- Column 3: Resources -->
                <div class="footer-col">
                    <h5 class="footer-title">Resources</h5>
                    <ul class="footer-links-list">
                        <li><a href="documentation.html" class="footer-link">Documentation</a></li>
                        <li><a href="faq.html" class="footer-link">FAQs</a></li>
                        <li><a href="privacy.html" class="footer-link">Privacy</a></li>
                        <li><a href="terms.html" class="footer-link">Terms</a></li>
                    </ul>
                </div>

                <!-- Column 4: Newsletter -->
                <div class="footer-col">
                    <h5 class="footer-title">The Atelier Post</h5>

                    <p class="footer-text">
                        Receive curated updates on our latest collections and bespoke creations.
                    </p>

                    <div id="footer-newsletter-form" class="footer-input-group transition-all duration-500">
                        <input id="footer-email-input" type="email" placeholder="Your Email Address" class="footer-input" />
                        <button id="footer-subscribe-btn" class="footer-btn">Subscribe</button>
                    </div>

                    <div id="footer-newsletter-status" class="hidden text-center scale-95 opacity-0 transition-all duration-700 mt-4">
                        <p class="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-light">
                             <i class="fa-solid fa-check-circle mr-2 opacity-60"></i>
                             Subscribed
                        </p>
                    </div>
                </div>

            </div>

            <!-- Bottom Section -->
            <div class="footer-bottom">
                <p class="footer-bottom-text">
                    The Gilded Atelier &copy; 2026
                </p>

                <div class="footer-social-links">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="footer-social-link"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="footer-social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" class="footer-social-link"><i class="fab fa-youtube"></i></a>
                </div>
            </div>

        </div>

    </footer>`;

    // Inject at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // --- Newsletter Logic ---
    const subscribeBtn = document.getElementById('footer-subscribe-btn');
    const newsletterForm = document.getElementById('footer-newsletter-form');
    const newsletterStatus = document.getElementById('footer-newsletter-status');
    const emailInput = document.getElementById('footer-email-input');

    if (subscribeBtn && newsletterForm && newsletterStatus) {
        subscribeBtn.addEventListener('click', () => {
            // Simple validation
            if (emailInput.value.trim() === "") return;

            // Visual feedback
            newsletterForm.style.opacity = '0';
            newsletterForm.style.pointerEvents = 'none';

            setTimeout(() => {
                newsletterForm.classList.add('hidden');
                newsletterStatus.classList.remove('hidden');

                // Trigger animation
                requestAnimationFrame(() => {
                    newsletterStatus.style.opacity = '1';
                    newsletterStatus.style.transform = 'scale(1)';
                });
            }, 400);
        });
    }
}

// Execute injection immediately
injectRoyalFooter();
