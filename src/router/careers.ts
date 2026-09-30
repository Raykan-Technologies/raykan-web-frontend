import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/careers',
        alias: '/job-application',
        component: defineComponent({
            render: () => h(RouterView)
        }),
        children: [
            {
                path: '',
                name: 'careers',
                component: () => import('@/views/careers/CareersView.vue'),
            },
        ],
    },
] as Array<RouteRecordRaw>
