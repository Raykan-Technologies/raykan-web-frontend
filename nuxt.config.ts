// https://nuxt.com/docs/api/configuration/nuxt-config
import { CONTACT_EMAIL } from './src/constants'

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
    'nuxt-schema-org',
    '@nuxt/scripts',
  ],

  css: ['@/assets/css/app.scss'],

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [{ name: 'theme-color', content: '#0CBB97' }],
    },
  },

  // base for canonical, og:url and JSON-LD urls, overridable with NUXT_SITE_URL
  // name and description come from i18n (nuxtSiteConfig.*)
  site: {
    url: 'https://raykan.co',
    defaultLocale: 'en',
  },

  i18n: {
    restructureDir: 'src/i18n',
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [{ code: 'en', language: 'en' }],
    detectBrowserLanguage: false,
  },

  // server-only SMTP and reCAPTCHA secrets plus the public site key, set at runtime (see .env.example)
  runtimeConfig: {
    mail: {
      host: '',
      port: 587,
      user: '',
      pass: '',
      from: '',
      to: CONTACT_EMAIL,
    },
    // reCAPTCHA v3 secret and lowest accepted score (0 bot – 1 human), NUXT_RECAPTCHA_*
    recaptcha: {
      secretKey: '',
      minScore: 0.5,
    },
    public: {
      // read by Nuxt Scripts' useScriptGoogleRecaptcha, NUXT_PUBLIC_SCRIPTS_GOOGLE_RECAPTCHA_SITE_KEY
      scripts: {
        googleRecaptcha: { siteKey: '' },
      },
    },
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