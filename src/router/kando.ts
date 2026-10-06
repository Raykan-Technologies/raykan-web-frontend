import type { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/kando',
        // no component: groups the child routes, which render straight into NuxtPage
        children: [
            {
                path: '',
                name: 'kando',
                component: () => import('@/views/kando/KandoView.vue'),
                // standalone product page with its own header and footer (wp-raykan)
                meta: {
                    layout: 'guest',
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
