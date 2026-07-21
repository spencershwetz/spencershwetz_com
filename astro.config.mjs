import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://spencershwetz.com",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/blog/") && !page.includes("/work/") && !page.includes("/projects/"),
    }),
    tailwind(),
  ],
});
