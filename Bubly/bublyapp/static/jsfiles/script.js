// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Parallax effect on scroll
document.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-content');
    
    timelineItems.forEach(item => {
        const speed = 0.5;
        const rect = item.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = -(rect.top - window.innerHeight) * speed;
            item.style.transform = `translateY(${yPos}px)`;
        }
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for images
document.querySelectorAll('.timeline-content img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05) translateZ(30px)';
    });
    
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) translateZ(20px)';
    });
}); 