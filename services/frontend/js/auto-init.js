(function () {
  const scripts = [
    "js/scroll-animate.js?v=20260306c",
    "js/header-scroll-glow.js?v=20260306c",
    "js/banner-parallax.js?v=20260306c",
    "js/category-3d.js?v=20260306c",
  ];

  let didLoad = false;

  function toAbsolute(src) {
    try {
      return new URL(src, document.baseURI).toString();
    } catch (_) {
      return src;
    }
  }

  function normalizePath(src) {
    try {
      return new URL(src, document.baseURI).pathname;
    } catch (_) {
      return String(src || "").split("?")[0];
    }
  }

  function hasScript(src) {
    const clean = normalizePath(src);
    return Array.from(document.scripts).some((node) => {
      const current = normalizePath(node.src || node.getAttribute("src") || "");
      return current === clean;
    });
  }

  function appendScript(src) {
    if (hasScript(src)) return;
    const s = document.createElement("script");
    s.src = toAbsolute(src);
    s.defer = true;
    document.body.appendChild(s);
  }

  function loadDeferredScripts() {
    if (didLoad) return;
    didLoad = true;
    scripts.forEach(appendScript);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadDeferredScripts, { once: true });
  }

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadDeferredScripts, { timeout: 1200 });
  } else {
    window.setTimeout(loadDeferredScripts, 320);
  }
})();
