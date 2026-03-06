/* === Banner Config (edit later easily) === */
const BANNERS = [
  {
    title: "Premium subscriptions in Nepal",
    sub: "Netflix, Canva, ChatGPT, and more",
    link: "category.html?c=subscriptions",
    badge: "Nepal ready",
    metric: "10K+",
    metricLabel: "Digital deliveries"
  },
  {
    title: "WordPress plugins and SEO tools",
    sub: "Speed, security, and conversion upgrades",
    link: "category.html?c=wp-plugins",
    badge: "WP builders",
    metric: "120+",
    metricLabel: "Premium plugins"
  },
  {
    title: "Modern WordPress themes",
    sub: "Blog, news, and store-ready templates",
    link: "category.html?c=wp-themes",
    badge: "Design ready",
    metric: "85+",
    metricLabel: "Themes curated"
  },
  {
    title: "Netflix plans and profiles",
    sub: "Affordable access with instant activation",
    link: "category.html?c=netflix",
    badge: "Streaming",
    metric: "5 min",
    metricLabel: "Activation time"
  },
  {
    title: "Web development packages",
    sub: "Custom builds for businesses",
    link: "category.html?c=web-development",
    badge: "Custom desks",
    metric: "40+",
    metricLabel: "Dev partners"
  }
];
let sliderBanners = BANNERS.slice();
const HERO_BANNER_CACHE_KEY = "SPK_HERO_BANNER_CACHE_V2";
const HERO_BANNER_CACHE_TTL = 1000 * 60 * 60 * 6;

// --- Checkout config (replace with your real details) ---
// WhatsApp number must include country code, no + or spaces. Example Nepal: 97798XXXXXXXX
let WHATSAPP_NUMBER = "9779800000000";
// Replace this with your real QR image path (put your QR inside /assets)
let ESEWA_QR_IMAGE = "assets/esewa-qr-placeholder.svg";

const API_BASE = (localStorage.getItem("SPK_API_BASE") || window.API_BASE || "").trim().replace(/\/$/, "");
const API_BASE_HOST = API_BASE ? API_BASE.replace(/\/$/, "") : "";
  const ILM_STORE_API = "https://store.ilovemithila.com/wp-json/wc/store";
  const ILM_PROXY_BASE = API_BASE ? `${API_BASE}/api/public/ilm` : "";
const BLOG_POST_LIMIT = 4;

const CATEGORY_ORDER = [
  "freefire",
  "pubg",
  "gift",
  "subscriptions",
  "spotify",
  "social",
  "gears",
  "netflix",
  "wp-plugins",
  "wp-themes",
  "ecommerce",
  "vpn",
  "web-development"
];

const CATEGORY_NOTES = {
  "freefire": "Top up diamonds instantly with instant delivery.",
  "pubg": "Global PUBG UC pins and fast UID top-ups.",
  "gift": "Gift cards, credits, and promo codes for apps.",
  "subscriptions": "Premium subscriptions with instant activation.",
  "spotify": "Spotify Premium, family, and student plans.",
  "social": "Social media coins, boosters, and growth packs.",
  "gears": "Gaming gears, mice, headsets, and keyboards.",
  "netflix": "Netflix profiles and streaming bundles.",
  "wp-plugins": "GPL plugins for SEO, caching, and security.",
  "wp-themes": "Themes ready for news, blogs, and shops.",
  "ecommerce": "WooCommerce-ready templates and bundles.",
  "vpn": "VPN services for private browsing and streaming.",
  "web-development": "Turnkey web development toolkits."
};

const ILM_CATEGORY_SLUG_MAP = {
  "subscription": "subscriptions",
  "wordpress-plugins": "wp-plugins",
  "wordpress-themes": "wp-themes",
  "ecommerce-themes-plugins": "ecommerce",
  "vpn-in-nepal": "vpn",
  "web-development": "web-development"
};

const DEFAULT_CATEGORIES = [
  { id:"freefire", name:"Free Fire Top Up", tag:"Top up diamonds instantly", icon:"FF" },
  { id:"pubg", name:"PUBG UC", tag:"UC pins & UID top-up", icon:"PG" },
  { id:"gift", name:"Gift Cards", tag:"Steam, Google Play & more", icon:"GC" },
  { id:"subscriptions", name:"Subscriptions", tag:"Premium tools and streaming", icon:"SUB" },
  { id:"spotify", name:"Spotify", tag:"Premium plans & top-ups", icon:"SP" },
  { id:"social", name:"Social Media Boost", tag:"Coins, credits & boosts", icon:"SM" },
  { id:"gears", name:"Gaming Gears", tag:"Mice, headsets, keyboards", icon:"GG" },
  { id:"wp-plugins", name:"WP Plugins", tag:"SEO, cache, security tools", icon:"PL" },
  { id:"wp-themes", name:"WP Themes", tag:"Blog, news, and shop themes", icon:"TH" },
  { id:"ecommerce", name:"eCommerce", tag:"WooCommerce-ready package", icon:"EC" },
  { id:"vpn", name:"VPN", tag:"Secure browsing plans", icon:"VPN" },
  { id:"web-development", name:"Web Development", tag:"Custom website builds", icon:"WEB" }
];

const CATEGORY_LINKS = {
  "freefire": "collections/freefire.html",
  "pubg": "collections/pubg.html",
  "gift": "collections/giftcards.html",
  "subscriptions": "collections/subscriptions.html",
  "spotify": "collections/spotify.html",
  "social": "collections/social.html",
  "gears": "collections/gaming.html",
  "netflix": "collections/netflix.html",
  "wp-plugins": "collections/wp-plugins.html",
  "wp-themes": "collections/wp-themes.html",
  "ecommerce": "collections/ecommerce.html",
  "vpn": "collections/vpn.html",
  "web-development": "collections/webdev.html"
};

const DEFAULT_PRODUCTS = [
  {
    id: "popular-freefire-530",
    name: "Free Fire 530 Diamonds",
    category: "freefire",
    price: 999,
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
    note: "Direct UID top-up · Instant delivery"
  },
  {
    id: "popular-gaming-mouse",
    name: "Gaming Mouse RGB (Budget)",
    category: "gears",
    price: 1499,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    note: "2-year warranty · DPI 6400"
  },
  {
    id: "popular-google-play-10",
    name: "Google Play Gift Card $10",
    category: "gift",
    price: 1550,
    img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80",
    note: "US region · Digital PIN"
  },
  {
    id: "popular-netflix-premium",
    name: "Netflix Premium (1 Month)",
    category: "netflix",
    price: 1299,
    img: "https://store.ilovemithila.com/wp-content/uploads/2025/12/netflix-in-nepal.jpg",
    note: "Shared profile · 4K"
  },
  {
    id: "popular-pubg-uc",
    name: "PUBG UC 600 (Global)",
    category: "pubg",
    price: 1300,
    img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=900&q=80",
    note: "UID top-up · 5-10 min"
  },
  {
    id: "popular-spotify-3m",
    name: "Spotify Premium (3 Months)",
    category: "spotify",
    price: 1199,
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80",
    note: "Activation within 1 hour"
  },
  {
    id: "popular-steam-20",
    name: "Steam Wallet Code $20",
    category: "gift",
    price: 3100,
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    note: "Global/US · Instant code"
  },
  {
    id: "sample-netflix-nepal",
    name: "Netflix Premium - Nepal",
    category: "netflix",
    price: 1499,
    img: "https://images.unsplash.com/photo-1515170617208-5648d2fe5a4a?auto=format&fit=crop&w=900&q=80",
    note: "Nepal region · instant activation"
  },
  {
    id: "popular-tiktok-coins",
    name: "TikTok Coins 350",
    category: "social",
    price: 650,
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    note: "Nepal payment · Quick delivery"
  }
];

const SAMPLE_SUBSCRIPTIONS = [
  { id: "sample-netflix", name: "Netflix Premium (1 Month)", category: "netflix", price: 1299, img: "https://store.ilovemithila.com/wp-content/uploads/2025/12/netflix-in-nepal.jpg", note: "Shared profile - 4K" },
  { id: "sample-chatgpt", name: "ChatGPT Plus (1 Month)", category: "subscriptions", price: 1199, img: "https://store.ilovemithila.com/wp-content/uploads/2025/08/chatgpt-1.jpg", note: "AI + prompts" },
  { id: "sample-google-play", name: "Google Play $10 Card", category: "subscriptions", price: 1550, img: "https://store.ilovemithila.com/wp-content/uploads/2025/11/canva-nepal.jpg", note: "US region - digital code" }
];

const SAMPLE_TOOLS = [
  { id: "sample-wprocket", name: "WP Rocket 3.20", category: "wp-plugins", price: 299, img: "https://store.ilovemithila.com/wp-content/uploads/2025/05/wp-rocket-nasil-kurulur.jpg.webp", note: "Cache + SEO" },
  { id: "sample-divi", name: "Divi 5.0 Theme", category: "wp-themes", price: 359, img: "https://store.ilovemithila.com/wp-content/uploads/2025/05/divi-review-688x347-1.jpg", note: "Drag & drop builder" },
  { id: "sample-elementor", name: "Elementor Pro", category: "wp-plugins", price: 299, img: "https://store.ilovemithila.com/wp-content/uploads/2025/05/Elementor_Pro_Package_cleanup.png", note: "Visual page builder" }
];

const COLLECTION_SAMPLE_FALLBACK = [
  {
    id: "sample-ecommerce-kit",
    name: "Ecommerce Starter Kit",
    category: "ecommerce",
    price: 2499,
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    note: "WooCommerce-ready storefront + branding"
  },
  {
    id: "sample-vpn-plan",
    name: "Secure VPN - 6 Months",
    category: "vpn",
    price: 1799,
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80",
    note: "High-speed servers · No logs"
  },
  {
    id: "sample-web-dev-support",
    name: "Web Dev Support Pack",
    category: "web-development",
    price: 4999,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    note: "Landing page + CMS setup"
  }
];

const LOCALES = {
  en: {
    heroTagline: "Digital Delivery",
    trendingTitle: "Trending Subscriptions",
    trendingSubtitle: "Hot plans curated for Nepal.",
    addButton: "Add",
    cartEmptyTitle: "Your cart is empty",
    cartEmptyMeta: "Add some products to continue.",
    payWhatsApp: "Pay via WhatsApp",
    payEsewa: "Pay via eSewa QR",
    demoOrder: "Place demo order",
    demoNotice: "Demo checkout only (no payment). Replace later with a gateway.",
    availabilityPrefix: "Availability:",
    cartTitle: "Your Cart",
    checkoutTitle: "Checkout",
    langLabel: "Language"
  },
  ne: {
    heroTagline: "डिजिटल डेलिभरी",
    trendingTitle: "प्रचलित सदस्यताहरू",
    trendingSubtitle: "नेपालका लागि क्युरेट गरिएका हॉट योजना",
    addButton: "थप्नुहोस्",
    cartEmptyTitle: "तपाईंको कार्ट खाली छ",
    cartEmptyMeta: "किनमेलका लागि केही वस्तु थप्नुहोस्।",
    payWhatsApp: "व्हाट्सएपबाट भुक्तानी",
    payEsewa: "eSewa QR बाट भुक्तानी",
    demoOrder: "डेमो अर्डर पठाउनुहोस्",
    demoNotice: "डेमो चेकआउट मात्र (भुक्तानी छैन)। पछि गेटवे राख्नुहोस्।",
    availabilityPrefix: "उपलब्धता:",
    cartTitle: "तपाईंको कार्ट",
    checkoutTitle: "चेकआउट",
    langLabel: "भाषा"
  }
};
const SHATTER_FRAGMENT_CONFIG = [
  { clip: "inset(0 0 66% 0)", offsetX: -26, offsetY: -12, rotate: -10, scale: 0.98, delay: 0 },
  { clip: "inset(28% 0 42% 0)", offsetX: 24, offsetY: -6, rotate: 8, scale: 1, delay: 0.16 },
  { clip: "inset(52% 0 26% 0)", offsetX: -20, offsetY: 8, rotate: -6, scale: 0.97, delay: 0.32 },
  { clip: "inset(74% 0 0 0)", offsetX: 18, offsetY: 12, rotate: 6, scale: 0.95, delay: 0.48 }
];
LOCALES.np = LOCALES.ne;
let currentLocale = localStorage.getItem("softup-locale") || "en";
let demoOrderStatus = null;
let bilingualTextManager;
let languageSelector;

class BilingualTextManager {
  constructor(root = document) {
    this.root = root;
    this.nodes = [];
    this.refresh();
  }

  refresh() {
    this.nodes = Array.from(this.root.querySelectorAll("[data-en][data-np]"));
  }

  update(lang = "en") {
    const key = lang === "np" ? "np" : "en";
    this.nodes.forEach((node) => {
      const value = node.getAttribute(`data-${key}`);
      if (value !== null) {
        if (node.hasAttribute("data-shatter-text")) {
          renderShatterText(node, value);
        } else {
          node.textContent = value;
        }
      }
    });
  }
}

function t(key, fallback) {
  return (LOCALES[currentLocale] && LOCALES[currentLocale][key]) || LOCALES.en[key] || fallback || "";
}

function setLocale(locale) {
  if (locale === "np") locale = "ne";
  if (!LOCALES[locale]) locale = "en";
  currentLocale = locale;
  localStorage.setItem("softup-locale", locale);
  document.documentElement.lang = locale;
  document.querySelectorAll("[data-locale-text]").forEach((el) => {
    const key = el.getAttribute("data-locale-text");
    if (key) el.textContent = t(key, el.textContent);
  });
  const bilingualLang = locale === "ne" ? "np" : "en";
  bilingualTextManager?.update(bilingualLang);
  languageSelector?.highlight?.(bilingualLang);
  refreshHomeSections();
}

class LanguageSelector {
  constructor(options = {}) {
    this.containerSelector = options.containerSelector || "[data-lang-toggle]";
    this.buttonSelector = options.buttonSelector || "button[data-lang-btn]";
    this.buttons = [];
  }

  init() {
    const container = document.querySelector(this.containerSelector);
    if (!container) return;
    this.buttons = Array.from(container.querySelectorAll(this.buttonSelector));
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const langKey = btn.getAttribute("data-lang-btn") || "en";
        setLocale(this.localeFromLang(langKey));
      });
    });
  }

  highlight(langKey) {
    if (!this.buttons.length) return;
    const target = langKey === "np" ? "np" : "en";
    this.buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === target);
    });
  }

  localeFromLang(langKey) {
    return langKey === "np" ? "ne" : "en";
  }
}

function renderShatterText(node, value) {
  if (!node) return;
  const text = String(value ?? "");
  node.setAttribute("aria-label", text);
  node.classList.add("shatter-text");
  const fragments = node.querySelector(".shatter-text__fragments");
  const measure = node.querySelector(".shatter-text__measure");
  if (fragments && measure) {
    measure.textContent = text;
    fragments.querySelectorAll(".shatter-text__layer").forEach((layer) => {
      layer.textContent = text;
    });
    return;
  }
  node.innerHTML = "";
  const measureSpan = document.createElement("span");
  measureSpan.className = "shatter-text__measure";
  measureSpan.textContent = text;
  const wrapper = document.createElement("span");
  wrapper.className = "shatter-text__fragments";
  wrapper.setAttribute("aria-hidden", "true");
  SHATTER_FRAGMENT_CONFIG.forEach((fragment) => {
    const layer = document.createElement("span");
    layer.className = "shatter-text__layer";
    layer.textContent = text;
    layer.style.setProperty("--shatter-clip", fragment.clip);
    layer.style.setProperty("--shatter-delay", `${fragment.delay}s`);
    layer.style.setProperty("--shatter-ox", `${fragment.offsetX}px`);
    layer.style.setProperty("--shatter-oy", `${fragment.offsetY}px`);
    layer.style.setProperty("--shatter-rot", `${fragment.rotate}deg`);
    layer.style.setProperty("--shatter-scale", fragment.scale);
    wrapper.appendChild(layer);
  });
  node.appendChild(measureSpan);
  node.appendChild(wrapper);
}

function formatUSD(value) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function formatPriceLine(product) {
  if (!product) return "";
  const npr = formatNPR(product.price || 0);
  const usd = formatUSD(product.price_usd);
  return usd ? `${npr} • ${usd}` : npr;
}

function localeNote(product) {
  if (currentLocale === "ne" && product.note_ne) return product.note_ne;
  return product.note || "";
}

const AVAILABILITY_TRANSLATIONS = {
  "in stock": { en: "In stock", ne: "स्टकमा" },
  limited: { en: "Limited", ne: "सीमित" },
  "pre-order": { en: "Pre-order", ne: "पूर्व-अर्डर" },
  "promo stock": { en: "Promo stock", ne: "प्रमोशनल स्टक" }
};

function availabilityLabel(status) {
  if (!status) return "";
  const key = String(status).toLowerCase();
  return AVAILABILITY_TRANSLATIONS[key]
    ? (AVAILABILITY_TRANSLATIONS[key][currentLocale] || AVAILABILITY_TRANSLATIONS[key].en)
    : status;
}

const LAZY_IMAGE_PLACEHOLDER = "assets/product-1.svg";
const LAZY_IMAGE_MARGIN = "140px";

const lazyObserver = typeof IntersectionObserver !== "undefined"
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadLazyImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: LAZY_IMAGE_MARGIN })
  : null;

function loadLazyImage(img) {
  if (!img || img.dataset.loaded) return;
  const src = img.dataset.src;
  if (src) img.src = src;
  const srcset = img.dataset.srcset;
  if (srcset) img.srcset = srcset;
  img.dataset.loaded = "1";
  img.classList.add("loaded");
}

function initLazyImages(root = document) {
  const images = Array.from((root || document).querySelectorAll("img.lazy[data-src]"));
  images.forEach((img) => {
    if (img.dataset.loaded) return;
    if (!img.getAttribute("src")) img.src = LAZY_IMAGE_PLACEHOLDER;
    if (lazyObserver) {
      lazyObserver.observe(img);
    } else {
      loadLazyImage(img);
    }
  });
}

function lazyImage(src, alt = "", extraCls = "") {
  const safeSrc = escapeHtml(src || LAZY_IMAGE_PLACEHOLDER);
  const safeAlt = escapeHtml(alt || "");
  const classes = ["lazy", extraCls].filter(Boolean).join(" ");
  return `<img class="${classes}" loading="lazy" decoding="async" src="${LAZY_IMAGE_PLACEHOLDER}" data-src="${safeSrc}" alt="${safeAlt}">`;
}

function decodeHtmlEntities(value){
  let s = String(value || "");
  s = s.replace(/&amp;/g, "&")
       .replace(/&#038;/g, "&")
       .replace(/&#8211;/g, "-")
       .replace(/&#8212;/g, "-")
       .replace(/&#8217;/g, "'")
       .replace(/&#8220;/g, "\"")
       .replace(/&#8221;/g, "\"")
       .replace(/\u2013/g, "-")
       .replace(/\u2014/g, "-")
       .replace(/\u2018/g, "'")
       .replace(/\u2019/g, "'")
       .replace(/\u201C/g, "\"")
       .replace(/\u201D/g, "\"");
  return s;
}

/* 3D interactions removed per user request */

function isAscii(value){
  return /^[\x20-\x7E]*$/.test(String(value || ""));
}
async function loadPublicSettings(){
  try{
    const res = await fetch(`${API_BASE}/api/public/settings`);
    if(!res.ok) return;
    const s = await res.json();
    if(s.whatsapp_number) WHATSAPP_NUMBER = String(s.whatsapp_number).trim();
    if(s.esewa_qr_url){
      ESEWA_QR_IMAGE = s.esewa_qr_url.startsWith("http") ? s.esewa_qr_url : `${API_BASE}${s.esewa_qr_url}`;
    }
    // If QR already rendered, update it
    document.querySelectorAll(".qrWrap img").forEach(img => { img.src = ESEWA_QR_IMAGE; });
  }catch(e){
    // silent
  }
}

// ---------- Testimonials (homepage) ----------
function fmtDateShort(iso){
  if(!iso) return "";
  try{
    // SQLite datetime('now') format: YYYY-MM-DD HH:MM:SS
    const d = new Date(String(iso).replace(" ", "T") + "Z");
    if(isNaN(d.getTime())) return String(iso);
    return d.toISOString().slice(0,10);
  }catch(_){
    return String(iso);
  }
}

function starsHtml(rating){
  const r = parseInt(rating,10);
  if(!r || r < 1 || r > 5) return "";
  const filled = "?".repeat(r);
  const empty = "?".repeat(5-r);
  return `<span class="stars" aria-label="${r} out of 5">`+
         `${[...filled].map(()=>`<span class="star">?</span>`).join("")}`+
         `${[...empty].map(()=>`<span class="star" style="opacity:.35">?</span>`).join("")}`+
         `</span>`;
}

function escapeHtml(s){
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function escapeAttr(value){
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function resolveBlogImageUrl(value) {
  // Ensure uploads stored on the API host still resolve when the frontend runs elsewhere.
  const src = String(value ?? "").trim();
  if (!src) return "";
  if (/^(https?:)?\/\//i.test(src)) return src;
  if (src.startsWith("/uploads/")) return API_BASE_HOST ? `${API_BASE_HOST}${src}` : src;
  if (/^uploads\//i.test(src)) {
    const trimmed = src.replace(/^\/+/,"");
    return API_BASE_HOST ? `${API_BASE_HOST}/${trimmed}` : `/${trimmed}`;
  }
  return src;
}

async function loadTestimonials(){
  const host = document.getElementById("testimonialsList");
  if(!host) return;
  try{
    const res = await fetch(`${API_BASE}/api/public/feedback?limit=3`);
    if(!res.ok) return;
    const rows = await res.json();
    if(!Array.isArray(rows) || rows.length === 0) return;

    host.innerHTML = rows.map(r => {
      const who = (r.name && String(r.name).trim()) ? String(r.name).trim() : "Customer";
      const msg = escapeHtml(r.message || "");
      const when = fmtDateShort(r.created_at);
      const meta = `${starsHtml(r.rating)}${when ? `<span class="when">${escapeHtml(when)}</span>` : ""}`;
      return `
        <div class="quote">
          <p>"${msg}"</p>
          <div class="who">- ${escapeHtml(who)}</div>
          ${meta ? `<div class="metaLine">${meta}</div>` : ""}
        </div>
      `;
    }).join("");
  }catch(e){
    // silent
  }
}

function stripHtml(value) {
  return String(value || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function formatBlogDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function blogCardHtml(post) {
  const snippet = post.summary ? post.summary : stripHtml(post.content).slice(0, 160);
  const date = post.published_at ? formatBlogDate(post.published_at) : "";
  const imageUrl = resolveBlogImageUrl(post.featured_image);
  const image = imageUrl ? `<div class="blog-card__media"><img src="${escapeAttr(imageUrl)}" alt="${escapeHtml(post.title || "")}"></div>` : "";
  const link = post.slug ? `blog.html?slug=${encodeURIComponent(post.slug)}` : "#";
  return `
    <article class="blog-card">
      ${image}
      <div class="blog-card__meta">
        ${date ? `<span>${escapeHtml(date)}</span>` : ""}
      </div>
      <h3 class="blog-card__title">${escapeHtml(post.title || "Blog post")}</h3>
      <p class="blog-card__summary">${escapeHtml(snippet || "Read the latest insights from SoftUpakaran.")}</p>
      <div class="blog-card__actions">
        <a class="btn secondary" href="${escapeAttr(link)}" target="_blank" rel="noreferrer">${t("blogReadMore", "Read more")}</a>
      </div>
    </article>
  `;
}

async function loadBlogPosts() {
  try {
    const res = await fetch(`${API_BASE}/api/public/blog-posts?limit=${BLOG_POST_LIMIT}`, { cache: "no-cache" });
    if (!res.ok) throw new Error("Failed to load blog posts");
    const rows = await res.json();
    return Array.isArray(rows) ? rows : [];
  } catch (error) {
    console.warn("Failed to load blog posts:", error);
    return [];
  }
}

function renderBlogPosts(posts) {
  const host = document.querySelector("[data-blog-feed]");
  if (!host) return;
  if (!posts.length) {
    host.innerHTML = `
      <article class="blog-card placeholder">
        <p>Add a blog post via the admin panel to showcase stories here.</p>
      </article>
    `;
    return;
  }
  host.innerHTML = posts.map(blogCardHtml).join("");
  ensureVisible(host);
}

async function loadAndRenderBlog() {
  const posts = await loadBlogPosts();
  renderBlogPosts(posts);
}

const STORE_KEY = "softupakaran_cart_v1";

let categories = DEFAULT_CATEGORIES.slice();

let products = DEFAULT_PRODUCTS.slice();

function formatNPR(n){
  // simple format: Rs. 1,234
  const s = String(Math.round(n));
  return "Rs. " + s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function loadCart(){
  try{ return JSON.parse(localStorage.getItem(STORE_KEY) || "[]"); }catch{ return []; }
}
function saveCart(items){
  localStorage.setItem(STORE_KEY, JSON.stringify(items));
  updateCartCount();
}
function cartCount(){
  return loadCart().reduce((sum, it) => sum + (it.qty || 0), 0);
}
function updateCartCount(){
  const el = document.querySelector("[data-cart-count]");
  if(el) el.textContent = cartCount();
}

function addToCart(productId, qty=1){
  const cart = loadCart();
  const existing = cart.find(x => x.id === productId);
  if(existing) existing.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart(cart);
}

function setQty(productId, qty){
  const cart = loadCart().map(x => x.id === productId ? ({...x, qty}) : x).filter(x => x.qty > 0);
  saveCart(cart);
}

function cartLines(){
  const cart = loadCart();
  return cart
    .map(line => {
      const p = products.find(x => x.id === line.id);
      if(!p) return null;
      return { ...p, qty: line.qty, lineTotal: p.price * line.qty };
    })
    .filter(Boolean);
}

function cartTotal(){
  return cartLines().reduce((sum, l) => sum + l.lineTotal, 0);
}

function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

function ensureVisible(root=document){
  $all(".card, .product-card, .product-item", root)
    .forEach(el => el.classList.add("in-view"));
  initLazyImages(root);
}


function renderCategories(){
  const root = document.querySelector("[data-categories]");
  if(!root) return;

  root.innerHTML = categories.map((c, idx) => {
    const target = CATEGORY_LINKS[c.id] || `category.html?c=${encodeURIComponent(c.id)}`;
    return `
    <div class="collection-card" data-category="${c.id}" aria-label="${c.name}" style="--spiral-index:${idx}">
      <a class="collection-card__link collection-link" href="${target}" data-category="${c.id}" aria-label="${c.name}"></a>
      <div class="card">
        <div class="card-glow"></div>
        <div class="card-content">
          <div class="pad">
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:36px;height:36px;border-radius:14px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);font-size:18px">${c.icon}</div>
              <div>
                <p class="cardTitle">${c.name}</p>
                <p class="cardMeta">${c.tag}</p>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="collection-card__preview" data-inline-toggle aria-label="Preview ${c.name} samples"><span aria-hidden="true">👁️</span><span>Preview</span></button>
      </div>
    </div>
    `;
  }).join("");
  ensureVisible(root);
  if(typeof initCardPhysics === 'function') initCardPhysics();
  // initialize product sections after rendering
  if(typeof renderProductSections === 'function') renderProductSections();
  // attach inline sample toggles for grid / non-swiper layouts
  if(typeof attachInlineSamples === 'function') attachInlineSamples();
  wireCategoryCardNavigation();
}

// Attach click handlers to show inline sample products under each collection card
function attachInlineSamples(){
  const root = document.querySelector('[data-categories]');
  if(!root) return;
  root.querySelectorAll('[data-inline-toggle]').forEach(button => {
    button.removeEventListener('click', button._inlineHandler);
    const handler = function(e){
      e.preventDefault();
      e.stopPropagation();
      const card = button.closest('.collection-card');
      const cat = card?.getAttribute('data-category');
      if(!card || !cat) return;
      toggleInlineSamples(card, cat);
    };
    button.addEventListener('click', handler);
    button._inlineHandler = handler;
  });
}

function wireCategoryCardNavigation(){
  const root = document.querySelector('[data-categories]');
  if(!root) return;
  if(root._navHandler){
    root.removeEventListener('click', root._navHandler);
  }
  const handler = (event) => {
    if(event.target.closest && event.target.closest('[data-inline-toggle]')) return;
    const card = event.target.closest && event.target.closest('.collection-card');
    if(!card) return;
    const category = card.getAttribute('data-category');
    if(!category) return;
    event.preventDefault();
    loadProducts(category);
  };
  root.addEventListener('click', handler);
  root._navHandler = handler;
}

function toggleInlineSamples(card, category){
  // If a sample container already exists for this card, remove it
  const existing = card.parentElement.querySelector('.inline-samples[data-cat="'+category+'"]');
  if(existing){
    existing.remove();
    return;
  }
  // remove any other inline samples on the page
  document.querySelectorAll('.inline-samples').forEach(el => el.remove());

  const container = document.createElement('div');
  container.className = 'inline-samples';
  container.setAttribute('data-cat', category);
  // build a single sample product entry
  const items = products.filter(p => p.category === category).slice(0,1);
  if(items.length === 0){
    container.innerHTML = `<div class="card"><div class="pad"><p class="cardTitle">No sample products</p><p class="cardMeta">No items available for this collection yet.</p></div></div>`;
  } else {
    // header with "View all" link plus samples grid
    const header = document.createElement('div');
    header.className = 'sectionHeader inline-samples-header';
    header.innerHTML = `
      <div>
        <h3>${card.getAttribute('aria-label') || category}</h3>
        <p class="cardMeta">Sample products</p>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <a class="btn" href="category.html?c=${encodeURIComponent(category)}">View all</a>
        <button class="inline-close btn icon" aria-label="Close inline samples">×</button>
      </div>
    `;
    container.appendChild(header);
    const grid = document.createElement('div');
    grid.className = 'inline-samples-grid';
    grid.innerHTML = items.map(productCard).join('');
    container.appendChild(grid);
    // wire add buttons inside the container
    setTimeout(() => wireAddButtons(container), 20);
    // wire close button
    setTimeout(() => {
      const closeBtn = container.querySelector('.inline-close');
      if(closeBtn){
        closeBtn.addEventListener('click', (ev) => { ev.preventDefault(); ev.stopPropagation(); container.classList.remove('show'); setTimeout(()=>container.remove(), 220); });
      }
    }, 30);
  }

  // insert after the card's slide/column
  // card might be inside a .swiper-slide or direct grid cell
  const insertAfter = card.closest('.swiper-slide') || card;
  if(insertAfter){
    insertAfter.insertAdjacentElement('afterend', container);
    // animate open
    setTimeout(() => container.classList.add('show'), 10);
    // scroll into view slightly below the card
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Initialize Swiper for collections, wire click behavior
function initSwiperCollections(){
  // Responsive mode: show as grid on wide screens, use Swiper on small screens
  const swiperEl = document.querySelector('.collections-swiper');
  if(!swiperEl) return;
  const shouldUseSwiper = window.innerWidth <= 900; // breakpoint

  // destroy existing swiper if present
  try{ if(window._collectionsSwiper){ window._collectionsSwiper.destroy(true, true); window._collectionsSwiper = null; } }catch(_){ }

  if(!shouldUseSwiper){
    // grid mode: add class to use CSS grid layout and skip Swiper init
    swiperEl.classList.add('grid-mode');
    // ensure pagination hidden when in grid-mode
    const pag = swiperEl.querySelector('.swiper-pagination'); if(pag) pag.style.display = 'none';
    // attach click handlers to slides (they are collection cards)
    swiperEl.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.addEventListener('click', (e) => {
        // toggle inline samples (handled by attachInlineSamples via card click)
        // stop any autoplay if exists
        try{ window._collectionsSwiper && window._collectionsSwiper.autoplay && window._collectionsSwiper.autoplay.stop(); }catch(_){ }
      });
    });
    return;
  }

  // swiper mode
  swiperEl.classList.remove('grid-mode');
  if(swiperEl.querySelector('.swiper-pagination')) swiperEl.querySelector('.swiper-pagination').style.display = '';
  if(typeof Swiper === 'undefined') return;
  const swiper = new Swiper(swiperEl, {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    coverflowEffect: { rotate: 40, stretch: 0, depth: 160, modifier: 1, slideShadows: true },
    pagination: { el: swiperEl.querySelector('.swiper-pagination'), clickable: true }
  });
  window._collectionsSwiper = swiper;

  // clicking a slide: stop autoplay, show matching product section and smooth scroll
  swiperEl.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('click', (e) => {
      try{ swiper.autoplay.stop(); }catch(_){ }
      const target = slide.dataset.target || (slide.querySelector && slide.querySelector('a.collection-link') && slide.querySelector('a.collection-link').dataset ? slide.querySelector('a.collection-link').dataset.category : undefined);
      const anchor = e.target.closest && e.target.closest('a.collection-link');
      if(target && !anchor){
        document.querySelectorAll('.product-section').forEach(s=>s.classList.remove('active'));
        const sec = document.getElementById(target);
        if(sec){ sec.classList.add('active'); sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      } else if(target && anchor){
        const sec = document.getElementById(target);
        if(sec){ sec.classList.add('active'); }
      }
    });
  });

  // re-evaluate on resize
  if(!window._collectionsResizeHandler){
    window._collectionsResizeHandler = () => {
      // small debounce
      clearTimeout(window._collectionsResizeTimeout);
      window._collectionsResizeTimeout = setTimeout(() => initSwiperCollections(), 180);
    };
    window.addEventListener('resize', window._collectionsResizeHandler);
  }
}

// Render hidden product-section containers for each category
function renderProductSections(){
  const container = document.getElementById('collection-product-sections');
  if(!container) return;
  container.innerHTML = categories.map(c => {
    return `
      <div id="${c.id}" class="product-section">
        <div class="sectionHeader">
          <div>
            <h2>${c.name}</h2>
            <p>${c.tag}</p>
          </div>
          <a class="btn" href="category.html?c=${encodeURIComponent(c.id)}">View all</a>
        </div>
        <div class="grid products-grid" data-products-for="${c.id}"></div>
      </div>
    `;
  }).join('');
  // populate products for each section using available products array
  categories.forEach(cat => {
    const grid = document.querySelector(`[data-products-for="${cat.id}"]`);
    if(!grid) return;
    const items = products.filter(p => p.category === cat.id).slice(0,6);
    if(items.length){ grid.innerHTML = items.map(productCard).join(''); wireAddButtons(grid); }
    else { grid.innerHTML = `<div class="card"><div class="pad"><p class="cardTitle">No products</p><p class="cardMeta">No items available for ${cat.name}.</p></div></div>`; }
  });
}

// helper used by collection-card click handler
function loadProducts(category){
  // this can be overridden by other code; default navigates to category page
  if(!category) return;
  const target = CATEGORY_LINKS[category] || `category.html?c=${encodeURIComponent(category)}`;
  window.location.href = target;
}

function productCard(p){
  return `
  <div class="card popular-card">
    <div class="popular-card__media">
      <a href="product.html?id=${encodeURIComponent(p.id)}" class="thumb" aria-label="${p.name}">
        ${lazyImage(p.img, p.name, "popular-card__image")}
      </a>
      <div class="popular-card__glow"></div>
      <span class="popular-card__badge">Popular product</span>
    </div>
    <div class="popular-card__body">
      <p class="cardTitle">${p.name}</p>
      <p class="cardMeta">${localeNote(p)}</p>
      <div class="price">
        <div>
          <strong>${formatPriceLine(p)}</strong>
          ${p.tier ? `<small class="cardMeta" style="margin-top:3px">${p.tier}</small>` : ""}
          ${p.availability ? `<small class="small">${t("availabilityPrefix")} ${availabilityLabel(p.availability)}</small>` : ""}
        </div>
        <button class="btn primary" data-add="${p.id}">${t("addButton", "Add")}</button>
      </div>
    </div>
  </div>
  `;
}

function wireAddButtons(root=document){
  $all("[data-add]", root).forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(btn.getAttribute("data-add"), 1);
      openCart();
    });
  });
}

function registerSampleProducts(items = []){
  if(!items.length) return;
  items.forEach((item) => {
    if(!products.find((p) => p.id === item.id)){
      products.push({ ...item });
    }
  });
}

registerSampleProducts([...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS, ...COLLECTION_SAMPLE_FALLBACK]);

const CURATED_CONFIG = [
  {
    attr: "subscriptions",
    categories: ["subscriptions", "netflix"],
    fallback: "More subscriptions arriving soon.",
    sample: SAMPLE_SUBSCRIPTIONS,
  },
  {
    attr: "wp-plugins",
    categories: ["wp-plugins", "wp-themes"],
    fallback: "More tools and themes loading shortly.",
    sample: SAMPLE_TOOLS,
  },
];

function renderCuratedSections(){
  CURATED_CONFIG.forEach((cfg) => {
    const root = document.querySelector(`[data-curated="${cfg.attr}"]`);
    if(!root) return;
    const items = products.filter(p => cfg.categories.includes(p.category)).slice(0, 6);
    if(items.length){
      root.innerHTML = items.map(productCard).join("");
      wireAddButtons(root);
      ensureVisible(root);
    } else {
      root.innerHTML = `
        <div class="card" style="grid-column:1/-1">
          <div class="pad">
            <p class="cardTitle">Loading curated picks</p>
            <p class="cardMeta">${cfg.fallback}</p>
          </div>
        </div>
      `;
      if(cfg.sample){
        registerSampleProducts(cfg.sample);
        const sampleGrid = cfg.sample.map(productCard).join("");
        root.innerHTML = `<div class="curatedFallback">${sampleGrid}</div>`;
        wireAddButtons(root);
        ensureVisible(root);
      }
    }
  });
}

function refreshHomeSections(){
  renderCuratedSections();
  renderPopular();
  renderCategoryPage();
  renderProductPage();
}

function getPopularCatalog(){
  const seen = new Set(DEFAULT_PRODUCTS.map(p => p.id));
  const extras = products.filter((p) => !seen.has(p.id));
  return [...DEFAULT_PRODUCTS, ...extras];
}

function renderPopular(){
  const root = document.querySelector("[data-popular]");
  if(!root) return;
  const items = getPopularCatalog().slice(0, 8);
  root.innerHTML = items.map(productCard).join("");
  wireAddButtons(root);
  ensureVisible(root);
}

function getParam(name){
  const u = new URL(location.href);
  return u.searchParams.get(name);
}

function renderCategoryPage(){
  const root = document.querySelector("[data-category-products]");
  if(!root) return;
  const id = getParam("c") || "subscriptions";
  const cat = categories.find(x => x.id === id);
  document.title = `${cat ? cat.name : "Category"} - SoftUpakaran`;
  const header = document.querySelector("[data-category-title]");
  if(header) header.textContent = cat ? cat.name : "Category";
  const filtered = products.filter(p => p.category === id);
  const fallbackSample = {
    id: "sample-category-placeholder",
    name: "Sample Netflix Premium",
    category: "netflix",
    price: 1599,
    img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80",
    note: "Nepal ready • Instant delivery"
  };
  root.innerHTML = filtered.length
    ? filtered.map(productCard).join("")
    : id === "netflix"
      ? productCard(fallbackSample)
      : `
        <div class="card"><div class="pad">
          <p class="cardTitle">No items yet</p>
          <p class="cardMeta">Add your real products later in <span class="small">js/app.js</span>.</p>
        </div></div>`;
  wireAddButtons(root);
  ensureVisible(root);
}

function renderProductPage(){
  const root = document.querySelector("[data-product]");
  if(!root) return;
  const id = getParam("id") || "p1";
  const p = products.find(x => x.id === id) || products[0];
  if(!p){
    root.innerHTML = `
      <div class="card"><div class="pad">
        <p class="cardTitle">Loading product...</p>
        <p class="cardMeta">Fetching details from the catalog.</p>
      </div></div>`;
    loadProductById(id).then((result) => {
      if(result) renderProductPage();
    });
    return;
  }
  document.title = `${p.name} - SoftUpakaran`;
  const heroContent = `
    <div class="heroGrid">
      <div class="heroCard">
        <div class="thumb" style="aspect-ratio: 16/11">
          ${lazyImage(p.img, p.name, "hero-img")}
        </div>
      </div>
      <div class="heroCard">
        <div class="inner">
          <div class="kicker">Digital Delivery</div>
          <div class="h1" style="margin-top:10px">${p.name}</div>
          <p class="sub">${p.note}. After payment, share your account email/ID or site URL on WhatsApp. We deliver within 5-30 minutes.</p>
          <div style="margin-top:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
            <div class="badge">${formatNPR(p.price)}</div>
            <div class="small">Secure checkout - Support chat</div>
          </div>
          <div class="heroActions">
            <button class="btn primary" id="buyNow">Add to cart</button>
            <a class="btn" href="category.html?c=${encodeURIComponent(p.category)}">Back to category</a>
          </div>
          <div style="margin-top:18px">
            <div class="feature">
              <h3>Steps</h3>
              <p>1) Choose plan - 2) Share details - 3) Pay - 4) Get delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  root.innerHTML = heroContent + renderRelatedSection(p);
  $("#buyNow")?.addEventListener("click", () => { addToCart(p.id, 1); openCart(); });
  ensureVisible(root);
  initLazyImages(root);
}

function relatedCard(p){
  return `
    <a class="related-card" href="product.html?id=${encodeURIComponent(p.id)}">
      <div class="thumb">
        ${lazyImage(p.img, p.name)}
      </div>
      <p class="title">${escapeHtml(p.name)}</p>
      <p class="price">${formatNPR(p.price)}</p>
    </a>
  `;
}

function renderRelatedSection(current){
  if(!current) return "";
  const related = products
    .filter(p => p.category === current.category && p.id !== current.id)
    .slice(0, 4);
  if(!related.length) return "";
  return `
    <section class="related-section">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap;">
        <h3>You may also like</h3>
        <a class="btn icon" href="category.html?c=${encodeURIComponent(current.category)}">View category</a>
      </div>
      <div class="related-grid">
        ${related.map(relatedCard).join("")}
      </div>
    </section>
  `;
}

const backendProductCache = new Map();

function transformBackendProduct(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    category: row.category_id,
    price: row.price_npr,
    img: row.image || "assets/product-1.svg",
    note: row.note || "Instant delivery"
  };
}

async function loadProductById(id) {
  if (!id || !API_BASE) return null;
  if (backendProductCache.has(id)) return backendProductCache.get(id);

  const promise = (async () => {
    try {
      const res = await fetch(`${API_BASE}/api/products/${encodeURIComponent(id)}`);
      if (!res.ok) return null;
      const row = await res.json();
      const product = transformBackendProduct(row);
      if (!product) return null;
      const existing = products.findIndex((p) => p.id === product.id);
      if (existing >= 0) {
        products[existing] = product;
      } else {
        products.push(product);
      }
      return product;
    } catch (_) {
      return null;
    } finally {
      backendProductCache.delete(id);
    }
  })();

  backendProductCache.set(id, promise);
  return promise;
}

function buildCartModal(){
  const backdrop = document.querySelector("[data-cart-modal]");
  if(!backdrop) return;
  const closeBtns = backdrop.querySelectorAll("[data-cart-close]");
  closeBtns.forEach(b => b.addEventListener("click", closeCart));
  backdrop.addEventListener("click", (e) => { if(e.target === backdrop) closeCart(); });

  // allow ESC
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeCart(); });
}

function openCart(){
  const backdrop = document.querySelector("[data-cart-modal]");
  if(!backdrop) return;
  renderCart();
  backdrop.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function closeCart(){
  const backdrop = document.querySelector("[data-cart-modal]");
  if(!backdrop) return;
  backdrop.style.display = "none";
  document.body.style.overflow = "";
}

function renderCart(){
  const backdrop = document.querySelector("[data-cart-modal]");
  if(!backdrop) return;
  const body = backdrop.querySelector("[data-cart-body]");
  const footer = backdrop.querySelector("[data-cart-footer]");
  const lines = cartLines();
  const statusHtml = demoOrderStatus
    ? `<div class="notice demo-order-status ${demoOrderStatus.ok ? "success" : "error"}" data-demo-status>${demoOrderStatus.message}</div>`
    : "";

  if(!lines.length){
    body.innerHTML = `<div class="card"><div class="pad">
      <p class="cardTitle">${t("cartEmptyTitle", "Your cart is empty")}</p>
      <p class="cardMeta">${t("cartEmptyMeta", "Add some products to continue.")}</p>
    </div></div>`;
    footer.innerHTML = `
      ${statusHtml}
      <div class="notice">Tip: click ${t("addButton", "Add")} on any product.</div>
      <button class="btn primary" data-cart-close>Continue shopping</button>
    `;
    footer.querySelector("[data-cart-close]")?.addEventListener("click", closeCart);
    updateCartCount();
    return;
  }

  body.innerHTML = lines.map(l => `
    <div class="cartRow">
      ${lazyImage(l.img, l.name, "cart-thumb")}
      <div>
        <p class="name">${l.name}</p>
        <p class="desc">${formatNPR(l.price)} - ${l.note}</p>
      </div>
      <div class="qty">
        <button aria-label="Decrease" data-dec="${l.id}">-</button>
        <span>${l.qty}</span>
        <button aria-label="Increase" data-inc="${l.id}">+</button>
      </div>
    </div>
  `).join("") + `

    <div class="payGrid" style="margin-top:14px">
      <div class="payCard">
        <h4>Pay via eSewa QR</h4>
        <p>Scan the QR to pay. Then click <b>Checkout</b> to send proof on WhatsApp.</p>
        <div class="qrWrap">
          <img src="${ESEWA_QR_IMAGE}" alt="eSewa QR" loading="lazy" decoding="async">
        </div>
      </div>

      <div class="payCard">
        <h4>WhatsApp Support</h4>
        <p>Send your cart details to WhatsApp. We will confirm price and deliver instantly.</p>
        <button class="btn" data-inline-wa>Open WhatsApp</button>
        <div class="small" style="margin-top:10px">Number: <span class="mono">${WHATSAPP_NUMBER}</span></div>
      </div>
    </div>
  `;

  initLazyImages(body);

  footer.innerHTML = `
    ${statusHtml}
    <div>
      <div class="tot">Total: ${formatNPR(cartTotal())}</div>
      <div class="notice">Demo checkout only (no payment). Replace later with real gateway.</div>
    </div>
    <div>
      <div class="notice">${t("demoNotice")}</div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end">
      <button class="btn" data-clear>Clear</button>
      <button class="btn secondary" data-demo-order>${t("demoOrder")}</button>
      <button class="btn primary" data-checkout>Checkout</button>
    </div>
  `;

  body.querySelectorAll("[data-inc]").forEach(b => b.addEventListener("click", () => {
    const id = b.getAttribute("data-inc");
    const line = loadCart().find(x => x.id === id);
    setQty(id, (line?.qty || 0) + 1);
    renderCart();
  }));
  body.querySelectorAll("[data-dec]").forEach(b => b.addEventListener("click", () => {
    const id = b.getAttribute("data-dec");
    const line = loadCart().find(x => x.id === id);
    setQty(id, Math.max(0, (line?.qty || 0) - 1));
    renderCart();
  }));

  
  body.querySelector("[data-inline-wa]")?.addEventListener("click", async () => {
    await sendOrderToBackend("User opened WhatsApp checkout from cart");
    const msg = encodeURIComponent(buildWhatsAppMessage());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank");
  });

  footer.querySelector("[data-clear]")?.addEventListener("click", () => { saveCart([]); renderCart(); });
  footer.querySelector("[data-demo-order]")?.addEventListener("click", async () => {
    await triggerDemoOrder();
  });
  footer.querySelector("[data-checkout]")?.addEventListener("click", () => {
    openPayModal();
  });

updateCartCount();
}

function wireCartButtons(){
  document.querySelectorAll("[data-open-cart]").forEach(b => b.addEventListener("click", (e) => {
    e.preventDefault();
    openCart();
  }));
}

function wireSearch(){
  document.querySelectorAll("[data-search]").forEach((input) => {
    if(!input) return;
    const dropdown = input.closest(".search")?.querySelector("[data-search-dropdown]");
    let suggestions = [];
    let activeIndex = -1;
    let blurTimer = null;
    const root = document.querySelector("[data-popular]");

    const hideDropdown = () => {
      if(!dropdown) return;
      dropdown.classList.remove("visible");
      activeIndex = -1;
    };

    const setActive = (index) => {
      if(index < 0) index = -1;
      if(!dropdown) return;
      activeIndex = index;
      const buttons = dropdown.querySelectorAll(".search-dropdown-item");
      buttons.forEach((btn, i) => btn.classList.toggle("active", i === index));
    };

    const renderDropdown = (items, query) => {
      if(!dropdown) return;
      if(!query){
        dropdown.innerHTML = "";
        hideDropdown();
        return;
      }
      if(!items.length){
        dropdown.innerHTML = `<div class="search-dropdown-empty">No results for "${escapeHtml(query)}"</div>`;
        dropdown.classList.add("visible");
        suggestions = [];
        activeIndex = -1;
        return;
      }
      suggestions = items;
      activeIndex = -1;
      dropdown.innerHTML = items.map((p, idx) => `
        <button type="button" class="search-dropdown-item" data-search-id="${encodeURIComponent(p.id)}" data-search-index="${idx}">
          <span>${escapeHtml(p.name)}</span>
          <small>${formatNPR(p.price)}</small>
        </button>
      `).join("");
      dropdown.classList.add("visible");
    };

    const updateResults = () => {
      const q = input.value.trim().toLowerCase();
      if(!root) return;
      const filtered = q ? products.filter(p => p.name.toLowerCase().includes(q)) : [];
      const gridItems = filtered.slice(0, 8);
      root.innerHTML = gridItems.length ? gridItems.map(productCard).join("") : `
        <div class="card" style="grid-column:1/-1"><div class="pad">
          <p class="cardTitle">No matches</p>
          <p class="cardMeta">Try a different keyword.</p>
        </div></div>
      `;
      wireAddButtons(root);
      ensureVisible(root);
      renderDropdown(filtered.slice(0, 6), q);
    };

    input.addEventListener("input", updateResults);
    input.addEventListener("focus", () => {
      if(blurTimer) { clearTimeout(blurTimer); blurTimer = null; }
      if(suggestions.length && dropdown){
        dropdown.classList.add("visible");
      }
    });
    input.addEventListener("blur", () => {
      blurTimer = setTimeout(() => hideDropdown(), 180);
    });

    input.addEventListener("keydown", (e) => {
      if(!dropdown || !dropdown.classList.contains("visible") || !suggestions.length) return;
      if(e.key === "ArrowDown"){
        e.preventDefault();
        setActive((activeIndex + 1) % suggestions.length);
      } else if(e.key === "ArrowUp"){
        e.preventDefault();
        setActive((activeIndex + suggestions.length - 1) % suggestions.length);
      } else if(e.key === "Enter"){
        if(activeIndex >= 0 && activeIndex < suggestions.length){
          e.preventDefault();
          const target = suggestions[activeIndex];
          if(target){
            window.location.href = `product.html?id=${encodeURIComponent(target.id)}`;
          }
        }
      } else if(e.key === "Escape"){
        hideDropdown();
      }
    });

    document.addEventListener("click", (e) => {
      if(!dropdown) return;
      if(!e.target.closest(".search")){
        hideDropdown();
      }
    });

    dropdown?.addEventListener("mousedown", (e) => {
      e.preventDefault();
    });
    dropdown?.addEventListener("click", (e) => {
      const btn = (e.target.closest ? e.target.closest("[data-search-id]") : null);
      if(btn){
        const id = btn.getAttribute("data-search-id");
        if(id){
          window.location.href = `product.html?id=${encodeURIComponent(id)}`;
        }
      }
    });
  });
}

// --- Payment / Checkout ---

async function sendOrderToBackend(extraNote){
  try{
    const lines = cartLines();
    if(!lines || !lines.length) {
      return { ok: false, error: "Cart is empty" };
    }

    const total = cartTotal();
    const payload = {
      source: "softupakaran-web",
      items: lines.map(l => ({
        id: l.id,
        name: l.name,
        qty: l.qty,
        lineTotal: l.lineTotal
      })),
      totalNpr: total,
      extraNote: extraNote || null
    };

    // If your backend is on another host/port, change this URL.
    const res = await fetch(`${API_BASE}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const text = await res.text().catch(() => "");
    let data = null;
    try{
      data = text ? JSON.parse(text) : null;
    }catch(_){}

    if(!res.ok){
      const error = (data && (data.error || data.message)) ? (data.error || data.message) : (text || res.statusText);
      return { ok: false, error };
    }
    return { ok: true, data: data || {} };
  }catch(err){
    console.error("Failed to send order to backend:", err);
    return { ok: false, error: err.message || "Request failed" };
  }
}

async function triggerDemoOrder(){
  const result = await sendOrderToBackend("Demo order triggered from storefront");
  if(!result || !result.ok){
    demoOrderStatus = {
      ok: false,
      message: escapeHtml(result?.error || "Demo order failed. Check console.")
    };
    renderCart();
    return result;
  }
  const orderId = (result.data && (result.data.id ?? result.data.orderId)) || result.id || "unknown";
  const safeId = escapeHtml(String(orderId));
  const logPath = escapeHtml(`services/backend/logs/order-${safeId}.json`);
  demoOrderStatus = {
    ok: true,
    message: `Demo order #${safeId} recorded. Backend log: ${logPath}`
  };
  renderCart();
  return result;
}


function buildWhatsAppMessage(){
  const lines = cartLines();
  const total = cartTotal();
  const items = lines.map(l => `- ${l.name} x${l.qty} = ${formatNPR(l.lineTotal)}`).join("\\n");
  return `Hello SoftUpakaran,\n\nI want to order:\n${items}\n\nTotal: ${formatNPR(total)}\n\nPlease guide me for payment & delivery.`;
}

function openPayModal(){
  const backdrop = document.querySelector("[data-pay-modal]");
  if(!backdrop) return;

  const body = backdrop.querySelector("[data-pay-body]");
  const footer = backdrop.querySelector("[data-pay-footer]");
  const total = cartTotal();

  body.innerHTML = `
    <div class="payGrid">
      <div class="payCard">
        <h4>Pay via WhatsApp</h4>
        <p>Send your cart details to WhatsApp. We can confirm price and deliver instantly.</p>
        <button class="btn primary" data-pay-wa>Open WhatsApp</button>
        <div class="small" style="margin-top:10px">Tip: replace number in <span class="small">js/app.js</span></div>
      </div>

      <div class="payCard">
        <h4>Pay via eSewa QR</h4>
        <p>Scan the QR and then send the payment screenshot on WhatsApp.</p>
        <div class="qrWrap">
          <img src="${ESEWA_QR_IMAGE}" alt="eSewa QR">
        </div>
        <div class="heroActions" style="margin-top:12px">
          <button class="btn" data-pay-copy>Total: ${formatNPR(total)}</button>
          <button class="btn" data-pay-after>Paid (send proof)</button>
        </div>
      </div>
    </div>
  `;

  footer.innerHTML = `
    <div class="notice">This is a demo checkout flow. Replace with real gateway/API when ready.</div>
    <button class="btn" data-pay-close>Close</button>
  `;

  backdrop.querySelectorAll("[data-pay-close]").forEach(b => b.addEventListener("click", closePayModal));

  backdrop.querySelector("[data-pay-wa]")?.addEventListener("click", async () => {
    await sendOrderToBackend("User opened WhatsApp checkout from pay modal");
    const msg = encodeURIComponent(buildWhatsAppMessage());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank");
  });

  backdrop.querySelector("[data-pay-copy]")?.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(`Total: ${formatNPR(total)}`);
      alert("Total copied.");
    }catch{
      alert(`Total: ${formatNPR(total)}`);
    }
  });

  backdrop.querySelector("[data-pay-after]")?.addEventListener("click", async () => {
    await sendOrderToBackend("User clicked Paid (eSewa QR)");
    const msg = encodeURIComponent(buildWhatsAppMessage() + "\n\nI have paid via eSewa QR. Here is my proof.");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    window.open(url, "_blank");
  });

  backdrop.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closePayModal(){
  const backdrop = document.querySelector("[data-pay-modal]");
  if(!backdrop) return;
  backdrop.style.display = "none";
  document.body.style.overflow = "";
}

function wirePayModal(){
  const backdrop = document.querySelector("[data-pay-modal]");
  if(!backdrop) return;
  backdrop.addEventListener("click", (e) => { if(e.target === backdrop) closePayModal(); });
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") closePayModal(); });
  backdrop.querySelectorAll("[data-pay-close]").forEach(b => b.addEventListener("click", closePayModal));
}

async function fetchWithTimeout(url, options, timeoutMs){
  if (typeof AbortController === "undefined") {
    return fetch(url, options || {});
  }
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs || 1800);
  try {
    const reqOptions = Object.assign({}, options || {}, { signal: controller.signal });
    return await fetch(url, reqOptions);
  } finally {
    window.clearTimeout(timer);
  }
}



async function loadCatalogFromApi(){
  let didLoadProducts = false;
  try{
    const [catsRes, prodsRes] = await Promise.all([
      fetchWithTimeout(`${API_BASE}/api/categories`, {}, 1600),
      fetchWithTimeout(`${API_BASE}/api/products?limit=500&offset=0&sort=name_asc`, {}, 1800)
    ]);

    if (catsRes.ok){
      const cats = await catsRes.json();
      if(Array.isArray(cats) && cats.length){
        categories = cats;
      }
    }

    if (prodsRes.ok){
      const rows = await prodsRes.json();
    if(Array.isArray(rows) && rows.length){
      products = rows.map(transformBackendProduct);
      didLoadProducts = true;
    }
  }
  }catch(e){
    // fallback to static arrays
  }
  return didLoadProducts;
}

  async function loadCatalogFromIlmStore(){
    async function tryBase(base){
      const [catsRes, prodsRes] = await Promise.all([
        fetchWithTimeout(`${base}/products/categories?per_page=100`, {}, 2000),
        fetchWithTimeout(`${base}/products?per_page=100&_fields=id,name,prices,images,categories`, {}, 2200)
      ]);
      if (!catsRes.ok || !prodsRes.ok) return null;
      const rawCats = await catsRes.json();
      const rawProds = await prodsRes.json();
      return { rawCats, rawProds };
    }

    const bases = [];
    if (ILM_PROXY_BASE) bases.push(ILM_PROXY_BASE);
    bases.push(ILM_STORE_API);

    try{
      let payload = null;
      for (const base of bases){
        try {
          payload = await tryBase(base);
          if (payload) break;
        } catch (_) {
          // try next base
        }
      }
      if (!payload) return false;

      const rawCats = payload.rawCats;
      const rawProds = payload.rawProds;
    const byId = {};

    DEFAULT_CATEGORIES.forEach(c => { byId[c.id] = { ...c }; });

    if(Array.isArray(rawCats)){
      rawCats.forEach(c => {
        const mappedId = ILM_CATEGORY_SLUG_MAP[c.slug];
        if(!mappedId || !byId[mappedId]) return;
        const decodedName = decodeHtmlEntities(c.name);
        if(decodedName && isAscii(decodedName)) byId[mappedId].name = decodedName.trim();
        if(c.description){
          const desc = decodeHtmlEntities(c.description).replace(/\s+/g, " ").trim();
          if(desc && isAscii(desc)) byId[mappedId].tag = desc;
        }
      });
    }

    categories = CATEGORY_ORDER.map(id => byId[id]).filter(Boolean);

    if(Array.isArray(rawProds) && rawProds.length){
      products = rawProds.map(p => {
        const catSlug = (p.categories && p.categories[0]) ? p.categories[0].slug : "subscription";
        let categoryId = ILM_CATEGORY_SLUG_MAP[catSlug] || "subscriptions";
        const decodedName = decodeHtmlEntities(p.name);
        if (/netflix/i.test(decodedName)) categoryId = "netflix";
        const priceMinor = Number(p.prices && p.prices.price) || 0;
        const price = Math.round(priceMinor / 100);
        return {
          id: `ilm-${p.id}`,
          name: decodedName,
          category: categoryId,
          price: price,
          img: (p.images && p.images[0] && p.images[0].src) ? p.images[0].src : "assets/product-1.svg",
          note: CATEGORY_NOTES[categoryId] || "Instant delivery"
        };
      });
    }
    return true;
  }catch(e){
    return false;
  }
}

async function init(){
  const scheduleIdleTask = (runner, timeout = 1400) =>
    new Promise((resolve) => {
      const execute = () => {
        Promise.resolve()
          .then(() => (typeof runner === "function" ? runner() : null))
          .then(resolve)
          .catch(() => resolve(null));
      };
      if (typeof window !== "undefined" && typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(execute, { timeout });
      } else {
        window.setTimeout(execute, 420);
      }
    });
  const renderPillsNav = () => {
    const pills = document.querySelector("[data-pills]");
    if(!pills) return;
    pills.innerHTML = categories.map(c => `<a class="pill" href="category.html?c=${encodeURIComponent(c.id)}">${c.name}</a>`).join("");
  };
  const refreshCatalogUi = () => {
    if(!Array.isArray(categories) || !categories.length){
      categories = DEFAULT_CATEGORIES.slice();
    }
    if(!Array.isArray(products) || !products.length){
      products = DEFAULT_PRODUCTS.slice();
    }
    updateCartCount();
    renderCategories();
    refreshHomeSections();
    renderPillsNav();
  };
  bilingualTextManager = new BilingualTextManager();
  languageSelector = new LanguageSelector();
  languageSelector.init();
  const heroTask = prepareHeroSlider().catch(() => {});
  refreshCatalogUi();
  const settingsTask = scheduleIdleTask(() => loadPublicSettings().catch(() => {}), 1200);
  const testimonialsTask = scheduleIdleTask(() => loadTestimonials().catch(() => {}), 1800);
  const blogTask = scheduleIdleTask(() => loadAndRenderBlog().catch(() => {}), 2200);
  const catalogTask = scheduleIdleTask(
    () =>
      loadCatalogFromApi()
        .then((loaded) => {
          if (loaded) {
            refreshCatalogUi();
            return true;
          }
          return loadCatalogFromIlmStore()
            .then((ok) => {
              if (ok) refreshCatalogUi();
              return ok;
            })
            .catch(() => false);
        })
        .catch(() => false),
    2400
  );

  buildCartModal();
  wirePayModal();
  wireCartButtons();
  wireSearch();
  void Promise.allSettled([settingsTask, testimonialsTask, blogTask, heroTask, catalogTask]);

  // hero CTA
  document.querySelectorAll("[data-go-popular]").forEach(b => b.addEventListener("click", () => {
    document.querySelector("#popular")?.scrollIntoView({behavior:"smooth"});
  }));
  setLocale(currentLocale);
}

document.addEventListener("DOMContentLoaded", init);


/* === HERO SLIDER (Clickable + Text) === */
async function loadSliderBanners() {
  const cacheKey = HERO_BANNER_CACHE_KEY;
  const persistCache = (rows) => {
    sliderBanners = rows;
    try {
      localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), rows }));
    } catch (_) {
      /* ignore */
    }
  };
  const tryUseCache = () => {
    if (!cacheKey) return false;
    try {
      const raw = localStorage.getItem(cacheKey);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.rows) && parsed.rows.length) {
        sliderBanners = parsed.rows;
        return true;
      }
      return false;
    } catch (_) {
      return false;
    }
  };
  const fetchFromApi = async (timeoutMs = 1200) => {
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = controller ? window.setTimeout(() => controller.abort(), timeoutMs) : 0;
    try {
      const base = API_BASE || "";
      const endpoint = base ? `${base}/api/public/slider-banners` : "/api/public/slider-banners";
      const res = await fetch(endpoint, {
        cache: "no-cache",
        signal: controller ? controller.signal : undefined,
      });
      if (!res.ok) throw new Error(`Slider fetch failed ${res.status}`);
      const rows = await res.json();
      if (Array.isArray(rows) && rows.length) return rows;
      return null;
    } finally {
      if (timer) window.clearTimeout(timer);
    }
  };

  if (tryUseCache()) {
    void fetchFromApi(2200)
      .then((rows) => {
        if (rows && rows.length) persistCache(rows);
      })
      .catch(() => {
        /* ignore background refresh errors */
      });
    return;
  }

  // why: avoid blocking initial render while remote API wakes up/cold starts.
  sliderBanners = BANNERS.slice();
  void fetchFromApi(2200)
    .then((rows) => {
      if (rows && rows.length) persistCache(rows);
    })
    .catch(() => {
      /* keep defaults */
    });
}

function buildHeroSlideMarkup(banner, index) {
  const title = escapeHtml(banner.title || "Digital Delivery");
  const subtitle = escapeHtml(banner.subtitle || banner.sub || "");
  const rawImage = String(banner.image || `assets/banners/banner-${(index % 5) + 1}.webp`)
    .replace(/assets\/banners\/banner-(\d+)\.png$/i, "assets/banners/banner-$1.webp");
  const image = escapeHtml(rawImage);
  const badge = banner.badge ? `<p class="heroBadge">${escapeHtml(banner.badge)}</p>` : "";
  const metricValue = banner.metric ? escapeHtml(banner.metric) : "";
  const metricLabel = banner.metricLabel ? escapeHtml(banner.metricLabel) : "";
  const spotlight =
    metricValue || metricLabel
      ? `<div class="heroSpotlight">${metricValue ? `<strong>${metricValue}</strong>` : ""}${metricLabel ? `<span>${metricLabel}</span>` : ""}</div>`
      : "";
  const fallbackLink = banner.link ? escapeHtml(banner.link) : "product.html";
  const cta = `<a class="btn primary" href="${fallbackLink}">Shop now</a>`;
  return `
    <div class="heroSlide">
      <div class="heroSlideTiles" data-hero-tiles data-image="${image}"></div>
      <div class="heroOverlay">
        <div class="heroText">
          ${badge}
          <h1>${title}</h1>
          ${subtitle ? `<p>${subtitle}</p>` : ""}
          ${spotlight}
          ${cta}
        </div>
      </div>
    </div>`;
}

function renderHeroSlides() {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return false;
  const track = slider.querySelector(".heroSliderTrack");
  if (!track) return false;
  if (!sliderBanners.length) {
    track.innerHTML = "";
    slider.style.display = "none";
    return false;
  }
  slider.style.display = "";
  track.innerHTML = sliderBanners.map(buildHeroSlideMarkup).join("");
  return true;
}

function initializeHeroSlider() {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return;
  const track = slider.querySelector(".heroSliderTrack");
  const slides = track ? Array.from(track.children) : [];
  const dots = slider.querySelector(".heroDots");
  if (!track || !slides.length || !dots) return;

  let current = 0;
  let timer;
  const AUTO_DELAY = 4800;
  const connection =
    typeof navigator !== "undefined" && navigator.connection ? navigator.connection : null;
  const slowConnection = !!(
    connection &&
    (connection.saveData ||
      connection.effectiveType === "slow-2g" ||
      connection.effectiveType === "2g" ||
      connection.effectiveType === "3g")
  );
  const lowPowerDevice =
    slowConnection ||
    (typeof navigator !== "undefined" && Number(navigator.hardwareConcurrency || 0) > 0 && navigator.hardwareConcurrency <= 4) ||
    (typeof navigator !== "undefined" && Number(navigator.deviceMemory || 0) > 0 && navigator.deviceMemory <= 4);
  const HERO_TILE_TARGET_PX = lowPowerDevice ? 64 : 40;
  const HERO_TILE_MAX = lowPowerDevice ? 90 : 220;
  let tileResizeTimer;
  let tileAnimationCompleteTimer;
  let lastSlideExposure = { index: null, timestamp: Date.now() };
  const MOTION_PREF_KEY = "SPK_HERO_MOTION_PREF_V2";
  const LEGACY_MOTION_PREF_KEY = "SPK_HERO_MOTION_REDUCED";
  const motionMedia = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  const readStoredMotionPref = () => {
    try {
      const stored = localStorage.getItem(MOTION_PREF_KEY);
      if (stored === null) return null;
      return stored === "1" || stored === "true";
    } catch (_) {
      return null;
    }
  };
  const clearLegacyMotionPref = () => {
    try {
      localStorage.removeItem(LEGACY_MOTION_PREF_KEY);
    } catch (_) {
      /* ignore */
    }
  };
  const storedMotionPref = readStoredMotionPref();
  if (storedMotionPref === null) {
    clearLegacyMotionPref();
  }
  let motionReduced = (function () {
    if (storedMotionPref !== null) return storedMotionPref;
    return motionMedia ? motionMedia.matches : false;
  })();
  const motionToggle = slider.querySelector("[data-motion-toggle]");

  const normalizeIndex = (value) => {
    const total = slides.length;
    return ((value % total) + total) % total;
  };

  const reportHeroAnalytics = (eventName, payload = {}) => {
    const data = { event: eventName, ...payload };
    try {
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push(data);
        return;
      }
    } catch (_) {}
    if (window.gtag) {
      window.gtag("event", eventName, payload);
    }
  };

  const trackSlideExposure = (newIndex) => {
    const pointer = Date.now();
    if (lastSlideExposure.index !== null && lastSlideExposure.index !== newIndex) {
      reportHeroAnalytics("hero_slide_duration", {
        slideIndex: lastSlideExposure.index,
        banner: sliderBanners[lastSlideExposure.index]?.title || "",
        durationMs: pointer - lastSlideExposure.timestamp,
      });
    }
    lastSlideExposure = { index: newIndex, timestamp: pointer };
  };

  const onTileAnimationComplete = (index, bannerTitle, durationMs) => {
    reportHeroAnalytics("hero_tile_animation_complete", {
      slideIndex: index,
      banner: bannerTitle || "",
      durationMs: Math.max(0, Math.round(durationMs || 0)),
    });
  };

  const updateDots = () => {
    dots.querySelectorAll(".heroDot").forEach((dot, idx) => dot.classList.toggle("active", idx === current));
  };

  const setMotionReduced = (value, persist = false) => {
    motionReduced = !!value;
    if (persist) {
      try {
        localStorage.setItem(MOTION_PREF_KEY, motionReduced ? "1" : "0");
      } catch (_) {}
      clearLegacyMotionPref();
    }
    slider.classList.toggle("heroSlider--reduced-motion", motionReduced);
    if (motionToggle) {
      motionToggle.textContent = motionReduced ? "Restore motion" : "Reduce motion";
      motionToggle.setAttribute("aria-pressed", motionReduced ? "true" : "false");
    }
    if (motionControl) {
      motionControl.dataset.motionReduced = motionReduced ? "1" : "0";
    }
  };

  const motionControl = slider.querySelector("[data-motion-control]");
  if (motionControl) {
    motionControl.dataset.motionReduced = motionReduced ? "1" : "0";
  }
  setMotionReduced(motionReduced, false);

  if (motionToggle) {
    motionToggle.addEventListener("click", () => {
      setMotionReduced(!motionReduced, true);
      refreshHeroTiles();
      scheduleNext();
    });
  }
  if (motionMedia && typeof motionMedia.addEventListener === "function") {
    motionMedia.addEventListener("change", (event) => {
      const stored = readStoredMotionPref();
      if (stored === null) {
        setMotionReduced(event.matches, false);
        refreshHeroTiles();
      }
    });
  }

  const buildTilesForSlide = (slide, index) => {
    if (!slide) return 0;
    const container = slide.querySelector("[data-hero-tiles]");
    if (!container) return 0;
    const image = container.dataset.image;
    if (!image) return 0;
    const width = container.clientWidth || container.offsetWidth || slider.offsetWidth || 1;
    const height = container.clientHeight || container.offsetHeight || slider.offsetHeight || 1;
    let cols = motionReduced ? 1 : Math.max(1, Math.ceil(width / HERO_TILE_TARGET_PX));
    let rows = motionReduced ? 1 : Math.max(1, Math.ceil(height / HERO_TILE_TARGET_PX));
    if (!motionReduced) {
      const total = cols * rows;
      if (total > HERO_TILE_MAX) {
        const scale = Math.sqrt(total / HERO_TILE_MAX);
        cols = Math.max(1, Math.floor(cols / scale));
        rows = Math.max(1, Math.floor(rows / scale));
      }
    }
    const tileSize = motionReduced ? Math.max(width, height) : Math.max(18, Math.ceil(Math.max(width / cols, height / rows)));
    const centerCol = (cols - 1) * 0.5;
    const centerRow = (rows - 1) * 0.5;
    const tileGap = motionReduced ? 0 : 1.1;
    container.innerHTML = "";
    container.style.backgroundImage = `url("${image}")`;
    container.style.backgroundSize = `${width}px ${height}px`;
    container.style.backgroundPosition = "0 0";
    container.style.backgroundRepeat = "no-repeat";
    const fragment = document.createDocumentFragment();
    const tiles = [];
    let maxDelay = 0;
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const left = Math.floor(col * tileSize);
        const top = Math.floor(row * tileSize);
        const right = Math.min(width, left + tileSize);
        const bottom = Math.min(height, top + tileSize);
        if (left >= width || top >= height) continue;
        const cellWidth = Math.max(1, right - left + 1);
        const cellHeight = Math.max(1, bottom - top + 1);
        const gap = Math.min(tileGap, cellWidth * 0.16, cellHeight * 0.16);
        const renderLeft = left + gap * 0.5;
        const renderTop = top + gap * 0.5;
        const renderWidth = Math.max(1, cellWidth - gap);
        const renderHeight = Math.max(1, cellHeight - gap);
        const tile = document.createElement("span");
        tile.className = "heroTile";
        if (motionReduced) tile.classList.add("heroTile--static");
        tile.style.width = `${renderWidth}px`;
        tile.style.height = `${renderHeight}px`;
        tile.style.left = `${renderLeft}px`;
        tile.style.top = `${renderTop}px`;
        const face = document.createElement("span");
        face.className = "heroTileFace";
        face.style.backgroundImage = `url("${image}")`;
        face.style.backgroundSize = `${width}px ${height}px`;
        face.style.backgroundPosition = `-${left}px -${top}px`;
        tile.appendChild(face);
        const radial = Math.hypot(col - centerCol, row - centerRow);
        const delay = motionReduced ? 0 : radial * 0.05 + Math.random() * 0.12;
        const entryX = col <= centerCol ? -1 : 1;
        const entryY = row <= centerRow ? 1 : -1;
        const driftX = motionReduced ? 0 : (Math.random() * 3.8 + 2.4) * (Math.random() > 0.5 ? 1 : -1);
        const driftY = motionReduced ? 0 : (Math.random() * 2.6 + 1.6) * (Math.random() > 0.5 ? 1 : -1);
        tile.style.setProperty("--tile-entry-x", String(entryX));
        tile.style.setProperty("--tile-entry-y", String(entryY));
        tile.style.setProperty("--tile-depth", `${90 + Math.round(radial * 14 + Math.random() * 20)}px`);
        tile.style.setProperty("--tile-delay", `${delay.toFixed(3)}s`);
        tile.style.setProperty("--tile-variance", `${(Math.random() * 2 + 0.2).toFixed(2)}s`);
        tile.style.setProperty("--tile-drift-x", `${driftX.toFixed(2)}px`);
        tile.style.setProperty("--tile-drift-y", `${driftY.toFixed(2)}px`);
        tile.style.setProperty("--tile-drift-duration", `${(3.8 + Math.random() * 2.2).toFixed(2)}s`);
        tile.style.setProperty("--tile-drift-delay", `${(Math.random() * 0.8).toFixed(2)}s`);
        tile.style.transitionDelay = `${delay.toFixed(3)}s`;
        fragment.appendChild(tile);
        tiles.push(tile);
        if (!motionReduced) {
          maxDelay = Math.max(maxDelay, delay);
        }
      }
    }
    container.appendChild(fragment);
    if (motionReduced) {
      tiles.forEach((tile) => tile.classList.add("heroTile--visible"));
    } else {
      requestAnimationFrame(() => {
        tiles.forEach((tile) => tile.classList.add("heroTile--visible"));
      });
    }
    return motionReduced ? 0 : maxDelay + 1.0;
  };

  const refreshHeroTiles = () => {
    slides.forEach((slide) => slide.classList.remove("heroSlide--cta-visible"));
    const active = slides[current];
    if (!active) return;
    const container = active.querySelector("[data-hero-tiles]");
    if (!container) return;
    container.innerHTML = "";
    clearTimeout(tileAnimationCompleteTimer);
    const animationSeconds = buildTilesForSlide(active, current);
    const animationMs = Math.max(80, animationSeconds * 1000);
    tileAnimationCompleteTimer = window.setTimeout(() => {
      active.classList.add("heroSlide--cta-visible");
      onTileAnimationComplete(current, sliderBanners[current]?.title || "", animationMs);
    }, animationMs + 120);
  };

  const scheduleTileRefresh = () => {
    clearTimeout(tileResizeTimer);
    tileResizeTimer = window.setTimeout(() => refreshHeroTiles(), 200);
  };

  const updateParallax = (xDeg, yDeg) => {
    slider.style.setProperty("--hero-parallax-x", `${xDeg}deg`);
    slider.style.setProperty("--hero-parallax-y", `${yDeg}deg`);
  };

  const handleParallax = (event) => {
    if (event.pointerType === "touch" && !event.isPrimary) return;
    const rect = slider.getBoundingClientRect();
    const clamp = (value) => Math.max(-1, Math.min(1, value));
    const offsetX = clamp((event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2));
    const offsetY = clamp(((event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * -1);
    const PARALLAX_MAX = 3.5;
    updateParallax(offsetY * PARALLAX_MAX, offsetX * PARALLAX_MAX);
    slider.classList.add("heroSlider--parallax-active");
  };

  const resetParallax = () => {
    updateParallax(0, 0);
    slider.classList.remove("heroSlider--parallax-active");
  };

  const setActiveSlide = (value, renderTiles = true) => {
    current = normalizeIndex(value);
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((slide, idx) => {
      slide.setAttribute("data-active", idx === current ? "1" : "0");
      if (idx !== current) {
        slide.classList.remove("heroSlide--cta-visible");
        // Keep DOM light: remove tile fragments from inactive slides.
        const tileHost = slide.querySelector("[data-hero-tiles]");
        if (tileHost && tileHost.childElementCount) {
          tileHost.innerHTML = "";
        }
      }
    });
    updateDots();
    trackSlideExposure(current);
    if (renderTiles) refreshHeroTiles();
  };

  const scheduleNext = () => {
    clearTimeout(timer);
    timer = setTimeout(() => setActiveSlide(current + 1), AUTO_DELAY);
  };

  const pauseSlider = () => clearTimeout(timer);

  dots.innerHTML = "";
  slides.forEach((slide, idx) => {
    const hasLink = sliderBanners[idx] && sliderBanners[idx].link;
    slide.style.cursor = hasLink ? "pointer" : "default";
    slide.onclick = () => {
      const href = sliderBanners[idx]?.link;
      if (href) {
        location.href = href;
      }
    };
    const dot = document.createElement("div");
    dot.className = "heroDot";
    dot.onclick = (event) => {
      event.stopPropagation();
      setActiveSlide(idx);
      scheduleNext();
    };
    dots.appendChild(dot);
  });

  slider.addEventListener("mouseenter", pauseSlider);
  slider.addEventListener("mouseleave", scheduleNext);
  slider.addEventListener("pointermove", handleParallax);
  slider.addEventListener("pointerleave", () => {
    scheduleNext();
    resetParallax();
  });
  slider.addEventListener("pointercancel", resetParallax);
  slider.addEventListener("pointerup", resetParallax);
  window.addEventListener("resize", scheduleTileRefresh);

  setActiveSlide(0, false);
  const bootInitialTiles = () => refreshHeroTiles();
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(bootInitialTiles, { timeout: 900 });
  } else {
    window.setTimeout(bootInitialTiles, 220);
  }
  scheduleNext();
}

async function prepareHeroSlider() {
  await loadSliderBanners();
  renderHeroSlides();
  initializeHeroSlider();
  try {
    document.dispatchEvent(new Event("hero:ready"));
  } catch (_) {}
}

/* === Feedback Widget === */
function mountFeedback(){
  const btn = document.createElement("button");
  btn.className = "feedbackButton";
  btn.setAttribute("type","button");
  btn.innerHTML = "Feedback";
  const floatingSupport = document.querySelector("[data-floating-actions]");
  (floatingSupport || document.body).appendChild(btn);

  const overlay = document.createElement("div");
  overlay.className = "feedbackOverlay";
  overlay.innerHTML = `
    <div class="feedbackCard">
      <div class="feedbackHeader">
        <div class="feedbackTitle">Share your feedback</div>
        <button class="feedbackClose" aria-label="Close">x</button>
      </div>
      <div class="feedbackForm" role="form">
        <label>Rating</label>
        <div class="starRow" data-stars="">
          ${[1,2,3,4,5].map(i => `<span class="star" data-val="${i}">&#9733;</span>`).join("")}
        </div>
        <label>Message</label>
        <textarea rows="4" placeholder="What can we improve?" data-fb-msg=""></textarea>
        <div class="feedbackActions">
          <button class="btn secondary" type="button" data-fb-cancel="">Cancel</button>
          <button class="btn primary" type="button" data-fb-submit="">Send</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  let rating = 0;
  function setRating(n){
    rating = n;
    overlay.querySelectorAll(".star").forEach(s => {
      s.dataset.active = Number(Number(s.dataset.val) <= n);
    });
  }
  overlay.querySelectorAll(".star").forEach(s => s.addEventListener("click", () => setRating(Number(s.dataset.val))));
  const open = () => { overlay.dataset.open = "1"; setRating(0); };
  const close = () => { overlay.dataset.open = "0"; };

  btn.addEventListener("click", open);
  overlay.querySelector(".feedbackClose").addEventListener("click", close);
  overlay.querySelector("[data-fb-cancel]").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) close(); });

  async function postJSON(url, data){
    try{
      const res = await fetch(url, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(data) });
      return res.ok;
    }catch(_){ return false; }
  }

  overlay.querySelector("[data-fb-submit]").addEventListener("click", async () => {
    const msg = overlay.querySelector("[data-fb-msg]").value.trim();
    if(!msg && !rating){ alert("Please add a message or a rating."); return; }

    const payload = { rating, message: msg, page: location.pathname, ua: navigator.userAgent };
    // Try optional API endpoint (if available), otherwise fallback to WhatsApp
    let ok = false;
    if(typeof API_BASE === "string"){
      const endpoint = API_BASE ? `${API_BASE}/api/feedback` : "/api/feedback";
      ok = await postJSON(endpoint, payload);
    }
    if(!ok && typeof WHATSAPP_NUMBER === "string" && WHATSAPP_NUMBER){
      const text = `Feedback%0A${location.href}%0A?: ${rating}%0A${encodeURIComponent(msg)}`;
      const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g,"")}?text=${text}`;
      window.open(url, "_blank");
      ok = true; // treat as sent
    }
    try{ localStorage.setItem("SPK_LAST_FEEDBACK", JSON.stringify(payload)); }catch(_){}
    alert(ok ? "Thanks! Your feedback has been sent." : "Saved locally. Could not send right now.");
    close();
  });
}

const AI_CHAT_FALLBACKS = [
  "Check out Netflix, Canva, and ChatGPT plans—instant delivery in minutes.",
  "We offer WhatsApp proof for every purchase. Need help with the order?",
  "Ask me about WordPress plugins, themes, or delivery timelines."
];

const AI_CHAT_KNOWLEDGE = [
  {
    keywords: ["subscription","plan","netflix","chatgpt","canva"],
    reply: "Subscriptions include Netflix, Canva, ChatGPT, and local partners. Pick a plan and we’ll deliver the activation code in under 15 minutes with WhatsApp proof."
  },
  {
    keywords: ["delivery","proof","whatsapp","min","minute"],
    reply: "Delivery is instant once payment is confirmed—most orders send a WhatsApp screenshot with the trackable code so you can verify within 10 minutes."
  },
  {
    keywords: ["payment","payment methods","esewa","upi","card","google pay"],
    reply: "We accept eSewa, Khalti, IME Pay, mobile banking, and cards. Payments go through encrypted checkout and our team replies with a receipt and WhatsApp confirmation."
  },
  {
    keywords: ["support","help","admin","issue","problem","contact"],
    reply: "Our 24/7 support replies on WhatsApp at +977-980XXXXX and via the admin panel. Mention your order ID and we handle follow-ups right away."
  }
];

const AI_CHAT_QUICK_CHIPS = [
  "How fast is delivery?",
  "Show me Netflix plans",
  "What payments do you accept?",
  "Need help with a refund"
];

class AIChatModule {
  constructor() {
    this.apiEndpoint = this.buildEndpoint();
    this.ensureInterface();
    this.setupElements();
    this.bindEvents();
    this.populateChips();
  }

  buildEndpoint() {
    const base = (window.API_BASE || "").trim().replace(/\/$/, "");
    return `${base || "http://localhost:4000"}/api/chat/`;
  }

  ensureInterface() {
    if (!document.querySelector("[data-ai-chat-trigger]")) {
      this.createTrigger();
    }
    if (!document.querySelector("[data-ai-chat-overlay]")) {
      this.createOverlay();
    }
  }

  createTrigger() {
    const floatingSupport = document.querySelector("[data-floating-actions]") || document.body;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chatFab";
    btn.setAttribute("data-ai-chat-trigger", "");
    btn.setAttribute("aria-label", "Open AI chat");
    btn.innerHTML = `<span aria-hidden="true">🤖</span><span>AI assistant</span>`;
    floatingSupport.insertBefore(btn, floatingSupport.firstChild);
  }

  createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "aiChatOverlay";
    overlay.setAttribute("data-ai-chat-overlay", "");
    overlay.dataset.open = "0";
    overlay.innerHTML = `
      <div class="aiChatCard" role="dialog" aria-label="AI assistant">
        <div class="aiChatHeader">
          <h3>AI Assistant</h3>
          <button class="aiChatClose" type="button" data-ai-chat-close aria-label="Close chat">×</button>
        </div>
        <div class="aiChatChips" data-ai-chips></div>
        <div class="aiChatMessages" data-ai-chat-log>
          <div class="aiMessage aiMessage--bot">Hi! Ask me about subscriptions, delivery, or how SoftUpakaran works.</div>
        </div>
        <div class="aiChatFooter">
          <input type="text" class="aiChatInput" placeholder="Type your question..." data-ai-message aria-label="Your message"/>
          <button class="btn primary" type="button" data-ai-send>Send</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  setupElements() {
    this.overlay = document.querySelector("[data-ai-chat-overlay]");
    this.messageContainer = this.overlay?.querySelector("[data-ai-chat-log]");
    this.messageInput = this.overlay?.querySelector("[data-ai-message]");
    this.sendButton = this.overlay?.querySelector("[data-ai-send]");
    this.closeButton = this.overlay?.querySelector("[data-ai-chat-close]");
    this.chipContainer = this.overlay?.querySelector("[data-ai-chips]");
    this.triggerButton = document.querySelector("[data-ai-chat-trigger]");
    this.helpButton = document.querySelector("[data-ai-help-btn]");
    this.loading = false;
  }

  bindEvents() {
    this.triggerButton?.addEventListener("click", () => this.open());
    this.helpButton?.addEventListener("click", (event) => {
      event.preventDefault();
      this.open();
    });
    this.closeButton?.addEventListener("click", () => this.close());
    this.overlay?.addEventListener("click", (event) => {
      if (event.target === this.overlay) this.close();
    });
    this.sendButton?.addEventListener("click", () => this.sendMessage());
    this.messageInput?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        this.sendMessage();
      }
    });
  }

  setLoading(isLoading) {
    this.loading = !!isLoading;
    if (this.sendButton) this.sendButton.disabled = isLoading;
    if (this.messageInput) this.messageInput.disabled = isLoading;
  }

  populateChips() {
    if (!this.chipContainer) return;
    this.chipContainer.innerHTML = "";
    AI_CHAT_QUICK_CHIPS.forEach((label) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.textContent = label;
      chip.addEventListener("click", () => this.fillSuggestion(label));
      this.chipContainer.appendChild(chip);
    });
  }

  fillSuggestion(text) {
    if (this.messageInput) this.messageInput.value = text;
    this.sendMessage();
  }

  appendMessage(text, type) {
    if (!this.messageContainer) return null;
    const msg = document.createElement("div");
    msg.className = `aiMessage aiMessage--${type}`;
    msg.textContent = text;
    this.messageContainer.appendChild(msg);
    this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    return msg;
  }

  craftFallback(value) {
    const lower = String(value || "").toLowerCase();
    const match = AI_CHAT_KNOWLEDGE.find((entry) =>
      entry.keywords.some((keyword) => lower.includes(keyword))
    );
    return match ? match.reply : AI_CHAT_FALLBACKS[Math.floor(Math.random() * AI_CHAT_FALLBACKS.length)];
  }

  extractReply(payload) {
    if (!payload) return "";
    if (typeof payload.reply === "string" && payload.reply.trim()) return payload.reply.trim();
    return "";
  }

  async sendMessage() {
    if (this.loading) return;
    const prompt = (this.messageInput?.value || "").trim();
    if (!prompt) return;
    this.appendMessage(prompt, "user");
    if (this.messageInput) this.messageInput.value = "";
    const placeholder = this.appendMessage("Thinking...", "bot");
    this.setLoading(true);
    try {
      const response = await fetch(this.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt })
      });
      let payload = null;
      if (response.ok) {
        payload = await response.json();
      } else {
        const detail = await response.text();
        console.warn("AI chat backend error:", response.status, detail);
      }
      const reply = this.extractReply(payload) || this.craftFallback(prompt);
      placeholder.textContent = reply;
    } catch (err) {
      console.warn("AI chat error:", err);
      placeholder.textContent = `${this.craftFallback(prompt)} (offline answer)`;
    } finally {
      this.setLoading(false);
      this.messageInput?.focus();
    }
  }

  open() {
    if (!this.overlay) return;
    this.overlay.dataset.open = "1";
    document.body.classList.add("aiChatOpen");
    this.messageInput?.focus();
  }

  close() {
    if (!this.overlay) return;
    this.overlay.dataset.open = "0";
    document.body.classList.remove("aiChatOpen");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  try{ mountFeedback(); }catch(e){ console.warn("Feedback widget failed:", e); }
  try{ new AIChatModule(); }catch(err){ console.warn("AI chat failed:", err); }
});
/* === end Feedback Widget === */













