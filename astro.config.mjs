// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// TODO: sustituye esta URL por el dominio final en producción.
// Se usa para canonical, Open Graph y sitemap.
const SITE_URL = "https://www.rubentobias.dev";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
