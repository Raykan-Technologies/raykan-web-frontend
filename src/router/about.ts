import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/about',
        component: defineComponent({
            render: () => h(RouterView)
        }),
        children: [
            {
                path: '',
                name: 'about',
                component: () => import('@/views/AboutView.vue'),
                meta: {
                    layout: 'DefaultLayout',
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
