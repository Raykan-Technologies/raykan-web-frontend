// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-09-30',

  // keep the Vite app's layout: sources under src/, `@/` resolves to src/
  srcDir: 'src',

  // routes come from src/router (see src/router.options.ts), not from a pages/ directory
  pages: true,

  // components are imported explicitly, like in kando-frontend
  components: false,

  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
  ],

  css: ['@/assets/css/app.scss'],

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      // appended to every page title, overridable with NUXT_PUBLIC_APP_NAME
      appName: 'Raykan',
    },
  },

  i18n: {
    restructureDir: 'src/i18n',
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [{ code: 'en', language: 'en' }],
    detectBrowserLanguage: false,
  },

  piniaPluginPersistedstate: {
    storage: 'localStorage',
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  vite: {
    build: {
      target: 'baseline-widely-available',
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        // Extra safety for array and object lookups, but may have false positives.
        noUncheckedIndexedAccess: true,
      },
    },
  },
})
