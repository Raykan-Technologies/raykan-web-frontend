import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
import type { TLayouts } from '@/layouts'
import nProgress from 'nprogress'
import about from './about'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...about,
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        layout: 'DefaultLayout',
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
  }
}

export default router
