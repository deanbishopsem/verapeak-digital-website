# Verapeak Digital — Marketing Site

The marketing website for **Verapeak Digital**, a data-driven digital marketing agency.
Built with [Astro](https://astro.build/) for fast, static, SEO-friendly pages.

## Pages

| Route       | Description                                              |
| ----------- | ------------------------------------------------------- |
| `/`         | Home — hero, stats, services overview, process, CTA     |
| `/services` | Full service breakdown, engagement models               |
| `/about`    | Story, values, and team                                 |
| `/contact`  | Contact form and details                                |

## Tech stack

- **Astro 4** — static site generation
- Plain CSS with a custom design system (brand tokens in `src/styles/global.css`)
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## Brand

Palette is derived from the Verapeak Digital logo:

| Token       | Value     | Use                |
| ----------- | --------- | ------------------ |
| `--ink`     | `#0F2A2E` | Headings / dark UI |
| `--teal`    | `#0F766E` | Primary brand      |
| `--mint`    | `#2DD4BF` | Accent             |
| `--mint-light` | `#5EEAD4` | Light accent    |

Logo assets live in `public/assets/`.

## Getting started

```sh
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

## Scripts

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reloading      |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Project structure

```text
public/assets/        Logo and static assets
src/
  components/         Header, Footer
  layouts/Base.astro  Shared page shell (head, header, footer)
  pages/              One file per route
  styles/global.css   Design tokens and base styles
```
