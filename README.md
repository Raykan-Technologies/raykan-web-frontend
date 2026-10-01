# raykan-web-frontend

Raykan website, built with [Nuxt 4](https://nuxt.com) (Vue 3, server-side rendered).

Sources live in `src/` (`srcDir`). Routes are declared in `src/router/` and handed to Nuxt by `src/router.options.ts`, layouts are `src/layouts/*.vue` (picked with route `meta.layout`), and translations are in `src/i18n/`.

## SEO

Every view sets its search and share tags with `usePageSeo()` (`src/composables/seo.ts`); site-wide defaults (title template, site name, default share image, Organization JSON-LD) live in `src/app.vue`.

1. Add `seo: { title, description, imageAlt? }` to the page's i18n file. Keep titles under ~60 characters with the ` | Raykan Technologies` suffix and descriptions at 150–160. A literal `|` must be written `{'|'}` (vue-i18n plural separator).
2. Call `usePageSeo({ title: () => t('…seo.title'), description: () => t('…seo.description') })` in the view.
3. Optional: a 1200×630 share image in `public/og/` (pass `image` + `imageAlt`), and page-specific JSON-LD via `useSchemaOrg()` (see `SolutionView.vue`).

The canonical / `og:url` base is `site.url` in `nuxt.config.ts` (`NUXT_SITE_URL`). Check the rendered JSON-LD at `/__schema-org__/debug.json` in dev, or in Nuxt DevTools.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See `nuxt.config.ts` and the [Nuxt Configuration Reference](https://nuxt.com/docs/api/nuxt-config).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Build for Production

```sh
npm run build      # Node server in .output/ (run with `node .output/server/index.mjs`)
npm run generate   # or: pre-rendered static site in .output/public
```

### Type-Check

```sh
npm run type-check
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
