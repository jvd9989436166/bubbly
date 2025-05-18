// Add typing effect to the diary entry
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to next page when clicking the scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const page2 = document.getElementById('page2');

    if (scrollIndicator && page2) {
        scrollIndicator.addEventListener('click', () => {
            page2.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.gallery-item, .wish-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        observer.observe(element);
    });

    // Add visible class for animation
    document.querySelectorAll('.gallery-item, .wish-card').forEach(element => {
        element.addEventListener('transitionend', () => {
            element.classList.add('visible');
        });
    });

    // Parallax effect for background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.body.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

    // Add hover effect to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    // Add confetti effect
    createConfetti();
});

// Add confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#e91e63', '#9c27b0'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
    }
}

// Add styles for confetti
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        background-color: #f00;
        animation: confetti-fall 3s linear forwards;
        z-index: 1000;
    }
    
    @keyframes confetti-fall {
        0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style); 