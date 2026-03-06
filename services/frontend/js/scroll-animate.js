// Scroll-trigger animation for product cards.
(function () {
  const SELECTOR = ".product-card, .product-item, .card";
  const observed = new WeakSet();

  function markVisible(el) {
    if (!el || !el.classList) return;
    el.classList.add("in-view");
  }

  function collectTargets(root) {
    const list = [];
    if (root && root.matches && root.matches(SELECTOR)) {
      list.push(root);
    }
    if (root && root.querySelectorAll) {
      root.querySelectorAll(SELECTOR).forEach((el) => list.push(el));
    }
    return list;
  }

  let io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          markVisible(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );
  }

  function watch(el) {
    if (!el || observed.has(el)) return;
    observed.add(el);
    if (io) {
      io.observe(el);
      return;
    }
    markVisible(el);
  }

  function scan(root) {
    collectTargets(root || document).forEach(watch);
  }

  function init() {
    scan(document);
    if (!("MutationObserver" in window) || !document.body) return;
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          scan(node);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
