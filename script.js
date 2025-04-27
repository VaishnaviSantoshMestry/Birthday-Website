// Confetti Animation
function startConfetti() {
  setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 3000); // Confetti every 3 seconds
}

// Heart Animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3s to 5s
  document.querySelector('.hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function startHearts() {
  setInterval(createHeart, 300);
}

// Start Animations after page loads
window.onload = function() {
  startConfetti();
  startHearts();
};
