import type { RouterConfig } from '@nuxt/schema'
import routes from './router'

// the site's routes are declared in src/router instead of being generated from a pages/ directory
export default {
  routes: () => routes,
} satisfies RouterConfig
