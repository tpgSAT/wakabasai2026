# AGENTS.md

## Project Overview

This is a static event website built with **Astro**. It uses no frontend frameworks — only Astro components, HTML, CSS, and TypeScript/JavaScript where needed.

## Tech Stack

- **Framework:** Astro 5
- **Type:** Static site
- **Dependencies:** `@astrojs/partytown`, `@astrojs/sitemap`, `astro-seo`

## Project Structure

```
src/
  assets/       # Static assets (images, fonts, etc.)
  components/   # Reusable Astro components
  layouts/      # Page layout wrappers
  lib/          # Utility functions and helpers
  pages/        # File-based routing (Astro pages)
public/         # Files served as-is (favicon, og images, etc.)
```

Do **not** change or restructure these folders.

## Rules for AI Agents

### ❌ Do NOT

- Introduce React, Vue, Svelte, or any other frontend framework
- Add external UI libraries (e.g., Tailwind UI, shadcn, Chakra, MUI)
- Change the folder structure under `src/` or `public/`
- Rely on outdated training knowledge for Astro APIs or related libraries

### ✅ Always

- Use **Context7** to retrieve up-to-date documentation for Astro and any related libraries before implementing
- Prefer official documentation retrieved through Context7 over assumptions based on training data
- Write plain `.astro` components for UI work
- Keep changes minimal and scoped to the task
