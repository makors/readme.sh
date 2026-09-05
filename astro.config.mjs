import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import rehypeFigure from "./src/lib/rehype-figure.mjs";

export default defineConfig({
  site: "https://readme.sh",
  integrations: [mdx(), sitemap()],
  redirects: {
    "/archive": "/",
  },
  markdown: {
    // The unified processor so remark/rehype plugins run for Markdown and MDX.
    processor: unified({ rehypePlugins: [rehypeFigure] }),
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    },
  },
});
