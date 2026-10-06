import type { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/privacy-policy',
        // no component: groups the child routes, which render straight into NuxtPage
        children: [
            {
                path: '',
                name: 'privacy',
                component: () => import('@/views/privacy/PrivacyView.vue'),
                meta: {
                    headerTransparent: true,
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
