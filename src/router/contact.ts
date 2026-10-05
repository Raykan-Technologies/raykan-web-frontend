import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/contact-us',
        component: defineComponent({
            render: () => h(RouterView)
        }),
        children: [
            {
                path: '',
                name: 'contact',
                component: () => import('@/views/contact/ContactView.vue'),
                meta: {
                    headerTransparent: true,
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
