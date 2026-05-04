// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bilalnaeem.infilp.com",
  redirects: {
    "/posts": "/#publications",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: ["https://bilalnaeem.infilp.com"],
      filter: (page) => !page.includes("404"),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
