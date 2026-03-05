(function () {
  const header = document.querySelector("header, .navbar, .top-nav");
  if (!header) return;

  let ticking = false;
  const apply = () => {
    ticking = false;
    header.classList.toggle("scrolled", window.scrollY > 40);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(apply);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  apply();
})();
