import type { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/about',
        // wp-raykan's menu links to /about-section
        alias: '/about-section',
        // no component: groups the child routes, which render straight into NuxtPage
        children: [
            {
                path: '',
                name: 'about',
                component: () => import('@/views/about/AboutView.vue'),
                meta: {
                    headerTransparent: true,
                    footer: 'solid',
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
