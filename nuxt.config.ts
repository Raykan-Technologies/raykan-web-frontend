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
    'nuxt-security',
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
  },

  // registered only, loaded by the contact form; site key from NUXT_PUBLIC_SCRIPTS_GOOGLE_RECAPTCHA_SITE_KEY
  scripts: {
    registry: {
      googleRecaptcha: { siteKey: '' },
    },
  },

  // security headers and request checks (nuxt-security), tuned for reCAPTCHA and Vercel
  security: {
    headers: {
      // `credentialless` would block reCAPTCHA's iframe; cross-origin isolation isn't needed
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'base-uri': ["'none'"],
        'object-src': ["'none'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        // nonce + strict-dynamic lets Nuxt's and reCAPTCHA's scripts run; https/unsafe-inline are old-browser fallbacks
        'script-src': ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'", 'https:', "'unsafe-inline'"],
        'script-src-attr': ["'none'"],
        // Vue :style bindings write inline styles
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:'],
        'font-src': ["'self'", 'data:'],
        'connect-src': ["'self'", 'https://www.google.com/recaptcha/'],
        'frame-src': ['https://www.google.com/recaptcha/', 'https://recaptcha.google.com/recaptcha/'],
        // localhost dev runs on http
        'upgrade-insecure-requests': process.env.NODE_ENV === 'production',
      },
      // only raykan.co itself, subdomains may not all be on https yet
      strictTransportSecurity: { maxAge: 31536000, includeSubdomains: false },
      xFrameOptions: 'DENY',
      referrerPolicy: 'strict-origin-when-cross-origin',
    },
    // in-memory counters don't work across Vercel functions; use a Vercel Firewall rule instead
    rateLimiter: false,
    // its esbuild console drop is ignored by Vite's oxc build (and the app has no console calls)
    removeLoggers: false,
  },

  routeRules: {
    // API answers are per-request (form submits), never stored by browsers or the CDN
    '/api/**': {
      headers: { 'cache-control': 'no-store' },
    },
    // only change on deploy, which purges the CDN; browsers recheck hourly
    '/robots.txt': {
      headers: { 'cache-control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400' },
    },
    '/sitemap.xml': {
      headers: { 'cache-control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400' },
    },
    // messages may contain < or > (e.g. "budget < $5k"); the email escapes them instead
    '/api/contact': {
      security: {
        xssValidator: false,
        requestSizeLimiter: { maxRequestSizeInBytes: 16_000, maxUploadFileRequestInBytes: 16_000 },
        allowedMethodsRestricter: { methods: ['POST'] },
      },
    },
    // the email logo is loaded by mail clients on other domains
    '/email/**': {
      security: { headers: { crossOriginResourcePolicy: 'cross-origin' } },
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