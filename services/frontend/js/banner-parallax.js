(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const targets = Array.from(document.querySelectorAll(".banner img, .hero img, .hero-banner img"));
  if (!targets.length) return;

  let raf = 0;
  let nextX = 0;
  let nextY = 0;

  const apply = () => {
    raf = 0;
    for (const img of targets) {
      img.style.transform = `scale(1.05) translate(${nextX}px, ${nextY}px)`;
    }
  };

  const onMove = (e) => {
    const speed = 0.02;
    nextX = (window.innerWidth * 0.5 - e.clientX) * speed;
    nextY = (window.innerHeight * 0.5 - e.clientY) * speed;
    if (!raf) raf = window.requestAnimationFrame(apply);
  };

  window.addEventListener("pointermove", onMove, { passive: true });
})();
