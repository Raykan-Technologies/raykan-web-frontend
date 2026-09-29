import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/about',
        // wp-raykan's menu links to /about-section
        alias: '/about-section',
        component: defineComponent({
            render: () => h(RouterView)
        }),
        children: [
            {
                path: '',
                name: 'about',
                component: () => import('@/views/about/AboutView.vue'),
                meta: {
                    layout: 'DefaultLayout',
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
