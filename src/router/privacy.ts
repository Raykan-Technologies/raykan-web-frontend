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
    {
        path: '/kando-privacy-policy',
        children: [
            {
                path: '',
                name: 'kando-privacy',
                component: () => import('@/views/privacy/PrivacyView.vue'),
                props: { source: 'kandoPrivacy' },
                meta: {
                    headerTransparent: true,
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
