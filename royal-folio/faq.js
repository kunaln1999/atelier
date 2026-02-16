/**
 * Royal FAQ Interactions
 * Handles the ceremonial accordion and atmospheric effects.
 */

// --- Accordion Logic ---

function toggleFaq(element) {
    const isActive = element.classList.contains('active');
    const answer = element.querySelector('.faq-answer');

    // Close all other FAQ items for a curated experience
    const allFaqs = document.querySelectorAll('.faq-item');
    allFaqs.forEach(item => {
        item.classList.remove('active');
        const itemAnswer = item.querySelector('.faq-answer');
        if (itemAnswer) {
            itemAnswer.style.maxHeight = null;
        }
    });

    // If it wasn't active before, open it now with dynamic height
    if (!isActive) {
        element.classList.add('active');
        // Add a buffer for smooth finish
        if (answer) {
            answer.style.maxHeight = (answer.scrollHeight + 40) + "px";
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
});
// --- Scroll Reveal Animation ---

function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);

    // Select elements to reveal
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        // Staggered reveal
        item.style.transition = `opacity 0.8s ease-out ${index * 0.1}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`;

        observer.observe(item);
    });

    const ctaSection = document.querySelector('section:last-of-type');
    if (ctaSection) {
        ctaSection.style.opacity = '0';
        ctaSection.style.transform = 'translateY(20px)';
        ctaSection.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
        observer.observe(ctaSection);
    }
}
