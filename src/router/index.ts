import type { RouteRecordRaw } from 'vue-router'
import type { TFooterVariant } from '@/components/types'
import about from './about'
import blog from './blog'
import contact from './contact'
import faq from './faq'
import kando from './kando'
// privacy policy hidden for now, uncomment with ...privacy below to bring it back
// import privacy from './privacy'
import solutions from './solutions'

/**
 * Every route of the site, handed to Nuxt by src/router.options.ts.
 * `meta.layout` names a file in src/layouts; routes without one use `default`.
 */
export default [
  ...about,
  ...solutions,
  ...blog,
  ...faq,
  ...contact,
  ...kando,
  // ...privacy,
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue'),
    meta: {
      headerTransparent: true,
      footer: 'transparent',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'http-error',
    meta: { layout: 'guest' },
    props: ({ query }) => ({
      code: query.code,
    }),
    component: () => import('@/views/errors/HttpError.vue')
  },
] as Array<RouteRecordRaw>

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * Header overlays the page and stays transparent until scrolled (pages with a hero)
     */
    headerTransparent?: boolean;
    /**
     * Footer look; `transparent` sits over the page's last section, which must leave room for it
     */
    footer?: TFooterVariant;
  }
}
