// why: gate analytics pixel loading behind explicit user consent.
(function () {
  var CONSENT_KEY = "SPK_ANALYTICS_CONSENT";
  var PIXEL_ID = "879425024802361";
  var PIXEL_SRC = "https://connect.facebook.net/en_US/fbevents.js";
  var CONSENT_GRANTED = "granted";
  var CONSENT_DENIED = "denied";

  function getStoredConsent() {
    try {
      var raw = String(localStorage.getItem(CONSENT_KEY) || "").trim().toLowerCase();
      if (raw === CONSENT_GRANTED || raw === CONSENT_DENIED) return raw;
      return "";
    } catch (_) {
      return "";
    }
  }

  function setStoredConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (_) {
      // ignore storage failures
    }
  }

  function loadMetaPixel() {
    if (window.fbq) return;
    var fbq = function () {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = fbq;
    window.fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    var script = document.createElement("script");
    script.async = true;
    script.src = PIXEL_SRC;
    var firstScript = document.getElementsByTagName("script")[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
  }

  function schedulePixelLoad() {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadMetaPixel, { timeout: 2500 });
      return;
    }
    window.setTimeout(loadMetaPixel, 1200);
  }

  function removeConsentBanner() {
    var existing = document.querySelector("[data-consent-banner]");
    if (existing) existing.remove();
  }

  function createConsentBanner() {
    if (document.querySelector("[data-consent-banner]")) return;
    var root = document.createElement("section");
    root.className = "consentBanner";
    root.setAttribute("data-consent-banner", "");
    root.setAttribute("role", "region");
    root.setAttribute("aria-label", "Cookie consent");
    root.innerHTML =
      '<p class="consentBanner__text">Allow anonymous analytics cookies to help improve SoftUpakaran performance and reliability?</p>' +
      '<div class="consentBanner__actions">' +
      '<button type="button" class="consentBanner__btn consentBanner__btn--allow" data-consent-allow>Allow</button>' +
      '<button type="button" class="consentBanner__btn consentBanner__btn--deny" data-consent-deny>Decline</button>' +
      "</div>";
    document.body.appendChild(root);

    var allowBtn = root.querySelector("[data-consent-allow]");
    var denyBtn = root.querySelector("[data-consent-deny]");
    if (allowBtn) {
      allowBtn.addEventListener("click", function () {
        setStoredConsent(CONSENT_GRANTED);
        removeConsentBanner();
        schedulePixelLoad();
      });
    }
    if (denyBtn) {
      denyBtn.addEventListener("click", function () {
        setStoredConsent(CONSENT_DENIED);
        removeConsentBanner();
      });
    }
  }

  function initConsentGate() {
    var consent = getStoredConsent();
    if (consent === CONSENT_GRANTED) {
      schedulePixelLoad();
      return;
    }
    if (consent === CONSENT_DENIED) {
      return;
    }
    createConsentBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initConsentGate);
  } else {
    initConsentGate();
  }
})();
