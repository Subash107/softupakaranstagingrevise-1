// Premium 3D Spring Physics Animation for Collection Cards
function initCardPhysics() {
  const cards = document.querySelectorAll('.collection-card');

  cards.forEach(card => {
    const glow = card.querySelector('.card-glow');
    const content = card.querySelector('.card-content');

    // Floating animation with spring physics
    gsap.to(card, {
      y: -8,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Mousemove 3D tilt effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 12;
      const rotateY = (x - centerX) / 12;

      gsap.to(card, {
        rotateX,
        rotateY,
        scale: 1.07,
        duration: 0.4,
        ease: "power3.out"
      });

      gsap.to(content, {
        x: (x - centerX) / 15,
        y: (y - centerY) / 15,
        duration: 0.4,
        ease: "power3.out"
      });

      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = 1;
    });

    // Mouseleave spring back animation
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)"
      });

      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)"
      });

      glow.style.opacity = 0;
    });
  });
}

// Initialize when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCardPhysics);
} else {
  initCardPhysics();
}
