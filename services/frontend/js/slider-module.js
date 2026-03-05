(function () {
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const root = document.querySelector("[data-slider-module]");
  if (!root) return;

  const track = root.querySelector(".slider__track");
  const slides = track ? Array.from(track.children) : [];
  if (!track || !slides.length) return;

  const prevBtn = root.querySelector("[data-slider-prev]");
  const nextBtn = root.querySelector("[data-slider-next]");
  let index = 0;
  let timer;
  let tiltReleaseTimer;
  const isHighlight = root.classList.contains("slider--highlight");
  const SHATTER_ATTR = "data-shatter-text";
  const shatterObservers = new Map();

  const getShatterNodes = (slide) => slide ? Array.from(slide.querySelectorAll(`[${SHATTER_ATTR}]`)) : [];

  const resetShatterStates = () => {
    slides.forEach((slide) => {
      getShatterNodes(slide).forEach((node) => {
        node.classList.remove("shatter-text--active");
      });
    });
  };

  const triggerShatterAnimation = (slide) => {
    if (!slide) return;
    const nodes = getShatterNodes(slide);
    if (!nodes.length) return;
    nodes.forEach((node) => node.classList.remove("shatter-text--active"));
    void slide.offsetWidth;
    nodes.forEach((node) => node.classList.add("shatter-text--active"));
  };

  const hasShatterLayers = (slide) => {
    return getShatterNodes(slide).some((node) => node.querySelector(".shatter-text__layer"));
  };

  const heroStats = document.querySelector(".heroStats");
  const triggerHeroStatsAnimation = () => {
    if (!heroStats) return;
    heroStats.classList.remove("heroStats--active");
    void heroStats.offsetWidth;
    heroStats.classList.add("heroStats--active");
  };

  const watchForShatterLayers = () => {
    slides.forEach((slide) => {
      if (hasShatterLayers(slide)) return;
      if (shatterObservers.has(slide)) return;
      const observer = new MutationObserver(() => {
        if (!hasShatterLayers(slide)) return;
        observer.disconnect();
        shatterObservers.delete(slide);
        if (slide === slides[index]) {
          triggerShatterAnimation(slide);
        }
      });
      observer.observe(slide, { childList: true, subtree: true });
      shatterObservers.set(slide, observer);
    });
  };

  function sanitizeIndex(value) {
    const total = slides.length;
    return ((value % total) + total) % total;
  }

  function showSlide(value) {
    index = sanitizeIndex(value);
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("data-active", slideIndex === index ? "1" : "0");
    });
    resetShatterStates();
    triggerShatterAnimation(slides[index]);
    triggerHeroStatsAnimation();
  }

  function scheduleAuto() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(index + 1), 5000);
  }

  function handleNav(target) {
    showSlide(target);
    scheduleAuto();
  }

  slides.forEach((slide) => {
    slide.addEventListener("pointerenter", () => {
      if (slide === slides[index]) {
        triggerShatterAnimation(slide);
      }
    });
  });

  prevBtn?.addEventListener("click", () => handleNav(index - 1));
  nextBtn?.addEventListener("click", () => handleNav(index + 1));

  const resetTilt = () => {
    root.style.setProperty("--highlight-tilt-x", "0deg");
    root.style.setProperty("--highlight-tilt-y", "0deg");
    root.classList.remove("slider--highlight-active");
  };

  if (isHighlight) {
    const handlePointer = (event) => {
      const rect = root.getBoundingClientRect();
      const offsetX = clamp((event.clientX - rect.left) / rect.width, 0, 1) - 0.5;
      const offsetY = clamp((event.clientY - rect.top) / rect.height, 0, 1) - 0.5;
      root.style.setProperty("--highlight-tilt-y", `${offsetX * -7}deg`);
      root.style.setProperty("--highlight-tilt-x", `${offsetY * 7}deg`);
      root.classList.add("slider--highlight-active");
    };

    root.addEventListener("pointermove", handlePointer);
    root.addEventListener("pointerleave", () => { resetTilt(); });
    root.addEventListener("pointercancel", resetTilt);
    root.addEventListener("pointerup", resetTilt);
    root.addEventListener("pointerdown", () => {
      root.classList.add("slider--highlight-pressed");
      clearTimeout(tiltReleaseTimer);
    });
    root.addEventListener("pointerup", () => {
      clearTimeout(tiltReleaseTimer);
      tiltReleaseTimer = window.setTimeout(() => {
        root.classList.remove("slider--highlight-pressed");
      }, 220);
    });
  }

  root.addEventListener("mouseenter", () => clearInterval(timer));
  root.addEventListener("mouseleave", scheduleAuto);

  watchForShatterLayers();
  showSlide(0);
  scheduleAuto();
})();
