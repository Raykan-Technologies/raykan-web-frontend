import type { RouteRecordRaw } from 'vue-router'
import about from './about'
import blog from './blog'
import careers from './careers'
import contact from './contact'
import faq from './faq'
import kando from './kando'
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
  ...careers,
  ...kando,
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/HomeView.vue'),
    meta: {
      headerTransparent: true,
      footerTransparent: true,
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
     * Footer has no background and sits over the page's last section (it must leave room for it)
     */
    footerTransparent?: boolean;
  }
}
