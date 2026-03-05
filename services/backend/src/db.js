const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

// Ensure data folder exists (works inside Docker when mounted)
const dataFolder = path.join(__dirname, "..", "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder, { recursive: true });
}

// Use DATABASE_FILE env when provided, otherwise use a file inside the data folder
const dbPath = process.env.DATABASE_FILE || path.join(dataFolder, "softupakaran.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Failed to connect to SQLite:", err.message);
  } else {
    console.log("✅ Connected to SQLite:", dbPath);
  }
});

module.exports = db;
