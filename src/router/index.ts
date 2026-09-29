import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
import type { TLayouts } from '@/layouts'
import nProgress from 'nprogress'
import about from './about'
import blog from './blog'
import careers from './careers'
import contact from './contact'
import faq from './faq'
import kando from './kando'
import solutions from './solutions'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, from, savedPosition) => savedPosition ?? { top: 0 },
  routes: [
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
        layout: 'DefaultLayout',
        headerTransparent: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'http-error',
      meta: { layout: 'GuestLayout' },
      props: ({ query }) => ({
        code: query.code,
      }),
      component: () => import('@/views/errors/HttpError.vue')
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name) nProgress.start()

  next()
})

router.afterEach((to, from, failure) => {
  nProgress.done()

  if (isNavigationFailure(failure)) return
})

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * Route base layout
     */
    layout?: TLayouts;
    /**
     * Header overlays the page and stays transparent until scrolled (pages with a hero)
     */
    headerTransparent?: boolean;
  }
}

export default router
