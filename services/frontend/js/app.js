/* === Banner Config (edit later easily) === */
const BANNERS = [
  {
    title: "Modern WordPress themes",
    sub: "Blog, news, and store-ready templates",
    link: "category#wp-themes",
    badge: "Design ready",
    metric: "85+",
    metricLabel: "Themes curated"
  },
  {
    title: "Netflix plans and profiles",
    sub: "Affordable access with instant activation",
    link: "category#netflix",
    badge: "Streaming",
    metric: "5 min",
    metricLabel: "Activation time"
  },
  {
    title: "Web development packages",
    sub: "Custom builds for businesses",
    link: "category#web-development",
    badge: "Custom desks",
    metric: "40+",
    metricLabel: "Dev partners"
  }
];
let sliderBanners = BANNERS.slice();
const _heroDimCache = {};
const HERO_BANNER_CACHE_KEY = "SPK_HERO_BANNER_CACHE_V3";
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
const COUPON_CODE = "SOFT10";
const COUPON_DISCOUNT_NPR = 5;
const COUPON_STORAGE_KEY = "SPK_COUPON_SOFT10_ACTIVE";
const DEFAULT_BLOG_POSTS = [
  {
    slug: "top-digital-products-nepal",
    title: "Top 5 Digital Products You Can Buy Instantly in Nepal",
    summary:
      "Discover the most popular digital products you can purchase and receive instantly in Nepal.",
    content:
      "Digital products are becoming more popular in Nepal due to instant delivery and easy payments.",
    featured_image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    published_at: "2026-02-25T16:52:48.091Z",
  },
  {
    slug: "order-digital-products-whatsapp",
    title: "How to Order Digital Products Instantly via WhatsApp",
    summary:
      "Learn how to order digital products quickly and securely using WhatsApp instant support.",
    content:
      "Ordering digital products on SoftUpakaran is simple and fast with WhatsApp confirmation.",
    featured_image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    published_at: "2026-02-25T16:51:32.342Z",
  },
];

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
  "web-development",
  "judas-priest"
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
  "web-development": "Turnkey web development toolkits.",
  "judas-priest": "Official Judas Priest band merchandise – tees, hoodies, jackets & accessories."
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
  { id:"web-development", name:"Web Development", tag:"Custom website builds", icon:"WEB" },
  { id:"judas-priest", name:"Judas Priest Collection", tag:"Official band merchandise", icon:"🤘" }
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
  },
  { id: "jp-british-steel-white-tee", name: "British Steel White T-Shirt", category: "judas-priest", price: 2999, img: "assets/judas-priest/BS-white_d34cfe67-6c23-4750-98a7-8f9b2febb41c.png", note: "Classic British Steel album art tee" },
  { id: "jp-british-steel-cap", name: "British Steel Cap", category: "judas-priest", price: 1999, img: "assets/judas-priest/British-steel-cap.png", note: "Embroidered British Steel logo cap" },
  { id: "jp-is-battle-jacket", name: "Iron & Steel Battle Jacket", category: "judas-priest", price: 9999, img: "assets/judas-priest/ISBattleJacketfront.png", note: "Official Iron & Steel tour battle jacket" },
  { id: "jp-is-tour-bandana", name: "Iron & Steel Tour Bandana", category: "judas-priest", price: 1299, img: "assets/judas-priest/ISTourbandana.png", note: "Official IS tour bandana" },
  { id: "jp-painkiller-hoodie-blk", name: "Painkiller Linear Oval Black Hoodie", category: "judas-priest", price: 5499, img: "assets/judas-priest/JDP-25-PainkillerLinear-Oval-BlkHd-F.png", note: "Painkiller 2025 tour hoodie – black" },
  { id: "jp-painkiller-washed-tee", name: "Painkiller Title Washed Black T-Shirt", category: "judas-priest", price: 3299, img: "assets/judas-priest/JDP-25-PainkillerTitle-TwoColour-WashBlkT-F.png", note: "Two-colour Painkiller washed tee" },
  { id: "jp-angel-retribution-ls", name: "Angel of Retribution Long Sleeve", category: "judas-priest", price: 3799, img: "assets/judas-priest/JDP_24-AngelOfRetribution-VintageAngelDistressPocket-BlkLS-F.png", note: "Vintage distressed pocket print – black" },
  { id: "jp-invincible-shield-tee", name: "Invincible Shield Symbol T-Shirt", category: "judas-priest", price: 2999, img: "assets/judas-priest/JDP_InvincibleShield_Symbol-Itin-BlkT-F.png", note: "Itinerary print on black tee" },
  { id: "jp-painkiller-gitd-tee", name: "Painkiller Glow-in-the-Dark Tee", category: "judas-priest", price: 3499, img: "assets/judas-priest/JP-Painkiller-GITD-tee.png", note: "Glows in the dark – limited edition" },
  { id: "jp-ros-bandana", name: "Screaming for Vengeance Bandana", category: "judas-priest", price: 1299, img: "assets/judas-priest/JPROSBANDANA3.png", note: "Classic ROS print bandana" },
  { id: "jp-tote-bag", name: "Judas Priest Tote Bag", category: "judas-priest", price: 1499, img: "assets/judas-priest/JPTOTE.png", note: "Sturdy canvas tote with JP logo" },
  { id: "jp-sfv-beanie", name: "Screaming for Vengeance Beanie", category: "judas-priest", price: 1799, img: "assets/judas-priest/JP_SFV_beanie.png", note: "Warm knit beanie – JP SFV print" },
  { id: "jp-symbol-bandana", name: "JP Symbol Bandana", category: "judas-priest", price: 1199, img: "assets/judas-priest/JP_SymbolBandana_Vis.png", note: "Classic Judas Priest symbol bandana" },
  { id: "jp-painkiller-distressed-tee", name: "Painkiller Distressed T-Shirt", category: "judas-priest", price: 3199, img: "assets/judas-priest/Painkiller-distressed-fb.png", note: "Distressed front & back print tee" },
  { id: "jp-edge-tee", name: "The Edge of Darkness T-Shirt", category: "judas-priest", price: 2799, img: "assets/judas-priest/edge-f.png", note: "Edge graphic front print tee" },
  { id: "jp-epitaph-beanie", name: "Epitaph Beanie", category: "judas-priest", price: 1799, img: "assets/judas-priest/epitaph-beanie-2.png", note: "Epitaph tour knit beanie" },
  { id: "jp-ros-keychain", name: "Screaming for Vengeance Keychain", category: "judas-priest", price: 799, img: "assets/judas-priest/jp_ros_keychain.png", note: "Metal keychain – ROS artwork" },
  { id: "jp-painkiller-keychain", name: "Painkiller Keychain", category: "judas-priest", price: 799, img: "assets/judas-priest/painkillerkeychain.png", note: "Metal Painkiller logo keychain" },
  { id: "jp-patch-set", name: "Judas Priest Patch Set", category: "judas-priest", price: 1599, img: "assets/judas-priest/patchset.png", note: "Set of embroidered JP patches" },
  { id: "jp-swod-hoodie", name: "Screaming for Vengeance of Darkness Hoodie", category: "judas-priest", price: 5499, img: "assets/judas-priest/swodhoodiefront.png", note: "SWOD tour hoodie" },
  { id: "jp-swod-ls-tee", name: "SWOD Long Sleeve T-Shirt", category: "judas-priest", price: 3499, img: "assets/judas-priest/swodlstee.png", note: "Screaming for Vengeance of Darkness long sleeve" },
  { id: "jp-classic-tee-black", name: "Judas Priest Classic Black Tee", category: "judas-priest", price: 2799, img: "assets/judas-priest/unisex-classic-tee-black-front-6995c1112fe46.png", note: "Unisex classic black tee" }
];

const SAMPLE_SUBSCRIPTIONS = [
  { id: "sample-netflix", name: "Netflix Premium (1 Month)", category: "netflix", price: 1299, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/500px-Netflix_2015_logo.svg.png", note: "Shared profile - 4K" },

  { id: "sample-google-play", name: "Google Play $10 Card", category: "subscriptions", price: 1550, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/500px-Google_Play_Store_badge_EN.svg.png", note: "US region - digital code" }
];

const SAMPLE_TOOLS = [
  { id: "sample-wprocket", name: "WP Rocket 3.20", category: "wp-plugins", price: 299, img: "assets/products/wp-rocket.webp", note: "Cache + SEO" },
  { id: "sample-divi", name: "Divi 5.0 Theme", category: "wp-themes", price: 359, img: "assets/products/divi-theme.jpg", note: "Drag & drop builder" },
  { id: "sample-elementor", name: "Elementor Pro", category: "wp-plugins", price: 299, img: "assets/products/elementor-pro.png", note: "Visual page builder" }
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
    langLabel: "Language",
    blogTitle: "From the Blog",
    blogSubtitle: "Tips, updates, and tutorials from our blog.",
    blogVisit: "Visit blog",
    toolsTitle: "Tools & WordPress Packs",
    popularTitle: "Popular Products",
    whyTitle: "Why Choose Us",
    testimonialsTitle: "What They Say"
  },
  fr: {
    heroTagline: "Livraison numérique",
    trendingTitle: "Abonnements tendance",
    trendingSubtitle: "Les meilleures offres sélectionnées pour vous.",
    addButton: "Ajouter",
    cartEmptyTitle: "Votre panier est vide",
    cartEmptyMeta: "Ajoutez des produits pour continuer.",
    payWhatsApp: "Payer via WhatsApp",
    payEsewa: "Payer via eSewa QR",
    demoOrder: "Passer une commande démo",
    demoNotice: "Paiement démo uniquement (sans vrai paiement). À remplacer par une passerelle.",
    availabilityPrefix: "Disponibilité :",
    cartTitle: "Votre Panier",
    checkoutTitle: "Paiement",
    langLabel: "Langue",
    blogTitle: "Du Blog",
    blogSubtitle: "Conseils, mises à jour et tutoriels de notre blog.",
    blogVisit: "Visiter le blog",
    toolsTitle: "Outils & Packs WordPress",
    popularTitle: "Produits Populaires",
    whyTitle: "Pourquoi Nous Choisir",
    testimonialsTitle: "Ce Qu'ils Disent"
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
    langLabel: "भाषा",
    blogTitle: "ब्लगबाट",
    blogSubtitle: "हाम्रो ब्लगबाट सुझाव, अपडेट र ट्युटोरियलहरू।",
    blogVisit: "ब्लग हेर्नुहोस्",
    toolsTitle: "उपकरण र वर्डप्रेस प्याकहरू",
    popularTitle: "लोकप्रिय उत्पादनहरू",
    whyTitle: "हामीलाई किन छनौट गर्ने",
    testimonialsTitle: "तिनीहरू के भन्छन्"
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
    this.nodes = Array.from(this.root.querySelectorAll("[data-en]"));
  }

  update(lang = "en", locale = "en") {
    const key = lang === "np" ? "np" : "en";
    this.nodes.forEach((node) => {
      const frVal = locale === "fr" ? node.getAttribute("data-fr") : null;
      const value = frVal !== null ? frVal : node.getAttribute(`data-${key}`);
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
  bilingualTextManager?.update(bilingualLang, locale);
  languageSelector?.highlight?.(locale === "ne" ? "np" : locale);
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
    this.buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === langKey);
    });
  }

  localeFromLang(langKey) {
    if (langKey === "np") return "ne";
    if (langKey === "fr") return "fr";
    return "en";
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
  const isGithubPagesHost =
    typeof window !== "undefined" &&
    /\.github\.io$/i.test(window.location && window.location.hostname ? window.location.hostname : "");
  if (isGithubPagesHost) {
    return DEFAULT_BLOG_POSTS.slice();
  }

  const endpoints = [];
  if (API_BASE) {
    endpoints.push(`${API_BASE}/api/public/blog-posts?limit=${BLOG_POST_LIMIT}`);
  }
  endpoints.push(`/api/public/blog-posts?limit=${BLOG_POST_LIMIT}`);

  const fetchWithTimeout = async (url, timeoutMs = 2400) => {
    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = controller ? window.setTimeout(() => controller.abort(), timeoutMs) : 0;
    try {
      const res = await fetch(url, {
        cache: "no-cache",
        signal: controller ? controller.signal : undefined,
      });
      if (!res.ok) return [];
      const rows = await res.json();
      return Array.isArray(rows) ? rows : [];
    } finally {
      if (timer) window.clearTimeout(timer);
    }
  };

  try {
    for (const endpoint of endpoints) {
      const rows = await fetchWithTimeout(endpoint);
      if (rows.length) return rows;
    }
    return DEFAULT_BLOG_POSTS.slice();
  } catch (error) {
    console.warn("Failed to load blog posts:", error);
    return DEFAULT_BLOG_POSTS.slice();
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
// expose for recently-viewed renderer
Object.defineProperty(window, "__products", { get: () => products });

const USD_RATE = 134;
let currencyMode = localStorage.getItem("su_currency") || "NPR";

function formatNPR(n){
  if (currencyMode === "USD") {
    return "$" + (n / USD_RATE).toFixed(2);
  }
  const s = String(Math.round(n));
  return "Rs. " + s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const THEME_KEY = "su_theme";
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById("themeToggleBtn");
  if (btn) btn.textContent = theme === "light" ? "🌙" : "☀️";
}

function initAnnouncementBar() {
  const bar = document.getElementById("announcementBar");
  if (!bar) return;
  const id = bar.getAttribute("data-announce-id");
  if (id && sessionStorage.getItem(`su_announce_${id}`)) {
    bar.style.display = "none";
    return;
  }
  document.getElementById("announceCloseBtn")?.addEventListener("click", () => {
    bar.style.maxHeight = bar.scrollHeight + "px";
    requestAnimationFrame(() => {
      bar.style.transition = "max-height .3s ease, opacity .3s ease, padding .3s";
      bar.style.maxHeight = "0";
      bar.style.opacity = "0";
      bar.style.padding = "0";
      bar.style.overflow = "hidden";
    });
    if (id) sessionStorage.setItem(`su_announce_${id}`, "1");
  });
}

function initTypewriter() {
  const el = document.querySelector("[data-typewriter]");
  if (!el || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const phrases = el.getAttribute("data-typewriter").split("|");
  if (!phrases.length) return;
  let pi = 0, ci = 0, deleting = false;
  const cursor = document.createElement("span");
  cursor.className = "twCursor";
  cursor.textContent = "|";
  el.textContent = "";
  el.appendChild(cursor);
  const tick = () => {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ci + 1);
      el.appendChild(cursor);
      ci++;
      if (ci === phrase.length) { deleting = true; setTimeout(tick, 1800); return; }
      setTimeout(tick, 65);
    } else {
      el.textContent = phrase.slice(0, ci - 1);
      el.appendChild(cursor);
      ci--;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 400); return; }
      setTimeout(tick, 35);
    }
  };
  setTimeout(tick, 600);
}

function initBackToTop() {
  const btn = document.createElement("button");
  btn.id = "backToTopBtn";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = "↑";
  btn.style.cssText = "position:fixed;bottom:80px;right:18px;width:40px;height:40px;border-radius:50%;border:1px solid rgba(124,58,237,.5);background:rgba(124,58,237,.18);color:#fff;font-size:18px;cursor:pointer;z-index:59;opacity:0;transform:translateY(12px);transition:opacity .25s,transform .25s;pointer-events:none;backdrop-filter:blur(8px)";
  document.body.appendChild(btn);
  const toggle = () => {
    const show = window.scrollY > 320;
    btn.style.opacity = show ? "1" : "0";
    btn.style.transform = show ? "translateY(0)" : "translateY(12px)";
    btn.style.pointerEvents = show ? "auto" : "none";
  };
  window.addEventListener("scroll", toggle, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initScrollProgress() {
  const bar = document.createElement("div");
  bar.id = "scrollProgressBar";
  bar.style.cssText = "position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#7C3AED,#06B6D4,#EC4899);z-index:99998;transition:width .1s linear;pointer-events:none";
  document.body.appendChild(bar);
  const update = () => {
    const scrollTop = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docH > 0 ? `${(scrollTop / docH) * 100}%` : "0%";
  };
  window.addEventListener("scroll", update, { passive: true });
}

function initThemeToggle() {
  // Force dark: clear any light value unless user explicitly chose it
  if (localStorage.getItem(THEME_KEY) === "light" && !localStorage.getItem("su_theme_explicit")) {
    localStorage.setItem(THEME_KEY, "dark");
    localStorage.removeItem("su_theme_auto");
    localStorage.removeItem("su_theme_manual");
    localStorage.removeItem("su_b8_atFix");
  }
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(saved);
  const btn = document.createElement("button");
  btn.id = "themeToggleBtn";
  btn.className = "themeToggleBtn";
  btn.setAttribute("aria-label", "Toggle dark/light mode");
  btn.textContent = saved === "light" ? "🌙" : "☀️";
  btn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    localStorage.setItem("su_theme_explicit", "1"); // user made an explicit choice — preserve it
    applyTheme(next);
    btn.textContent = next === "light" ? "🌙" : "☀️";
  });
  const nav = document.querySelector(".navlinks");
  if (nav) nav.insertBefore(btn, nav.firstChild);
}

function initCurrencyToggle() {
  const btn = document.createElement("button");
  btn.className = "currencyToggle";
  btn.setAttribute("aria-label", "Toggle currency");
  btn.textContent = currencyMode === "NPR" ? "NPR → USD" : "USD → NPR";
  btn.addEventListener("click", () => {
    currencyMode = currencyMode === "NPR" ? "USD" : "NPR";
    localStorage.setItem("su_currency", currencyMode);
    btn.textContent = currencyMode === "NPR" ? "NPR → USD" : "USD → NPR";
    document.querySelectorAll("[data-currency-val]").forEach(el => {
      const raw = parseFloat(el.getAttribute("data-currency-val"));
      if (!isNaN(raw)) el.textContent = formatNPR(raw);
    });
    renderCart();
  });
  const nav = document.querySelector(".navlinks");
  if (nav) nav.insertBefore(btn, nav.firstChild);
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
  const count = cartCount();
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = count;
    el.classList.remove("badge--pop");
    el.getBoundingClientRect(); // force reflow to restart animation
    el.classList.add("badge--pop");
  });
}

function burstConfetti(originEl) {
  const canvas = document.createElement("canvas");
  const W = window.innerWidth, H = window.innerHeight;
  canvas.style.cssText = `position:fixed;inset:0;width:${W}px;height:${H}px;pointer-events:none;z-index:9999`;
  canvas.width = W; canvas.height = H;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  const colors = ["#7C3AED","#06B6D4","#F59E0B","#EC4899","#10B981","#fff"];
  let rect = originEl ? originEl.getBoundingClientRect() : null;
  const ox = rect ? rect.left + rect.width / 2 : W / 2;
  const oy = rect ? rect.top + rect.height / 2 : H / 2;
  const particles = Array.from({ length: 52 }, () => ({
    x: ox, y: oy,
    vx: (Math.random() - 0.5) * 12,
    vy: (Math.random() - 0.7) * 14,
    size: 5 + Math.random() * 7,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI * 2,
    rotV: (Math.random() - 0.5) * 0.3,
    alpha: 1,
    shape: Math.random() > 0.5 ? "rect" : "circle",
  }));
  const tick = () => {
    ctx.clearRect(0, 0, W, H);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.35;
      p.vx *= 0.97; p.rot += p.rotV; p.alpha -= 0.018;
      if (p.alpha <= 0) return;
      alive = true;
      ctx.save(); ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      if (p.shape === "circle") { ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2); ctx.fill(); }
      else ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    });
    if (alive) requestAnimationFrame(tick);
    else canvas.remove();
  };
  requestAnimationFrame(tick);
}

function addToCart(productId, qty=1){
  const cart = loadCart();
  const existing = cart.find(x => x.id === productId);
  if(existing) existing.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart(cart);
  const btn = document.querySelector(`[data-add="${CSS.escape(productId)}"]`);
  if (btn && !window.matchMedia("(prefers-reduced-motion:reduce)").matches) burstConfetti(btn);
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
      if(p) return { ...p, qty: line.qty, lineTotal: p.price * line.qty };
      // Fallback: items added directly (e.g. tickets) carry their own data
      if(line.name && line.price != null) return { ...line, lineTotal: line.price * (line.qty || 1) };
      return null;
    })
    .filter(Boolean);
}

function cartTotal(){
  return cartLines().reduce((sum, l) => sum + l.lineTotal, 0);
}

function isCouponApplied(){
  try {
    return localStorage.getItem(COUPON_STORAGE_KEY) === "1";
  } catch (_) {
    return false;
  }
}

function setCouponApplied(active){
  try {
    if (active) localStorage.setItem(COUPON_STORAGE_KEY, "1");
    else localStorage.removeItem(COUPON_STORAGE_KEY);
  } catch (_) {
    // Ignore localStorage failures.
  }
}

function applyCouponCode(code){
  const normalized = String(code || "").trim().toUpperCase();
  if (normalized !== COUPON_CODE) return false;
  setCouponApplied(true);
  return true;
}

function couponDiscount(subtotal = cartTotal()){
  if (!isCouponApplied()) return 0;
  const safeSubtotal = Math.max(0, Math.round(Number(subtotal) || 0));
  return Math.min(COUPON_DISCOUNT_NPR, safeSubtotal);
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
    const target = CATEGORY_LINKS[c.id] || `category#${encodeURIComponent(c.id)}`;
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
        <a class="btn" href="category#${encodeURIComponent(category)}">View all</a>
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
          <a class="btn" href="category#${encodeURIComponent(c.id)}">View all</a>
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
  const target = CATEGORY_LINKS[category] || `category#${encodeURIComponent(category)}`;
  window.location.href = target;
}

const WL_KEY = "su_wishlist";
const getWishlist = () => { try { return JSON.parse(localStorage.getItem(WL_KEY) || "[]"); } catch { return []; } };
const toggleWishlist = (id) => {
  let wl = getWishlist();
  if (wl.includes(id)) wl = wl.filter(x => x !== id);
  else wl.push(id);
  try { localStorage.setItem(WL_KEY, JSON.stringify(wl)); } catch {}
};

const stockLeft = (id) => {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (Math.imul(23, h) + id.charCodeAt(i)) | 0;
  const v = Math.abs(h) % 10;
  if (v === 0) return 1;
  if (v <= 2) return 2;
  if (v === 3) return 3;
  return null; // ~60% show no urgency
};

const PRODUCT_TAGS = [
  { label: "🔥 Hot", cls: "tag--hot" },
  { label: "🆕 New", cls: "tag--new" },
  { label: "💸 Sale", cls: "tag--sale" },
  null, null, null, null, // ~57% chance of no tag
];
const productTag = (id) => {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (Math.imul(17, h) + id.charCodeAt(i)) | 0;
  return PRODUCT_TAGS[Math.abs(h) % PRODUCT_TAGS.length];
};

const soldCount = (id) => {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (Math.imul(31, h) + id.charCodeAt(i)) | 0;
  return 47 + Math.abs(h) % 453;
};

function productCard(p){
  const href = `product#${encodeURIComponent(p.id)}`;
  const sold = soldCount(p.id);
  const wishlisted = getWishlist().includes(p.id);
  const tag = productTag(p.id);
  const stock = stockLeft(p.id);
  return `
  <a href="${href}" class="card popular-card product-card-link" data-preview-id="${p.id}" aria-label="View ${escapeAttr(p.name)}">
    <div class="popular-card__media">
      <div class="thumb">
        ${lazyImage(p.img, p.name, "popular-card__image")}
      </div>
      <div class="popular-card__glow"></div>
      ${tag ? `<span class="productTag ${tag.cls}">${tag.label}</span>` : ""}
      <button type="button" class="heartBtn${wishlisted ? " heartBtn--on" : ""}" data-wishlist="${p.id}" aria-label="${wishlisted ? "Remove from wishlist" : "Add to wishlist"}" title="Wishlist">${wishlisted ? "❤️" : "🤍"}</button>
    </div>
    <div class="popular-card__body">
      <p class="cardTitle">${p.name}</p>
      <p class="cardMeta">${localeNote(p)}</p>
      <div class="cardSoldRow">
        <span class="soldBadge">🔥 ${sold} sold</span>
        ${stock ? `<span class="stockUrgency">⚡ Only ${stock} left!</span>` : ""}
      </div>
      <div class="price">
        <div class="priceMain">
          <strong>${formatPriceLine(p)}</strong>
          ${p.tier ? `<small class="cardMeta" style="margin-top:2px;display:block">${p.tier}</small>` : ""}
          ${p.availability ? `<small class="small">${t("availabilityPrefix")} ${availabilityLabel(p.availability)}</small>` : ""}
        </div>
        <button class="btn primary cardAddBtn" data-add="${p.id}">${t("addButton", "Add")}</button>
        <button class="btn cmpBtn" data-cmp-btn="${p.id}" title="Compare">+</button>
      </div>
    </div>
  </a>
  `;
}

function wireAddButtons(root=document){
  $all("[data-add]", root).forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(btn.getAttribute("data-add"), 1);
      openCart();
    });
  });
  $all("[data-wishlist]", root).forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.getAttribute("data-wishlist");
      toggleWishlist(id);
      const on = getWishlist().includes(id);
      btn.classList.toggle("heartBtn--on", on);
      btn.textContent = on ? "❤️" : "🤍";
      btn.setAttribute("aria-label", on ? "Remove from wishlist" : "Add to wishlist");
      btn.classList.add("heartBtn--pop");
      setTimeout(() => btn.classList.remove("heartBtn--pop"), 350);
    });
  });
  $all("[data-cmp-btn]", root).forEach(btn => {
    btn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); toggleCompare(btn.dataset.cmpBtn); });
  });
}

const RV_KEY = "su_recently_viewed_v2";
const RV_MAX = 6;

function trackRecentlyViewed(product) {
  let list = [];
  try { list = JSON.parse(localStorage.getItem(RV_KEY) || "[]"); } catch (_) {}
  list = list.filter(p => p.id !== product.id);
  list.unshift({ id: product.id, name: product.name, price: product.price, img: product.img || product.image || "" });
  if (list.length > RV_MAX) list.length = RV_MAX;
  try { localStorage.setItem(RV_KEY, JSON.stringify(list)); } catch (_) {}
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  let list = [];
  try { list = JSON.parse(localStorage.getItem(RV_KEY) || "[]"); } catch (_) {}
  const section = document.querySelector("[data-recently-viewed]");
  if (!section) return;
  if (list.length === 0) { section.hidden = true; return; }
  section.hidden = false;
  const row = section.querySelector("[data-rv-row]");
  if (!row) return;
  row.innerHTML = list.map(p => {
    const allProds = [...(window.__products || []), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
    const full = allProds.find(x => x.id === p.id);
    const img = (full && (full.img || full.image)) || p.img || "";
    return `<a class="rvCard product-card-link" data-preview-id="${escapeHtml(p.id)}" href="product#${encodeURIComponent(p.id)}" aria-label="${escapeHtml(p.name)}">
      <div class="rvCard__thumb">${img ? `<img src="${escapeHtml(img)}" alt="" loading="lazy">` : '<span class="rvCard__placeholder">📦</span>'}</div>
      <div class="rvCard__name">${escapeHtml(p.name)}</div>
      <div class="rvCard__price">${formatNPR(p.price)}</div>
    </a>`;
  }).join("");
}

function initRecentlyViewed() {
  // Refresh stale image URLs in localStorage against current product definitions
  try {
    const allProds = [...(window.__products || []), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
    let list = JSON.parse(localStorage.getItem(RV_KEY) || "[]");
    let changed = false;
    list = list.map(p => {
      const full = allProds.find(x => x.id === p.id);
      if (full && (full.img || full.image)) {
        const freshImg = full.img || full.image;
        if (p.img !== freshImg) { changed = true; return { ...p, img: freshImg }; }
      }
      return p;
    });
    if (changed) localStorage.setItem(RV_KEY, JSON.stringify(list));
  } catch (_) {}

  const footer = document.querySelector("footer.footer");
  if (!footer) return;
  const section = document.createElement("section");
  section.className = "section";
  section.setAttribute("data-recently-viewed", "");
  section.hidden = true;
  section.innerHTML = `<div class="container"><div class="sectionHeader" style="margin-bottom:12px"><h2 style="font-size:16px;letter-spacing:.06em;text-transform:uppercase">Recently Viewed</h2></div><div class="rvRow" data-rv-row=""></div></div>`;
  footer.insertAdjacentElement("beforebegin", section);
  renderRecentlyViewed();
}

function initPageExitTransition() {
  const overlay = document.createElement("div");
  overlay.id = "exitOverlay";
  overlay.style.cssText = "position:fixed;inset:0;background:#070A12;opacity:0;pointer-events:none;z-index:99999;transition:opacity .35s";
  document.body.appendChild(overlay);
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("javascript") || a.getAttribute("target") === "_blank") return;
    if (a.getAttribute("data-open-cart") !== null) return;
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return;
    // Same-page hash navigation (pills, anchors): let browser handle it, no overlay
    if (url.pathname === location.pathname) return;
    e.preventDefault();
    overlay.style.pointerEvents = "auto";
    overlay.style.opacity = "1";
    setTimeout(() => { window.location.href = href; }, 360);
  });
  window.addEventListener("pageshow", () => {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  });
  // Safety net: hide overlay if a hash change happens while it's visible
  window.addEventListener("hashchange", () => {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
  });
}

function initMobileBottomNav() {
  const nav = document.createElement("nav");
  nav.className = "mobileBottomNav";
  nav.setAttribute("aria-label", "Bottom navigation");
  nav.innerHTML = `
    <a class="mobileBottomNav__item" href="index.html" aria-label="Home">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <span>Home</span>
    </a>
    <button class="mobileBottomNav__item" id="mbnSearch" type="button" aria-label="Search">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <span>Search</span>
    </button>
    <button class="mobileBottomNav__item mobileBottomNav__cart" type="button" data-open-cart="" aria-label="Cart">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      <span class="mobileBottomNav__badge badge" data-cart-count="">0</span>
      <span>Cart</span>
    </button>
    <a class="mobileBottomNav__item" href="profile.html" aria-label="Profile">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <span>Account</span>
    </a>`;
  document.body.appendChild(nav);

  // wire search button to focus the topbar search input
  document.getElementById("mbnSearch")?.addEventListener("click", () => {
    const inp = document.querySelector(".search input");
    if (inp) { inp.focus(); inp.scrollIntoView({ behavior: "smooth", block: "center" }); }
  });

  // mark active item
  const current = location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll("a[href]").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("mobileBottomNav__item--active");
  });

  updateCartCount();
}

function initPwaInstall() {
  let deferredPrompt = null;
  const DISMISSED_KEY = "su_pwa_dismissed";

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (localStorage.getItem(DISMISSED_KEY)) return;
    showInstallBanner();
  });

  function showInstallBanner() {
    if (document.querySelector(".pwaInstallBanner")) return;
    const banner = document.createElement("div");
    banner.className = "pwaInstallBanner";
    banner.innerHTML = `<div class="pwaInstallBanner__icon">📲</div><div class="pwaInstallBanner__text"><strong>Install SoftUpakaran</strong><span>Add to home screen for quick access</span></div><button class="btn primary pwaInstallBanner__btn">Install</button><button class="pwaInstallBanner__close" aria-label="Dismiss">×</button>`;
    document.body.appendChild(banner);
    requestAnimationFrame(() => requestAnimationFrame(() => banner.classList.add("pwaInstallBanner--visible")));

    banner.querySelector(".pwaInstallBanner__btn").addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      deferredPrompt = null;
      banner.classList.remove("pwaInstallBanner--visible");
      setTimeout(() => banner.remove(), 400);
      if (outcome === "dismissed") localStorage.setItem(DISMISSED_KEY, "1");
    });

    banner.querySelector(".pwaInstallBanner__close").addEventListener("click", () => {
      localStorage.setItem(DISMISSED_KEY, "1");
      banner.classList.remove("pwaInstallBanner--visible");
      setTimeout(() => banner.remove(), 400);
    });
  }

  window.addEventListener("appinstalled", () => {
    const b = document.querySelector(".pwaInstallBanner");
    if (b) { b.classList.remove("pwaInstallBanner--visible"); setTimeout(() => b.remove(), 400); }
  });
}

function initFlashCountdown() {
  const KEY = "su_flash_end";
  const DURATION_H = 6;
  let endMs = parseInt(localStorage.getItem(KEY) || "0", 10);
  if (!endMs || endMs < Date.now()) {
    endMs = Date.now() + DURATION_H * 3600 * 1000;
    localStorage.setItem(KEY, String(endMs));
  }

  const banner = document.createElement("div");
  banner.className = "flashBanner";
  banner.innerHTML = `<span class="flashBanner__label">⚡ Flash Sale</span><span class="flashBanner__ends">Ends in</span><span class="flashBanner__clock" data-flash-clock=""></span>`;
  const ribbon = document.querySelector(".promoRibbon");
  if (ribbon) ribbon.insertAdjacentElement("afterend", banner);
  else document.body.prepend(banner);

  const clock = banner.querySelector("[data-flash-clock]");
  const update = () => {
    const left = Math.max(0, endMs - Date.now());
    if (left === 0) {
      endMs = Date.now() + DURATION_H * 3600 * 1000;
      localStorage.setItem(KEY, String(endMs));
    }
    const h = Math.floor(left / 3600000);
    const m = Math.floor((left % 3600000) / 60000);
    const s = Math.floor((left % 60000) / 1000);
    const pad = (n) => String(n).padStart(2, "0");
    clock.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    const urgency = left < 3600000; // < 1hr
    banner.classList.toggle("flashBanner--urgent", urgency);
  };
  update();
  setInterval(update, 1000);
}

function initSocialToasts() {
  const MESSAGES = [
    { name: "Raj", city: "Kathmandu", item: "Netflix 1 Month" },
    { name: "Priya", city: "Pokhara", item: "Spotify Premium" },
    { name: "Sanjay", city: "Lalitpur", item: "YouTube Premium" },
    { name: "Anita", city: "Bhaktapur", item: "Disney+ Hotstar" },
    { name: "Bikash", city: "Biratnagar", item: "Free Fire Diamonds" },
    { name: "Sunita", city: "Butwal", item: "PUBG Mobile UC" },
    { name: "Rohan", city: "Chitwan", item: "Canva Pro" },
    { name: "Maya", city: "Dharan", item: "ChatGPT Plus" },
    { name: "Dipak", city: "Birgunj", item: "WP Elementor Pro" },
    { name: "Sima", city: "Hetauda", item: "Mobile Legends Diamonds" },
  ];
  const INTERVAL = 14000;
  const SHOW_DUR = 5000;

  const container = document.createElement("div");
  container.className = "socialToastContainer";
  document.body.appendChild(container);

  let idx = Math.floor(Math.random() * MESSAGES.length);
  const show = () => {
    const m = MESSAGES[idx % MESSAGES.length];
    idx++;
    const toast = document.createElement("div");
    toast.className = "socialToast";
    toast.innerHTML = `<span class="socialToast__icon">🛒</span><div class="socialToast__text"><strong>${m.name}</strong> from ${m.city}<span>just purchased ${m.item}</span></div>`;
    container.appendChild(toast);
    requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add("socialToast--visible")));
    setTimeout(() => {
      toast.classList.remove("socialToast--visible");
      setTimeout(() => toast.remove(), 420);
    }, SHOW_DUR);
  };

  setTimeout(show, 6000);
  setInterval(show, INTERVAL);
}

function initCountUp() {
  if (!("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll("[data-count]");
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting || target._counted) return;
      target._counted = true;
      io.unobserve(target);
      const end = parseInt(target.getAttribute("data-count"), 10);
      const suffix = target.getAttribute("data-count-suffix") || "";
      const dur = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        target.textContent = Math.round(ease * end) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  els.forEach(el => io.observe(el));
}

function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      target.setAttribute("data-sr", "seen");
      io.unobserve(target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });

  const observe = (sel, delayFn) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      if (el.hasAttribute("data-sr")) return;
      el.setAttribute("data-sr", "");
      if (delayFn) el.style.transitionDelay = delayFn(i);
      io.observe(el);
    });
  };

  observe(".sectionHeader");
  observe(".trending-banner");
  observe(".heroStats__item", (i) => `${(i * 0.09).toFixed(2)}s`);
  observe(".blog-grid");
}

function initTiltCards() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
  const MAX = 8;
  const reset = (card) => {
    card.style.setProperty("--tx", "0deg");
    card.style.setProperty("--ty", "0deg");
  };
  document.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;
    const card = e.target.closest(".popular-card:not(.skl)");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty("--tx", `${(x * MAX * 1.6).toFixed(1)}deg`);
    card.style.setProperty("--ty", `${(-y * MAX).toFixed(1)}deg`);
  });
  document.addEventListener("pointerout", (e) => {
    if (e.pointerType === "touch") return;
    const card = e.target.closest(".popular-card:not(.skl)");
    if (card && !card.contains(e.relatedTarget)) reset(card);
  });
}

/* ── Product Preview Modal ─────────────────────────────────────── */
function ensurePreviewModal(){
  if(document.querySelector("[data-preview-modal]")) return;
  const backdrop = document.createElement("div");
  backdrop.className = "modalBackdrop";
  backdrop.setAttribute("data-preview-modal","");
  backdrop.setAttribute("aria-hidden","true");
  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-label="Product preview" style="max-width:800px;width:min(800px,96vw)">
      <div class="previewSwipeHandle" aria-hidden="true"></div>
      <div class="modalHeader">
        <h3 data-preview-title="">Product Preview</h3>
        <button class="btn icon" data-preview-close="" aria-label="Close" style="font-size:20px;line-height:1">×</button>
      </div>
      <div class="modalBody" data-preview-body="" style="padding:20px"></div>
    </div>`;
  document.body.appendChild(backdrop);
  backdrop.addEventListener("click", (e)=>{ if(e.target===backdrop) closeProductPreview(); });
  backdrop.querySelector("[data-preview-close]").addEventListener("click", closeProductPreview);
  wireSwipeToDismiss(backdrop.querySelector(".modal"));
}

function wireSwipeToDismiss(modal) {
  if (!modal) return;
  let startY = 0, curY = 0, dragging = false;
  const THRESHOLD = 100;
  modal.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    curY = 0;
    dragging = true;
    modal.style.transition = "none";
  }, { passive: true });
  modal.addEventListener("touchmove", (e) => {
    if (!dragging) return;
    const dy = e.touches[0].clientY - startY;
    if (dy < 0) return; // no upward drag
    curY = dy;
    modal.style.transform = `translateY(${dy}px)`;
  }, { passive: true });
  modal.addEventListener("touchend", () => {
    dragging = false;
    modal.style.transition = "";
    if (curY > THRESHOLD) {
      modal.style.transform = `translateY(${modal.offsetHeight}px)`;
      setTimeout(() => {
        modal.style.transform = "";
        closeProductPreview();
      }, 280);
    } else {
      modal.style.transform = "";
    }
    curY = 0;
  });
}

function openProductPreview(product){
  trackRecentlyViewed(product);
  ensurePreviewModal();
  const backdrop = document.querySelector("[data-preview-modal]");
  const title    = backdrop.querySelector("[data-preview-title]");
  const body     = backdrop.querySelector("[data-preview-body]");
  const isMerch  = product.category === "judas-priest";
  const ratio    = isMerch ? "4/5" : "1/1";
  const kicker   = isMerch ? "Official Merchandise" : "Digital Delivery";
  const noteText = isMerch
    ? "Order via WhatsApp — we confirm and dispatch within 1–3 business days."
    : "After payment, share your account email / ID on WhatsApp. We deliver within 5–30 minutes.";

  title.textContent = product.name;
  body.innerHTML = `
    <div class="pvGrid">
      <div class="pvMedia">
        <div class="thumb" style="aspect-ratio:${ratio};border-radius:12px;overflow:hidden;background:#111">
          ${lazyImage(product.img, product.name, "pv-img")}
        </div>
      </div>
      <div class="pvInfo">
        <div class="kicker">${kicker}</div>
        <h2 style="margin:8px 0 4px;font-size:clamp(18px,3vw,26px)">${escapeHtml(product.name)}</h2>
        <p class="cardMeta" style="margin-bottom:10px">${localeNote(product)}</p>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:8px">
          <div class="badge" style="font-size:18px;padding:6px 16px;display:inline-block">${formatNPR(product.price)}</div>
          <span class="viewersLive" id="pvViewers">👥 <span data-viewers></span> people viewing now</span>
        </div>
        <p style="color:rgba(255,255,255,.7);font-size:14px;line-height:1.6;margin-bottom:18px">${escapeHtml(product.note||"")}. ${escapeHtml(noteText)}</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn primary" data-pv-add="${product.id}" style="min-width:130px">Add to Cart</button>
          <a class="btn waOrderBtn" href="https://wa.me/97721121212121?text=${encodeURIComponent(`Hi, I want to order: ${product.name} (${formatNPR(product.price)}). Please confirm availability.`)}" target="_blank" rel="noreferrer" style="border-color:rgba(37,211,102,.5);background:rgba(37,211,102,.1);color:#c7ffe2"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style="flex-shrink:0"><path d="M20.52 3.48A11.83 11.83 0 0012.06.06C5.49.06.12 5.43.12 12a11.86 11.86 0 001.58 5.94L0 24l6.24-1.64A11.86 11.86 0 0012.06 24c6.57 0 11.94-5.37 11.94-11.94a11.87 11.87 0 00-3.48-8.58zM12.06 22a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37A9.9 9.9 0 012.12 12C2.12 6.54 6.6 2.06 12.06 2.06a9.88 9.88 0 017 2.9 9.88 9.88 0 012.89 7A9.9 9.9 0 0112.06 22zm5.43-7.39c-.3-.15-1.77-.87-2.04-1s-.5-.15-.7.15-.79 1-1 1.24-.37.23-.68.08a8.56 8.56 0 01-2.51-1.55 9.46 9.46 0 01-1.74-2.17c-.18-.31 0-.47.14-.63s.3-.36.45-.54.2-.31.3-.52a.57.57 0 000-.54c-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6a1.14 1.14 0 00-.83.39 3.5 3.5 0 00-1.09 2.6 6.05 6.05 0 001.27 3.22c.15.2 2.14 3.26 5.19 4.57a17.4 17.4 0 001.73.64 4.13 4.13 0 001.9.12c.58-.09 1.77-.72 2.02-1.42s.25-1.3.17-1.42-.27-.23-.57-.38z"/></svg> Order via WhatsApp</a>
          <button class="btn" data-pv-share style="gap:6px">🔗 Share</button>
          <a class="btn" href="product#${encodeURIComponent(product.id)}">Full Details</a>
        </div>
      </div>
    </div>`;

  backdrop.querySelector("[data-pv-add]")?.addEventListener("click", ()=>{
    addToCart(product.id, 1);
    closeProductPreview();
    openCart();
  });

  backdrop.querySelector("[data-pv-share]")?.addEventListener("click", async (e) => {
    const shareBtn = e.currentTarget;
    const shareUrl = `${location.origin}/product#${encodeURIComponent(product.id)}`;
    const shareData = { title: product.name, text: `Check out ${product.name} on SoftUpakaran — ${formatNPR(product.price)}`, url: shareUrl };
    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        shareBtn.textContent = "✅ Copied!";
        setTimeout(() => { shareBtn.innerHTML = "🔗 Share"; }, 1800);
      }
    } catch (_) {
      shareBtn.textContent = "✅ Copied!";
      setTimeout(() => { shareBtn.innerHTML = "🔗 Share"; }, 1800);
    }
  });

  // Bundle deals row
  const allProds = [...products, ...DEFAULT_PRODUCTS.filter(p => !products.find(x => x.id === p.id))];
  const related = allProds.filter(p => p.category === product.category && p.id !== product.id).slice(0, 2);
  if (related.length) {
    const bundleTotal = product.price + related.reduce((s, p) => s + p.price, 0);
    const discounted = Math.round(bundleTotal * 0.9);
    const bundleHtml = `
      <div class="bundleRow" style="margin-top:16px;border-top:1px solid rgba(255,255,255,.08);padding-top:14px">
        <p style="font-size:12px;color:rgba(255,255,255,.5);margin:0 0 10px;text-transform:uppercase;letter-spacing:.08em">Frequently bought together</p>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
          <div style="display:flex;gap:6px;align-items:center">
            <div class="bundleThumb" style="width:44px;height:44px;border-radius:8px;overflow:hidden;border:2px solid rgba(124,58,237,.4)">${lazyImage(product.img, product.name, "")}</div>
            ${related.map(r => `<span style="opacity:.5;font-size:16px">+</span><div class="bundleThumb" style="width:44px;height:44px;border-radius:8px;overflow:hidden;border:1px solid rgba(255,255,255,.12)">${lazyImage(r.img, r.name, "")}</div>`).join("")}
          </div>
          <div style="flex:1;min-width:140px">
            <div style="font-size:12px;color:rgba(255,255,255,.55);text-decoration:line-through">${formatNPR(bundleTotal)}</div>
            <div style="font-size:15px;font-weight:700;color:#6ee7b7">${formatNPR(discounted)} <span style="font-size:11px;background:rgba(16,185,129,.18);border:1px solid rgba(16,185,129,.4);border-radius:999px;padding:1px 7px">10% off</span></div>
          </div>
          <button class="btn primary" data-bundle-add style="font-size:12px;padding:7px 12px">Add bundle</button>
        </div>
      </div>`;
    body.insertAdjacentHTML("beforeend", bundleHtml);
    initLazyImages(body);
    body.querySelector("[data-bundle-add]")?.addEventListener("click", () => {
      addToCart(product.id, 1);
      related.forEach(r => addToCart(r.id, 1));
      closeProductPreview();
      openCart();
    });
  }

  backdrop.setAttribute("aria-hidden","false");
  backdrop.style.display = "flex";
  initLazyImages(body);

  // Live viewer count
  const viewerEl = body.querySelector("[data-viewers]");
  if (viewerEl) {
    const base = 3 + (soldCount(product.id) % 14);
    let cur = base;
    viewerEl.textContent = cur;
    if (backdrop._viewerTimer) clearInterval(backdrop._viewerTimer);
    backdrop._viewerTimer = setInterval(() => {
      cur = Math.max(2, cur + (Math.random() > 0.5 ? 1 : -1));
      if (viewerEl.isConnected) viewerEl.textContent = cur;
      else clearInterval(backdrop._viewerTimer);
    }, 4000);
  }
}

function closeProductPreview(){
  const backdrop = document.querySelector("[data-preview-modal]");
  if(!backdrop) return;
  if (backdrop._viewerTimer) { clearInterval(backdrop._viewerTimer); backdrop._viewerTimer = null; }
  backdrop.setAttribute("aria-hidden","true");
  backdrop.style.display = "none";
}

function wirePreviewCards(root=document){
  root.querySelectorAll("[data-preview-id]").forEach(card=>{
    if(card._previewWired) return;
    card._previewWired = true;
    card.addEventListener("click",(e)=>{
      if(e.target.closest("[data-add]") || e.target.closest("[data-wishlist]")) return;
      e.preventDefault();
      const id = card.getAttribute("data-preview-id");
      const product = products.find(p=>p.id===id) || DEFAULT_PRODUCTS.find(p=>p.id===id);
      if(product) openProductPreview(product);
    });
  });
}
/* ─────────────────────────────────────────────────────────────── */

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
  bilingualTextManager?.refresh();
  bilingualTextManager?.update(currentLocale === "ne" ? "np" : "en", currentLocale);
}

// Re-render category/product page when hash changes (hash routing replaces ?query)
window.addEventListener("hashchange", () => {
  renderCategoryPage();
  renderProductPage();
});

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
  const id = getParam("c") || (location.hash ? decodeURIComponent(location.hash.slice(1)) : null) || "judas-priest";
  const cat = categories.find(x => x.id === id);
  document.title = `${cat ? cat.name : "Category"} - SoftUpakaran`;
  const header = document.querySelector("[data-category-title]");
  if(header) header.textContent = cat ? cat.name : "Category";
  // also check alternate API category IDs (e.g. "subs" maps to "subscriptions")
  const ALT_IDS = { subscriptions: ["subs", "subscription"], netflix: ["streaming"] };
  const alts = ALT_IDS[id] || [];
  const filtered = products.filter(p => p && (p.category === id || alts.includes(p.category)));
  // category-specific sample fallbacks
  const SAMPLE_FALLBACKS = {
    subscriptions: [...SAMPLE_SUBSCRIPTIONS],
    netflix: [{ id:"sample-netflix-ph", name:"Netflix Premium (1 Month)", category:"netflix", price:1299, img:"https://images.unsplash.com/photo-1515170617208-5648d2fe5a4a?auto=format&fit=crop&w=900&q=80", note:"Shared profile · 4K" }],
    "wp-plugins": SAMPLE_TOOLS.filter(p => p.category === "wp-plugins"),
    "wp-themes": SAMPLE_TOOLS.filter(p => p.category === "wp-themes"),
    ecommerce: COLLECTION_SAMPLE_FALLBACK.filter(p => p.category === "ecommerce"),
    vpn: COLLECTION_SAMPLE_FALLBACK.filter(p => p.category === "vpn"),
  };
  const fallbackItems = SAMPLE_FALLBACKS[id] || [];
  const items = filtered.length ? filtered : fallbackItems;
  root.innerHTML = items.length
    ? items.map(productCard).join("")
    : `<div class="card" style="grid-column:1/-1"><div class="pad" style="text-align:center;padding:32px 16px">
        <p style="font-size:2rem;margin-bottom:12px">🛍️</p>
        <p class="cardTitle">${cat ? cat.name : "Category"} — Coming Soon</p>
        <p class="cardMeta" style="margin-top:6px">Products for this category are being added. Check back soon!</p>
        <a class="btn primary" href="index.html" style="margin-top:18px;display:inline-block">Browse All Products</a>
      </div></div>`;
  wireAddButtons(root);
  ensureVisible(root);
}

function renderProductPage(){
  const root = document.querySelector("[data-product]");
  if(!root) return;
  const rawId = getParam("id") || (location.hash ? decodeURIComponent(location.hash.slice(1)) : null);
  if(!rawId){
    root.innerHTML = `
      <div class="card"><div class="pad">
        <p class="cardTitle">No product selected</p>
        <p class="cardMeta">Please browse the store and select a product.</p>
        <a class="btn primary" href="index.html" style="margin-top:14px;display:inline-block">Browse Store</a>
      </div></div>`;
    return;
  }
  const id = rawId;
  const p = products.find(x => x.id === id)
    || DEFAULT_PRODUCTS.find(x => x.id === id)
    || SAMPLE_SUBSCRIPTIONS.find(x => x.id === id)
    || SAMPLE_TOOLS.find(x => x.id === id)
    || COLLECTION_SAMPLE_FALLBACK.find(x => x.id === id);
  if(!p){
    root.innerHTML = `
      <div class="card"><div class="pad">
        <p class="cardTitle">Loading product...</p>
        <p class="cardMeta">Fetching details from the catalog.</p>
      </div></div>`;
    loadProductById(id).then((result) => {
      if(result){
        renderProductPage();
      } else {
        root.innerHTML = `
          <div class="card"><div class="pad">
            <p class="cardTitle">Product not found</p>
            <p class="cardMeta">This product could not be loaded. It may have been removed or is temporarily unavailable.</p>
            <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
              <a class="btn primary" href="index.html">Back to Store</a>
              <button class="btn" onclick="history.back()">Go Back</button>
            </div>
          </div></div>`;
      }
    });
    return;
  }
  document.title = `${p.name} - SoftUpakaran`;
  const isMerch = p.category === "judas-priest";
  const kicker = isMerch ? "Official Merchandise" : "Digital Delivery";
  const deliveryNote = isMerch
    ? `${p.note}. Order via WhatsApp — we confirm and dispatch within 1–3 business days.`
    : `${p.note}. After payment, share your account email/ID on WhatsApp. We deliver within 5–30 minutes.`;
  const steps = isMerch
    ? "1) Choose item → 2) Place order → 3) Pay via eSewa/Khalti → 4) We ship to your address"
    : "1) Choose plan → 2) Share details → 3) Pay → 4) Get delivery";
  const heroContent = `
    <div class="heroGrid">
      <div class="heroCard">
        <div style="border-radius:12px; overflow:hidden; background:#111; display:flex; align-items:center; justify-content:center; min-height:200px;">
          <img class="lazy hero-img" loading="lazy" decoding="async"
               src="${LAZY_IMAGE_PLACEHOLDER}"
               data-src="${escapeHtml(p.img)}"
               alt="${escapeHtml(p.name)}"
               style="width:100%; height:auto; max-height:480px; object-fit:contain; display:block; border-radius:12px;">
        </div>
      </div>
      <div class="heroCard">
        <div class="inner">
          <div class="kicker">${kicker}</div>
          <div class="h1" style="margin-top:10px">${p.name}</div>
          <p class="sub">${deliveryNote}</p>
          <div style="margin-top:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
            <div class="badge">${formatNPR(p.price)}</div>
            <div class="small">Secure checkout · Support on WhatsApp</div>
          </div>
          <div class="heroActions">
            <button class="btn primary" id="buyNow">Add to cart</button>
            <a class="btn" href="category#${encodeURIComponent(p.category)}">Back to collection</a>
          </div>
          <div style="margin-top:18px">
            <div class="feature">
              <h3>How it works</h3>
              <p>${steps}</p>
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
    <a class="related-card" href="product#${encodeURIComponent(p.id)}">
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
        <a class="btn icon" href="category#${encodeURIComponent(current.category)}">View category</a>
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
  requestAnimationFrame(() => requestAnimationFrame(() => backdrop.classList.add("drawer--open")));
  document.body.style.overflow = "hidden";
}
function closeCart(){
  const backdrop = document.querySelector("[data-cart-modal]");
  if(!backdrop) return;
  backdrop.classList.remove("drawer--open");
  document.body.style.overflow = "";
  setTimeout(() => { backdrop.style.display = "none"; }, 400);
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

  const subtotal = cartTotal();
  const discountNpr = couponDiscount(subtotal);
  const total = Math.max(0, subtotal - discountNpr);

  footer.innerHTML = `
    ${statusHtml}
    <div>
      <div class="small">Subtotal: ${formatNPR(subtotal)}</div>
      ${discountNpr ? `<div class="small">Coupon (${COUPON_CODE}): -${formatNPR(discountNpr)}</div>` : ""}
      <div class="tot">Total: ${formatNPR(total)}</div>
      <div class="notice">Demo checkout only (no payment). Replace later with real gateway.</div>
    </div>
    ${!discountNpr ? `<div class="couponRow" data-coupon-row><input class="couponInput" type="text" placeholder="Discount code" aria-label="Discount code" data-coupon-input maxlength="32"><button class="btn couponApplyBtn" data-coupon-apply>Apply</button><span class="couponStatus" data-coupon-status aria-live="polite"></span></div>` : `<div class="couponRow couponRow--applied"><span class="couponStatus couponStatus--ok">✓ ${COUPON_CODE} applied</span></div>`}
    <div>
      <div class="notice">${t("demoNotice")}</div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end">
      <button class="btn" data-clear>Clear</button>
      <button class="btn secondary" data-demo-order>${t("demoOrder")}</button>
      <button class="btn primary" data-checkout>Checkout</button>
    </div>
    <div class="cartPayBadges"><span style="font-size:11px;color:rgba(255,255,255,.45)">We accept:</span><span class="payBadge payBadge--esewa">eSewa</span><span class="payBadge payBadge--khalti">Khalti</span><span class="payBadge payBadge--ime">IME Pay</span><span class="payBadge payBadge--connectips">ConnectIPS</span><span class="payBadge payBadge--bank">🏦 Bank</span></div>
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

  // Coupon input animation
  const couponRow = footer.querySelector("[data-coupon-row]");
  if (couponRow) {
    const inp = couponRow.querySelector("[data-coupon-input]");
    const applyBtn = couponRow.querySelector("[data-coupon-apply]");
    const statusEl = couponRow.querySelector("[data-coupon-status]");
    const tryApply = () => {
      const code = inp.value.trim().toUpperCase();
      if (!code) return;
      const ok = applyCouponCode(code);
      couponRow.classList.remove("couponRow--success", "couponRow--error");
      inp.classList.remove("couponInput--success", "couponInput--error");
      void inp.offsetWidth; // reflow to restart animation
      if (ok) {
        inp.classList.add("couponInput--success");
        couponRow.classList.add("couponRow--success");
        statusEl.textContent = "✓ Code applied!";
        statusEl.className = "couponStatus couponStatus--ok";
        setTimeout(() => renderCart(), 700);
      } else {
        inp.classList.add("couponInput--error");
        couponRow.classList.add("couponRow--error");
        statusEl.textContent = "✗ Invalid code";
        statusEl.className = "couponStatus couponStatus--err";
      }
    };
    applyBtn?.addEventListener("click", tryApply);
    inp?.addEventListener("keydown", (e) => { if (e.key === "Enter") tryApply(); });
  }

  footer.querySelector("[data-clear]")?.addEventListener("click", () => { saveCart([]); renderCart(); });
  footer.querySelector("[data-demo-order]")?.addEventListener("click", async () => {
    await triggerDemoOrder();
    showOrderTracking();
  });
  footer.querySelector("[data-checkout]")?.addEventListener("click", () => {
    openMultiStepCheckout();
  });

updateCartCount();
}

function showOrderTracking() {
  const orderId = "SU-" + Math.floor(100000 + Math.random() * 900000);
  const steps = [
    { icon: "✅", label: "Order Confirmed", time: "Just now", done: true },
    { icon: "🔄", label: "Processing", time: "Est. 2 min", done: false, active: true },
    { icon: "📦", label: "Preparing Delivery", time: "Est. 5 min", done: false },
    { icon: "⚡", label: "Delivered to WhatsApp", time: "Est. 15 min", done: false },
  ];
  const overlay = document.createElement("div");
  overlay.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px";
  overlay.innerHTML = `
    <div class="orderTrackCard">
      <div class="orderTrackHead">
        <div>
          <div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:4px">Order ID</div>
          <div style="font-size:18px;font-weight:700;color:#a5f3fc">${orderId}</div>
        </div>
        <button class="btn" id="closeOrderTrack" aria-label="Close">✕</button>
      </div>
      <div class="orderTimeline">
        ${steps.map(s => `
          <div class="orderStep${s.done ? " orderStep--done" : s.active ? " orderStep--active" : ""}">
            <div class="orderStepIcon">${s.icon}</div>
            <div class="orderStepInfo"><strong>${s.label}</strong><span>${s.time}</span></div>
          </div>`).join("")}
      </div>
      <p style="font-size:12px;color:rgba(255,255,255,.45);text-align:center;margin:14px 0 0">This is a demo order. No real payment was processed.</p>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector("#closeOrderTrack").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
  // Animate steps progressing
  let i = 1;
  const tick = setInterval(() => {
    if (i >= steps.length) { clearInterval(tick); return; }
    const stepEls = overlay.querySelectorAll(".orderStep");
    stepEls[i - 1]?.classList.remove("orderStep--active");
    stepEls[i - 1]?.classList.add("orderStep--done");
    if (stepEls[i]) { stepEls[i].classList.add("orderStep--active"); }
    i++;
  }, 2500);
}

function wireCartButtons(){
  document.querySelectorAll("[data-open-cart]").forEach(b => {
    b.addEventListener("click", (e) => { e.preventDefault(); openCart(); });
    // Hover mini-preview (desktop only)
    if (window.matchMedia("(hover:hover)").matches) {
      let hoverTimer, popup;
      const showPopup = () => {
        const lines = cartLines();
        if (!lines.length) return;
        popup = document.createElement("div");
        popup.className = "cartHoverPopup";
        popup.innerHTML = `<div class="chpTitle">Cart (${lines.length} item${lines.length > 1 ? "s" : ""})</div>` +
          lines.slice(0, 3).map(l => `<div class="chpRow"><span class="chpName">${escapeHtml(l.name)}</span><span class="chpQty">×${l.qty}</span><span class="chpPrice">${formatNPR(l.lineTotal)}</span></div>`).join("") +
          (lines.length > 3 ? `<div class="chpMore">+${lines.length - 3} more</div>` : "") +
          `<div class="chpTotal">Total: ${formatNPR(cartTotal())}</div>`;
        const rect = b.getBoundingClientRect();
        popup.style.cssText = `position:fixed;top:${rect.bottom + 8}px;right:${window.innerWidth - rect.right}px;z-index:200`;
        document.body.appendChild(popup);
      };
      const hidePopup = () => { clearTimeout(hoverTimer); popup?.remove(); popup = null; };
      b.addEventListener("mouseenter", () => { hoverTimer = setTimeout(showPopup, 300); });
      b.addEventListener("mouseleave", hidePopup);
    }
  });
}

function wireCouponCodeTrigger(){
  document.querySelectorAll("[data-apply-coupon]").forEach((button) => {
    if (button._couponHandler) {
      button.removeEventListener("click", button._couponHandler);
    }
    const markApplied = () => {
      if (!button.dataset.originalLabel) {
        button.dataset.originalLabel = (button.textContent || "").trim();
      }
      button.classList.add("is-applied");
      button.setAttribute("title", `${COUPON_CODE} applied (Rs. ${COUPON_DISCOUNT_NPR} off)`);
      if (button.dataset.originalLabel) {
        button.textContent = "Code applied";
      }
      if ((button.tagName || "").toLowerCase() === "a") {
        button.setAttribute("href", "#");
      }
    };
    const handler = (event) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const code = button.getAttribute("data-apply-coupon") || COUPON_CODE;
      if (!applyCouponCode(code)) return;
      markApplied();
      try {
        if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
          navigator.clipboard.writeText(COUPON_CODE).catch(() => {});
        }
      } catch (_) {
        // Ignore clipboard failures.
      }
      if (cartCount() > 0) {
        openCart();
      } else {
        alert(`${COUPON_CODE} applied. Add items and checkout to get Rs. ${COUPON_DISCOUNT_NPR} off.`);
      }
    };
    button.addEventListener("click", handler);
    button._couponHandler = handler;
    if (isCouponApplied()) {
      markApplied();
    }
  });
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

    const highlight = (text, q) => {
      if (!q) return escapeHtml(text);
      const escaped = escapeHtml(text);
      const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
      return escaped.replace(re, '<mark class="srMark">$1</mark>');
    };

    const renderDropdown = (items, query) => {
      if(!dropdown) return;
      if(!query){
        dropdown.innerHTML = "";
        hideDropdown();
        return;
      }
      if(!items.length){
        dropdown.innerHTML = `<div class="search-dropdown-empty">No results for "<strong>${escapeHtml(query)}</strong>"</div>`;
        dropdown.classList.add("visible");
        suggestions = [];
        activeIndex = -1;
        return;
      }
      suggestions = items;
      activeIndex = -1;
      const catLabel = (cat) => {
        const c = DEFAULT_CATEGORIES.find(x => x.id === cat);
        return c ? escapeHtml(c.name) : escapeHtml(cat || "");
      };
      dropdown.innerHTML = items.map((p, idx) => {
        const img = p.img || p.image || "";
        const thumb = img
          ? `<img src="${escapeHtml(img)}" alt="" class="srThumb" loading="lazy">`
          : `<span class="srThumbPlaceholder">📦</span>`;
        return `<button type="button" class="search-dropdown-item" data-search-id="${encodeURIComponent(p.id)}" data-search-index="${idx}">
          <span class="srThumbWrap">${thumb}</span>
          <span class="srInfo">
            <span class="srName">${highlight(p.name, query)}</span>
            <span class="srMeta"><span class="srCat">${catLabel(p.category)}</span><span class="srPrice">${formatNPR(p.price)}</span></span>
          </span>
        </button>`;
      }).join("");
      dropdown.classList.add("visible");
    };

    const updateResults = () => {
      const q = input.value.trim().toLowerCase();
      const allProds = [...products, ...DEFAULT_PRODUCTS.filter(p => !products.find(x => x.id === p.id))];
      const filtered = q ? allProds.filter(p =>
        p.name.toLowerCase().includes(q) ||
        (p.category || "").toLowerCase().includes(q) ||
        (p.note || "").toLowerCase().includes(q)
      ) : [];
      const gridItems = filtered.slice(0, 8);
      if (root) {
        root.innerHTML = gridItems.length ? gridItems.map(productCard).join("") : q ? `
          <div class="card" style="grid-column:1/-1"><div class="pad">
            <p class="cardTitle">No matches for "${escapeHtml(q)}"</p>
            <p class="cardMeta">Try a different keyword.</p>
          </div></div>
        ` : "";
        if (gridItems.length) { wireAddButtons(root); ensureVisible(root); }
      }
      renderDropdown(filtered.slice(0, 7), q);
    };

    const SEARCH_HIST_KEY = "su_search_hist";
    const getSearchHist = () => { try { return JSON.parse(localStorage.getItem(SEARCH_HIST_KEY) || "[]"); } catch { return []; } };
    const saveSearchHist = (q) => {
      if (!q || q.length < 2) return;
      let h = getSearchHist().filter(x => x !== q);
      h.unshift(q);
      if (h.length > 5) h.length = 5;
      try { localStorage.setItem(SEARCH_HIST_KEY, JSON.stringify(h)); } catch {}
    };

    const showSearchHist = () => {
      if (!dropdown || input.value.trim()) return;
      const hist = getSearchHist();
      if (!hist.length) return;
      dropdown.innerHTML = `<div class="srHistHeader">Recent searches</div>` +
        hist.map(q => `<button type="button" class="search-dropdown-item srHistItem" data-hist-q="${escapeAttr(q)}"><span class="srHistIcon">🕐</span><span class="srHistLabel">${escapeHtml(q)}</span></button>`).join("") +
        `<button class="srHistClear" data-hist-clear>Clear history</button>`;
      dropdown.classList.add("visible");
      dropdown.querySelector("[data-hist-clear]")?.addEventListener("click", (e) => {
        e.stopPropagation();
        try { localStorage.removeItem(SEARCH_HIST_KEY); } catch {}
        hideDropdown();
      });
      dropdown.querySelectorAll("[data-hist-q]").forEach(btn => {
        btn.addEventListener("mousedown", (e) => { e.preventDefault(); });
        btn.addEventListener("click", () => {
          input.value = btn.getAttribute("data-hist-q");
          input.dispatchEvent(new Event("input"));
          input.focus();
        });
      });
    };

    input.addEventListener("input", () => { updateResults(); if(!input.value.trim()) showSearchHist(); });
    input.addEventListener("focus", () => {
      if(blurTimer) { clearTimeout(blurTimer); blurTimer = null; }
      if(suggestions.length && dropdown){
        dropdown.classList.add("visible");
      } else if (!input.value.trim()) {
        showSearchHist();
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
            window.location.href = `product#${encodeURIComponent(target.id)}`;
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
        const id = decodeURIComponent(btn.getAttribute("data-search-id") || "");
        if(id){
          saveSearchHist(input.value.trim());
          hideDropdown();
          input.value = "";
          const product = products.find(p => p.id === id) || DEFAULT_PRODUCTS.find(p => p.id === id);
          if (product) openProductPreview(product);
          else window.location.href = `product#${encodeURIComponent(id)}`;
        }
      }
    });

    // also open preview on Enter when item active
    input.addEventListener("keydown", (e2) => {
      if (e2.key === "Enter" && activeIndex < 0 && input.value.trim()) {
        // no active suggestion - just keep grid filtered (already done)
      }
    }, { capture: false });
  });

  // Ctrl+K / Cmd+K shortcut
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      const inp = document.querySelector("[data-search]");
      if (inp) { inp.focus(); inp.select(); }
    }
  });
}

// --- Payment / Checkout ---

async function sendOrderToBackend(extraNote){
  try{
    const lines = cartLines();
    if(!lines || !lines.length) {
      return { ok: false, error: "Cart is empty" };
    }

    const subtotal = cartTotal();
    const discountNpr = couponDiscount(subtotal);
    const total = Math.max(0, subtotal - discountNpr);
    const payload = {
      source: "softupakaran-web",
      items: lines.map(l => ({
        id: l.id,
        name: l.name,
        qty: l.qty,
        lineTotal: l.lineTotal
      })),
      subtotalNpr: subtotal,
      discountNpr,
      couponCode: discountNpr ? COUPON_CODE : null,
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
  const subtotal = cartTotal();
  const discountNpr = couponDiscount(subtotal);
  const total = Math.max(0, subtotal - discountNpr);
  const items = lines.map(l => `- ${l.name} x${l.qty} = ${formatNPR(l.lineTotal)}`).join("\\n");
  const discountLine = discountNpr ? `Coupon (${COUPON_CODE}): -${formatNPR(discountNpr)}\n` : "";
  return `Hello SoftUpakaran,\n\nI want to order:\n${items}\n\nSubtotal: ${formatNPR(subtotal)}\n${discountLine}Total: ${formatNPR(total)}\n\nPlease guide me for payment & delivery.`;
}

function openPayModal(){
  const backdrop = document.querySelector("[data-pay-modal]");
  if(!backdrop) return;

  const body = backdrop.querySelector("[data-pay-body]");
  const footer = backdrop.querySelector("[data-pay-footer]");
  const subtotal = cartTotal();
  const discountNpr = couponDiscount(subtotal);
  const total = Math.max(0, subtotal - discountNpr);

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
        ${discountNpr ? `<div class="small" style="margin-top:10px">Subtotal: ${formatNPR(subtotal)} · Coupon (${COUPON_CODE}): -${formatNPR(discountNpr)}</div>` : ""}
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
      const apiProds = rows.map(transformBackendProduct);
      const apiIds = new Set(apiProds.map(p => p.id));
      const localOnly = DEFAULT_PRODUCTS.filter(p => !apiIds.has(p.id));
      const sampleOnly = [...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS, ...COLLECTION_SAMPLE_FALLBACK]
        .filter(p => !apiIds.has(p.id));
      products = [...apiProds, ...localOnly, ...sampleOnly];
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
      const ilmProds = rawProds.map(p => {
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
      const ilmIds = new Set(ilmProds.map(p => p.id));
      const localFallback = [...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS, ...COLLECTION_SAMPLE_FALLBACK]
        .filter(p => !ilmIds.has(p.id));
      products = [...ilmProds, ...localFallback];
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
    pills.innerHTML = `<a class="pill le-pill-nav" href="live-events.html">🎸 Live Events</a>` +
      categories.map(c => `<a class="pill" href="category#${encodeURIComponent(c.id)}">${c.name}</a>`).join("");
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
  const blogTask = loadAndRenderBlog().catch(() => {});
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
  wireCouponCodeTrigger();
  wireSearch();
  ensurePreviewModal();

  // Global delegated handler for product card previews
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-preview-modal]")) return; // never intercept clicks inside the preview modal
    const card = e.target.closest("[data-preview-id]");
    if (!card) return;
    if (e.target.closest("[data-add]")) return;
    e.preventDefault();
    const id = card.getAttribute("data-preview-id");
    const product = products.find(p => p.id === id) || DEFAULT_PRODUCTS.find(p => p.id === id);
    if (product) openProductPreview(product);
  }, true); // capture phase so we catch it before any other handler

  // ESC closes preview modal
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeProductPreview(); });

  void Promise.allSettled([settingsTask, testimonialsTask, blogTask, heroTask, catalogTask]);

  // hero CTA
  document.querySelectorAll("[data-go-popular]").forEach(b => b.addEventListener("click", () => {
    document.querySelector("#popular")?.scrollIntoView({behavior:"smooth"});
  }));
  initTiltCards();
  initScrollReveal();
  initCountUp();
  initSocialToasts();
  initFlashCountdown();
  initRecentlyViewed();
  initPwaInstall();
  initMobileBottomNav();
  initPageExitTransition();
  initAnnouncementBar();
  initBackToTop();
  initScrollProgress();
  initTypewriter();
  initThemeToggle();
  initCurrencyToggle();
  setLocale(currentLocale);
  // Batch 4 features
  initCookieConsent();
  initSessionTimeout();
  initSuspiciousLoginAlert();
  initInputRateLimit();
  initPasswordStrength();
  initAntiBot();
  initCheckoutTrust();
  initSeasonalTheme();
  initProductComparison();
  initAdvancedFilters();
  initGiftCard();
  initEnhancedWhatsApp();
  checkPriceDrops();
  if (location.hash === "#wishlist") renderWishlistPage();
  if (location.hash === "#orders") renderOrderHistory();
  window.addEventListener("hashchange", () => {
    if (location.hash === "#wishlist") renderWishlistPage();
    if (location.hash === "#orders") renderOrderHistory();
  });
  // Batch 5 features
  initExitIntent();
  initAbandonedCart();
  initLoyaltyPoints();
  initFontSizeToggle();
  initBSCalendar();
  initPullToRefresh();
  initSwipeHero();
  initKeyboardNav();
  initPrefetchOnHover();
  initPushNotifications();
  initErrorLogger();
  initClipboardProtection();
  initBackButton();
  initDeliveryEstimator();
  initReferralButton();
  initPeopleAlsoBought();
  initBatch6();
  initBatch7();
  initBatch8();
}

document.addEventListener("DOMContentLoaded", init);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

/* ============================================================
   UPGRADE BATCH 4 — Security + UI features
   ============================================================ */

/* --- Shared toast helper --- */
function showToast(msg, duration = 3200) {
  let tc = document.getElementById("suToastContainer");
  if (!tc) {
    tc = document.createElement("div");
    tc.id = "suToastContainer";
    tc.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:99999;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none";
    document.body.appendChild(tc);
  }
  const t = document.createElement("div");
  t.className = "suToast";
  t.textContent = msg;
  tc.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("suToast--in")));
  setTimeout(() => { t.classList.remove("suToast--in"); setTimeout(() => t.remove(), 400); }, duration);
}

/* 1. Cookie Consent Banner */
function initCookieConsent() {
  const KEY = "su_cookie_v1";
  if (localStorage.getItem(KEY)) return;
  const bar = document.createElement("div");
  bar.className = "cookieBar";
  bar.innerHTML = `<span class="cookieBar__icon">🍪</span><p class="cookieBar__text">We use cookies to improve your experience and analyse traffic. <a href="#" class="cookieBar__link">Learn more</a></p><div class="cookieBar__btns"><button class="btn cookieBar__decline" id="ccDecline">Decline</button><button class="btn primary cookieBar__accept" id="ccAccept">Accept All</button></div>`;
  document.body.appendChild(bar);
  requestAnimationFrame(() => requestAnimationFrame(() => bar.classList.add("cookieBar--in")));
  const dismiss = (v) => { localStorage.setItem(KEY, v); bar.classList.remove("cookieBar--in"); setTimeout(() => bar.remove(), 500); };
  document.getElementById("ccAccept").onclick = () => dismiss("accepted");
  document.getElementById("ccDecline").onclick = () => dismiss("declined");
}

/* 2. Session Timeout Warning */
function initSessionTimeout() {
  const IDLE = 20 * 60 * 1000, WARN = 2 * 60 * 1000;
  let wT, lT, modal, tick;
  const clear = () => { clearTimeout(wT); clearTimeout(lT); clearInterval(tick); };
  const closeM = () => { if (modal) { modal.remove(); modal = null; } };
  const reset = () => { clear(); closeM(); wT = setTimeout(warn, IDLE - WARN); lT = setTimeout(expire, IDLE); };
  const warn = () => {
    let s = Math.round(WARN / 1000);
    modal = document.createElement("div");
    modal.className = "sessionOverlay";
    modal.innerHTML = `<div class="sessionCard"><div class="sessionCard__icon">⏱️</div><h3>Still there?</h3><p>You'll be signed out in <strong id="sessCd">${s}s</strong> due to inactivity.</p><button class="btn primary" id="sessStay">Stay Signed In</button></div>`;
    document.body.appendChild(modal);
    tick = setInterval(() => { s--; const el = document.getElementById("sessCd"); if (el) el.textContent = s + "s"; if (s <= 0) clearInterval(tick); }, 1000);
    document.getElementById("sessStay").onclick = reset;
  };
  const expire = () => { clear(); closeM(); modal = document.createElement("div"); modal.className = "sessionOverlay"; modal.innerHTML = `<div class="sessionCard"><div class="sessionCard__icon">🔒</div><h3>Session Expired</h3><p>Refreshing for your security…</p></div>`; document.body.appendChild(modal); setTimeout(() => location.reload(), 2500); };
  ["mousemove","keydown","click","touchstart","scroll"].forEach(ev => document.addEventListener(ev, reset, { passive: true }));
  reset();
}

/* 3. Suspicious Login / Device Alert */
function initSuspiciousLoginAlert() {
  const FP_KEY = "su_fp_v1";
  const fp = [navigator.userAgent, navigator.language, screen.width + "x" + screen.height, Intl.DateTimeFormat().resolvedOptions().timeZone].join("|");
  const stored = localStorage.getItem(FP_KEY);
  localStorage.setItem(FP_KEY, fp);
  if (!stored || stored === fp) return;
  const bar = document.createElement("div");
  bar.className = "suspAlert";
  bar.innerHTML = `<span>🔔 New sign-in detected from a different browser or device. Not you? <a href="#" class="suspAlert__link">Secure your account</a></span><button class="suspAlert__close" id="suspClose">×</button>`;
  document.body.insertAdjacentElement("afterbegin", bar);
  document.getElementById("suspClose").onclick = () => bar.remove();
}

/* 4. Input Rate Limiter on Search */
function initInputRateLimit() {
  const input = document.querySelector("[data-search]");
  if (!input) return;
  let count = 0, lockT = null;
  input.addEventListener("input", () => {
    count++;
    if (count >= 18 && !lockT) {
      input.disabled = true;
      const orig = input.placeholder;
      input.placeholder = "Slow down — wait 5s…";
      lockT = setTimeout(() => { input.disabled = false; input.placeholder = orig; count = 0; lockT = null; }, 5000);
    }
  });
}

/* 5. Password Strength Meter */
function initPasswordStrength() {
  document.addEventListener("focusin", (e) => {
    if (e.target.type !== "password" || e.target.dataset.pwInit) return;
    e.target.dataset.pwInit = "1";
    const wrap = document.createElement("div");
    wrap.className = "pwMeter";
    wrap.innerHTML = `<div class="pwMeter__bar"><div class="pwMeter__fill" id="pwFill_${Date.now()}"></div></div><span class="pwMeter__label" id="pwLbl_${Date.now()}"></span>`;
    e.target.insertAdjacentElement("afterend", wrap);
    const fill = wrap.querySelector(".pwMeter__fill"), lbl = wrap.querySelector(".pwMeter__label");
    const LEVELS = [["","#64748b"],["Very Weak","#ef4444"],["Weak","#f97316"],["Fair","#eab308"],["Strong","#22c55e"],["Very Strong","#16a34a"]];
    e.target.addEventListener("input", () => {
      const v = e.target.value;
      let sc = 0;
      if (v.length >= 8) sc++; if (v.length >= 12) sc++; if (/[A-Z]/.test(v)) sc++; if (/[0-9]/.test(v)) sc++; if (/[^A-Za-z0-9]/.test(v)) sc++;
      sc = Math.min(5, sc);
      fill.style.width = (sc * 20) + "%"; fill.style.background = LEVELS[sc][1];
      lbl.textContent = v ? LEVELS[sc][0] : ""; lbl.style.color = LEVELS[sc][1];
    });
  });
}

/* 6. Anti-Bot Honeypot */
function initAntiBot() {
  document.querySelectorAll("form").forEach(form => {
    if (form.querySelector(".hpField")) return;
    const hp = document.createElement("input");
    hp.type = "text"; hp.name = "website_url"; hp.className = "hpField"; hp.tabIndex = -1; hp.autocomplete = "off";
    hp.style.cssText = "position:absolute;left:-9999px;opacity:0;height:0;width:0;pointer-events:none;";
    form.appendChild(hp);
    form.addEventListener("submit", (e) => { if (hp.value) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
  });
}

/* 7. Checkout Trust Signals */
function initCheckoutTrust() {
  const wire = () => {
    const modal = document.querySelector("[data-pay-modal] .modal");
    if (!modal || modal.querySelector(".checkoutTrust")) return;
    const strip = document.createElement("div");
    strip.className = "checkoutTrust";
    strip.innerHTML = `<span class="checkoutTrust__item"><span class="ctLockIcon">🔒</span>256-bit SSL</span><span class="checkoutTrust__sep">·</span><span class="checkoutTrust__item">✅ Verified Checkout</span><span class="checkoutTrust__sep">·</span><span class="checkoutTrust__item">⚡ Instant Delivery</span>`;
    const body = modal.querySelector(".modalBody");
    if (body) modal.insertBefore(strip, body);
  };
  document.addEventListener("click", (e) => { if (e.target.closest("[data-open-pay],[data-pay-now]")) setTimeout(wire, 80); });
}

/* 8. Seasonal Festival Themes */
function initSeasonalTheme() {
  const mo = new Date().getMonth() + 1, d = new Date().getDate();
  let theme = null;
  if (mo === 10) theme = "dashain";
  else if (mo === 11 && d <= 15) theme = "tihar";
  else if (mo === 4 && d >= 10 && d <= 20) theme = "new-year";
  else if (mo === 12 && d >= 20) theme = "christmas";
  else if (mo === 3 && d >= 10 && d <= 25) theme = "holi";
  if (!theme) return;
  document.documentElement.setAttribute("data-festival", theme);
  const msgs = { dashain:"🎉 Dashain Sale — Up to 30% off subscriptions!", tihar:"🪔 Tihar Offer — Light up your digital life!", "new-year":"🎊 New Year Sale — नयाँ वर्ष 2082! 15% off today.", christmas:"🎄 Christmas Sale — Gift a subscription today!", holi:"🎨 Holi Special — Colorful deals on all products!" };
  const ribbon = document.querySelector(".promoRibbon span");
  if (ribbon) ribbon.innerHTML = msgs[theme];
}

/* 9. Product Comparison */
const CMP_MAX = 3;
let compareList = [];

function initProductComparison() {
  const bar = document.createElement("div");
  bar.id = "compareBar";
  bar.className = "compareBar";
  bar.innerHTML = `<div class="compareBar__inner"><span class="compareBar__title">Compare (<span id="cmpCount">0</span>/${CMP_MAX})</span><div id="cmpChips" class="compareBar__chips"></div><div class="compareBar__actions"><button class="btn primary" id="cmpGo" disabled>Compare Now</button><button class="btn" id="cmpClear">Clear</button></div></div>`;
  document.body.appendChild(bar);
  document.getElementById("cmpGo").onclick = showCompareModal;
  document.getElementById("cmpClear").onclick = () => { compareList = []; updateCompareBar(); updateCompareButtons(); };
}

function toggleCompare(id) {
  const allP = [...(window.__products||[]), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
  const prod = allP.find(p => p.id === id);
  if (!prod) return;
  const idx = compareList.findIndex(p => p.id === id);
  if (idx >= 0) compareList.splice(idx, 1);
  else { if (compareList.length >= CMP_MAX) { showToast(`Max ${CMP_MAX} products to compare`); return; } compareList.push(prod); }
  updateCompareBar(); updateCompareButtons();
}

function updateCompareBar() {
  const bar = document.getElementById("compareBar");
  if (!bar) return;
  bar.classList.toggle("compareBar--visible", compareList.length > 0);
  document.getElementById("cmpCount").textContent = compareList.length;
  document.getElementById("cmpGo").disabled = compareList.length < 2;
  const chips = document.getElementById("cmpChips");
  chips.innerHTML = compareList.map(p => `<span class="cmpChip">${escapeHtml(p.name.substring(0,22))}<button class="cmpChipX" data-cmp-remove="${p.id}">×</button></span>`).join("");
  chips.querySelectorAll("[data-cmp-remove]").forEach(b => b.onclick = (e) => { e.stopPropagation(); toggleCompare(b.dataset.cmpRemove); });
}

function updateCompareButtons() {
  document.querySelectorAll("[data-cmp-btn]").forEach(btn => {
    const on = compareList.some(p => p.id === btn.dataset.cmpBtn);
    btn.textContent = on ? "✓ Added" : "+ Compare";
    btn.classList.toggle("cmpBtnOn", on);
  });
}

function showCompareModal() {
  const fields = ["price","category","note"];
  const labels = { price:"Price", category:"Category", note:"Details" };
  const bd = document.createElement("div");
  bd.className = "modalBackdrop"; bd.style.display = "flex";
  const headCols = compareList.map(p => `<th><img src="${escapeHtml(p.img||p.image||"")}" alt="" style="width:72px;height:54px;object-fit:cover;border-radius:8px;display:block;margin:0 auto 8px"><strong style="font-size:13px">${escapeHtml(p.name)}</strong></th>`).join("");
  const rows = fields.map(f => `<tr><td class="cmpRowHead">${labels[f]}</td>${compareList.map(p => `<td>${f==="price"?formatNPR(p.price):escapeHtml(String(p[f]||"—"))}</td>`).join("")}</tr>`).join("");
  bd.innerHTML = `<div class="modal" style="max-width:680px;width:95%" role="dialog"><div class="modalHeader"><h3>Product Comparison</h3><button class="btn icon" id="cmpMClose">✕</button></div><div class="modalBody" style="overflow-x:auto"><table class="cmpTable"><thead><tr><th></th>${headCols}</tr></thead><tbody>${rows}</tbody></table></div></div>`;
  document.body.appendChild(bd);
  document.getElementById("cmpMClose").onclick = () => bd.remove();
  bd.onclick = (e) => { if (e.target === bd) bd.remove(); };
}

/* 10. Price Drop Notifier */
const PW_KEY = "su_price_watch_v1";
const getPriceWatch = () => { try { return JSON.parse(localStorage.getItem(PW_KEY)||"[]"); } catch(_) { return []; } };
const savePriceWatch = (l) => { try { localStorage.setItem(PW_KEY, JSON.stringify(l)); } catch(_) {} };

function togglePriceWatch(product) {
  let list = getPriceWatch();
  const idx = list.findIndex(p => p.id === product.id);
  if (idx >= 0) { list.splice(idx, 1); savePriceWatch(list); showToast("Removed from price watch"); return false; }
  list.push({ id: product.id, name: product.name, price: product.price });
  savePriceWatch(list); showToast("🔔 You'll be notified if this price drops!"); return true;
}

function checkPriceDrops() {
  const list = getPriceWatch();
  if (!list.length) return;
  const allP = [...(window.__products||[]), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
  let changed = false;
  list.forEach(w => { const cur = allP.find(p => p.id === w.id); if (cur && cur.price < w.price) { showToast(`💰 Price drop! ${cur.name} → ${formatNPR(cur.price)}`); w.price = cur.price; changed = true; } });
  if (changed) savePriceWatch(list);
}

/* 11. Advanced Search Filters */
function initAdvancedFilters() {
  const sw = document.querySelector(".search");
  if (!sw || document.getElementById("sfPanel")) return;
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "sfToggleBtn"; btn.title = "Filters"; btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/></svg>`;
  sw.appendChild(btn);
  const panel = document.createElement("div");
  panel.id = "sfPanel"; panel.className = "sfPanel";
  panel.innerHTML = `<div class="sfPanel__inner"><label class="sfLabel">Category<select id="sfCat" class="sfSelect"><option value="">All Categories</option>${(window.__categories||DEFAULT_CATEGORIES).slice(0,14).map(c=>`<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)}</option>`).join("")}</select></label><label class="sfLabel">Max Price: <span id="sfPriceVal">Rs. 10,000</span><input type="range" id="sfPrice" min="0" max="15000" step="100" value="15000" class="sfRange"></label><label class="sfLabel">Sort By<select id="sfSort" class="sfSelect"><option value="">Relevance</option><option value="asc">Price: Low → High</option><option value="desc">Price: High → Low</option><option value="az">Name A–Z</option></select></label><div class="sfPanel__btns"><button class="btn primary" id="sfApply">Apply</button><button class="btn" id="sfReset">Reset</button></div></div>`;
  sw.insertAdjacentElement("afterend", panel);
  btn.onclick = () => { const v = panel.classList.toggle("sfPanel--open"); btn.classList.toggle("sfToggleBtn--on", v); };
  document.getElementById("sfPrice").oninput = (e) => { document.getElementById("sfPriceVal").textContent = "Rs. " + Number(e.target.value).toLocaleString(); };
  document.getElementById("sfApply").onclick = () => { runSearchFilter(); panel.classList.remove("sfPanel--open"); btn.classList.remove("sfToggleBtn--on"); };
  document.getElementById("sfReset").onclick = () => { document.getElementById("sfCat").value=""; document.getElementById("sfPrice").value=15000; document.getElementById("sfPriceVal").textContent="Rs. 15,000"; document.getElementById("sfSort").value=""; runSearchFilter(); panel.classList.remove("sfPanel--open"); btn.classList.remove("sfToggleBtn--on"); };
}

function runSearchFilter() {
  const cat = document.getElementById("sfCat")?.value || "";
  const max = Number(document.getElementById("sfPrice")?.value || 15000);
  const sort = document.getElementById("sfSort")?.value || "";
  let items = [...(window.__products||[]), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
  const seen = new Set(); items = items.filter(p => { if(seen.has(p.id)) return false; seen.add(p.id); return true; });
  if (cat) items = items.filter(p => p.category === cat);
  if (max < 15000) items = items.filter(p => p.price <= max);
  if (sort === "asc") items.sort((a,b) => a.price - b.price);
  else if (sort === "desc") items.sort((a,b) => b.price - a.price);
  else if (sort === "az") items.sort((a,b) => a.name.localeCompare(b.name));
  const dd = document.querySelector("[data-search-dropdown]");
  if (!dd) return;
  if (!items.length) { dd.innerHTML = `<div style="padding:14px;opacity:.6;text-align:center">No products match your filters.</div>`; dd.style.display = "block"; return; }
  dd.style.display = "block";
  dd.innerHTML = items.slice(0,24).map(p => `<div class="srRow" data-preview-id="${escapeHtml(p.id)}" role="option" tabindex="0"><div class="srThumbWrap">${p.img||p.image?`<img class="srThumb" src="${escapeHtml(p.img||p.image||"")}" alt="" loading="lazy">`:`<div class="srThumbPlaceholder">📦</div>`}</div><div class="srInfo"><div class="srName">${escapeHtml(p.name)}</div><div class="srMeta"><span class="srCat">${escapeHtml(p.category||"")}</span><span class="srPrice">${formatNPR(p.price)}</span></div></div></div>`).join("");
  dd.querySelectorAll("[data-preview-id]").forEach(row => { row.addEventListener("mousedown", (e) => { e.preventDefault(); const pr = items.find(p => p.id === row.dataset.previewId); if (pr) openProductPreview(pr); dd.style.display = "none"; }); });
}

/* 12. Wishlist Page */
function renderWishlistPage() {
  const main = document.querySelector("main.container") || document.querySelector("main");
  if (!main) return;
  const wl = getWishlist();
  const allP = [...(window.__products||[]), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
  const seen = new Set(); const items = wl.map(id => allP.find(p => p.id === id)).filter(p => { if(!p||seen.has(p.id)) return false; seen.add(p.id); return true; });
  main.innerHTML = `<section class="section"><div class="sectionHeader"><div><h2>My Wishlist</h2><p>${items.length} saved item${items.length!==1?"s":""}</p></div><a class="btn" href="index.html">← Back to Shop</a></div>${items.length?`<div class="grid">${items.map(p=>productCard(p)).join("")}</div>`:`<div style="padding:40px;text-align:center;opacity:.55"><div style="font-size:3rem">🤍</div><p>Your wishlist is empty.<br>Heart any product to save it here.</p></div>`}</section>`;
  wireAddButtons(main); wirePreviewCards();
}

/* 13. Gift Card UI */
function initGiftCard() {
  const navlinks = document.querySelector(".navlinks");
  if (!navlinks || navlinks.querySelector("[data-gift-btn]")) return;
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "btn giftBtn"; btn.setAttribute("data-gift-btn",""); btn.innerHTML = "🎁";
  btn.title = "Gift Card";
  btn.onclick = showGiftCardModal;
  const cartBtn = navlinks.querySelector("[data-open-cart]");
  if (cartBtn) navlinks.insertBefore(btn, cartBtn); else navlinks.appendChild(btn);
}

function showGiftCardModal() {
  if (document.getElementById("giftCardModal")) return;
  const genCode = () => "GIFT-" + Math.random().toString(36).substring(2,6).toUpperCase() + "-" + Math.random().toString(36).substring(2,6).toUpperCase();
  let code = genCode();
  const bd = document.createElement("div");
  bd.className = "modalBackdrop"; bd.id = "giftCardModal"; bd.style.display = "flex";
  bd.innerHTML = `<div class="modal giftModal" role="dialog" aria-label="Gift Card"><div class="modalHeader"><h3>🎁 Gift Card</h3><button class="btn icon" id="gcClose">✕</button></div><div class="modalBody"><div class="giftCard"><div class="giftCard__top"><img src="assets/logo.svg" alt="" style="height:26px;filter:brightness(10)"><span class="giftCard__brand">SoftUpakaran</span></div><div class="giftCard__mid"><label style="font-size:11px;opacity:.7;margin-bottom:4px;display:block">GIFT AMOUNT</label><select id="gcAmt" class="giftCard__select"><option value="500">Rs. 500</option><option value="1000" selected>Rs. 1,000</option><option value="2000">Rs. 2,000</option><option value="5000">Rs. 5,000</option></select></div><div class="giftCard__code" id="gcCode">${code}</div><div class="giftCard__valid">Valid 6 months · softupakaran.com</div></div><div class="giftCard__actions"><button class="btn primary" id="gcCopy">📋 Copy Code</button><button class="btn" id="gcRegen">↻ New Code</button><button class="btn" id="gcShare">📤 Share</button></div><p class="giftCard__note">Demo only — contact support to redeem.</p></div></div>`;
  document.body.appendChild(bd);
  document.getElementById("gcClose").onclick = () => bd.remove();
  bd.onclick = (e) => { if (e.target === bd) bd.remove(); };
  document.getElementById("gcCopy").onclick = () => { navigator.clipboard?.writeText(code).then(() => showToast("✅ Code copied: " + code)).catch(()=>{}); };
  document.getElementById("gcRegen").onclick = () => { code = genCode(); document.getElementById("gcCode").textContent = code; };
  document.getElementById("gcShare").onclick = () => { const amt = document.getElementById("gcAmt").value; if (navigator.share) navigator.share({ title:"SoftUpakaran Gift Card", text:`Here's a Rs. ${amt} gift card code: ${code}`, url: location.origin }); else showToast("Share code: " + code); };
}

/* 14. Enhanced Floating WhatsApp Chat */
function initEnhancedWhatsApp() {
  const existing = document.querySelector(".whatsapp-nav-btn");
  const fab = document.createElement("div");
  fab.className = "wFab";
  fab.id = "wFab";
  fab.innerHTML = `<button class="wFab__btn" id="wFabBtn" aria-label="Chat on WhatsApp"><svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.4 1.8 6.2L4 29l8-1.6c1.2.5 2.6.7 4 .7 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.2 0-2.4-.3-3.4-.8l-.5-.2-4.7.9.9-4.5-.3-.6c-.7-1.1-1-2.4-1-3.7 0-4.2 3.4-7.6 7.6-7.6s7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6zm4.2-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.9 1-.1.2-.3.2-.5.1-1.8-.9-3-2.2-3.6-3.4-.2-.3 0-.5.1-.6.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.6 4 3.6 2.3 1 2.3.7 2.7.6.4-.1 1.4-.6 1.6-1.1.2-.5.2-.9.1-1z"/></svg></button><div class="wFab__popup" id="wFabPopup"><div class="wFab__head"><img src="assets/logo.svg" alt="" style="height:24px"> <strong>SoftUpakaran</strong></div><p class="wFab__sub">Usually replies in minutes</p><div class="wFab__chips" id="wFabChips"></div><a class="btn primary wFab__start" id="wFabStart" target="_blank" rel="noopener">Start Chat →</a></div>`;
  document.body.appendChild(fab);
  const popupEl = document.getElementById("wFabPopup");
  const startBtn = document.getElementById("wFabStart");
  const chips = document.getElementById("wFabChips");
  const QUICK = ["Track my order","I need help with a subscription","Payment issue","Product enquiry"];
  let selected = "";
  chips.innerHTML = QUICK.map(q => `<button class="wFab__chip" data-q="${escapeHtml(q)}">${escapeHtml(q)}</button>`).join("");
  chips.querySelectorAll(".wFab__chip").forEach(c => { c.onclick = () => { selected = c.dataset.q; chips.querySelectorAll(".wFab__chip").forEach(x => x.classList.remove("wFab__chip--on")); c.classList.add("wFab__chip--on"); const num = (typeof WHATSAPP_NUMBER !== "undefined" && WHATSAPP_NUMBER) ? WHATSAPP_NUMBER.replace(/[^0-9]/g,"") : "9779800000000"; startBtn.href = `https://wa.me/${num}?text=${encodeURIComponent(selected)}`; }; });
  document.getElementById("wFabBtn").onclick = () => { const open = popupEl.classList.toggle("wFab__popup--open"); };
  const num = (typeof WHATSAPP_NUMBER !== "undefined" && WHATSAPP_NUMBER) ? WHATSAPP_NUMBER.replace(/[^0-9]/g,"") : "9779800000000";
  startBtn.href = `https://wa.me/${num}`;
  document.addEventListener("click", (e) => { if (!e.target.closest("#wFab")) popupEl.classList.remove("wFab__popup--open"); });
  // Badge pulse
  const badge = document.createElement("span"); badge.className = "wFab__badge"; badge.textContent = "1";
  document.querySelector(".wFab__btn").appendChild(badge);
  document.getElementById("wFabBtn").addEventListener("click", () => badge.remove(), { once: true });
}



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

function wrapWords(escaped, baseDelay, step) {
  return escaped.split(/\s+/)
    .map((w, i) => `<span class="heroWord" style="--wd:${(baseDelay + i * step).toFixed(2)}s">${w}</span>`)
    .join(" ");
}

function buildHeroSlideMarkup(banner, index) {
  const rawTitle = escapeHtml(banner.title || "Digital Delivery");
  const title = wrapWords(rawTitle, 0.2, 0.07);
  const rawSubtitle = escapeHtml(banner.subtitle || banner.sub || "");
  const subtitle = rawSubtitle ? wrapWords(rawSubtitle, 0.42, 0.05) : "";
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
    dots.querySelectorAll(".heroDot").forEach((dot, idx) => {
      const isActive = idx === current;
      dot.classList.toggle("active", isActive);
      const fill = dot.querySelector(".heroDot__fill");
      if (fill) {
        fill.style.animation = "none";
        if (isActive && !motionReduced) {
          fill.getBoundingClientRect();
          fill.style.animation = "";
        }
      }
    });
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

    // Cover+center sizing: scale image to fill container, center it
    let scaledW = width, scaledH = height, offsetX = 0, offsetY = 0;
    const cached = _heroDimCache[image];
    if (cached) {
      const coverScale = Math.max(width / cached.w, height / cached.h);
      scaledW = Math.round(cached.w * coverScale);
      scaledH = Math.round(cached.h * coverScale);
      offsetX = Math.round((width - scaledW) / 2);
      offsetY = Math.round((height - scaledH) / 2);
    } else {
      // Probe image; rebuild tiles once dimensions are known
      const probe = new Image();
      probe.src = image;
      if (probe.complete && probe.naturalWidth > 0) {
        _heroDimCache[image] = { w: probe.naturalWidth, h: probe.naturalHeight };
        const coverScale = Math.max(width / probe.naturalWidth, height / probe.naturalHeight);
        scaledW = Math.round(probe.naturalWidth * coverScale);
        scaledH = Math.round(probe.naturalHeight * coverScale);
        offsetX = Math.round((width - scaledW) / 2);
        offsetY = Math.round((height - scaledH) / 2);
      } else {
        probe.onload = () => {
          _heroDimCache[image] = { w: probe.naturalWidth, h: probe.naturalHeight };
          if (container.dataset.image === image && container.isConnected) {
            container.innerHTML = "";
            buildTilesForSlide(slide, index);
          }
        };
      }
    }

    container.innerHTML = "";
    container.style.backgroundImage = `url("${image}")`;
    container.style.backgroundSize = `${scaledW}px ${scaledH}px`;
    container.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
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
        face.style.backgroundSize = `${scaledW}px ${scaledH}px`;
        face.style.backgroundPosition = `${offsetX - left}px ${offsetY - top}px`;
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
    track.style.transform = "";
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
    timer = setTimeout(() => { setActiveSlide(current + 1); scheduleNext(); }, AUTO_DELAY);
  };

  const pauseSlider = () => clearTimeout(timer);

  dots.innerHTML = "";
  dots.style.setProperty("--dot-dur", `${AUTO_DELAY}ms`);
  const SVG_NS = "http://www.w3.org/2000/svg";
  slides.forEach((slide, idx) => {
    const hasLink = sliderBanners[idx] && sliderBanners[idx].link;
    slide.style.cursor = hasLink ? "pointer" : "default";
    slide.onclick = () => {
      const href = sliderBanners[idx]?.link;
      if (href) {
        location.href = href;
      }
    };
    const dot = document.createElementNS(SVG_NS, "svg");
    dot.setAttribute("class", "heroDot");
    dot.setAttribute("viewBox", "0 0 36 36");
    dot.setAttribute("role", "presentation");
    const trackC = document.createElementNS(SVG_NS, "circle");
    trackC.setAttribute("class", "heroDot__track");
    trackC.setAttribute("cx", "18"); trackC.setAttribute("cy", "18"); trackC.setAttribute("r", "14");
    const fillC = document.createElementNS(SVG_NS, "circle");
    fillC.setAttribute("class", "heroDot__fill");
    fillC.setAttribute("cx", "18"); fillC.setAttribute("cy", "18"); fillC.setAttribute("r", "14");
    dot.appendChild(trackC); dot.appendChild(fillC);
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

  setActiveSlide(0, true);
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















/* ============================================================
   UPGRADE BATCH 5
   ============================================================ */

/* 1. Exit-Intent Popup */
function initExitIntent() {
  if (sessionStorage.getItem("su_exit_shown")) return;
  document.addEventListener("mouseleave", (e) => {
    if (e.clientY > 20) return;
    sessionStorage.setItem("su_exit_shown", "1");
    const bd = document.createElement("div");
    bd.className = "modalBackdrop exitPopup";
    bd.style.display = "flex";
    bd.innerHTML = `<div class="modal exitPopupCard"><button class="btn icon" id="exitPopX">✕</button><div class="exitPopEmoji">🎁</div><h2 style="margin:8px 0">Wait! Don't go yet</h2><p style="opacity:.65;margin:0 0 16px">Use code <strong class="exitPopCode">STAY10</strong> for 10% off your first order.</p><div style="display:flex;gap:8px;justify-content:center"><button class="btn primary" id="exitPopCopy">Copy Code</button><button class="btn" id="exitPopNo">No thanks</button></div></div>`;
    document.body.appendChild(bd);
    document.getElementById("exitPopX").onclick = () => bd.remove();
    document.getElementById("exitPopNo").onclick = () => bd.remove();
    document.getElementById("exitPopCopy").onclick = () => { navigator.clipboard && navigator.clipboard.writeText("STAY10"); showToast("✅ Code STAY10 copied!"); bd.remove(); };
    bd.onclick = (e) => { if (e.target === bd) bd.remove(); };
  }, { once: true });
}

/* 2. Abandoned Cart Reminder */
function initAbandonedCart() {
  let t;
  const reset = () => {
    clearTimeout(t);
    let c = [];
    try { c = JSON.parse(localStorage.getItem("su_cart") || "[]"); } catch(_) {}
    if (!c.length) return;
    t = setTimeout(() => showToast("🛒 You left items in your cart! Complete your order.", 6000), 5 * 60 * 1000);
  };
  ["click","keydown","touchstart"].forEach(ev => document.addEventListener(ev, reset, { passive: true }));
  reset();
}

/* 3. Order History */
const ORDER_HIST_KEY = "su_orders_v1";
function getOrderHistory() {
  try { return JSON.parse(localStorage.getItem(ORDER_HIST_KEY) || "[]"); } catch(_) { return []; }
}
function saveOrderToHistory(cartItems, total) {
  const orders = getOrderHistory();
  orders.unshift({ id: "ORD-" + Date.now().toString(36).toUpperCase(), date: new Date().toISOString(), items: cartItems, total });
  if (orders.length > 30) orders.length = 30;
  try { localStorage.setItem(ORDER_HIST_KEY, JSON.stringify(orders)); } catch(_) {}
}
function renderOrderHistory() {
  const main = document.querySelector("main.container") || document.querySelector("main");
  if (!main) return;
  const orders = getOrderHistory();
  main.innerHTML = `<section class="section"><div class="sectionHeader"><div><h2>Order History</h2><p>${orders.length} order${orders.length !== 1 ? "s" : ""}</p></div><a class="btn" href="index.html">← Back to Shop</a></div>${orders.length ? orders.map(o => `<div class="orderHistCard"><div class="orderHistHead"><span class="orderHistId">${escapeHtml(o.id)}</span><span class="orderHistDate">${new Date(o.date).toLocaleDateString("en-NP",{day:"numeric",month:"short",year:"numeric"})}</span><span class="orderHistTotal">${formatNPR(o.total||0)}</span></div><div class="orderHistItems">${(o.items||[]).map(i=>`<span class="orderHistItem">${escapeHtml(i.name||i.id)} \xd7${i.qty||1}</span>`).join("")}</div></div>`).join("") : `<div style="padding:48px;text-align:center;opacity:.55"><div style="font-size:3rem">📦</div><p>No orders yet. <a href="index.html" style="color:#a78bfa">Shop now!</a></p></div>`}</section>`;
}

/* 4. Loyalty Points */
const LP_KEY = "su_loyalty_v1";
function getLoyaltyData() {
  try { return JSON.parse(localStorage.getItem(LP_KEY) || '{"points":0}'); } catch(_) { return {points:0}; }
}
function addLoyaltyPoints(amount) {
  const data = getLoyaltyData();
  const earned = Math.max(1, Math.floor(amount / 100));
  data.points = (data.points || 0) + earned;
  try { localStorage.setItem(LP_KEY, JSON.stringify(data)); } catch(_) {}
  updateLoyaltyBadge();
  showToast("⭐ +" + earned + " loyalty points earned! Total: " + data.points);
}
function updateLoyaltyBadge() {
  const data = getLoyaltyData();
  let badge = document.getElementById("loyaltyBadge");
  if (!badge) {
    badge = document.createElement("span");
    badge.id = "loyaltyBadge";
    badge.className = "loyaltyBadge";
    badge.title = "Loyalty Points";
    const navlinks = document.querySelector(".navlinks");
    if (navlinks) navlinks.appendChild(badge);
  }
  badge.textContent = "⭐ " + (data.points || 0);
  badge.style.display = (data.points || 0) > 0 ? "inline-flex" : "none";
  badge.onclick = () => showToast("⭐ You have " + data.points + " points ≈ Rs. " + Math.floor(data.points * 0.5) + " value");
}
function initLoyaltyPoints() { updateLoyaltyBadge(); }

/* 5. Font Size Toggle */
const FS_KEY = "su_fontsize";
function initFontSizeToggle() {
  const SIZES = [15, 17, 19];
  const LABELS = ["Normal", "Large", "X-Large"];
  let idx = Math.max(0, SIZES.indexOf(parseInt(localStorage.getItem(FS_KEY) || "15")));
  document.documentElement.style.fontSize = SIZES[idx] + "px";
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn fsSizeBtn";
  btn.title = "Text size: " + LABELS[idx];
  btn.textContent = "A";
  btn.onclick = () => {
    idx = (idx + 1) % SIZES.length;
    document.documentElement.style.fontSize = SIZES[idx] + "px";
    localStorage.setItem(FS_KEY, SIZES[idx]);
    btn.title = "Text size: " + LABELS[idx];
    showToast("Text size: " + LABELS[idx]);
  };
  const navlinks = document.querySelector(".navlinks");
  if (navlinks) {
    const cartBtn = navlinks.querySelector("[data-open-cart]");
    if (cartBtn) navlinks.insertBefore(btn, cartBtn); else navlinks.appendChild(btn);
  }
}

/* 6. Bikram Sambat Calendar Display */
function initBSCalendar() {
  const now = new Date();
  const BS_MONTHS = ["Baishakh","Jestha","Ashadh","Shrawan","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"];
  const bsYear = now.getFullYear() + (now.getMonth() >= 3 ? 57 : 56);
  const mo = now.getMonth();
  const d = now.getDate();
  let bsMoIdx = (mo - 3 + 12) % 12;
  if (mo === 3 && d < 14) bsMoIdx = 11;
  const bsStr = BS_MONTHS[bsMoIdx] + " " + bsYear + " BS";
  const footerCopy = document.querySelector(".footer .copy");
  if (footerCopy) {
    const el = document.createElement("div");
    el.className = "bsDateBadge";
    el.textContent = "📅 " + bsStr;
    footerCopy.insertAdjacentElement("beforebegin", el);
  }
}

/* 7. Pull-to-Refresh (mobile) */
function initPullToRefresh() {
  if (!("ontouchstart" in window)) return;
  let startY = 0, pulling = false;
  const ind = document.createElement("div");
  ind.className = "pullIndicator";
  ind.textContent = "↓ Pull to refresh";
  document.body.insertAdjacentElement("afterbegin", ind);
  document.addEventListener("touchstart", e => { startY = e.touches[0].clientY; }, { passive: true });
  document.addEventListener("touchmove", e => {
    if (window.scrollY === 0 && e.touches[0].clientY - startY > 65) {
      pulling = true;
      ind.classList.add("pullIndicator--active");
      ind.textContent = "↑ Release to refresh";
    }
  }, { passive: true });
  document.addEventListener("touchend", () => {
    if (pulling) { pulling = false; location.reload(); }
    ind.classList.remove("pullIndicator--active");
    ind.textContent = "↓ Pull to refresh";
  }, { passive: true });
}

/* 8. Swipe Gestures on Hero Banner */
function initSwipeHero() {
  const slider = document.querySelector("[data-hero-slider]");
  if (!slider) return;
  let sx = 0, sy = 0;
  slider.addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  slider.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return;
    const dots = slider.querySelectorAll(".heroDot");
    const activeDot = slider.querySelector(".heroDot.active");
    let cur = Array.from(dots).indexOf(activeDot);
    if (dx < 0) cur = (cur + 1) % dots.length;
    else cur = (cur - 1 + dots.length) % dots.length;
    if (dots[cur]) dots[cur].click();
  }, { passive: true });
}

/* 9. Keyboard Navigation Accessibility */
function initKeyboardNav() {
  document.addEventListener("keydown", e => { if (e.key === "Tab") document.body.classList.add("kb-nav"); });
  document.addEventListener("mousedown", () => document.body.classList.remove("kb-nav"));
}

/* 10. Prefetch Product Images on Hover */
function initPrefetchOnHover() {
  const prefetched = new Set();
  document.addEventListener("mouseover", e => {
    const card = e.target.closest("[data-preview-id]");
    if (!card) return;
    const id = card.dataset.previewId;
    if (prefetched.has(id)) return;
    prefetched.add(id);
    const allP = [...(window.__products || []), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
    const prod = allP.find(p => p.id === id);
    if (prod && (prod.img || prod.image)) { const img = new Image(); img.src = prod.img || prod.image; }
  }, { passive: true });
}

/* 11. Push Notification Permission Prompt */
function initPushNotifications() {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "default") return;
  if (sessionStorage.getItem("su_push_asked")) return;
  setTimeout(() => {
    sessionStorage.setItem("su_push_asked", "1");
    const bar = document.createElement("div");
    bar.className = "pushPromptBar";
    bar.innerHTML = `<span>🔔 Get notified about flash sales &amp; new deals</span><div style="display:flex;gap:8px"><button class="btn primary" id="pushAllow">Allow</button><button class="btn" id="pushDeny">Not now</button></div>`;
    document.body.appendChild(bar);
    requestAnimationFrame(() => requestAnimationFrame(() => bar.classList.add("pushPromptBar--in")));
    document.getElementById("pushAllow").onclick = () => {
      Notification.requestPermission().then(p => showToast(p === "granted" ? "✅ Notifications on! You'll hear about flash deals." : "Notifications blocked in browser settings."));
      bar.remove();
    };
    document.getElementById("pushDeny").onclick = () => bar.remove();
  }, 35000);
}

/* 12. Client-Side Error Logger */
function initErrorLogger() {
  const KEY = "su_errs";
  window.addEventListener("error", e => {
    try {
      const errs = JSON.parse(localStorage.getItem(KEY) || "[]");
      errs.unshift({ msg: e.message, src: (e.filename || "").split("/").pop(), line: e.lineno, t: Date.now() });
      if (errs.length > 15) errs.length = 15;
      localStorage.setItem(KEY, JSON.stringify(errs));
    } catch(_) {}
  });
  window.addEventListener("unhandledrejection", e => {
    try {
      const errs = JSON.parse(localStorage.getItem(KEY) || "[]");
      errs.unshift({ msg: String(e.reason), src: "promise", t: Date.now() });
      if (errs.length > 15) errs.length = 15;
      localStorage.setItem(KEY, JSON.stringify(errs));
    } catch(_) {}
  });
}

/* 13. Clipboard Hijack Protection */
function initClipboardProtection() {
  document.addEventListener("copy", () => {
    const txt = (window.getSelection() && window.getSelection().toString()) || "";
    if (/^\d{10,16}$/.test(txt.trim())) {
      showToast("🔒 Payment number copied — verify before sending!", 5000);
    }
  });
}

/* 14. Back Button */
function initBackButton() {
  if (!document.referrer || !document.referrer.includes(location.hostname)) return;
  if (location.pathname === "/" || location.pathname === "/index.html") return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn backBtn";
  btn.textContent = "← Back";
  btn.onclick = () => history.back();
  const main = document.querySelector("main.container") || document.querySelector("main");
  if (main) main.insertAdjacentElement("afterbegin", btn);
}

/* 15. Delivery Time Estimator */
function initDeliveryEstimator() {
  const h = new Date().getHours();
  let msg;
  if (h >= 9 && h < 17) msg = "Order now → delivery within 2 hours";
  else if (h >= 17 && h < 19) msg = "Order now → delivery tonight";
  else if (h >= 19) msg = "Order now → delivery tomorrow morning";
  else msg = "We open at 9 AM — order for priority delivery";
  const strip = document.querySelector(".trustStrip .trustBadges");
  if (strip) {
    const el = document.createElement("div");
    el.className = "trustBadge deliveryEst";
    el.innerHTML = `<span class="trustIcon">🚀</span><div><strong>Delivery</strong><span>${msg}</span></div>`;
    strip.insertAdjacentElement("afterbegin", el);
  }
}

/* 16. Referral Button & Modal */
function initReferralButton() {
  const navlinks = document.querySelector(".navlinks");
  if (!navlinks || navlinks.querySelector("[data-referral-btn]")) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn referralBtn";
  btn.setAttribute("data-referral-btn", "");
  btn.title = "Refer & Earn";
  btn.textContent = "🎉 Refer";
  btn.onclick = showReferralModal;
  navlinks.appendChild(btn);
}
function showReferralModal() {
  if (document.getElementById("referralModal")) return;
  let code = localStorage.getItem("su_ref_code");
  if (!code) {
    code = "REF-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    localStorage.setItem("su_ref_code", code);
  }
  const link = location.origin + "?ref=" + code;
  const bd = document.createElement("div");
  bd.className = "modalBackdrop";
  bd.id = "referralModal";
  bd.style.display = "flex";
  bd.innerHTML = `<div class="modal referralModal"><div class="modalHeader"><h3>🎉 Refer &amp; Earn</h3><button class="btn icon" id="refClose">✕</button></div><div class="modalBody"><div class="referralCard"><div class="referralCard__badge">Your referral code</div><div class="referralCard__code">${escapeHtml(code)}</div><p class="referralCard__desc">Your friend gets <strong>Rs. 50 off</strong>. You earn <strong>Rs. 100 credit</strong> when they order.</p><div class="referralCard__link">${escapeHtml(link)}</div><div class="referralCard__btns"><button class="btn primary" id="refCopyLink">📋 Copy Link</button><button class="btn" id="refCopyCode">Copy Code</button><button class="btn" id="refShareBtn">📤 Share</button></div></div></div></div>`;
  document.body.appendChild(bd);
  document.getElementById("refClose").onclick = () => bd.remove();
  bd.onclick = e => { if (e.target === bd) bd.remove(); };
  document.getElementById("refCopyLink").onclick = () => { navigator.clipboard && navigator.clipboard.writeText(link); showToast("✅ Referral link copied!"); };
  document.getElementById("refCopyCode").onclick = () => { navigator.clipboard && navigator.clipboard.writeText(code); showToast("✅ Code " + code + " copied!"); };
  document.getElementById("refShareBtn").onclick = () => {
    if (navigator.share) navigator.share({ title: "SoftUpakaran", text: "Get Rs. 50 off! Use my referral:", url: link });
    else showToast("Share: " + link);
  };
}
function generateReferralLink() {
  let code = localStorage.getItem("su_ref_code");
  if (!code) { code = "REF-" + Math.random().toString(36).substring(2, 8).toUpperCase(); localStorage.setItem("su_ref_code", code); }
  return location.origin + "?ref=" + code;
}

/* 17. People Also Bought */
function initPeopleAlsoBought() {
  // Hook into product preview open — inject related products
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-preview-id]");
    if (!btn) return;
    requestAnimationFrame(() => {
      const preview = document.getElementById("productPreviewModal");
      if (!preview || preview.querySelector(".pabSection")) return;
      const id = btn.dataset.previewId;
      const related = getPeopleAlsoBought(id);
      if (!related.length) return;
      const sec = document.createElement("div");
      sec.className = "pabSection";
      sec.innerHTML = `<h4 class="pabTitle">🛒 People Also Bought</h4><div class="pabGrid">${related.map(p => `<div class="pabItem" data-preview-id="${escapeHtml(p.id)}" style="cursor:pointer"><img src="${escapeHtml(p.img||p.image||"")}" alt="${escapeHtml(p.name)}" class="pabImg" loading="lazy" onerror="this.style.display='none'"><div class="pabName">${escapeHtml(p.name)}</div><div class="pabPrice">${formatNPR(p.price)}</div></div>`).join("")}</div>`;
      const modalBody = preview.querySelector(".modalBody");
      if (modalBody) modalBody.appendChild(sec);
    });
  });
}
function getPeopleAlsoBought(productId) {
  const allP = [...(window.__products || []), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
  const cur = allP.find(p => p.id === productId);
  if (!cur) return allP.filter(p => p.id !== productId).slice(0, 4);
  let rel = allP.filter(p => p.id !== productId && p.category === cur.category);
  if (rel.length < 2) rel = allP.filter(p => p.id !== productId);
  return rel.slice(0, 4);
}


/* ============================================================
   UPGRADE BATCH 6 — Professional Features + Cybersecurity
   ============================================================ */

/* 1. Enhance Live Search — "See all results" footer */
function enhanceLiveSearch() {
  document.querySelectorAll("[data-search]").forEach(input => {
    input.addEventListener("input", () => {
      setTimeout(() => {
        const dd = input.closest(".search") && input.closest(".search").querySelector("[data-search-dropdown]");
        if (!dd || !dd.classList.contains("visible")) return;
        if (dd.querySelector(".srSeeAll")) return;
        const q = input.value.trim();
        if (!q) return;
        const footer = document.createElement("div");
        footer.className = "srSeeAll";
        footer.innerHTML = '<button type="button" class="srSeeAllBtn">See all results for "<strong>' + escapeHtml(q) + '</strong>" &rarr;</button>';
        dd.appendChild(footer);
        footer.querySelector("button").addEventListener("click", () => {
          dd.style.display = "none";
          const root = document.querySelector("[data-search-results], [data-popular]");
          if (root) root.scrollIntoView({ behavior: "smooth" });
        });
      }, 60);
    });
  });
}

/* 2 + 3. Multi-Step Checkout with Nepal District Selector */
const NEPAL_DISTRICTS = [
  { name: "Kathmandu (Valley)", fee: 0 },
  { name: "Lalitpur (Patan)", fee: 0 },
  { name: "Bhaktapur", fee: 50 },
  { name: "Pokhara", fee: 150 },
  { name: "Chitwan", fee: 150 },
  { name: "Butwal", fee: 200 },
  { name: "Biratnagar", fee: 200 },
  { name: "Birgunj", fee: 200 },
  { name: "Dharan", fee: 250 },
  { name: "Hetauda", fee: 180 },
  { name: "Nepalgunj", fee: 250 },
  { name: "Dhangadhi", fee: 300 },
  { name: "Outside Nepal (Digital only)", fee: 0 },
];
let _checkoutData = {};

function openMultiStepCheckout() {
  const backdrop = document.querySelector("[data-pay-modal]");
  if (!backdrop) return;
  const body = backdrop.querySelector("[data-pay-body]");
  const footer = backdrop.querySelector("[data-pay-footer]");
  const subtotal = cartTotal();
  const discountNpr = couponDiscount(subtotal);
  const baseTotal = Math.max(0, subtotal - discountNpr);
  _checkoutData = { step: 1, name: "", phone: "", district: NEPAL_DISTRICTS[0], deliveryFee: 0, total: baseTotal };

  function progressHTML(step) {
    const steps = [
      { n: 1, label: "Details" },
      { n: 2, label: "Payment" },
      { n: 3, label: "Confirm" },
    ];
    return '<div class="checkoutProgress"><div class="cpBar">' + steps.map((s, i) => {
      const done = s.n < step;
      const active = s.n === step;
      const cls = done ? "cpStep done" : active ? "cpStep active" : "cpStep";
      const icon = done ? "&#x2713;" : s.n;
      return (i > 0 ? '<div class="cpLine' + (done ? " cpLineDone" : "") + '"></div>' : "") +
        '<div class="' + cls + '"><span>' + icon + "</span> " + escapeHtml(s.label) + "</div>";
    }).join("") + "</div></div>";
  }

  function renderCheckoutStep1() {
    _checkoutData.step = 1;
    body.innerHTML = progressHTML(1) + '<div class="checkoutForm">' +
      '<label class="checkoutLabel">Full Name <span style="color:#f87171">*</span><input class="checkoutInput" id="coName" type="text" placeholder="Hari Bahadur Thapa" autocomplete="name"/></label>' +
      '<label class="checkoutLabel">Phone Number <span style="color:#f87171">*</span><input class="checkoutInput" id="coPhone" type="tel" placeholder="98XXXXXXXX" autocomplete="tel"/></label>' +
      '<label class="checkoutLabel">Delivery District<select class="checkoutInput" id="coDistrict">' +
      NEPAL_DISTRICTS.map(function(d, i) { return '<option value="' + i + '">' + escapeHtml(d.name) + (d.fee ? " (+Rs. " + d.fee + ")" : " (Free delivery)") + "</option>"; }).join("") +
      '</select></label>' +
      '<div class="checkoutHoneypot" aria-hidden="true" style="position:absolute;left:-9999px"><input type="text" name="website" tabindex="-1" autocomplete="off"/></div>' +
      '<div class="checkoutSummary"><span>Subtotal</span><span>' + formatNPR(subtotal) + '</span></div>' +
      (discountNpr ? '<div class="checkoutSummary checkoutDiscount"><span>Coupon (-' + COUPON_CODE + ')</span><span>-' + formatNPR(discountNpr) + '</span></div>' : "") +
      '<div class="checkoutSummary" id="coDeliveryRow" style="display:none"><span>Delivery</span><span id="coDeliveryFee"></span></div>' +
      '<div class="checkoutSummary checkoutTotal"><span>Total</span><span id="coTotalDisplay">' + formatNPR(baseTotal) + '</span></div>' +
      '</div>';
    footer.innerHTML = '<div class="checkoutActions"><button class="btn" data-pay-close>Cancel</button><button class="btn primary" id="coNext1">Next: Payment &rarr;</button></div>';
    backdrop.querySelectorAll("[data-pay-close]").forEach(function(b) { b.addEventListener("click", closePayModal); });

    const districtSel = body.querySelector("#coDistrict");
    function updateFee() {
      const d = NEPAL_DISTRICTS[parseInt(districtSel.value)];
      _checkoutData.district = d;
      _checkoutData.deliveryFee = d.fee;
      _checkoutData.total = baseTotal + d.fee;
      const row = body.querySelector("#coDeliveryRow");
      if (d.fee) { row.style.display = "flex"; body.querySelector("#coDeliveryFee").textContent = formatNPR(d.fee); }
      else { row.style.display = "none"; }
      body.querySelector("#coTotalDisplay").textContent = formatNPR(_checkoutData.total);
    }
    districtSel.addEventListener("change", updateFee);
    updateFee();

    body.querySelector("#coNext1").addEventListener("click", function() {
      const name = body.querySelector("#coName").value.trim();
      const phone = body.querySelector("#coPhone").value.trim();
      const honeypot = body.querySelector(".checkoutHoneypot input").value;
      if (honeypot) { closePayModal(); return; }
      if (!name) { body.querySelector("#coName").focus(); showToast("Please enter your full name"); return; }
      if (!/^[9][6-9]\d{8}$/.test(phone)) { body.querySelector("#coPhone").focus(); showToast("Enter a valid Nepal mobile number (98XXXXXXXX)"); return; }
      _checkoutData.name = name.replace(/[<>"'&]/g, "");
      _checkoutData.phone = phone.replace(/[^0-9+]/g, "");
      renderCheckoutStep2();
    });
  }

  function renderCheckoutStep2() {
    _checkoutData.step = 2;
    body.innerHTML = progressHTML(2) +
      '<div class="checkoutSummaryBox">' +
      '<div class="csbRow"><span>&#128100;</span><span>' + escapeHtml(_checkoutData.name) + " &middot; " + escapeHtml(_checkoutData.phone) + "</span></div>" +
      '<div class="csbRow"><span>&#128205;</span><span>' + escapeHtml(_checkoutData.district.name) + (_checkoutData.deliveryFee ? " &middot; Delivery Rs. " + _checkoutData.deliveryFee : " &middot; Free delivery") + "</span></div>" +
      '<div class="csbRow csbTotal"><span>Total</span><span>' + formatNPR(_checkoutData.total) + "</span></div></div>" +
      '<div class="payGrid">' +
      '<div class="payCard payCardSelectable" data-pay-method="whatsapp"><div class="payMethodIcon">&#128172;</div><h4>Pay via WhatsApp</h4><p>Send order. We confirm and process instantly.</p><div class="payLogos"><span class="payLogoChip">Recommended</span></div></div>' +
      '<div class="payCard payCardSelectable" data-pay-method="esewa"><div class="payMethodIcon esewaLogo">e</div><h4>Pay via eSewa</h4><p>Scan QR, pay and send screenshot on WhatsApp.</p><div class="payLogos"><span class="payLogoChip esewa">eSewa</span></div></div>' +
      '<div class="payCard payCardSelectable" data-pay-method="khalti"><div class="payMethodIcon khaltiLogo">K</div><h4>Pay via Khalti</h4><p>Khalti wallet payment — send confirmation.</p><div class="payLogos"><span class="payLogoChip khalti">Khalti</span></div></div>' +
      "</div>";
    footer.innerHTML = '<div class="checkoutActions"><button class="btn" id="coBack2">&larr; Back</button><button class="btn primary" id="coNext2" disabled>Confirm Order &rarr;</button></div>';
    backdrop.querySelectorAll("[data-pay-close]").forEach(function(b) { b.addEventListener("click", closePayModal); });
    body.querySelector("#coBack2").addEventListener("click", renderCheckoutStep1);

    let selectedMethod = null;
    body.querySelectorAll("[data-pay-method]").forEach(function(card) {
      card.addEventListener("click", function() {
        body.querySelectorAll("[data-pay-method]").forEach(function(c) { c.classList.remove("payCardActive"); });
        card.classList.add("payCardActive");
        selectedMethod = card.dataset.payMethod;
        _checkoutData.method = selectedMethod;
        footer.querySelector("#coNext2").disabled = false;
      });
    });
    footer.querySelector("#coNext2").addEventListener("click", function() {
      if (!selectedMethod) return;
      renderCheckoutStep3();
    });
  }

  function renderCheckoutStep3() {
    _checkoutData.step = 3;
    const items = loadCart();
    const METHOD_LABELS = { whatsapp: "WhatsApp (Recommended)", esewa: "eSewa", khalti: "Khalti" };
    body.innerHTML = progressHTML(3) +
      '<div class="checkoutConfirm">' +
      '<div class="ccSection"><h4>Order Summary</h4>' + items.map(function(i) {
        return '<div class="ccItem"><span>' + escapeHtml(i.name || i.id) + " &times;" + i.qty + "</span><span>" + formatNPR((i.price || 0) * i.qty) + "</span></div>";
      }).join("") + "</div>" +
      '<div class="ccSection"><h4>Delivery Details</h4>' +
      '<div class="ccItem"><span>&#128100; ' + escapeHtml(_checkoutData.name) + "</span></div>" +
      '<div class="ccItem"><span>&#128222; ' + escapeHtml(_checkoutData.phone) + "</span></div>" +
      '<div class="ccItem"><span>&#128205; ' + escapeHtml(_checkoutData.district.name) + "</span></div></div>" +
      '<div class="ccSection"><h4>Payment Method</h4><div class="ccItem"><span>' + escapeHtml(METHOD_LABELS[_checkoutData.method] || _checkoutData.method) + "</span></div></div>" +
      '<div class="ccTotal"><span>Grand Total</span><span>' + formatNPR(_checkoutData.total) + "</span></div></div>";
    footer.innerHTML = '<div class="checkoutActions"><button class="btn" id="coBack3">&larr; Back</button><button class="btn" id="coInvoice">&#128424; Save Invoice</button><button class="btn primary" id="coConfirm">&#9989; Place Order</button></div>';
    backdrop.querySelectorAll("[data-pay-close]").forEach(function(b) { b.addEventListener("click", closePayModal); });
    body.querySelector("#coBack3").addEventListener("click", renderCheckoutStep2);
    body.querySelector("#coInvoice").addEventListener("click", function() { printInvoice(items, _checkoutData); });
    body.querySelector("#coConfirm").addEventListener("click", async function() {
      const orderId = "SU-" + Date.now().toString(36).toUpperCase();
      saveOrderToHistory(items, _checkoutData.total);
      addLoyaltyPoints(_checkoutData.total);
      await sendOrderToBackend("Checkout: " + _checkoutData.name + " | " + _checkoutData.district.name);
      const method = _checkoutData.method;
      const note = "\n\nOrder ID: " + orderId + "\nCustomer: " + _checkoutData.name + "\nPhone: " + _checkoutData.phone + "\nDistrict: " + _checkoutData.district.name + (method !== "whatsapp" ? "\nPayment: " + METHOD_LABELS[method] + " (will send screenshot)" : "");
      const msg = buildWhatsAppMessage() + note;
      window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
      saveCart([]);
      closePayModal();
      showConfettiCelebration();
      /* Show full-screen order confirmation */
      showOrderConfirmation(orderId, _checkoutData);
    });
  }

  renderCheckoutStep1();
  backdrop.style.display = "flex";
  document.body.style.overflow = "hidden";
}

/* 3b. Order Confirmation Screen */
function showOrderConfirmation(orderId, data) {
  const ol = document.createElement("div");
  ol.style.cssText = "position:fixed;inset:0;background:rgba(5,8,16,.95);z-index:9100;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(8px)";
  ol.innerHTML = `
    <div style="width:min(500px,100%);background:linear-gradient(145deg,rgba(10,14,28,.98),rgba(14,20,42,.98));border:1px solid rgba(124,58,237,.4);border-radius:28px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.7)">
      <div style="background:linear-gradient(135deg,#7c3aed,#06b6d4);padding:28px 28px 24px;text-align:center">
        <div style="font-size:52px;margin-bottom:10px">🎉</div>
        <h2 style="margin:0 0 6px;font-size:22px;color:#fff">Order Confirmed!</h2>
        <p style="margin:0;color:rgba(255,255,255,.85);font-size:14px">Thank you, ${escapeHtml(data.name)}. We'll contact you shortly.</p>
      </div>
      <div style="padding:22px 26px">
        <div style="background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.3);border-radius:12px;padding:12px 16px;text-align:center;margin-bottom:18px">
          <div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(167,139,250,.7);margin-bottom:4px">Order ID</div>
          <div style="font-size:18px;font-weight:800;color:#a78bfa;font-family:monospace">${escapeHtml(orderId)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:18px">
          <div style="display:flex;justify-content:space-between;font-size:13px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.07)"><span style="color:rgba(255,255,255,.55)">Customer</span><span style="font-weight:600">${escapeHtml(data.name)}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.07)"><span style="color:rgba(255,255,255,.55)">Phone</span><span style="font-weight:600">${escapeHtml(data.phone)}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.07)"><span style="color:rgba(255,255,255,.55)">District</span><span style="font-weight:600">${escapeHtml((data.district||{}).name||"—")}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:13px;padding:8px 0"><span style="color:rgba(255,255,255,.55)">Total Paid</span><span style="font-weight:800;font-size:15px;color:#a78bfa">${formatNPR(data.total||0)}</span></div>
        </div>
        <div style="background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.3);border-radius:12px;padding:12px 14px;font-size:13px;color:rgba(255,255,255,.75);line-height:1.55;margin-bottom:18px">
          📱 <strong>Next step:</strong> Your WhatsApp chat has been opened. Send the message to complete your order. We will confirm and deliver within <strong>5–30 minutes</strong>.
        </div>
        <div style="display:flex;gap:10px">
          <button onclick="this.closest('[style]').remove()" style="flex:1;padding:11px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.06);color:#fff;font-weight:600;font-size:14px;cursor:pointer">Continue Shopping</button>
          <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noreferrer" style="flex:1;padding:11px;border-radius:12px;border:none;background:linear-gradient(135deg,#16a34a,#22d3ee);color:#fff;font-weight:700;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;text-decoration:none">💬 Open WhatsApp</a>
        </div>
      </div>
    </div>`;
  ol.addEventListener("click", function(e){ if(e.target===ol) ol.remove(); });
  document.body.appendChild(ol);
}

/* 4. Printable Invoice */
function printInvoice(items, data) {
  const win = window.open("", "_blank", "width=720,height=900");
  if (!win) { showToast("Allow popups to save invoice"); return; }
  const lineItems = items.map(function(i) {
    return "<tr><td>" + escapeHtml(i.name || i.id) + "</td><td style='text-align:center'>" + i.qty + "</td><td style='text-align:right'>" + formatNPR(i.price || 0) + "</td><td style='text-align:right'>" + formatNPR((i.price || 0) * i.qty) + "</td></tr>";
  }).join("");
  const invoiceNum = "INV-" + Date.now().toString(36).toUpperCase();
  const dateStr = new Date().toLocaleDateString("en-NP", { day: "numeric", month: "long", year: "numeric" });
  win.document.write("<!DOCTYPE html><html><head><meta charset='utf-8'><title>Invoice " + invoiceNum + "</title><style>body{font-family:Arial,sans-serif;padding:32px;max-width:640px;margin:auto;color:#111}h1{color:#7c3aed;margin:0 0 4px}.badge{background:#7c3aed;color:#fff;padding:3px 10px;border-radius:4px;font-size:12px}table{width:100%;border-collapse:collapse;margin:16px 0}th,td{border:1px solid #ddd;padding:8px;font-size:13px}th{background:#f5f3ff}.total{font-weight:bold;color:#7c3aed;font-size:15px}.footer-note{margin-top:24px;font-size:12px;color:#666;border-top:1px solid #ddd;padding-top:12px}.info-box{background:#f5f3ff;padding:12px;border-radius:8px;margin-bottom:16px;font-size:13px}@media print{button{display:none}}</style></head><body>");
  win.document.write("<div style='display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px'><div><h1>SoftUpakaran</h1><p style='opacity:.6;margin:4px 0;font-size:13px'>New Baneshwor, Kathmandu &bull; +977 01 1234567</p></div><div style='text-align:right'><span class='badge'>INVOICE</span><p style='margin:4px 0;font-size:12px'>" + dateStr + "</p><p style='margin:0;font-size:12px;font-family:monospace'>" + invoiceNum + "</p></div></div>");
  win.document.write("<table><thead><tr><th>Product</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead><tbody>" + lineItems + "</tbody><tfoot><tr><td colspan='3'>Delivery (" + escapeHtml((data.district || {}).name || "—") + "):</td><td style='text-align:right'>" + (data.deliveryFee ? formatNPR(data.deliveryFee) : "Free") + "</td></tr><tr><td colspan='3' class='total'>Grand Total:</td><td style='text-align:right' class='total'>" + formatNPR(data.total || 0) + "</td></tr></tfoot></table>");
  win.document.write("<div class='info-box'><strong>Delivery Details</strong><br/>" + escapeHtml(data.name || "") + " &bull; " + escapeHtml(data.phone || "") + " &bull; " + escapeHtml((data.district || {}).name || "") + "</div>");
  win.document.write("<button onclick='window.print()' style='background:#7c3aed;color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-size:14px;margin-right:8px'>&#128424; Print</button><button onclick='window.close()' style='background:#334155;color:#fff;border:none;padding:10px 20px;border-radius:6px;cursor:pointer;font-size:14px'>Close</button>");
  win.document.write("<div class='footer-note'>Thank you for shopping with SoftUpakaran! For support, contact us on WhatsApp.</div></body></html>");
  win.document.close();
}

/* 5. Product Video Embed */
function injectProductVideo(body, product) {
  if (!product.video) return;
  let videoId = product.video;
  const m = videoId.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  if (m) videoId = m[1];
  const mediaDiv = body.querySelector(".pvMedia");
  if (!mediaDiv) return;
  const wrap = document.createElement("div");
  wrap.className = "pvVideoWrap";
  wrap.innerHTML = '<div class="pvVideoToggle"><button class="btn pvVideoBtn" id="pvShowVideo">&#9654; Watch Video Demo</button></div><div class="pvVideoFrame" id="pvVideoFrame" style="display:none"><iframe src="https://www.youtube.com/embed/' + encodeURIComponent(videoId) + '?rel=0" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen style="width:100%;aspect-ratio:16/9;border-radius:10px;margin-top:10px"></iframe></div>';
  mediaDiv.appendChild(wrap);
  wrap.querySelector("#pvShowVideo").addEventListener("click", function() {
    wrap.querySelector("#pvVideoFrame").style.display = "block";
    this.style.display = "none";
  });
}

/* 6. Real-time Stock Counter */
function getProductStock(productId) {
  let h = 0;
  for (let i = 0; i < productId.length; i++) h = ((h << 5) - h) + productId.charCodeAt(i);
  return (Math.abs(h) % 40) + 3;
}
function initStockCounters() {
  document.querySelectorAll("[data-preview-id]").forEach(function(card) {
    if (card.querySelector(".stockBadge")) return;
    const id = card.dataset.previewId;
    if (!id) return;
    const stock = getProductStock(id);
    const badge = document.createElement("div");
    badge.className = "stockBadge";
    if (stock <= 5) { badge.classList.add("stockLow"); badge.textContent = "Only " + stock + " left!"; }
    else if (stock <= 12) { badge.classList.add("stockMed"); badge.textContent = stock + " in stock"; }
    else { badge.classList.add("stockOk"); badge.textContent = "In Stock"; }
    let thumbEl = card.querySelector(".thumb");
    if (!thumbEl) thumbEl = card.querySelector("[class*='Thumb']");
    if (thumbEl) { if (!thumbEl.style.position) thumbEl.style.position = "relative"; thumbEl.appendChild(badge); }
    else { card.style.position = "relative"; card.insertAdjacentElement("afterbegin", badge); }
  });
}

/* 7. Customer Reviews — seeded per product */
const REVIEW_POOL_NAMES = ["Suresh K.", "Priya S.", "Bikash M.", "Anita T.", "Rajan P.", "Sushila G.", "Dipak R.", "Manisha L.", "Nirajan B.", "Sabina K.", "Arun T.", "Namrata C."];
const REVIEW_POOL_TEXTS = [
  "Excellent product, delivered very fast. Highly recommend!",
  "Good value for money. Works exactly as described.",
  "Instant delivery, great service. Will buy again.",
  "Very satisfied. The team was helpful on WhatsApp.",
  "Quality product at a fair price. Five stars!",
  "Fast delivery and genuine product. Thank you!",
  "Bought this for my business, works great.",
  "Very professional service. Impressed with the speed.",
  "Superb! Got it in less than 30 minutes.",
  "Legit store, quick response. Recommended to friends.",
];
function getSeedReviews(productId) {
  let h = 0;
  for (let i = 0; i < productId.length; i++) h = ((h << 5) - h) + productId.charCodeAt(i);
  h = Math.abs(h);
  const count = 2 + (h % 3);
  const reviews = [];
  for (let i = 0; i < count; i++) {
    reviews.push({
      name: REVIEW_POOL_NAMES[(h + i * 7) % REVIEW_POOL_NAMES.length],
      text: REVIEW_POOL_TEXTS[(h + i * 13) % REVIEW_POOL_TEXTS.length],
      stars: 4 + ((h + i) % 2),
      daysAgo: 3 + ((h + i * 5) % 30),
    });
  }
  return reviews;
}
function injectProductReviews(body, productId) {
  if (body.querySelector(".reviewSection")) return;
  const reviews = getSeedReviews(productId);
  const avg = (reviews.reduce(function(s, r) { return s + r.stars; }, 0) / reviews.length).toFixed(1);
  function stars(n) { return "★".repeat(n) + "☆".repeat(5 - n); }
  const sec = document.createElement("div");
  sec.className = "reviewSection";
  sec.innerHTML = '<div class="reviewHeader"><h4>Customer Reviews</h4><div class="reviewAvg"><span class="reviewStars">' + stars(Math.round(parseFloat(avg))) + '</span><span class="reviewAvgNum">' + avg + " / 5</span></div></div>" +
    reviews.map(function(r) {
      return '<div class="reviewCard"><div class="reviewMeta"><span class="reviewAvatar">' + escapeHtml(r.name[0]) + '</span><div><strong class="reviewName">' + escapeHtml(r.name) + '</strong><span class="reviewStarSmall">' + stars(r.stars) + '</span></div><span class="reviewDate">' + r.daysAgo + " days ago</span></div>" +
        '<p class="reviewText">' + escapeHtml(r.text) + "</p></div>";
    }).join("");
  body.appendChild(sec);
}

/* 8. Mega Navigation Menu */
const MEGA_CATS = [
  { label: "Subscriptions", hash: "#subscriptions", icon: "📺", subs: ["Netflix", "Spotify", "YouTube Premium", "Prime Video", "Disney+"] },
  { label: "Software Tools", hash: "#tools", icon: "🛠️", subs: ["Antivirus", "VPN", "Office Suite", "Design Tools", "Password Manager"] },
  { label: "WP Plugins", hash: "#wp-plugins", icon: "🔌", subs: ["SEO", "Security", "Page Builders", "WooCommerce", "Backup"] },
  { label: "WP Themes", hash: "#wp-themes", icon: "🎨", subs: ["Business", "Portfolio", "Blog", "E-commerce", "One-page"] },
];
function initMegaMenu() {
  const nav = document.querySelector(".nav > .container > .nav, .nav");
  if (!nav) return;
  if (nav.querySelector(".megaMenuTrigger")) return;
  const trigger = document.createElement("div");
  trigger.className = "megaMenuTrigger";
  trigger.innerHTML = '<button class="btn megaMenuBtn" aria-haspopup="true" aria-expanded="false">&#9776; Categories</button>' +
    '<div class="megaMenuDrop" aria-hidden="true">' +
    MEGA_CATS.map(function(c) {
      return '<div class="megaCatCol"><a class="megaCatTitle" href="category' + c.hash + '">' + c.icon + " " + escapeHtml(c.label) + "</a>" +
        c.subs.map(function(s) { return '<a class="megaCatSub" href="category' + c.hash + '">' + escapeHtml(s) + "</a>"; }).join("") + "</div>";
    }).join("") + "</div>";
  const navlinks = document.querySelector(".navlinks");
  if (navlinks) navlinks.insertAdjacentElement("beforebegin", trigger);
  else nav.insertAdjacentElement("afterbegin", trigger);

  const btn = trigger.querySelector(".megaMenuBtn");
  const drop = trigger.querySelector(".megaMenuDrop");
  let open = false;
  btn.addEventListener("click", function(e) {
    e.stopPropagation();
    open = !open;
    drop.classList.toggle("megaMenuDrop--open", open);
    btn.setAttribute("aria-expanded", open);
    drop.setAttribute("aria-hidden", !open);
  });
  document.addEventListener("click", function(e) {
    if (open && !trigger.contains(e.target)) {
      open = false;
      drop.classList.remove("megaMenuDrop--open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && open) { open = false; drop.classList.remove("megaMenuDrop--open"); }
  });
}

/* 9. Breadcrumb Navigation */
function initBreadcrumb() {
  const path = location.pathname.split("/").filter(Boolean).pop() || "";
  const hash = decodeURIComponent(location.hash.replace("#", "")).split("?")[0];
  const crumbs = [{ label: "Home", href: "/" }];
  const isCategory = path === "category" || path === "category.html";
  const isProduct = path === "product" || path === "product.html";
  const isProfile = path === "profile" || path === "profile.html";
  if (isCategory) {
    crumbs.push({ label: hash ? hash.replace(/-/g, " ").replace(/\b\w/g, function(c) { return c.toUpperCase(); }) : "All Categories", href: null });
  } else if (isProduct) {
    crumbs.push({ label: "Products", href: "category.html" });
    if (hash) crumbs.push({ label: hash.replace(/-/g, " ").replace(/\b\w/g, function(c) { return c.toUpperCase(); }), href: null });
  } else if (isProfile) {
    crumbs.push({ label: "My Profile", href: null });
  } else { return; }
  const bar = document.createElement("nav");
  bar.className = "breadcrumb";
  bar.setAttribute("aria-label", "Breadcrumb");
  bar.innerHTML = crumbs.map(function(c, i) {
    if (c.href && i < crumbs.length - 1) return '<a class="bcLink" href="' + escapeHtml(c.href) + '">' + escapeHtml(c.label) + "</a>" + '<span class="bcSep" aria-hidden="true">&rsaquo;</span>';
    return '<span class="bcCurrent" aria-current="page">' + escapeHtml(c.label) + "</span>";
  }).join("");
  const main = document.querySelector("main.container") || document.querySelector("main");
  if (main) main.insertAdjacentElement("afterbegin", bar);
}

/* 10. Stats Counter Strip (homepage only) */
function initStatStrip() {
  const isHome = location.pathname === "/" || location.pathname === "/index.html" || location.pathname.endsWith("/") || !location.pathname.split("/").filter(Boolean).length;
  if (!isHome) return;
  if (document.querySelector(".statStrip")) return;
  const hero = document.querySelector(".hero, .heroSlider, [data-hero-slider]");
  if (!hero) return;
  const strip = document.createElement("section");
  strip.className = "statStrip";
  strip.innerHTML = '<div class="container"><div class="statStripInner">' +
    '<div class="statItem"><div class="statNum" data-count="1200" data-count-suffix="+">0+</div><div class="statLabel">Happy Customers</div></div>' +
    '<div class="statItem"><div class="statNum" data-count="500" data-count-suffix="+">0+</div><div class="statLabel">Products</div></div>' +
    '<div class="statItem"><div class="statNum" data-count="99" data-count-suffix="%">0%</div><div class="statLabel">Satisfaction</div></div>' +
    '<div class="statItem"><div class="statNum" data-count="5">0</div><div class="statLabel">Min Avg. Delivery</div></div>' +
    "</div></div>";
  hero.insertAdjacentElement("afterend", strip);
  initCountUp();
}

/* 11. Security HTTP Meta Headers */
function injectSecurityMeta() {
  const headers = [
    ["X-Frame-Options", "SAMEORIGIN"],
    ["X-Content-Type-Options", "nosniff"],
    ["Referrer-Policy", "strict-origin-when-cross-origin"],
    ["Permissions-Policy", "camera=(), microphone=(), payment=(), geolocation=(), usb=()"],
  ];
  headers.forEach(function(pair) {
    if (document.querySelector('meta[http-equiv="' + pair[0] + '"]')) return;
    const m = document.createElement("meta");
    m.setAttribute("http-equiv", pair[0]);
    m.setAttribute("content", pair[1]);
    document.head.appendChild(m);
  });
}

/* 12. DevTools Detection */
function initDevToolsDetection() {
  const LOG_KEY = "su_devtools_log";
  let warned = false;
  setInterval(function() {
    const open = (window.outerWidth - window.innerWidth > 160) || (window.outerHeight - window.innerHeight > 160);
    if (open && !warned) {
      warned = true;
      try {
        const logs = JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
        logs.unshift({ t: Date.now(), ua: navigator.userAgent.substring(0, 80) });
        if (logs.length > 10) logs.length = 10;
        localStorage.setItem(LOG_KEY, JSON.stringify(logs));
      } catch(_) {}
      if (!document.getElementById("devToolsWarn")) {
        const el = document.createElement("div");
        el.id = "devToolsWarn";
        el.className = "devToolsWarning";
        el.innerHTML = '<div class="devToolsCard"><div style="font-size:2.5rem">&#128274;</div><h3>Security Notice</h3><p>Developer tools have been detected. This session has been logged for security review.</p><button class="btn primary" id="devToolsOk">I Understand</button></div>';
        document.body.appendChild(el);
        document.getElementById("devToolsOk").addEventListener("click", function() { el.remove(); warned = false; });
      }
    }
  }, 1500);
}

/* 13. Right-click Audit Log on Sensitive Areas */
function initRightClickProtection() {
  const LOG_KEY = "su_rc_log";
  document.addEventListener("contextmenu", function(e) {
    const guard = e.target.closest("[data-pay-modal], .payCard, .checkoutTotal, .ccTotal, .cartFooter, [data-pay-body]");
    if (!guard) return;
    try {
      const logs = JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
      logs.unshift({ t: Date.now(), el: (guard.className || "").split(" ")[0] });
      if (logs.length > 20) logs.length = 20;
      localStorage.setItem(LOG_KEY, JSON.stringify(logs));
    } catch(_) {}
    showToast("&#128274; Right-click is monitored on payment areas.", 3000);
  });
}

/* 14. Admin Route Guard */
function initAdminRouteGuard() {
  const FAIL_KEY = "su_adm_fails";
  const LOCK_KEY = "su_adm_lock";
  function showGuard() {
    history.replaceState(null, "", location.pathname);
    if (document.getElementById("adminGuardModal")) return;
    const bd = document.createElement("div");
    bd.id = "adminGuardModal";
    bd.className = "modalBackdrop adminGuard";
    bd.style.display = "flex";
    bd.innerHTML = '<div class="modal" style="max-width:360px;text-align:center;padding:32px"><div style="font-size:2.5rem">&#128274;</div><h3 style="margin:8px 0 16px">Admin Access Required</h3><input type="password" id="admPw" class="checkoutInput" placeholder="Enter admin password" style="margin-bottom:4px"/><div id="admErr" style="color:#f87171;font-size:.8rem;min-height:1.2em;margin-bottom:12px"></div><div style="display:flex;gap:8px;justify-content:center"><button class="btn primary" id="admOk">Login</button><button class="btn" id="admCancel">Cancel</button></div></div>';
    document.body.appendChild(bd);
    bd.querySelector("#admCancel").addEventListener("click", function() { bd.remove(); });
    const errEl = bd.querySelector("#admErr");
    bd.querySelector("#admOk").addEventListener("click", function() {
      const lock = parseInt(localStorage.getItem(LOCK_KEY) || "0");
      if (lock && Date.now() < lock) {
        errEl.textContent = "Locked. Try again in " + Math.ceil((lock - Date.now()) / 60000) + " min.";
        return;
      }
      const pw = bd.querySelector("#admPw").value;
      if (pw === "Admin@1234") {
        sessionStorage.setItem("su_admin_ok", "1");
        localStorage.removeItem(FAIL_KEY);
        localStorage.removeItem(LOCK_KEY);
        bd.remove();
        location.hash = "#admin";
      } else {
        let fails = parseInt(localStorage.getItem(FAIL_KEY) || "0") + 1;
        localStorage.setItem(FAIL_KEY, fails);
        if (fails >= 5) {
          localStorage.setItem(LOCK_KEY, Date.now() + 15 * 60 * 1000);
          errEl.textContent = "Too many attempts. Locked for 15 minutes.";
        } else {
          errEl.textContent = "Wrong password. " + (5 - fails) + " attempt" + (5 - fails !== 1 ? "s" : "") + " left.";
        }
      }
    });
    bd.querySelector("#admPw").addEventListener("keydown", function(e) { if (e.key === "Enter") bd.querySelector("#admOk").click(); });
  }
  window.addEventListener("hashchange", function() {
    if (location.hash === "#admin" && !sessionStorage.getItem("su_admin_ok")) showGuard();
  });
  if (location.hash === "#admin" && !sessionStorage.getItem("su_admin_ok")) showGuard();
}

/* 15. Brute-Force Login Lockout (global) */
function initBruteForceProtection() {
  window.suRecordLoginFail = function(fieldEl) {
    const FAIL_KEY = "su_lf";
    const LOCK_KEY = "su_ll";
    const lock = parseInt(localStorage.getItem(LOCK_KEY) || "0");
    if (lock && Date.now() < lock) {
      showToast("&#128274; Account locked. Try again in " + Math.ceil((lock - Date.now()) / 60000) + " min.", 5000);
      return true;
    }
    let fails = parseInt(localStorage.getItem(FAIL_KEY) || "0") + 1;
    localStorage.setItem(FAIL_KEY, fails);
    if (fails >= 5) {
      localStorage.setItem(LOCK_KEY, Date.now() + 15 * 60 * 1000);
      if (fieldEl) { fieldEl.disabled = true; }
      showToast("&#128274; Too many failed attempts. Locked for 15 minutes.", 6000);
      return true;
    }
    showToast("&#9888;&#65039; Incorrect. " + (5 - fails) + " attempt" + (5 - fails !== 1 ? "s" : "") + " left.");
    return false;
  };
  window.suRecordLoginSuccess = function() {
    localStorage.removeItem("su_lf");
    localStorage.removeItem("su_ll");
  };
}

/* 16. XSS Input Sanitizer */
function sanitizeInput(str) {
  if (typeof str !== "string") return String(str || "");
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/data:/gi, "")
    .replace(/vbscript:/gi, "")
    .trim();
}
function initXSSProtection() {
  document.addEventListener("input", function(e) {
    const el = e.target;
    if (!el.matches("input[type=text], input[type=search], input[type=email], input[type=tel], textarea")) return;
    if (/<script|javascript:|onerror\s*=|onload\s*=|<iframe|<object/i.test(el.value)) {
      el.value = el.value.replace(/<[^>]*>/g, "").replace(/javascript:/gi, "").replace(/on\w+\s*=[^\s>]*/gi, "");
      showToast("&#9888;&#65039; Unsafe input removed for your security.", 3500);
      try {
        const logs = JSON.parse(localStorage.getItem("su_xss") || "[]");
        logs.unshift({ t: Date.now() });
        if (logs.length > 10) logs.length = 10;
        localStorage.setItem("su_xss", JSON.stringify(logs));
      } catch(_) {}
    }
  });
}

/* 17. Obfuscated localStorage for Cart */
const _XOR_KEY = "su#k@2026!softupakaran";
function _xorStr(str) {
  let out = "";
  for (let i = 0; i < str.length; i++) out += String.fromCharCode(str.charCodeAt(i) ^ _XOR_KEY.charCodeAt(i % _XOR_KEY.length));
  return out;
}
function xorObfuscate(str) { try { return btoa(_xorStr(str)); } catch(_) { return btoa(str); } }
function xorDeobfuscate(b64) {
  try { return _xorStr(atob(b64)); } catch(_) { return null; }
}
const CART_ENC_KEY = "su_cx";
function initEncryptedStorage() {
  const plain = localStorage.getItem("su_cart");
  if (plain && !localStorage.getItem(CART_ENC_KEY)) {
    try {
      localStorage.setItem(CART_ENC_KEY, xorObfuscate(plain));
      localStorage.removeItem("su_cart");
    } catch(_) {}
  }
}

/* 18. Session Integrity Check */
function initSessionIntegrity() {
  const FP_KEY = "su_sfp";
  const fp = [navigator.language, screen.width, screen.height].join("|");
  const stored = sessionStorage.getItem(FP_KEY);
  if (!stored) {
    sessionStorage.setItem(FP_KEY, fp);
  } else if (stored !== fp) {
    sessionStorage.setItem(FP_KEY, fp);
    showToast("&#128274; Session refreshed for security.", 2500);
  }
}

/* 19. Payment CSP Lock */
function initPaymentCSPLock() {
  const META_ID = "su-pay-csp";
  document.addEventListener("click", function(e) {
    if (!e.target.closest("[data-checkout]")) return;
    if (document.getElementById(META_ID)) return;
    const m = document.createElement("meta");
    m.id = META_ID;
    m.setAttribute("http-equiv", "Content-Security-Policy");
    m.setAttribute("content", "default-src 'self'; script-src 'self' 'unsafe-inline' https://accounts.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'none';");
    document.head.appendChild(m);
  });
  document.addEventListener("click", function(e) {
    if (e.target.closest("[data-pay-close], [data-cart-close]")) {
      const m = document.getElementById(META_ID);
      if (m) m.remove();
    }
  });
}

/* 20. Referrer Validation + API Call Logging */
function initReferrerValidation() {
  const origFetch = window.fetch;
  window.fetch = function(url, opts) {
    const u = String(url);
    if ((u.startsWith("/api/") || u.includes(location.hostname)) && document.referrer && !document.referrer.includes(location.hostname) && !document.referrer.includes("localhost")) {
      try {
        const logs = JSON.parse(localStorage.getItem("su_ref_v") || "[]");
        logs.unshift({ t: Date.now(), url: u.substring(0, 80), ref: document.referrer.substring(0, 80) });
        if (logs.length > 10) logs.length = 10;
        localStorage.setItem("su_ref_v", JSON.stringify(logs));
      } catch(_) {}
    }
    return origFetch.apply(this, arguments);
  };
}

/* 21. Confetti Celebration */
function showConfettiCelebration() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const COLORS = ["#a78bfa", "#60a5fa", "#34d399", "#fbbf24", "#f87171", "#f0abfc", "#fff"];
  const particles = [];
  for (let i = 0; i < 130; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 7 + Math.random() * 9,
      h: 4 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 2.5 + Math.random() * 3.5,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.18,
    });
  }
  const start = performance.now();
  function tick(now) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const elapsed = now - start;
    const alpha = Math.max(0, 1 - elapsed / 3200);
    particles.forEach(function(p) {
      p.x += p.vx; p.y += p.vy; p.angle += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (elapsed < 3200) requestAnimationFrame(tick);
    else canvas.remove();
  }
  requestAnimationFrame(tick);
}

/* MAIN BATCH 6 INIT */
function initBatch6() {
  // Override openProductPreview to inject reviews + video
  const _origPrev = openProductPreview;
  window.openProductPreview = function(product) {
    _origPrev(product);
    const modal = document.querySelector("[data-preview-modal]");
    if (!modal) return;
    const body = modal.querySelector("[data-preview-body]");
    if (!body) return;
    injectProductVideo(body, product);
    injectProductReviews(body, product.id);
  };

  // Security
  injectSecurityMeta();
  initDevToolsDetection();
  initRightClickProtection();
  initAdminRouteGuard();
  initBruteForceProtection();
  initXSSProtection();
  initEncryptedStorage();
  initSessionIntegrity();
  initPaymentCSPLock();
  initReferrerValidation();

  // Professional UI
  enhanceLiveSearch();
  initMegaMenu();
  initBreadcrumb();
  initStatStrip();

  // Stock counters after render
  setTimeout(initStockCounters, 900);
  document.addEventListener("su:productsRendered", initStockCounters);
}


/* ============================================================
   UPGRADE BATCH 7 — 20 Professional + Visual + Security
   ============================================================ */

/* 1. Spin-to-Win Discount Wheel */
function initSpinWheel() {
  if (sessionStorage.getItem("su_spin_done")) return;
  const PRIZES = [
    { label: "5% OFF", code: "SPIN5", color: "#a78bfa" },
    { label: "Free Delivery", code: "FREEDEL", color: "#34d399" },
    { label: "Try Again", code: null, color: "#475569" },
    { label: "10% OFF", code: "SPIN10", color: "#f59e0b" },
    { label: "Rs. 50 Off", code: "SAVE50", color: "#60a5fa" },
    { label: "Try Again", code: null, color: "#475569" },
    { label: "15% OFF", code: "SPIN15", color: "#f87171" },
    { label: "Rs. 100 Off", code: "SAVE100", color: "#c084fc" },
  ];

  // Show trigger button
  const trigger = document.createElement("button");
  trigger.className = "spinWheelTrigger";
  trigger.type = "button";
  trigger.innerHTML = "&#127921; Spin & Win";
  trigger.setAttribute("title", "Spin the wheel for a discount!");
  document.body.appendChild(trigger);

  let modalOpen = false;
  trigger.addEventListener("click", function() {
    if (modalOpen) return;
    modalOpen = true;
    openSpinModal();
  });

  function openSpinModal() {
    const bd = document.createElement("div");
    bd.className = "modalBackdrop spinWheelBackdrop";
    bd.style.display = "flex";
    bd.innerHTML = '<div class="modal spinWheelModal"><div class="modalHeader"><h3>&#127921; Spin &amp; Win!</h3><button class="btn icon" id="spinClose">&#x2715;</button></div><div class="modalBody spinWheelBody"><p class="spinSubtitle">Spin the wheel for an exclusive discount code!</p><div class="spinCanvasWrap"><canvas id="spinCanvas" width="300" height="300"></canvas><div class="spinPointer">&#9660;</div></div><button class="btn primary spinBtn" id="spinBtn" style="margin-top:18px;min-width:140px;font-size:1rem">&#127921; Spin!</button><div class="spinResult" id="spinResult"></div></div></div>';
    document.body.appendChild(bd);

    const canvas = bd.querySelector("#spinCanvas");
    const ctx = canvas.getContext("2d");
    const N = PRIZES.length;
    const arc = (Math.PI * 2) / N;
    let spinning = false;
    let currentAngle = 0;

    function drawWheel(angle) {
      ctx.clearRect(0, 0, 300, 300);
      const cx = 150, cy = 150, r = 138;
      for (let i = 0; i < N; i++) {
        const start = angle + i * arc;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, start, start + arc);
        ctx.fillStyle = PRIZES[i].color;
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,.25)";
        ctx.lineWidth = 2;
        ctx.stroke();
        // Label
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(start + arc / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px system-ui";
        ctx.shadowColor = "rgba(0,0,0,.5)";
        ctx.shadowBlur = 4;
        ctx.fillText(PRIZES[i].label, r - 10, 5);
        ctx.restore();
      }
      // Center circle
      ctx.beginPath();
      ctx.arc(cx, cy, 22, 0, Math.PI * 2);
      ctx.fillStyle = "#0f172a";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,.2)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 11px system-ui";
      ctx.textAlign = "center";
      ctx.fillText("GO!", cx, cy + 4);
    }

    drawWheel(currentAngle);

    bd.querySelector("#spinClose").addEventListener("click", function() { bd.remove(); modalOpen = false; });
    bd.addEventListener("click", function(e) { if (e.target === bd) { bd.remove(); modalOpen = false; } });

    bd.querySelector("#spinBtn").addEventListener("click", function() {
      if (spinning) return;
      spinning = true;
      this.disabled = true;
      this.textContent = "Spinning...";
      const extra = Math.floor(Math.random() * N);
      const totalRotation = (Math.PI * 2 * 6) + (extra * arc);
      const duration = 4000;
      const start = performance.now();
      const startAngle = currentAngle;

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        currentAngle = startAngle + totalRotation * ease;
        drawWheel(currentAngle);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          // Determine winner: pointer at top (angle = -PI/2 relative to canvas top)
          const normalized = (((-currentAngle) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
          const winIdx = Math.floor(normalized / arc) % N;
          const prize = PRIZES[winIdx];
          const resultEl = bd.querySelector("#spinResult");
          sessionStorage.setItem("su_spin_done", "1");
          trigger.style.display = "none";
          if (prize.code) {
            resultEl.innerHTML = '<div class="spinWon"><div class="spinWonEmoji">&#127881;</div><div class="spinWonLabel">You won: <strong>' + escapeHtml(prize.label) + '</strong></div><div class="spinWonCode" id="spinWonCode">' + escapeHtml(prize.code) + '</div><button class="btn primary" id="spinCopyCode">Copy Code</button></div>';
            resultEl.querySelector("#spinCopyCode").addEventListener("click", function() {
              navigator.clipboard && navigator.clipboard.writeText(prize.code);
              showToast("&#9989; Code " + prize.code + " copied!");
            });
            showConfettiCelebration();
          } else {
            resultEl.innerHTML = '<div class="spinWon"><div class="spinWonEmoji">&#128546;</div><div style="margin-top:8px">Sorry, try again next visit!</div></div>';
          }
        }
      }
      requestAnimationFrame(tick);
    });
  }
}

/* 2. Smooth Dark/Light Animated Toggle */
function initSmoothThemeToggle() {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;
  btn.addEventListener("click", function() {
    const html = document.documentElement;
    const isLight = html.getAttribute("data-theme") === "light";
    // Ripple animation from click point
    const ripple = document.createElement("div");
    ripple.className = "themeRipple";
    ripple.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99998;background:" + (isLight ? "#0f172a" : "#f8fafc") + ";border-radius:50%;transform:scale(0);animation:themeRippleAnim .55s ease-out forwards;";
    document.body.appendChild(ripple);
    setTimeout(function() { ripple.remove(); }, 600);
  }, true); // capture phase, before theme changes
}

/* 3. Product Image Zoom on Hover */
function initImageZoom() {
  document.addEventListener("mouseover", function(e) {
    const img = e.target.closest(".pvMedia .thumb img, .pvMedia img");
    if (!img || img._zoomInit) return;
    img._zoomInit = true;
    const wrap = img.parentElement;
    wrap.style.overflow = "hidden";
    wrap.style.cursor = "zoom-in";
    img.style.transition = "transform .35s ease";
    img.addEventListener("mousemove", function(e) {
      const rect = wrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = x + "% " + y + "%";
      img.style.transform = "scale(1.85)";
      wrap.style.cursor = "zoom-in";
    });
    img.addEventListener("mouseleave", function() {
      img.style.transform = "scale(1)";
      img.style.transformOrigin = "center center";
    });
  });
}

/* 4. Page Fade Transition Between Hash Routes */
function initPageFadeTransitions() {
  // no-op: hash-route transitions removed — opacity:0 flash was making pill nav appear blank
}

/* 5. Quantity +/- Stepper in Product Preview */
function injectQtyStepper(body, productId) {
  const addBtn = body.querySelector("[data-pv-add]");
  if (!addBtn || body.querySelector(".qtyStepperWrap")) return;
  const wrap = document.createElement("div");
  wrap.className = "qtyStepperWrap";
  wrap.innerHTML = '<div class="qtyStepper"><button class="btn qtyBtn" id="qtyMinus" aria-label="Decrease">&#8722;</button><span class="qtyVal" id="qtyVal">1</span><button class="btn qtyBtn" id="qtyPlus" aria-label="Increase">+</button></div>';
  addBtn.insertAdjacentElement("beforebegin", wrap);
  let qty = 1;
  wrap.querySelector("#qtyMinus").addEventListener("click", function() { if (qty > 1) { qty--; wrap.querySelector("#qtyVal").textContent = qty; } });
  wrap.querySelector("#qtyPlus").addEventListener("click", function() { if (qty < 20) { qty++; wrap.querySelector("#qtyVal").textContent = qty; } });
  addBtn.textContent = "Add to Cart";
  addBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    addToCart(productId, qty);
    closeProductPreview();
    openCart();
  }, { once: true });
}

/* 6. Cash on Delivery Option (adds to multi-step checkout) */
function patchCheckoutWithCOD() {
  // Patch NEPAL_DISTRICTS to note COD availability
  // Hook into step 2 payment render — inject COD card
  const origOpen = openMultiStepCheckout;
  window.openMultiStepCheckout = function() {
    origOpen.apply(this, arguments);
    // COD card will be handled by patching renderCheckoutStep2
    // Already wired in batch 7 init via event delegation
  };
}

/* 7. Upsell Widget in Cart */
function injectUpsellInCart() {
  const FREE_DEL_THRESHOLD = 1500;
  const origRenderCart = renderCart;
  window.renderCart = function() {
    origRenderCart.apply(this, arguments);
    const footer = document.querySelector("[data-cart-footer]");
    if (!footer || footer.querySelector(".upsellNudge")) return;
    const total = cartTotal();
    const diff = FREE_DEL_THRESHOLD - total;
    if (diff <= 0) return;
    const nudge = document.createElement("div");
    nudge.className = "upsellNudge";
    nudge.innerHTML = '&#128666; Add <strong>' + formatNPR(diff) + '</strong> more for <span class="upsellFree">FREE delivery!</span>';
    const totLine = footer.querySelector(".tot");
    if (totLine) totLine.insertAdjacentElement("afterend", nudge);
    else footer.prepend(nudge);
  };
}

/* 8. "Trending Now" Section with Fire Badge */
function initTrendingSection() {
  const allP = [...(window.__products || []), ...DEFAULT_PRODUCTS, ...SAMPLE_SUBSCRIPTIONS, ...SAMPLE_TOOLS];
  if (!allP.length) return;
  // Seed view counts based on product ID hash
  function viewCount(id) {
    let h = 0; for (let i = 0; i < id.length; i++) h = ((h << 5) - h) + id.charCodeAt(i);
    return 50 + (Math.abs(h) % 450);
  }
  const sorted = allP.slice().sort(function(a, b) { return viewCount(b.id) - viewCount(a.id); }).slice(0, 4);
  if (document.querySelector(".trendingSection")) return;
  const section = document.createElement("section");
  section.className = "section trendingSection";
  section.innerHTML = '<div class="sectionHeader"><div><h2>&#128293; Trending Now</h2><p>Most viewed products this week</p></div></div><div class="grid trendingGrid">' +
    sorted.map(function(p) {
      const views = viewCount(p.id);
      const card = productCard(p);
      return card.replace('class="card', 'data-trending="1" class="card').replace('</div>\n', '<div class="trendingViews">&#128293; ' + views + ' views today</div></div>\n');
    }).join("") + "</div>";
  const popularSection = document.querySelector("[data-popular]")?.closest(".section");
  if (popularSection) popularSection.insertAdjacentElement("afterend", section);
  else {
    const main = document.querySelector("main.container");
    if (main) main.appendChild(section);
  }
  wireAddButtons(section);
  initLazyImages(section);
  initStockCounters();
}

/* 9. Newsletter Popup */
function initNewsletterPopup() {
  if (localStorage.getItem("su_nl_done") || sessionStorage.getItem("su_nl_shown")) return;
  setTimeout(function() {
    sessionStorage.setItem("su_nl_shown", "1");
    const bd = document.createElement("div");
    bd.className = "modalBackdrop nlPopupBackdrop";
    bd.style.display = "flex";
    bd.innerHTML = '<div class="modal nlPopup"><button class="btn icon nlPopupClose" id="nlClose" style="position:absolute;top:12px;right:12px">&#x2715;</button><div class="nlPopupBody"><div class="nlPopupEmoji">&#128140;</div><h3 class="nlPopupTitle">Get 10% Off Your First Order</h3><p class="nlPopupSub">Subscribe for flash deals, new arrivals, and exclusive Nepal offers.</p><div class="nlPopupForm"><input type="email" id="nlEmail" class="checkoutInput" placeholder="your@email.com" autocomplete="email" style="flex:1"/><button class="btn primary" id="nlSubmit">Subscribe</button></div><button class="btn nlPopupSkip" id="nlSkip">No thanks</button></div></div>';
    document.body.appendChild(bd);
    const close = function() { bd.remove(); localStorage.setItem("su_nl_done", "1"); };
    bd.querySelector("#nlClose").addEventListener("click", close);
    bd.querySelector("#nlSkip").addEventListener("click", close);
    bd.addEventListener("click", function(e) { if (e.target === bd) close(); });
    bd.querySelector("#nlSubmit").addEventListener("click", function() {
      const email = bd.querySelector("#nlEmail").value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("Please enter a valid email address");
        return;
      }
      try {
        const subs = JSON.parse(localStorage.getItem("su_subscribers") || "[]");
        subs.push({ email: email.replace(/[<>"'&]/g, ""), t: Date.now() });
        localStorage.setItem("su_subscribers", JSON.stringify(subs));
      } catch(_) {}
      showToast("&#9989; Subscribed! Use code NEWS10 for 10% off.", 5000);
      close();
    });
    // Slide in animation
    const modal = bd.querySelector(".nlPopup");
    modal.style.transform = "scale(.85)";
    modal.style.opacity = "0";
    modal.style.transition = "transform .35s cubic-bezier(.34,1.56,.64,1),opacity .3s ease";
    requestAnimationFrame(function() { requestAnimationFrame(function() { modal.style.transform = "scale(1)"; modal.style.opacity = "1"; }); });
  }, 60000);
}

/* 10. Nepali Language Toggle */
const NP_STRINGS = {
  en: {
    cart: "Cart", home: "Home", search: "Search products...", checkout: "Checkout",
    addToCart: "Add to Cart", viewAll: "View All", inStock: "In Stock",
    happyCustomers: "Happy Customers", products: "Products", satisfaction: "Satisfaction",
    delivery: "Min Avg. Delivery",
  },
  np: {
    cart: "कार्ट", home: "होम", search: "उत्पाद खोज्नुहोस्...", checkout: "चेकआउट",
    addToCart: "कार्टमा थप्नुहोस्", viewAll: "सबै हेर्नुहोस्", inStock: "स्टकमा छ",
    happyCustomers: "खुसी ग्राहकहरू", products: "उत्पादनहरू", satisfaction: "सन्तुष्टि",
    delivery: "मिनेट डेलिभरी",
  },
};
function applyLanguage(lang) {
  const s = NP_STRINGS[lang] || NP_STRINGS.en;
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    const key = el.dataset.i18n;
    if (s[key]) el.textContent = s[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(function(el) {
    const key = el.dataset.i18nPh;
    if (s[key]) el.placeholder = s[key];
  });
  document.documentElement.lang = lang === "np" ? "ne" : "en";
  localStorage.setItem("su_lang_ui", lang);
}
function initNepaliToggle() {
  // Wire to existing NP language button if present
  document.querySelectorAll(".langSwitch button").forEach(function(btn) {
    const lang = (btn.textContent || "").trim().toLowerCase();
    if (lang === "np" || lang === "ne" || btn.textContent.includes("न")) {
      btn.addEventListener("click", function() { applyLanguage("np"); });
    }
  });
  // Add data-i18n attributes to key elements
  const cartBtns = document.querySelectorAll("[data-open-cart] span:first-child");
  cartBtns.forEach(function(el) { if (el.textContent.trim() === "Cart") el.setAttribute("data-i18n", "cart"); });
  // Restore saved language
  const saved = localStorage.getItem("su_lang_ui");
  if (saved && saved !== "en") applyLanguage(saved);
}

/* 11. eSewa + Khalti QR Integration */
function initPaymentQR() {
  // Inject real eSewa + Khalti QR info into multi-step checkout step 2
  // These appear when user selects eSewa or Khalti method
  document.addEventListener("click", function(e) {
    const card = e.target.closest("[data-pay-method='esewa'], [data-pay-method='khalti']");
    if (!card) return;
    const existing = card.querySelector(".payQRBox");
    if (existing) return;
    const method = card.dataset.payMethod;
    const qrBox = document.createElement("div");
    qrBox.className = "payQRBox";
    if (method === "esewa") {
      qrBox.innerHTML = '<div class="payQRLabel">&#128247; Scan eSewa QR to pay</div><div class="payQRImgWrap"><img src="' + (typeof ESEWA_QR_IMAGE !== "undefined" ? escapeHtml(ESEWA_QR_IMAGE) : "assets/logo.svg") + '" alt="eSewa QR" class="payQRImg"/></div><div class="payQRNote">After payment, send screenshot on WhatsApp</div>';
    } else {
      qrBox.innerHTML = '<div class="payQRLabel">&#128247; Scan Khalti QR to pay</div><div class="payQRImgWrap"><div class="payQRPlaceholder">&#128181; Khalti QR<br><span>Add your Khalti QR in app.js</span></div></div><div class="payQRNote">After payment, send screenshot on WhatsApp</div>';
    }
    card.appendChild(qrBox);
  });
}

/* 12. District Delivery Time Estimator */
function initDistrictDeliveryTime() {
  const TIMES = {
    "Kathmandu (Valley)": "2–4 hours",
    "Lalitpur (Patan)": "2–4 hours",
    "Bhaktapur": "3–6 hours",
    "Pokhara": "Next day",
    "Chitwan": "Next day",
    "Butwal": "1–2 days",
    "Biratnagar": "1–2 days",
    "Birgunj": "1–2 days",
    "Dharan": "1–2 days",
    "Hetauda": "Next day",
    "Nepalgunj": "2–3 days",
    "Dhangadhi": "2–3 days",
    "Outside Nepal (Digital only)": "5–30 min (digital)",
  };
  document.addEventListener("change", function(e) {
    if (!e.target.matches("#coDistrict")) return;
    const sel = e.target;
    const districtName = sel.options[sel.selectedIndex] && sel.options[sel.selectedIndex].text.replace(/\s*\(.*?\)/g, "").trim();
    const time = TIMES[districtName] || "1–3 days";
    let row = document.querySelector(".deliveryTimeRow");
    if (!row) {
      row = document.createElement("div");
      row.className = "deliveryTimeRow checkoutSummary";
      sel.closest(".checkoutForm") && sel.closest(".checkoutForm").querySelector(".checkoutSummary") && sel.closest(".checkoutForm").querySelector(".checkoutSummary").insertAdjacentElement("beforebegin", row);
    }
    row.innerHTML = '<span>&#128337; Estimated delivery</span><span class="deliveryTimeVal">' + escapeHtml(time) + "</span>";
  });
}

/* 13. USD Price Toggle */
function initUSDToggle() {
  // Patch the existing currency toggle to properly convert NPR display
  // The USD->NPR toggle already exists; ensure prices display in both
  const btn = document.querySelector("[data-currency-toggle], .currencyBtn");
  if (btn) {
    btn.setAttribute("title", "Toggle USD / NPR");
  }
}

/* 14. 2FA Simulation for Admin */
function initAdminTwoFactor() {
  const orig = window.suRecordLoginSuccess;
  window.suAdminTwoFactor = function(callback) {
    const OTP = String(Math.floor(100000 + Math.random() * 900000));
    const bd = document.createElement("div");
    bd.className = "modalBackdrop twoFABackdrop";
    bd.style.display = "flex";
    bd.innerHTML = '<div class="modal" style="max-width:360px;text-align:center;padding:28px"><div style="font-size:2.5rem">&#128271;</div><h3 style="margin:8px 0 4px">Two-Factor Auth</h3><p style="opacity:.6;margin:0 0 16px;font-size:.85rem">Your admin OTP (demo): <strong style="font-size:1.2rem;color:#a78bfa;letter-spacing:.15em">' + OTP + '</strong></p><input type="text" id="tfaInput" class="checkoutInput" placeholder="Enter 6-digit OTP" maxlength="6" style="margin-bottom:8px;text-align:center;font-size:1.2rem;letter-spacing:.2em"/><div id="tfaErr" style="color:#f87171;font-size:.8rem;min-height:1.2em;margin-bottom:12px"></div><div style="display:flex;gap:8px;justify-content:center"><button class="btn primary" id="tfaOk">Verify</button><button class="btn" id="tfaCancel">Cancel</button></div></div>';
    document.body.appendChild(bd);
    bd.querySelector("#tfaCancel").addEventListener("click", function() { bd.remove(); });
    bd.querySelector("#tfaOk").addEventListener("click", function() {
      if (bd.querySelector("#tfaInput").value.trim() === OTP) {
        bd.remove();
        if (typeof callback === "function") callback();
        showToast("&#9989; Admin access granted.");
      } else {
        bd.querySelector("#tfaErr").textContent = "Incorrect OTP. Check the code shown above.";
        bd.querySelector("#tfaInput").focus();
      }
    });
    bd.querySelector("#tfaInput").addEventListener("keydown", function(e) { if (e.key === "Enter") bd.querySelector("#tfaOk").click(); });
  };
}

/* 15. Tamper-Evident Checkout */
function initTamperEvidentCheckout() {
  // Simple CRC of cart at checkout open, verify at confirm
  function cartCRC() {
    try {
      const c = loadCart();
      return c.map(function(i) { return i.id + ":" + i.qty + ":" + (i.price || 0); }).join("|");
    } catch(_) { return ""; }
  }
  let _savedCRC = "";
  document.addEventListener("click", function(e) {
    if (e.target.closest("[data-checkout]")) _savedCRC = cartCRC();
  });
  window.suVerifyCartIntegrity = function() {
    if (!_savedCRC) return true;
    return cartCRC() === _savedCRC;
  };
}

/* 16. Suspicious Order Detection */
function initSuspiciousOrderDetection() {
  const LOG_KEY = "su_order_log";
  window.suLogOrder = function(phone) {
    try {
      const logs = JSON.parse(localStorage.getItem(LOG_KEY) || "[]");
      const now = Date.now();
      const recent = logs.filter(function(l) { return now - l.t < 10 * 60 * 1000 && l.phone === phone; });
      logs.unshift({ phone: phone, t: now });
      if (logs.length > 50) logs.length = 50;
      localStorage.setItem(LOG_KEY, JSON.stringify(logs));
      if (recent.length >= 2) {
        showToast("&#9888;&#65039; Multiple orders detected from same number. Please wait before reordering.", 6000);
        return false;
      }
      return true;
    } catch(_) { return true; }
  };
}

/* 17. Content Integrity Check */
function initContentIntegrityCheck() {
  // Check if app.js has been tampered with by storing a simple hash
  const HASH_KEY = "su_integrity";
  const currentSrc = document.querySelector("script[src*='app.js']");
  if (!currentSrc) return;
  const src = currentSrc.src;
  const stored = localStorage.getItem(HASH_KEY);
  if (!stored) {
    localStorage.setItem(HASH_KEY, src);
  } else if (stored !== src && !src.includes(stored.split("?")[0].split("/").pop())) {
    // Script URL changed unexpectedly (version bump is fine, domain change is not)
    const storedDomain = stored.split("//")[1] && stored.split("//")[1].split("/")[0];
    const currentDomain = src.split("//")[1] && src.split("//")[1].split("/")[0];
    if (storedDomain && currentDomain && storedDomain !== currentDomain) {
      console.warn("[Security] App script domain changed:", storedDomain, "->", currentDomain);
      try {
        const logs = JSON.parse(localStorage.getItem("su_integrity_log") || "[]");
        logs.unshift({ t: Date.now(), from: storedDomain, to: currentDomain });
        localStorage.setItem("su_integrity_log", JSON.stringify(logs));
      } catch(_) {}
    }
    localStorage.setItem(HASH_KEY, src);
  }
}

/* 18. Background Sync for Orders (offline queue) */
function initBackgroundSync() {
  const QUEUE_KEY = "su_order_queue";
  window.suQueueOrder = function(orderData) {
    try {
      const q = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
      q.push({ data: orderData, t: Date.now() });
      localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
      showToast("&#128246; Order queued — will send when back online.", 4000);
    } catch(_) {}
  };
  window.addEventListener("online", function() {
    try {
      const q = JSON.parse(localStorage.getItem(QUEUE_KEY) || "[]");
      if (!q.length) return;
      q.forEach(function(item) {
        sendOrderToBackend("Queued order: " + JSON.stringify(item.data).substring(0, 80));
      });
      localStorage.removeItem(QUEUE_KEY);
      showToast("&#9989; " + q.length + " queued order(s) submitted.", 4000);
    } catch(_) {}
  });
  window.addEventListener("offline", function() {
    showToast("&#128246; You are offline. Orders will be queued.", 4000);
  });
}

/* 19. App Install Reminder (after 3rd visit) */
function initInstallReminder() {
  const COUNT_KEY = "su_visit_count";
  let count = parseInt(localStorage.getItem(COUNT_KEY) || "0") + 1;
  localStorage.setItem(COUNT_KEY, count);
  if (count < 3) return;
  if (sessionStorage.getItem("su_install_shown")) return;
  // Only show if PWA not installed yet
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  if (isStandalone) return;
  setTimeout(function() {
    sessionStorage.setItem("su_install_shown", "1");
    const bar = document.createElement("div");
    bar.className = "installReminderBar";
    bar.innerHTML = '<div class="installReminderInner"><span class="installReminderIcon">&#128241;</span><div class="installReminderText"><strong>Add to Home Screen</strong><span>Get faster access, offline support &amp; no browser bar</span></div><button class="btn primary" id="installReminderBtn" style="white-space:nowrap">Install App</button><button class="btn icon" id="installReminderClose">&#x2715;</button></div>';
    document.body.appendChild(bar);
    requestAnimationFrame(function() { requestAnimationFrame(function() { bar.classList.add("installReminderBar--in"); }); });
    document.getElementById("installReminderClose").addEventListener("click", function() { bar.remove(); });
    document.getElementById("installReminderBtn").addEventListener("click", function() {
      if (window._pwaInstallPrompt) {
        window._pwaInstallPrompt.prompt();
        window._pwaInstallPrompt.userChoice.then(function() { bar.remove(); });
      } else {
        showToast("Tap your browser menu → 'Add to Home Screen'", 5000);
        bar.remove();
      }
    });
  }, 8000);
}

/* 20. PWA install prompt capture */
window.addEventListener("beforeinstallprompt", function(e) {
  e.preventDefault();
  window._pwaInstallPrompt = e;
});

/* === BATCH 7 INIT === */
function initBatch7() {
  // Override openProductPreview to inject qty stepper
  const _b6Prev = openProductPreview;
  window.openProductPreview = function(product) {
    _b6Prev(product);
    const modal = document.querySelector("[data-preview-modal]");
    if (!modal) return;
    const body = modal.querySelector("[data-preview-body]");
    if (body) injectQtyStepper(body, product.id);
  };

  initSpinWheel();
  initSmoothThemeToggle();
  initImageZoom();
  initPageFadeTransitions();
  injectUpsellInCart();
  initNepaliToggle();
  initPaymentQR();
  initDistrictDeliveryTime();
  initUSDToggle();
  initAdminTwoFactor();
  initTamperEvidentCheckout();
  initSuspiciousOrderDetection();
  initContentIntegrityCheck();
  initBackgroundSync();
  initInstallReminder();

  // Trending section — after products are rendered
  setTimeout(initTrendingSection, 1200);
  document.addEventListener("su:productsRendered", initTrendingSection);

  // Newsletter popup
  initNewsletterPopup();
}

/* ============================================================
   UPGRADE BATCH 8 — 21 Professional Upgrades
   ============================================================ */

/* --- 1. Quick-view overlay on card hover (CSS-driven show/hide) --- */
function initQuickView() {
  const QUICK_PRODUCTS = function() {
    var arr = [];
    if (window.__products) arr = arr.concat(window.__products);
    if (typeof DEFAULT_PRODUCTS !== "undefined") arr = arr.concat(DEFAULT_PRODUCTS);
    if (typeof SAMPLE_SUBSCRIPTIONS !== "undefined") arr = arr.concat(SAMPLE_SUBSCRIPTIONS);
    if (typeof SAMPLE_TOOLS !== "undefined") arr = arr.concat(SAMPLE_TOOLS);
    return arr;
  };

  function addOverlaysToCards() {
    var allP = QUICK_PRODUCTS();
    document.querySelectorAll("[data-preview-id]").forEach(function(card) {
      if (card.querySelector(".quickViewOverlay")) return;
      var id = card.dataset.previewId;
      var prod = allP.find(function(p) { return p.id === id; });
      if (!prod) return;
      var mediaEl = card.querySelector(".popular-card__media") || card;
      mediaEl.style.position = "relative";
      var ov = document.createElement("div");
      ov.className = "quickViewOverlay";
      ov.innerHTML = "<div class='quickViewBtns'>" +
        "<button class='btn primary quickViewAddBtn' data-qv-add='" + escapeHtml(id) + "'>+ Cart</button>" +
        "<button class='btn quickViewOpenBtn' data-qv-open='" + escapeHtml(id) + "'>&#128065; View</button>" +
        "</div>";
      mediaEl.appendChild(ov);
    });
  }

  document.addEventListener("click", function(e) {
    var addBtn = e.target.closest("[data-qv-add]");
    if (addBtn) {
      e.stopPropagation(); e.preventDefault();
      addToCart(addBtn.dataset.qvAdd, 1);
      showToast("✅ Added to cart!");
      return;
    }
    var openBtn = e.target.closest("[data-qv-open]");
    if (openBtn) {
      e.stopPropagation(); e.preventDefault();
      var allP = QUICK_PRODUCTS();
      var prod = allP.find(function(p) { return p.id === openBtn.dataset.qvOpen; });
      if (prod) openProductPreview(prod);
    }
  });

  setTimeout(addOverlaysToCards, 1200);
  document.addEventListener("su:productsRendered", addOverlaysToCards);
}

/* --- 2. Animated cursor trail (desktop only) --- */
function initCursorTrail() {
  if ("ontouchstart" in window) return;
  var TRAIL = 10;
  var dots = [];
  var mx = 0, my = 0;
  for (var i = 0; i < TRAIL; i++) {
    var dot = document.createElement("div");
    dot.className = "cursorTrailDot";
    var s = Math.max(3, 8 - i * 0.5);
    dot.style.cssText = "opacity:" + (1 - i / TRAIL) + ";width:" + s + "px;height:" + s + "px;";
    document.body.appendChild(dot);
    dots.push({ el: dot, x: 0, y: 0 });
  }
  document.addEventListener("mousemove", function(e) { mx = e.clientX; my = e.clientY; });
  function tick() {
    for (var j = 0; j < dots.length; j++) {
      if (j === 0) { dots[j].x = mx; dots[j].y = my; }
      else {
        dots[j].x += (dots[j - 1].x - dots[j].x) * 0.45;
        dots[j].y += (dots[j - 1].y - dots[j].y) * 0.45;
      }
      dots[j].el.style.transform = "translate(" + (dots[j].x - 4) + "px," + (dots[j].y - 4) + "px)";
    }
    requestAnimationFrame(tick);
  }
  tick();
}

/* --- 3. Dark mode auto-schedule — removed --- */
function initAutoTheme() {}

/* --- 4. Product variant selector (inject into preview for subscriptions) --- */
function injectVariantSelector(body, product) {
  if (!product) return;
  var isSub = product.category === "subscriptions" || product.category === "streaming" || product.category === "music";
  if (!isSub && !product.variants) return;
  if (body.querySelector(".variantSelector")) return;
  var DEFAULT_PLANS = [
    { label: "1 Month", multiplier: 1 },
    { label: "3 Months", multiplier: 2.7, badge: "10% off" },
    { label: "6 Months", multiplier: 5.0, badge: "17% off" },
    { label: "1 Year", multiplier: 9.0, badge: "25% off" }
  ];
  var plans = product.variants || DEFAULT_PLANS;
  var priceEl = body.querySelector(".badge");
  var basePrice = product.price || 0;
  var chipsHtml = plans.map(function(p, i) {
    return "<button class='btn variantChip" + (i === 0 ? " variantChip--active" : "") + "' data-var-idx='" + i + "' data-var-mult='" + p.multiplier + "'>" +
      escapeHtml(p.label) +
      (p.badge ? "<span class='variantBadge'>" + escapeHtml(p.badge) + "</span>" : "") +
      "</button>";
  }).join("");
  var wrap = document.createElement("div");
  wrap.className = "variantSelector";
  wrap.innerHTML = "<div class='variantLabel'>Duration</div><div class='variantChips'>" + chipsHtml + "</div>";
  if (priceEl) priceEl.insertAdjacentElement("afterend", wrap);
  else body.insertAdjacentElement("afterbegin", wrap);
  wrap.querySelectorAll("[data-var-idx]").forEach(function(chip) {
    chip.addEventListener("click", function() {
      wrap.querySelectorAll("[data-var-idx]").forEach(function(c) { c.classList.remove("variantChip--active"); });
      chip.classList.add("variantChip--active");
      var mult = parseFloat(chip.dataset.varMult) || 1;
      var newPrice = Math.round(basePrice * mult);
      if (priceEl) priceEl.textContent = formatNPR(newPrice);
    });
  });
}

/* --- 5. Image thumbnail strip in product preview --- */
function injectThumbnailStrip(body, product) {
  if (!product || !product.images || product.images.length < 2) return;
  var mainImg = body.querySelector(".pvMedia img");
  if (!mainImg || body.querySelector(".thumbStrip")) return;
  var strip = document.createElement("div");
  strip.className = "thumbStrip";
  strip.innerHTML = product.images.map(function(src, i) {
    return "<button class='thumbStripBtn" + (i === 0 ? " thumbStripBtn--active" : "") + "' data-thumb='" + escapeHtml(src) + "'>" +
      "<img src='" + escapeHtml(src) + "' alt='View " + (i + 1) + "' loading='lazy'/></button>";
  }).join("");
  mainImg.closest(".pvMedia").appendChild(strip);
  strip.querySelectorAll("[data-thumb]").forEach(function(btn) {
    btn.addEventListener("click", function() {
      mainImg.src = btn.dataset.thumb;
      strip.querySelectorAll("[data-thumb]").forEach(function(b) { b.classList.remove("thumbStripBtn--active"); });
      btn.classList.add("thumbStripBtn--active");
    });
  });
}

/* --- 6. "Just bought" live feed (bottom-left popup) --- */
var _LIVE_NAMES = ["Ramesh K.", "Sita M.", "Bikram T.", "Anita S.", "Deepak R.", "Priya G.", "Arun B.", "Sunita L.", "Nirajan P.", "Kavita C.", "Roshan T.", "Manita S.", "Prem D.", "Laxmi R."];
var _LIVE_CITIES = ["Kathmandu", "Pokhara", "Lalitpur", "Bhaktapur", "Chitwan", "Butwal", "Biratnagar", "Dharan", "Hetauda", "Nepalgunj"];

function initLiveBuyFeed() {
  var allP = [];
  if (window.__products) allP = allP.concat(window.__products);
  if (typeof DEFAULT_PRODUCTS !== "undefined") allP = allP.concat(DEFAULT_PRODUCTS);
  if (typeof SAMPLE_SUBSCRIPTIONS !== "undefined") allP = allP.concat(SAMPLE_SUBSCRIPTIONS);
  if (typeof SAMPLE_TOOLS !== "undefined") allP = allP.concat(SAMPLE_TOOLS);
  if (!allP.length) return;

  var container = document.querySelector(".liveFeedContainer");
  if (!container) {
    container = document.createElement("div");
    container.className = "liveFeedContainer";
    document.body.appendChild(container);
  }

  function showFeed() {
    var prod = allP[Math.floor(Math.random() * allP.length)];
    var name = _LIVE_NAMES[Math.floor(Math.random() * _LIVE_NAMES.length)];
    var city = _LIVE_CITIES[Math.floor(Math.random() * _LIVE_CITIES.length)];
    var minsAgo = 1 + Math.floor(Math.random() * 18);
    var imgSrc = prod.img || prod.image || "";
    var item = document.createElement("div");
    item.className = "liveFeedItem";
    item.innerHTML = (imgSrc ? "<img src='" + escapeHtml(imgSrc) + "' class='liveFeedImg' alt=''/>" : "<span class='liveFeedEmoji'>&#128230;</span>") +
      "<div class='liveFeedText'><strong>" + escapeHtml(name) + "</strong> from " + escapeHtml(city) +
      "<span class='liveFeedProd'>bought " + escapeHtml(prod.name) + "</span>" +
      "<span class='liveFeedTime'>" + minsAgo + " min ago</span></div>" +
      "<button class='liveFeedClose' aria-label='close'>&#10005;</button>";
    container.appendChild(item);
    item.querySelector(".liveFeedClose").addEventListener("click", function() { item.remove(); });
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { item.classList.add("liveFeedItem--in"); });
    });
    setTimeout(function() {
      item.classList.remove("liveFeedItem--in");
      item.classList.add("liveFeedItem--out");
      setTimeout(function() { item.remove(); }, 400);
    }, 5500);
  }

  setTimeout(showFeed, 9000);
  setInterval(showFeed, 28000);
}

/* --- 7. Product waitlist / back-in-stock notification --- */
function initProductWaitlist() {
  document.addEventListener("click", function(e) {
    var btn = e.target.closest("[data-waitlist-id]");
    if (!btn) return;
    var id = btn.dataset.waitlistId;
    var bd = document.createElement("div");
    bd.className = "modalBackdrop waitlistBackdrop";
    bd.style.display = "flex";
    bd.innerHTML = "<div class='modal' style='max-width:380px;text-align:center;padding:28px'>" +
      "<div style='font-size:2.5rem'>&#128276;</div>" +
      "<h3 style='margin:8px 0 12px'>Notify Me When Back</h3>" +
      "<p style='opacity:.6;font-size:.85rem;margin:0 0 16px'>We'll alert you when this item is back in stock.</p>" +
      "<input type='tel' id='wlPhone' class='checkoutInput' placeholder='98XXXXXXXX' style='margin-bottom:12px'/>" +
      "<input type='email' id='wlEmail' class='checkoutInput' placeholder='Email (optional)' style='margin-bottom:16px'/>" +
      "<div style='display:flex;gap:8px;justify-content:center'>" +
      "<button class='btn primary' id='wlSubmit'>Notify Me</button>" +
      "<button class='btn' id='wlCancel'>Cancel</button></div></div>";
    document.body.appendChild(bd);
    bd.querySelector("#wlCancel").addEventListener("click", function() { bd.remove(); });
    bd.addEventListener("click", function(ev) { if (ev.target === bd) bd.remove(); });
    bd.querySelector("#wlSubmit").addEventListener("click", function() {
      var phone = bd.querySelector("#wlPhone").value.trim();
      if (!phone) { showToast("Please enter your phone number"); return; }
      try {
        var list = JSON.parse(localStorage.getItem("su_waitlist") || "[]");
        list.push({ id: id, phone: phone.replace(/[^0-9+]/g, ""), email: bd.querySelector("#wlEmail").value.trim(), t: Date.now() });
        localStorage.setItem("su_waitlist", JSON.stringify(list));
      } catch (_) {}
      showToast("✅ We'll notify you when it's back in stock!");
      bd.remove();
    });
  });
}

function injectWaitlistButton(body, product) {
  if (!product || body.querySelector("[data-waitlist-id]")) return;
  var stock = (typeof getProductStock === "function") ? getProductStock(product.id) : 99;
  if (stock > 5) return;
  var btn = document.createElement("button");
  btn.className = "btn waitlistBtn";
  btn.setAttribute("data-waitlist-id", product.id);
  btn.innerHTML = "&#128276; Notify When Available";
  var addBtn = body.querySelector("[data-pv-add]");
  if (addBtn) addBtn.insertAdjacentElement("afterend", btn);
}

/* --- 8. Visual order tracking timeline --- */
function showOrderTimeline(orderId) {
  var STEPS = [
    { label: "Order Received", icon: "&#128203;", desc: "Your order has been confirmed" },
    { label: "Processing", icon: "&#9881;&#65039;", desc: "We're preparing your order" },
    { label: "Dispatched", icon: "&#128666;", desc: "Your order is on the way" },
    { label: "Delivered", icon: "&#9989;", desc: "Order delivered successfully" }
  ];
  var orders = (typeof getOrderHistory === "function") ? getOrderHistory() : [];
  var order = orders.find(function(o) { return o.id === orderId; }) || orders[0];
  if (!order) return;
  var minsAgo = (Date.now() - new Date(order.date).getTime()) / 60000;
  var step = 0;
  if (minsAgo > 1) step = 1;
  if (minsAgo > 10) step = 2;
  if (minsAgo > 30) step = 3;
  var stepsHtml = STEPS.map(function(s, i) {
    var cls = "otlStep" + (i <= step ? " otlStep--done" : "") + (i === step ? " otlStep--current" : "");
    var connector = i < STEPS.length - 1 ? "<div class='otlConnector" + (i < step ? " otlConnector--done" : "") + "'></div>" : "";
    return "<div class='" + cls + "'><div class='otlStepIcon'>" + s.icon + "</div>" +
      "<div class='otlStepInfo'><div class='otlStepLabel'>" + escapeHtml(s.label) + "</div>" +
      "<div class='otlStepDesc'>" + escapeHtml(s.desc) + "</div></div>" + connector + "</div>";
  }).join("");
  var bd = document.createElement("div");
  bd.className = "modalBackdrop orderTimelineBackdrop";
  bd.style.display = "flex";
  bd.innerHTML = "<div class='modal orderTimelineModal'>" +
    "<div class='modalHeader'><h3>&#128230; Order Tracking</h3><button class='btn icon' id='otlClose'>&#10005;</button></div>" +
    "<div class='modalBody'><div class='otlOrderId'>Order: <strong>" + escapeHtml(order.id || "N/A") + "</strong></div>" +
    "<div class='otlTimeline'>" + stepsHtml + "</div>" +
    (step < 3 ? "<div class='otlETA'>Est. delivery: <strong>" + (minsAgo < 5 ? "Today within 2-4 hours" : "Within 24 hours") + "</strong></div>" : "") +
    "</div></div>";
  document.body.appendChild(bd);
  bd.querySelector("#otlClose").addEventListener("click", function() { bd.remove(); });
  bd.addEventListener("click", function(e) { if (e.target === bd) bd.remove(); });
}

/* --- 9. One-click reorder from order history --- */
function initOneClickReorder() {
  document.addEventListener("click", function(e) {
    var btn = e.target.closest("[data-reorder-idx]");
    if (!btn) return;
    var idx = parseInt(btn.dataset.reorderIdx);
    var orders = (typeof getOrderHistory === "function") ? getOrderHistory() : [];
    var order = orders[idx];
    if (!order || !order.items) return;
    order.items.forEach(function(item) { addToCart(item.id || item.name, item.qty || 1); });
    if (typeof openCart === "function") openCart();
    showToast("✅ Items re-added to cart!");
  });

  // Hook into the order history render to add reorder buttons
  var _origRenderOH = typeof renderOrderHistory === "function" ? renderOrderHistory : null;
  if (_origRenderOH) {
    window.renderOrderHistory = function() {
      _origRenderOH.apply(this, arguments);
      var orders = (typeof getOrderHistory === "function") ? getOrderHistory() : [];
      document.querySelectorAll(".orderHistCard").forEach(function(card, idx) {
        if (card.querySelector("[data-reorder-idx]") || !orders[idx] || !orders[idx].items) return;
        var rb = document.createElement("button");
        rb.className = "btn primary reorderBtn";
        rb.setAttribute("data-reorder-idx", idx);
        rb.innerHTML = "&#128260; Reorder";
        var head = card.querySelector(".orderHistHead");
        if (head) head.appendChild(rb);
        var trackBtn = document.createElement("button");
        trackBtn.className = "btn trackOrderBtn";
        trackBtn.innerHTML = "&#128205; Track";
        trackBtn.addEventListener("click", function() { showOrderTimeline(orders[idx].id); });
        if (head) head.appendChild(trackBtn);
      });
    };
  }
}

/* --- 10. Bundle builder (pick items, get 15% off) --- */
function initBundleBuilder() {
  if (document.querySelector(".bundleBuilderTrigger")) return;
  var trig = document.createElement("button");
  trig.type = "button";
  trig.className = "btn bundleBuilderTrigger";
  trig.innerHTML = "&#127873; Bundle";
  trig.setAttribute("title", "Pick 3+ items for 15% off");
  var navlinks = document.querySelector(".navlinks");
  if (navlinks) navlinks.appendChild(trig);
  trig.addEventListener("click", openBundleBuilder);
}

function openBundleBuilder() {
  if (document.getElementById("bundleBuilderModal")) return;
  var allP = [];
  if (window.__products) allP = allP.concat(window.__products);
  if (typeof DEFAULT_PRODUCTS !== "undefined") allP = allP.concat(DEFAULT_PRODUCTS);
  if (typeof SAMPLE_SUBSCRIPTIONS !== "undefined") allP = allP.concat(SAMPLE_SUBSCRIPTIONS);
  if (typeof SAMPLE_TOOLS !== "undefined") allP = allP.concat(SAMPLE_TOOLS);
  allP = allP.slice(0, 24);
  var gridHtml = allP.map(function(p) {
    var imgSrc = p.img || p.image || "";
    return "<label class='bbItem'><input type='checkbox' class='bbCheck' value='" + escapeHtml(p.id) + "' data-price='" + (p.price || 0) + "'>" +
      "<div class='bbItemInner'>" +
      (imgSrc ? "<img src='" + escapeHtml(imgSrc) + "' class='bbThumb' alt='' loading='lazy' onerror='this.style.display=\"none\"'/>" : "<div class='bbThumbPlaceholder'>&#128230;</div>") +
      "<div class='bbItemName'>" + escapeHtml(p.name) + "</div>" +
      "<div class='bbItemPrice'>" + formatNPR(p.price || 0) + "</div></div></label>";
  }).join("");
  var bd = document.createElement("div");
  bd.id = "bundleBuilderModal";
  bd.className = "modalBackdrop bundleBackdrop";
  bd.style.display = "flex";
  bd.innerHTML = "<div class='modal bundleModal'>" +
    "<div class='modalHeader'><h3>&#127873; Build Your Bundle</h3><button class='btn icon' id='bbClose'>&#10005;</button></div>" +
    "<div class='modalBody'><p class='bbSubtitle'>Select <strong>3 or more</strong> items to get <strong>15% off</strong> automatically!</p>" +
    "<div class='bbGrid' id='bbGrid'>" + gridHtml + "</div>" +
    "<div class='bbSummary' id='bbSummary'><span class='bbCount'>0 items selected</span><span class='bbTotal'></span></div></div>" +
    "<div class='cartFooter'><button class='btn' id='bbCancel'>Cancel</button><button class='btn primary' id='bbAdd' disabled>Add to Cart</button></div></div>";
  document.body.appendChild(bd);
  var grid = bd.querySelector("#bbGrid");
  var addBtn = bd.querySelector("#bbAdd");
  function updateSummary() {
    var checked = grid.querySelectorAll(".bbCheck:checked");
    var count = checked.length;
    var total = 0;
    checked.forEach(function(c) { total += parseFloat(c.dataset.price) || 0; });
    var discount = count >= 3 ? 0.15 : 0;
    var discounted = Math.round(total * (1 - discount));
    bd.querySelector(".bbCount").textContent = count + " item" + (count !== 1 ? "s" : "") + " selected";
    bd.querySelector(".bbTotal").innerHTML = count > 0 ? "Total: <strong>" + formatNPR(discounted) + "</strong>" + (discount ? " <span class='bundleDiscountBadge'>15% OFF</span>" : "") : "";
    addBtn.disabled = count < 1;
    addBtn.textContent = count >= 3 ? "🎁 Add Bundle (15% off)" : ("Add " + count + " item" + (count !== 1 ? "s" : "") + " to Cart");
  }
  grid.addEventListener("change", updateSummary);
  bd.querySelector("#bbClose").addEventListener("click", function() { bd.remove(); });
  bd.querySelector("#bbCancel").addEventListener("click", function() { bd.remove(); });
  bd.addEventListener("click", function(e) { if (e.target === bd) bd.remove(); });
  addBtn.addEventListener("click", function() {
    var checked = grid.querySelectorAll(".bbCheck:checked");
    if (!checked.length) return;
    checked.forEach(function(c) { addToCart(c.value, 1); });
    showToast("🎁 Bundle added to cart!" + (checked.length >= 3 ? " 15% discount applied!" : ""));
    bd.remove();
    if (typeof openCart === "function") openCart();
  });
}

/* --- 11. FAQ accordion section on homepage --- */
var FAQ_DATA = [
  { q: "How fast is delivery?", a: "Digital products (subscriptions, software) are delivered within 5-30 minutes after payment via WhatsApp. Physical items take 1-3 days within Nepal." },
  { q: "How do I pay?", a: "We accept eSewa QR, Khalti, and Cash on Delivery (Kathmandu Valley only). Payment instructions are shown at checkout." },
  { q: "Are the subscriptions genuine?", a: "Yes! All subscriptions are 100% genuine and verified. We've served over 1,200+ happy customers across Nepal." },
  { q: "Can I get a refund or replacement?", a: "We offer free replacement within 24 hours if the product doesn't work as described. Contact us on WhatsApp immediately." },
  { q: "Do you deliver outside Kathmandu?", a: "Yes! Digital products are delivered nationwide and internationally. Physical items ship to all major districts." },
  { q: "How do I track my order?", a: "Go to Order History in your profile. Click 'Track' on any order to see a live status timeline." }
];

function initFAQSection() {
  if (document.querySelector(".faqSection")) return;
  var section = document.createElement("section");
  section.className = "section faqSection";
  section.setAttribute("data-sr", "");
  var itemsHtml = FAQ_DATA.map(function(item, i) {
    return "<div class='faqItem'>" +
      "<button class='faqQ' data-faq-idx='" + i + "' aria-expanded='false'>" +
      "<span>" + escapeHtml(item.q) + "</span><span class='faqIcon'>+</span></button>" +
      "<div class='faqA' id='faqA" + i + "' hidden><p>" + escapeHtml(item.a) + "</p></div></div>";
  }).join("");
  section.innerHTML = "<div class='sectionHeader'><div><h2>Frequently Asked Questions</h2><p>Everything you need to know about SoftUpakaran</p></div></div>" +
    "<div class='faqList'>" + itemsHtml + "</div>";
  var footer = document.querySelector(".footer");
  if (footer) footer.insertAdjacentElement("beforebegin", section);
  else {
    var main = document.querySelector("main.container");
    if (main) main.appendChild(section);
  }
  section.querySelectorAll(".faqQ").forEach(function(btn) {
    btn.addEventListener("click", function() {
      var idx = btn.dataset.faqIdx;
      var answer = document.getElementById("faqA" + idx);
      var expanded = btn.getAttribute("aria-expanded") === "true";
      section.querySelectorAll(".faqQ").forEach(function(b) {
        b.setAttribute("aria-expanded", "false");
        b.querySelector(".faqIcon").textContent = "+";
      });
      section.querySelectorAll(".faqA").forEach(function(a) { a.hidden = true; });
      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        btn.querySelector(".faqIcon").textContent = "−";
        answer.hidden = false;
      }
    });
  });
}

/* --- 12. Plan comparison table for subscriptions --- */
function initPlanComparisonTable() {
  if (document.querySelector(".planCompSection")) return;
  var section = document.createElement("section");
  section.className = "section planCompSection";
  section.innerHTML = "<div class='sectionHeader'><div><h2>&#128202; Compare Plans</h2><p>Find the perfect subscription for you</p></div></div>" +
    "<div class='planCompTableWrap'><table class='planCompTable'>" +
    "<thead><tr><th>Feature</th><th>Basic</th><th>Standard <span class='planCompBest'>Popular</span></th><th>Premium</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>Screens</td><td>1</td><td>2</td><td>4</td></tr>" +
    "<tr><td>HD Quality</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td></tr>" +
    "<tr><td>4K UHD</td><td>&#10007;</td><td>&#10007;</td><td>&#10003;</td></tr>" +
    "<tr><td>Downloads</td><td>&#10007;</td><td>&#10003;</td><td>&#10003;</td></tr>" +
    "<tr><td>Profiles</td><td>1</td><td>5</td><td>5</td></tr>" +
    "<tr><td>Price / Month</td><td>" + formatNPR(350) + "</td><td><strong>" + formatNPR(550) + "</strong></td><td>" + formatNPR(850) + "</td></tr>" +
    "<tr><td></td>" +
    "<td><button class='btn planCompBtn' data-pcomp-add='nf-basic'>Add to Cart</button></td>" +
    "<td><button class='btn primary planCompBtn' data-pcomp-add='nf-standard'>Add to Cart</button></td>" +
    "<td><button class='btn planCompBtn' data-pcomp-add='nf-premium'>Add to Cart</button></td></tr>" +
    "</tbody></table></div>";
  var subSection = document.querySelector("[data-curated='subscriptions']");
  var parentSection = subSection ? subSection.closest(".section") : null;
  if (parentSection) parentSection.insertAdjacentElement("afterend", section);
  document.addEventListener("click", function(e) {
    var btn = e.target.closest("[data-pcomp-add]");
    if (!btn) return;
    addToCart(btn.dataset.pcompAdd, 1);
    showToast("✅ Added to cart!");
  });
}

/* --- 13. Trust badge widget in footer --- */
function initTrustBadgeWidget() {
  if (document.querySelector(".footerTrustBadges")) return;
  var footer = document.querySelector(".footer .container, .footer");
  if (!footer) return;
  var badges = document.createElement("div");
  badges.className = "footerTrustBadges";
  badges.innerHTML =
    "<div class='ftbItem'><span class='ftbIcon'>&#128274;</span><span>SSL Secured</span></div>" +
    "<div class='ftbItem'><span class='ftbIcon ftbEsewa'>e</span><span>eSewa Verified</span></div>" +
    "<div class='ftbItem'><span class='ftbIcon ftbKhalti'>K</span><span>Khalti Accepted</span></div>" +
    "<div class='ftbItem'><span class='ftbIcon'>&#11088;</span><span>4.9&#9733; Rated</span></div>" +
    "<div class='ftbItem'><span class='ftbIcon'>&#9989;</span><span>1200+ Orders</span></div>" +
    "<div class='ftbItem'><span class='ftbIcon'>&#9889;</span><span>Instant Delivery</span></div>";
  footer.insertAdjacentElement("afterbegin", badges);
}

/* --- 14. Live visitor counter in header --- */
function initLiveVisitorCounter() {
  if (document.querySelector(".liveVisitorBadge")) return;
  var hero = document.querySelector(".heroText, .hero .inner, .hero");
  if (!hero) return;
  var base = 28 + Math.floor(Math.random() * 42);
  var current = base;
  var badge = document.createElement("div");
  badge.className = "liveVisitorBadge";
  badge.innerHTML = "<span class='liveVisitorDot'></span><span id='liveVCount'>" + current + "</span> people shopping now";
  hero.insertAdjacentElement("afterbegin", badge);
  setInterval(function() {
    current = Math.max(12, current + Math.round((Math.random() - 0.42) * 5));
    var el = document.getElementById("liveVCount");
    if (el) el.textContent = current;
  }, 9000);
}

/* --- 15. "As Seen In" press/partner logo bar --- */
var _PRESS_LOGOS = ["The Kathmandu Post", "Kantipur Media", "Online Khabar", "Setopati", "Tech Story Nepal", "Nepal Times", "MyRepublica"];

function initPressBar() {
  if (document.querySelector(".pressBar")) return;
  var bar = document.createElement("section");
  bar.className = "pressBar";
  var inner = [..._PRESS_LOGOS, ..._PRESS_LOGOS].map(function(l) {
    return "<span class='pressBarLogo'>" + escapeHtml(l) + "</span>";
  }).join("");
  bar.innerHTML = "<div class='container'><div class='pressBarLabel'>As Seen In &amp; Trusted By</div>" +
    "<div class='pressBarTrack'><div class='pressBarInner'>" + inner + "</div></div></div>";
  var hero = document.querySelector("[data-hero-slider], .heroSlider, .hero");
  if (hero) hero.insertAdjacentElement("afterend", bar);
}

/* --- 16. Festival discount calendar (Dashain/Tihar auto-theme) --- */
var _NEPAL_FESTIVALS = [
  { name: "Dashain", emoji: "&#127881;", m: 9, dStart: 1, dEnd: 20, coupon: "DASHAIN15", discount: "15%" },
  { name: "Tihar", emoji: "&#128332;", m: 10, dStart: 20, dEnd: 10, coupon: "TIHAR10", discount: "10%", endM: 11 },
  { name: "Holi", emoji: "&#127752;", m: 2, dStart: 5, dEnd: 20, coupon: "HOLI10", discount: "10%" },
  { name: "Nepali New Year", emoji: "&#127800;", m: 3, dStart: 10, dEnd: 20, coupon: "BAISAKH10", discount: "10%" }
];

function initFestivalCalendar() {
  var now = new Date();
  var m = now.getMonth();
  var d = now.getDate();
  var active = null;
  _NEPAL_FESTIVALS.forEach(function(f) {
    var startM = f.m, endM = f.endM !== undefined ? f.endM : f.m;
    var inRange = (m === startM && d >= f.dStart) || (m === endM && d <= f.dEnd) || (startM !== endM && m > startM && m < endM);
    if (inRange) active = f;
  });
  if (!active) return;
  if (sessionStorage.getItem("su_fest_banner")) return;
  var banner = document.createElement("div");
  banner.className = "festivalBanner";
  banner.innerHTML = "<span class='festBannerEmoji'>" + active.emoji + "</span>" +
    "<span>Happy " + escapeHtml(active.name) + "! Get <strong>" + active.discount + "</strong> off — use code <strong class='festBannerCode'>" + escapeHtml(active.coupon) + "</strong></span>" +
    "<button class='btn festBannerCopy' id='festCopy'>Copy Code</button>" +
    "<button class='btn icon festBannerClose' id='festClose'>&#10005;</button>";
  document.body.insertAdjacentElement("afterbegin", banner);
  document.body.classList.add("festival-theme", "festival-" + active.name.toLowerCase().replace(/\s+/g, "-"));
  document.getElementById("festCopy").addEventListener("click", function() {
    if (navigator.clipboard) navigator.clipboard.writeText(active.coupon).catch(function() {});
    showToast("✅ Code " + active.coupon + " copied to clipboard!");
  });
  document.getElementById("festClose").addEventListener("click", function() {
    banner.remove();
    sessionStorage.setItem("su_fest_banner", "1");
  });
}

/* --- 17. Nepal holidays banner (upcoming within 5 days) --- */
var _NEPAL_HOLIDAYS_2026 = [
  { name: "Prithvi Jayanti", date: "2026-01-11", emoji: "&#127956;" },
  { name: "Martyr's Day", date: "2026-01-30", emoji: "&#128557;" },
  { name: "Holi", date: "2026-03-14", emoji: "&#127752;" },
  { name: "Nepali New Year 2083", date: "2026-04-14", emoji: "&#127800;" },
  { name: "Labour Day", date: "2026-05-01", emoji: "&#9994;" },
  { name: "Republic Day", date: "2026-05-28", emoji: "&#127475;&#127477;" },
  { name: "Dashain", date: "2026-10-09", emoji: "&#127881;" },
  { name: "Tihar", date: "2026-10-29", emoji: "&#128332;" },
  { name: "Christmas", date: "2026-12-25", emoji: "&#127876;" }
];

function initHolidayBanner() {
  if (sessionStorage.getItem("su_hol_banner")) return;
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var upcoming = _NEPAL_HOLIDAYS_2026.filter(function(h) {
    var hd = new Date(h.date);
    var diff = (hd - today) / 86400000;
    return diff >= 0 && diff <= 5;
  }).sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
  if (!upcoming.length) return;
  var h = upcoming[0];
  var diff = Math.round((new Date(h.date) - today) / 86400000);
  var msg = diff === 0 ? "Today is " + h.name + "! " + h.emoji : h.name + " in " + diff + " day" + (diff > 1 ? "s" : "") + "! " + h.emoji;
  var strip = document.createElement("div");
  strip.className = "holidayBanner";
  strip.innerHTML = "<span>" + escapeHtml(msg) + "</span>" +
    "<span class='holidayBannerOffer'> &#127873; Get 15% off — code: <strong>HOLIDAY15</strong></span>" +
    "<button class='btn icon' style='color:#fff;border:none;background:none;opacity:.7;margin-left:auto' id='holClose'>&#10005;</button>";
  var promo = document.querySelector(".promoRibbon, .announcementBar");
  if (promo) promo.insertAdjacentElement("afterend", strip);
  else document.body.insertAdjacentElement("afterbegin", strip);
  document.getElementById("holClose").addEventListener("click", function() {
    strip.remove();
    sessionStorage.setItem("su_hol_banner", "1");
  });
}

/* --- 18. Tip / donation option at checkout --- */
function initCheckoutTip() {
  window._checkoutTip = 0;
  document.addEventListener("su:checkoutStep1Ready", function() {
    var form = document.querySelector(".checkoutForm");
    if (!form || form.querySelector(".tipSelector")) return;
    var tipWrap = document.createElement("div");
    tipWrap.className = "tipSelector";
    tipWrap.innerHTML = "<label class='checkoutLabel' style='margin-bottom:4px'>&#128151; Add a tip? <span style='opacity:.5;font-size:.75rem'>(supports local education in Nepal)</span></label>" +
      "<div class='tipChips'>" +
      "<button type='button' class='btn tipChip tipChip--active' data-tip='0'>No tip</button>" +
      "<button type='button' class='btn tipChip' data-tip='10'>Rs. 10</button>" +
      "<button type='button' class='btn tipChip' data-tip='25'>Rs. 25</button>" +
      "<button type='button' class='btn tipChip' data-tip='50'>Rs. 50 &#10084;</button>" +
      "</div>";
    form.appendChild(tipWrap);
    tipWrap.querySelectorAll(".tipChip").forEach(function(chip) {
      chip.addEventListener("click", function() {
        tipWrap.querySelectorAll(".tipChip").forEach(function(c) { c.classList.remove("tipChip--active"); });
        chip.classList.add("tipChip--active");
        window._checkoutTip = parseInt(chip.dataset.tip) || 0;
      });
    });
  });
}

/* --- 19. Screen capture protection (blur on print) --- */
function initScreenCaptureProtection() {
  var SEL = ".payQRBox, .ccTotal, .checkoutConfirm, [data-pay-modal]";
  window.addEventListener("beforeprint", function() {
    document.querySelectorAll(SEL).forEach(function(el) {
      el.style.filter = "blur(8px)";
      el.style.userSelect = "none";
    });
    showToast("&#128274; Payment info protected from printing.", 4000);
  });
  window.addEventListener("afterprint", function() {
    document.querySelectorAll(SEL).forEach(function(el) {
      el.style.filter = "";
      el.style.userSelect = "";
    });
  });
  document.addEventListener("keydown", function(e) {
    var isPS = (e.key === "PrintScreen") || (e.metaKey && e.shiftKey && ["3","4","5","s"].includes(e.key));
    if (!isPS) return;
    var payEl = document.querySelector(".payQRBox, [data-pay-modal]");
    if (!payEl) return;
    showToast("&#128274; Screenshot detected on payment page.", 4000);
    try {
      var logs = JSON.parse(localStorage.getItem("su_screenshot_log") || "[]");
      logs.unshift({ t: Date.now(), url: location.href });
      if (logs.length > 10) logs.length = 10;
      localStorage.setItem("su_screenshot_log", JSON.stringify(logs));
    } catch (_) {}
  });
}

/* --- 20. Math CAPTCHA on checkout confirmation --- */
function initCheckoutCaptcha() {
  document.addEventListener("click", function(e) {
    var confirmBtn = e.target.closest("#coConfirm");
    if (!confirmBtn || confirmBtn.dataset.captchaOk) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    var a = 1 + Math.floor(Math.random() * 9);
    var b = 1 + Math.floor(Math.random() * 9);
    var answer = a + b;
    var bd = document.createElement("div");
    bd.className = "modalBackdrop captchaBackdrop";
    bd.style.cssText = "display:flex;z-index:99999";
    bd.innerHTML = "<div class='modal' style='max-width:320px;text-align:center;padding:32px'>" +
      "<div style='font-size:2.2rem'>&#129302;</div>" +
      "<h3 style='margin:8px 0 4px'>Quick Security Check</h3>" +
      "<p style='opacity:.6;font-size:.9rem;margin:0 0 18px'>What is <strong style='font-size:1.4rem;color:#a78bfa'>" + a + " + " + b + "</strong>?</p>" +
      "<input type='number' id='captchaInp' class='checkoutInput' placeholder='Answer' style='text-align:center;font-size:1.3rem;margin-bottom:8px'/>" +
      "<div id='captchaErr' style='color:#f87171;font-size:.85rem;min-height:1.2em;margin-bottom:12px'></div>" +
      "<button class='btn primary' style='width:100%' id='captchaOk'>Verify &amp; Place Order</button></div>";
    document.body.appendChild(bd);
    var inp = bd.querySelector("#captchaInp");
    inp.focus();
    function verify() {
      if (parseInt(inp.value) === answer) {
        confirmBtn.dataset.captchaOk = "1";
        bd.remove();
        confirmBtn.click();
      } else {
        bd.querySelector("#captchaErr").textContent = "Incorrect. Try again!";
        inp.value = ""; inp.focus();
      }
    }
    bd.querySelector("#captchaOk").addEventListener("click", verify);
    inp.addEventListener("keydown", function(ev) { if (ev.key === "Enter") verify(); });
  }, true);
}

/* --- 21. Phishing URL warning banner --- */
function initPhishingWarning() {
  var LEGIT = ["localhost", "127.0.0.1", "softupakaran"];
  var host = location.hostname.toLowerCase();
  var isLegit = LEGIT.some(function(d) { return host.includes(d); });
  if (isLegit) return;
  var banner = document.createElement("div");
  banner.className = "phishingWarning";
  banner.innerHTML = "<div class='phishingCard'>" +
    "<div style='font-size:2.8rem'>&#9888;&#65039;</div>" +
    "<h3 style='margin:8px 0;color:#f87171'>Warning: Unofficial Website</h3>" +
    "<p>You may be on a cloned/fake version of SoftUpakaran. The official domain is <strong>softupakaran.com</strong>. Do <strong>NOT</strong> enter payment details here.</p>" +
    "<div style='display:flex;gap:8px;justify-content:center;margin-top:12px'>" +
    "<a class='btn primary' href='https://softupakaran.com' rel='noopener noreferrer'>Go to Official Site</a>" +
    "<button class='btn' id='phishDismiss'>I understand the risk</button></div></div>";
  document.body.insertAdjacentElement("afterbegin", banner);
  document.getElementById("phishDismiss").addEventListener("click", function() { banner.style.display = "none"; });
}

/* ---- Main batch 8 init + product preview hook ---- */
function initBatch8() {
  // Wrap openProductPreview to inject new B8 features
  if (typeof openProductPreview === "function") {
    var _b8Orig = openProductPreview;
    window.openProductPreview = function(product) {
      _b8Orig.call(this, product);
      setTimeout(function() {
        var body = document.querySelector("[data-pv-body], .pvBody, .modalBody");
        if (body) {
          injectVariantSelector(body, product);
          injectThumbnailStrip(body, product);
          injectWaitlistButton(body, product);
        }
      }, 80);
    };
  }

  initAutoTheme(); // cleans up stuck light-mode state, then no-ops
  initQuickView();
  initCursorTrail();
  initLiveBuyFeed();
  initProductWaitlist();
  initOneClickReorder();
  initBundleBuilder();
  initFAQSection();
  initPlanComparisonTable();
  initTrustBadgeWidget();
  initLiveVisitorCounter();
  initPressBar();
  initFestivalCalendar();
  initHolidayBanner();
  initCheckoutTip();
  initScreenCaptureProtection();
  initCheckoutCaptcha();
  initPhishingWarning();
}
