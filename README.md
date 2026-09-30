# raykan-web-frontend

Raykan website, built with [Nuxt 4](https://nuxt.com) (Vue 3, server-side rendered).

Sources live in `src/` (`srcDir`). Routes are declared in `src/router/` and handed to Nuxt by `src/router.options.ts`, layouts are `src/layouts/*.vue` (picked with route `meta.layout`), and translations are in `src/i18n/`.

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
