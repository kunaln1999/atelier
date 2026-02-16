/**
 * RoyalUI - A reusable UI interaction class for the Royalistic UI Kit.
 * Handles scroll reveals, sticky header behavior, and mobile menu interactions.
 */
class RoyalUI {
    constructor() {
        this.initRevealObserver();
        this.initHeaderObserver();
        this.initMobileMenu();
        this.initBlackholeEffect();
    }
    /**
     * Initializes the IntersectionObserver for elements with the 'reveal' class.
     */
    initRevealObserver() {
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
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));
    }
    /**
     * Initializes the sticky header behavior that reveals after the first section.
     */
    initHeaderObserver() {
        const royalHeader = document.getElementById('royal-header');
        if (!royalHeader) return;

        // Skip default full-screen scroll logic on specific pages handled by header.js
        const path = window.location.pathname;
        if (path.includes('contact.html') || path.includes('faq.html')) return;

        // Ensure header is ready but hidden
        royalHeader.style.transition = "transform 0.6s ease, opacity 0.6s ease";
        royalHeader.style.zIndex = "999";

        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            const threshold = window.innerHeight; // Reveal exactly when 2nd section hits top

            if (scrollPos >= threshold) {
                royalHeader.style.transform = "translateY(0)";
                royalHeader.style.opacity = "1";
                royalHeader.style.pointerEvents = "auto";
            } else {
                royalHeader.style.transform = "translateY(-100%)";
                royalHeader.style.opacity = "0";
                royalHeader.style.pointerEvents = "none";
            }
        });
    }
    /**
     * Initializes the mobile menu toggle and related animations.
     */
    initMobileMenu() {
        const hamburger = document.getElementById('royal-hamburger');
        const mobileMenu = document.getElementById('royal-mobile-menu');
        if (!hamburger || !mobileMenu)
            return;
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!isOpen));
            if (!isOpen) {
                this.toggleMenuState(true, hamburger, mobileMenu);
            }
            else {
                this.toggleMenuState(false, hamburger, mobileMenu);
            }
        });
        /* Close menu when clicking link */
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (hamburger.getAttribute('aria-expanded') === 'true') {
                    hamburger.click();
                }
            });
        });
    }
    /**
     * Helper to toggle the menu visual state.
     */
    toggleMenuState(open, hamburger, mobileMenu) {
        const bars = hamburger.querySelectorAll('span');
        if (open) {
            mobileMenu.classList.remove('-translate-y-5', 'opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('translate-y-0', 'opacity-100');
            if (bars.length >= 3) {
                bars[0].style.transform = 'rotate(45deg) translateY(6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translateY(-6px)';
            }
        }
        else {
            mobileMenu.classList.add('-translate-y-5', 'opacity-0', 'pointer-events-none');
            mobileMenu.classList.remove('translate-y-0', 'opacity-100');
            if (bars.length >= 3) {
                bars[0].style.transform = '';
                bars[1].style.opacity = '1';
                bars[2].style.transform = '';
            }
        }
    }

    /**
     * Implements the 'blackhole' shrinking effect for the hero section on scroll.
     */
    initBlackholeEffect() {
        const hero = document.getElementById('hero-section');
        if (!hero) return;

        hero.style.transition = "transform 0.1s ease-out, opacity 0.1s ease-out, filter 0.1s ease-out";
        hero.style.transformOrigin = "center center";

        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            const windowHeight = window.innerHeight;

            // Effect starts immediately and completes by the time one screen is scrolled
            const progress = Math.min(scrollPos / windowHeight, 1.2);

            if (progress > 0) {
                const scale = 1 - (progress * 0.8); // Shrink to 20%
                const opacity = 1 - progress;
                const blur = progress * 20;
                const rotate = progress * 10; // Slight tilt

                hero.style.transform = `scale(${scale}) rotateX(${rotate}deg) translateY(${progress * -50}px)`;
                hero.style.opacity = opacity;
                hero.style.filter = `blur(${blur}px)`;

                // Ensure it doesn't block second section
                if (progress >= 1) {
                    hero.style.visibility = 'hidden';
                } else {
                    hero.style.visibility = 'visible';
                }
            } else {
                hero.style.transform = 'scale(1) rotateX(0deg) translateY(0)';
                hero.style.opacity = 1;
                hero.style.filter = 'blur(0px)';
                hero.style.visibility = 'visible';
            }
        });
    }
}
// Initialize on DOMContentLoaded to ensure elements exist
document.addEventListener('DOMContentLoaded', () => {
    new RoyalUI();
});
