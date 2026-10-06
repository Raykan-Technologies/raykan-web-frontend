import type { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/contact-us',
        // no component: groups the child routes, which render straight into NuxtPage
        children: [
            {
                path: '',
                name: 'contact',
                component: () => import('@/views/contact/ContactView.vue'),
            },
        ],
    },
] as Array<RouteRecordRaw>
