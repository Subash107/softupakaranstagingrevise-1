(function () {
  const scripts = [
    "js/scroll-animate.js?v=20260306b",
    "js/header-scroll-glow.js?v=20260306b",
    "js/banner-parallax.js?v=20260306b",
    "js/category-3d.js?v=20260306b",
  ];

  function hasScript(src) {
    const clean = String(src).split("?")[0];
    return Array.from(document.scripts).some((node) => {
      const current = (node.getAttribute("src") || "").split("?")[0];
      return current === clean;
    });
  }

  function appendScript(src) {
    if (hasScript(src)) return;
    const s = document.createElement("script");
    s.src = src;
    s.defer = true;
    document.body.appendChild(s);
  }

  function loadDeferredScripts() {
    scripts.forEach(appendScript);
  }

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadDeferredScripts, { timeout: 1800 });
  } else {
    window.setTimeout(loadDeferredScripts, 900);
  }
})();
