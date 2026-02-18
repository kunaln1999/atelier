/* Dust Particle Logic (Reused) */
document.addEventListener('DOMContentLoaded', () => {
    const dustContainer = document.getElementById('dust-container');
    if (dustContainer) {
        const particleCount = 40;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('dust-particle');

            // Randomized properties for organic movement
            const duration = 15 + Math.random() * 10;
            const delay = Math.random() * -duration; // Negative delay to pre-warm the animation
            const size = 1 + Math.random() * 2;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animation = `float-rise ${duration}s infinite ease-in-out`;
            particle.style.animationDelay = `${delay}s`;

            dustContainer.appendChild(particle);
        }
    }
});
