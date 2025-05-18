// Birthday quotes
const quotes = [
    "May your day be as bright as your smile and as sweet as your favorite dessert!",
    "Another year of amazing memories and beautiful moments. Happy Birthday!",
    "Wishing you a day filled with happiness and a year filled with joy!",
    "May all your dreams come true on this special day!",
    "Celebrating the wonderful person you are today and every day!",
    "Here's to another year of friendship, laughter, and beautiful memories!",
    "May your birthday be as special as you are to all of us!",
    "Wishing you health, happiness, and all the love in the world!",
    "May this year bring you all the joy and success you deserve!",
    "Happy Birthday to someone who makes the world a better place!"
];

// DOM elements
const cakeContainer = document.querySelector('.cake-container');
const cake = document.querySelector('.cake');
const knife = document.querySelector('.knife');
const quoteElement = document.getElementById('quote');
const cakeCutMessage = document.querySelector('.cake-cut-message');
const loginButton = document.getElementById('login-button');

// Initialize with a random quote
let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
quoteElement.textContent = quotes[currentQuoteIndex];

// Cake cutting animation
let isCut = false;

cakeContainer.addEventListener('click', () => {
    if (!isCut) {
        // Animate the knife
        knife.classList.add('cake-cut');

        // Animate the cake slice
        setTimeout(() => {
            cake.classList.add('cake-slice');

            // Change the quote after cake is cut
            setTimeout(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                quoteElement.textContent = quotes[currentQuoteIndex];
                cakeCutMessage.textContent = "Make a wish!";

                // Show the login button
                loginButton.style.display = 'inline-block';
            }, 1000);
        }, 500);

        isCut = true;
    }
});

// Add confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#e91e63', '#9c27b0'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);
    }
}

// Initialize confetti
document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
});




window.addEventListener('load', () => {
    const cake = document.querySelector('.cake');
    const knife = document.querySelector('.knife');
    const loginButton = document.getElementById('login-button');

    knife.classList.add('cake-cut');
    cake.classList.add('cake-slice');

    setTimeout(() => {
        loginButton.style.display = 'inline-block';
    }, 3000);

    startFireworks();
});

function startFireworks() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];
    class Firework {
        constructor() { this.reset(); }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height / 2;
            this.radius = 0;
            this.maxRadius = 2 + Math.random() * 4;
            this.alpha = 1;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }

        update() {
            this.radius += 1;
            this.alpha -= 0.02;
            if (this.alpha <= 0) this.reset();
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }

    for (let i = 0; i < 50; i++) {
        fireworks.push(new Firework());
    }

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        fireworks.forEach(firework => {
            firework.update();
            firework.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}
