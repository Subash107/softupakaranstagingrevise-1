import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const legacyAssetDir = path.resolve(projectRoot, "../frontend/assets");
const publicAssetDir = path.resolve(projectRoot, "public/assets");
const heroOutputDir = path.resolve(publicAssetDir, "hero");
const widths = [640, 1024, 1440];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyLegacyAssets() {
  await ensureDir(path.dirname(publicAssetDir));
  await fs.rm(publicAssetDir, { recursive: true, force: true });
  await fs.cp(legacyAssetDir, publicAssetDir, { recursive: true });
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (_) {
    return false;
  }
}

async function createResponsiveAssetsForBanner(index) {
  const pngInput = path.resolve(publicAssetDir, `banners/banner-${index}.png`);
  const webpInput = path.resolve(publicAssetDir, `banners/banner-${index}.webp`);
  const input = (await fileExists(pngInput)) ? pngInput : webpInput;
  if (!(await fileExists(input))) return;

  for (const width of widths) {
    const base = path.resolve(heroOutputDir, `banner-${index}-${width}`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 72, effort: 5 })
      .toFile(`${base}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 48, effort: 4 })
      .toFile(`${base}.avif`);
  }
}

async function main() {
  await copyLegacyAssets();
  await ensureDir(heroOutputDir);
  for (let i = 1; i <= 5; i += 1) {
    // Banners 1..5 are used by home hero.
    await createResponsiveAssetsForBanner(i);
  }
}

main().catch((err) => {
  console.error("prepare-assets failed:", err);
  process.exit(1);
});
