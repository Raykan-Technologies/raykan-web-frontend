import type { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/faq',
        // no component: groups the child routes, which render straight into NuxtPage
        children: [
            {
                path: '',
                name: 'faq',
                component: () => import('@/views/faq/FaqView.vue'),
                meta: {
                    headerTransparent: true,
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
