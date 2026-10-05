import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/blog',
        component: defineComponent({
            render: () => h(RouterView)
        }),
        children: [
            {
                path: '',
                name: 'blog',
                component: () => import('@/views/blog/BlogView.vue'),
                meta: {
                    headerTransparent: true,
                },
            },
        ],
    },
] as Array<RouteRecordRaw>
