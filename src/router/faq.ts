import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/faq',
        component: defineComponent({
            render: () => h(RouterView)
        }),
        children: [
            {
                path: '',
                name: 'faq',
                component: () => import('@/views/faq/FaqView.vue'),
                meta: {
                    headerTransparent: true,
                    footer: 'gradient-compact',
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
