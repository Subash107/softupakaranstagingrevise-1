// Lightweight interactions for nav + collection cards.
(function () {
  const MARK = "data-3d-init";

  function initNavbarTouchFeedback() {
    const items = Array.from(document.querySelectorAll(".navbar button, .navbar a"));
    if (!items.length) return;
    items.forEach((el) => {
      if (el.hasAttribute(MARK)) return;
      el.setAttribute(MARK, "1");
      el.addEventListener(
        "touchstart",
        () => {
          el.classList.add("touch-press");
        },
        { passive: true }
      );
      const clear = () => el.classList.remove("touch-press");
      el.addEventListener("touchend", clear);
      el.addEventListener("touchcancel", clear);
    });
  }

  function initCollectionCards(grid) {
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('[class*="collection"]'));
    cards.forEach((card) => {
      if (!card || card.dataset.cardFxInit === "1") return;
      card.dataset.cardFxInit = "1";
      card.addEventListener("pointerdown", () => card.classList.add("pressed"));
      const clear = () => card.classList.remove("pressed");
      card.addEventListener("pointerup", clear);
      card.addEventListener("pointercancel", clear);
      card.addEventListener("mouseleave", clear);
    });
  }

  function initCollectionDrag(wrapper) {
    if (!wrapper || wrapper.dataset.dragInit === "1") return;
    if (document.querySelector(".collections-swiper")) return;
    wrapper.dataset.dragInit = "1";

    let isDown = false;
    let moved = false;
    let startX = 0;
    let scrollLeft = 0;

    wrapper.addEventListener("pointerdown", (e) => {
      isDown = true;
      moved = false;
      startX = e.clientX;
      scrollLeft = wrapper.scrollLeft;
      wrapper.classList.add("dragging");
      if (wrapper.setPointerCapture) {
        try {
          wrapper.setPointerCapture(e.pointerId);
        } catch (_) {}
      }
    });

    wrapper.addEventListener("pointermove", (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) moved = true;
      wrapper.scrollLeft = scrollLeft - dx;
    });

    const handleUp = (e) => {
      if (!isDown) return;
      isDown = false;
      wrapper.classList.remove("dragging");
      if (wrapper.releasePointerCapture) {
        try {
          wrapper.releasePointerCapture(e.pointerId);
        } catch (_) {}
      }
      if (!moved) return;
      wrapper.querySelectorAll("a.collection-card").forEach((link) => {
        const blocker = (ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          link.removeEventListener("click", blocker);
        };
        link.addEventListener("click", blocker, { once: true });
      });
    };

    wrapper.addEventListener("pointerup", handleUp);
    wrapper.addEventListener("pointercancel", handleUp);
  }

  function initCollections() {
    const grid = document.querySelector(".collection-grid");
    if (!grid) return;

    initCollectionCards(grid);
    if (grid.dataset.observeInit !== "1") {
      const observer = new MutationObserver((mutations) => {
        let hasAddedNodes = false;
        for (const m of mutations) {
          if (m.addedNodes && m.addedNodes.length) {
            hasAddedNodes = true;
            break;
          }
        }
        if (hasAddedNodes) initCollectionCards(grid);
      });
      observer.observe(grid, { childList: true, subtree: true });
      grid.dataset.observeInit = "1";
    }

    initCollectionDrag(document.querySelector(".collection-wrapper"));
  }

  function init() {
    initNavbarTouchFeedback();
    initCollections();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
