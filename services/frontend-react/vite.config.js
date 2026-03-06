import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function resolveBasePath() {
  const explicit = process.env.VITE_BASE_PATH;
  if (explicit) return explicit;
  const repoName = process.env.GITHUB_REPOSITORY
    ? process.env.GITHUB_REPOSITORY.split("/")[1]
    : "";
  if (process.env.NODE_ENV === "production" && repoName) {
    return `/${repoName}/`;
  }
  return "/";
}

export default defineConfig({
  plugins: [react()],
  base: resolveBasePath(),
});
