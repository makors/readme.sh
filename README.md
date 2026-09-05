# readme.sh

A place to think in writing.

Built with Astro. Posts live in `src/content/posts/*.mdx`.

```sh
bun install
bun dev      # http://localhost:4321
bun run build  # static output in dist/
```

## Writing a post

Create `src/content/posts/<slug>.mdx` with this frontmatter:

```yaml
---
title: "Post title"
description: "One or two sentences shown in the list and in link previews."
date: 2026-09-04
draft: false
---
```

Set `draft: true` to keep a post out of the list, the RSS feed, and the sitemap.

## Fonts

Display type is Kalice by Claude Type, self-hosted from `public/fonts/` (Regular and
Italic as woff2). Body type is Inter from npm. The `@font-face` rules are at the top
of `src/styles/global.css`. Kalice is a licensed font: keep the license terms in mind
before publishing, and do not commit weights you do not use.
