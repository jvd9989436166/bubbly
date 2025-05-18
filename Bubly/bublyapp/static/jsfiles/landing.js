// Create sparkles
function createSparkles() {
    const sparkles = document.querySelector('.sparkles');
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkles.appendChild(sparkle);
    }
}

// Add confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createSparkles();
    createConfetti();
    
    // Add hover effect to the enter button
    const enterButton = document.querySelector('.enter-button');
    enterButton.addEventListener('mouseover', () => {
        enterButton.style.transform = 'scale(1.1)';
    });
    
    enterButton.addEventListener('mouseout', () => {
        enterButton.style.transform = 'scale(1)';
    });
}); 