import { useEffect, useMemo, useState } from "react";

const BANNERS = [
  {
    id: 1,
    title: "Modern WordPress themes",
    subtitle: "Design-ready packs with fast setup",
    badge: "Design ready",
    cta: "Shop now",
  },
  {
    id: 2,
    title: "Netflix and streaming bundles",
    subtitle: "Nepal-friendly digital delivery in minutes",
    badge: "Streaming packs",
    cta: "Explore plans",
  },
  {
    id: 3,
    title: "Premium plugins and SEO tools",
    subtitle: "Curated builds for speed and growth",
    badge: "WP plugins",
    cta: "View plugins",
  },
  {
    id: 4,
    title: "VPN and privacy subscriptions",
    subtitle: "Secure plans for work and streaming",
    badge: "Secure access",
    cta: "See VPN",
  },
  {
    id: 5,
    title: "Web development support packs",
    subtitle: "Launch-ready kits for agencies and freelancers",
    badge: "Dev support",
    cta: "Get started",
  },
];

const STATS = [
  { title: "Instant delivery", text: "Most orders delivered in 5-15 minutes" },
  { title: "24/7 support", text: "Live WhatsApp support whenever you need help" },
  { title: "Secure checkout", text: "Fast and private payment flow" },
  { title: "Verified quality", text: "Curated products tested before publishing" },
];

const FEATURED = [
  { id: 1, title: "Netflix Premium", note: "Top-up and profile plans" },
  { id: 2, title: "ChatGPT Plus", note: "Monthly activations" },
  { id: 3, title: "WP Plugin Bundle", note: "SEO, speed, security stack" },
  { id: 4, title: "VPN Pro", note: "Global high-speed nodes" },
];

function bannerSources(id) {
  return {
    avif: `/assets/hero/banner-${id}-640.avif 640w, /assets/hero/banner-${id}-1024.avif 1024w, /assets/hero/banner-${id}-1440.avif 1440w`,
    webp: `/assets/hero/banner-${id}-640.webp 640w, /assets/hero/banner-${id}-1024.webp 1024w, /assets/hero/banner-${id}-1440.webp 1440w`,
    fallback: `/assets/hero/banner-${id}-1024.webp`,
  };
}

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("SPK_REDUCED_MOTION_V3");
    const preferred =
      stored === null
        ? window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : stored === "1";
    setReducedMotion(Boolean(preferred));
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setIndex((v) => (v + 1) % BANNERS.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const active = useMemo(() => BANNERS[index], [index]);
  const sources = bannerSources(active.id);

  function toggleMotion() {
    setReducedMotion((value) => {
      const next = !value;
      try {
        localStorage.setItem("SPK_REDUCED_MOTION_V3", next ? "1" : "0");
      } catch (_) {}
      return next;
    });
  }

  return (
    <section className="hero">
      <div className="heroImageWrap">
        <picture>
          <source type="image/avif" srcSet={sources.avif} sizes="(max-width: 900px) 100vw, 75vw" />
          <source type="image/webp" srcSet={sources.webp} sizes="(max-width: 900px) 100vw, 75vw" />
          <img
            src={sources.fallback}
            alt={active.title}
            width="1440"
            height="740"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="heroOverlay" />
      </div>

      <div className="heroContent">
        <p className="heroBadge">{active.badge}</p>
        <h1>{active.title}</h1>
        <p>{active.subtitle}</p>
        <button className="primaryBtn" type="button">
          {active.cta}
        </button>
      </div>

      <div className="heroControls">
        <button className="ghostBtn" type="button" onClick={toggleMotion}>
          {reducedMotion ? "Restore motion" : "Reduce motion"}
        </button>
        <div className="heroDots">
          {BANNERS.map((banner, idx) => (
            <button
              key={banner.id}
              type="button"
              className={idx === index ? "dot active" : "dot"}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCards() {
  return (
    <section className="featured">
      <h2>Featured Picks</h2>
      <div className="featureGrid">
        {FEATURED.map((item) => {
          const sources = bannerSources(item.id);
          return (
            <article key={item.title} className="featureCard">
              <picture>
                <source
                  type="image/avif"
                  srcSet={sources.avif}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <source
                  type="image/webp"
                  srcSet={sources.webp}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <img
                  src={sources.fallback}
                  alt={item.title}
                  width="1024"
                  height="560"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="featureCardBody">
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="promo">Limited offer: 10% off Netflix and ChatGPT plans.</div>
        <div className="nav">
          <div className="brandWrap">
            <img src="/assets/logo.svg" alt="SoftUpakaran" width="28" height="28" />
            <span>SoftUpakaran</span>
          </div>
          <div className="search">Search products</div>
          <div className="actions">
            <button type="button">Home</button>
            <button type="button">Cart</button>
            <button type="button">Support</button>
          </div>
        </div>
      </header>

      <main className="container">
        <HeroSlider />

        <section className="stats">
          {STATS.map((item) => (
            <article key={item.title} className="statCard">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <FeaturedCards />
      </main>

      <footer className="footer">
        <p>(c) 2026 SoftUpakaran. Fast digital delivery for Nepal.</p>
      </footer>
    </div>
  );
}
