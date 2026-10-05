import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/kando',
        component: defineComponent({
            render: () => h(RouterView)
        }),
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
