const db = require("./db");

function ensureColumn(table, column, type) {
  db.all(`PRAGMA table_info(${table})`, (err, cols) => {
    if (err) {
      console.error(`❌ Failed to read schema for ${table}:`, err.message);
      return;
    }
    const exists = (cols || []).some((c) => c.name === column);
    if (!exists) {
      db.run(`ALTER TABLE ${table} ADD COLUMN ${column} ${type}`, (e) => {
        if (e) console.error(`❌ Failed to add column ${table}.${column}:`, e.message);
      });
    }
  });
}

const DEFAULT_SLIDER_BANNERS = [
  {
    title: "Premium subscriptions in Nepal",
    subtitle: "Netflix, Canva, ChatGPT, and more",
    link: "category.html?c=subscriptions",
    image: "assets/banners/banner-1.webp",
    badge: "Nepal ready",
    metric: "10K+",
    metric_label: "Digital deliveries",
    order_index: 1
  },
  {
    title: "WordPress plugins and SEO tools",
    subtitle: "Speed, security, and conversion upgrades",
    link: "category.html?c=wp-plugins",
    image: "assets/banners/banner-2.webp",
    badge: "WP builders",
    metric: "120+",
    metric_label: "Premium plugins",
    order_index: 2
  },
  {
    title: "Modern WordPress themes",
    subtitle: "Blog, news, and store-ready templates",
    link: "category.html?c=wp-themes",
    image: "assets/banners/banner-3.webp",
    badge: "Design ready",
    metric: "85+",
    metric_label: "Themes curated",
    order_index: 3
  },
  {
    title: "Netflix plans and profiles",
    subtitle: "Affordable access with instant activation",
    link: "category.html?c=netflix",
    image: "assets/banners/banner-4.webp",
    badge: "Streaming",
    metric: "5 min",
    metric_label: "Activation time",
    order_index: 4
  },
  {
    title: "Web development packages",
    subtitle: "Custom builds for businesses",
    link: "category.html?c=web-development",
    image: "assets/banners/banner-5.webp",
    badge: "Custom desks",
    metric: "40+",
    metric_label: "Dev partners",
    order_index: 5
  }
];

function initDb() {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS categories (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        tag TEXT,
        icon TEXT
    )
  `);

    // Admin login audit trail
    db.run(`
      CREATE TABLE IF NOT EXISTS admin_login_events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        ip TEXT,
        country_code TEXT,
        country_name TEXT,
        user_agent TEXT,
        created_at TEXT DEFAULT (datetime('now')),
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        category_id TEXT NOT NULL,
        price_npr INTEGER NOT NULL,
        price_usd INTEGER,
        tier TEXT,
        availability TEXT,
        note TEXT,
        note_ne TEXT,
        image TEXT,
        FOREIGN KEY (category_id) REFERENCES categories(id)
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at TEXT DEFAULT (datetime('now')),
        customer_name TEXT,
        game_uid TEXT,
        product_id TEXT,
        quantity INTEGER,
        total_npr INTEGER,
        payment_method TEXT,
        status TEXT,
        whatsapp TEXT,
        raw_cart_json TEXT,
        source TEXT
      )
    `);

    // Backward compatible: add columns if an old DB exists
    ensureColumn("orders", "whatsapp", "TEXT");
    ensureColumn("orders", "raw_cart_json", "TEXT");
    ensureColumn("orders", "source", "TEXT");
    ensureColumn("products", "price_usd", "INTEGER");
    ensureColumn("products", "tier", "TEXT");
    ensureColumn("products", "availability", "TEXT");
    ensureColumn("products", "note_ne", "TEXT");
    ensureColumn("admin_login_events", "location", "TEXT");

    // Users & admin
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT DEFAULT (datetime('now')),
        name TEXT,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        phone TEXT,
        whatsapp TEXT,
        role TEXT DEFAULT 'user'
      )
    `);

    // Login lockout state (keyed by email/ip prefixes)
    db.run(`
      CREATE TABLE IF NOT EXISTS auth_lockouts (
        lock_key TEXT PRIMARY KEY,
        failed_count INTEGER NOT NULL DEFAULT 0,
        first_failed_at TEXT,
        last_failed_at TEXT,
        lock_until TEXT,
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT DEFAULT (datetime('now'))
      )
    `);
    db.run(`
      CREATE INDEX IF NOT EXISTS idx_auth_lockouts_lock_until
      ON auth_lockouts(lock_until)
    `);
    ensureColumn("auth_lockouts", "failed_count", "INTEGER NOT NULL DEFAULT 0");
    ensureColumn("auth_lockouts", "first_failed_at", "TEXT");
    ensureColumn("auth_lockouts", "last_failed_at", "TEXT");
    ensureColumn("auth_lockouts", "lock_until", "TEXT");
    ensureColumn("auth_lockouts", "updated_at", "TEXT DEFAULT (datetime('now'))");

    // Refresh tokens for rotation + revocation
    db.run(`
      CREATE TABLE IF NOT EXISTS refresh_tokens (
        jti TEXT PRIMARY KEY,
        user_id INTEGER NOT NULL,
        token_hash TEXT NOT NULL,
        parent_jti TEXT,
        issued_at TEXT NOT NULL,
        expires_at TEXT NOT NULL,
        consumed_at TEXT,
        revoked_at TEXT,
        revoked_reason TEXT,
        replaced_by_jti TEXT,
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT DEFAULT (datetime('now')),
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);
    db.run(`
      CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user
      ON refresh_tokens(user_id)
    `);
    db.run(`
      CREATE INDEX IF NOT EXISTS idx_refresh_tokens_parent
      ON refresh_tokens(parent_jti)
    `);
    ensureColumn("refresh_tokens", "parent_jti", "TEXT");
    ensureColumn("refresh_tokens", "issued_at", "TEXT");
    ensureColumn("refresh_tokens", "expires_at", "TEXT");
    ensureColumn("refresh_tokens", "consumed_at", "TEXT");
    ensureColumn("refresh_tokens", "revoked_at", "TEXT");
    ensureColumn("refresh_tokens", "revoked_reason", "TEXT");
    ensureColumn("refresh_tokens", "replaced_by_jti", "TEXT");
    ensureColumn("refresh_tokens", "updated_at", "TEXT DEFAULT (datetime('now'))");

    // Customer feedback
    db.run(`
      CREATE TABLE IF NOT EXISTS feedback (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at TEXT DEFAULT (datetime('now')),
        user_id INTEGER,
        name TEXT,
        email TEXT,
        rating INTEGER,
        message TEXT NOT NULL,
        status TEXT DEFAULT 'new',
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    // Simple key/value settings store
    db.run(`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT
      )
    `);

    // Default settings (safe to re-run)
    db.run(`INSERT OR IGNORE INTO settings (key, value) VALUES ('whatsapp_number', '')`);
    db.run(`INSERT OR IGNORE INTO settings (key, value) VALUES ('esewa_qr_filename', '')`);

    // Blog posts
    db.run(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT UNIQUE,
        title TEXT NOT NULL,
        summary TEXT,
        content TEXT,
        featured_image TEXT,
        published_at TEXT,
        status TEXT DEFAULT 'published',
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT DEFAULT (datetime('now'))
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS slider_banners (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        subtitle TEXT,
        link TEXT,
        image TEXT,
        badge TEXT,
        metric TEXT,
        metric_label TEXT,
        order_index INTEGER DEFAULT 0,
        status TEXT DEFAULT 'published',
        created_at TEXT DEFAULT (datetime('now')),
        updated_at TEXT DEFAULT (datetime('now'))
      )
    `);
    // Keep seeded/local banner paths on modern compressed assets.
    db.run(`UPDATE slider_banners SET image = 'assets/banners/banner-1.webp' WHERE image = 'assets/banners/banner-1.png'`);
    db.run(`UPDATE slider_banners SET image = 'assets/banners/banner-2.webp' WHERE image = 'assets/banners/banner-2.png'`);
    db.run(`UPDATE slider_banners SET image = 'assets/banners/banner-3.webp' WHERE image = 'assets/banners/banner-3.png'`);
    db.run(`UPDATE slider_banners SET image = 'assets/banners/banner-4.webp' WHERE image = 'assets/banners/banner-4.png'`);
    db.run(`UPDATE slider_banners SET image = 'assets/banners/banner-5.webp' WHERE image = 'assets/banners/banner-5.png'`);

    db.get("SELECT COUNT(*) AS count FROM blog_posts", (err, row) => {
      if (err) {
        console.error("⚠️ Failed to check blog posts count:", err.message);
        return;
      }

      if (row.count > 0) {
        console.log("ℹ️ Blog posts already seeded.");
        return;
      }

      console.log("🌱 Seeding demo blog posts...");
      const now = new Date().toISOString();
      const yesterday = new Date(Date.now() - 86400000).toISOString();
      const posts = [
        {
          slug: "how-to-order-digital-plans",
          title: "How to order digital plans with SoftUpakaran",
          summary: "Quick steps to browse, select, and secure a Netflix or VPN plan for Nepal.",
          content: "Pick a category, add your desired items to the cart, then check out via WhatsApp or eSewa QR. We deliver within minutes with clear instructions.",
          featured_image: "assets/product-4.svg",
          published_at: yesterday,
          status: "published"
        },
        {
          slug: "whatsapp-support-tips",
          title: "WhatsApp support tips for instant delivery",
          summary: "Use automated replies, share receipts, and confirm your order via WhatsApp.",
          content: "After checkout, send a screenshot of your payment on WhatsApp. We reply with activation details including proofs saved under backend logs.",
          featured_image: "assets/product-3.svg",
          published_at: now,
          status: "published"
        }
      ];

      const stmt = db.prepare(`
        INSERT OR IGNORE INTO blog_posts (slug, title, summary, content, featured_image, published_at, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      posts.forEach(p => {
        const publishedAt = p.published_at || now;
        stmt.run(p.slug, p.title, p.summary, p.content, p.featured_image, publishedAt, p.status || "published", publishedAt, publishedAt);
      });
      stmt.finalize();
    });

    db.get("SELECT COUNT(*) AS count FROM slider_banners", (err, row) => {
      if (err) {
        console.error("⚠️ Failed to check slider banners count:", err.message);
        return;
      }

      if (row.count > 0) {
        console.log("📰 Slider banners already seeded.");
        return;
      }

      console.log("✨ Seeding default slider banners...");
      const now = new Date().toISOString();
      const stmt = db.prepare(`
        INSERT INTO slider_banners (title, subtitle, link, image, badge, metric, metric_label, order_index, status, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published', ?, ?)
      `);
      DEFAULT_SLIDER_BANNERS.forEach((banner) => {
        stmt.run(
          banner.title,
          banner.subtitle,
          banner.link,
          banner.image,
          banner.badge,
          banner.metric,
          banner.metric_label,
          banner.order_index || 0,
          now,
          now
        );
      });
      stmt.finalize();
    });

    // Seed demo data (categories & products) - keep your original demo store
    db.get("SELECT COUNT(*) AS count FROM categories", (err, row) => {
      if (err) {
        console.error("❌ Failed to check categories count:", err.message);
        return;
      }

      if (row.count > 0) {
        console.log("ℹ️ Categories already seeded.");
        return;
      }

      console.log("🌱 Seeding demo categories & products...");

    const categories = [
        { id: "freefire", name: "Free Fire Top Up", tag: "Top up diamonds instantly", icon: "🔥" },
        { id: "pubg", name: "PUBG UC", tag: "UC pins & UID top-up", icon: "🎮" },
        { id: "gift", name: "Gift Cards", tag: "Steam, Google Play & more", icon: "🎁" },
        { id: "subscriptions", name: "Subscriptions", tag: "Premium tools and streaming", icon: "SUB" },
        { id: "spotify", name: "Spotify", tag: "Premium plans & top-ups", icon: "SP" },
        { id: "social", name: "Social Media Boost", tag: "Coins, credits & boosts", icon: "📣" },
        { id: "gears", name: "Gaming Gears", tag: "Mice, headsets, keyboards", icon: "🖱️" }
      ];

    const products = [
        { id: "p1", name: "Free Fire 530 Diamonds", category: "freefire", price: 999, img: "assets/product-2.svg", note: "Direct UID - Instant delivery" },
        { id: "p2", name: "PUBG UC 600 (Global)", category: "pubg", price: 1300, img: "assets/product-1.svg", note: "UID top-up - 5-10 min" },
        { id: "p3", name: "Google Play Gift Card $10", category: "gift", price: 1550, img: "assets/product-5.svg", note: "US region - Digital code" },
        { id: "p4", name: "Steam Wallet Code $20", category: "gift", price: 3100, img: "assets/product-3.svg", note: "Global/US - Instant code" },
        { id: "p5", name: "Netflix Premium (1 Month)", category: "subscriptions", price: 1299, img: "assets/product-4.svg", note: "Shared profile - 4K" },
        { id: "p6", name: "Spotify Premium (3 Months)", category: "spotify", price: 1199, img: "assets/product-3.svg", note: "Activation within 1 hour" },
        { id: "p7", name: "TikTok Coins 350", category: "social", price: 650, img: "assets/product-7.svg", note: "Nepal payment - Quick delivery" },
        { id: "p8", name: "Gaming Mouse RGB (Budget)", category: "gears", price: 1499, img: "assets/product-8.svg", note: "2-year warranty - DPI 6400" }
      ];

      const catStmt = db.prepare("INSERT INTO categories (id, name, tag, icon) VALUES (?, ?, ?, ?)");
      categories.forEach((c) => catStmt.run(c.id, c.name, c.tag, c.icon));
      catStmt.finalize();

      const prodStmt = db.prepare("INSERT INTO products (id, name, category_id, price_npr, price_usd, tier, availability, note, note_ne, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
      products.forEach((p) =>
        prodStmt.run(p.id, p.name, p.category, p.price, p.price_usd || null, p.tier || null, p.availability || null, p.note, p.note_ne || "", p.img)
      );
      prodStmt.finalize();
    });
  });
}

module.exports = initDb;



