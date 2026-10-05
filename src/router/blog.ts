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
            {
                // one post (src/views/blog/posts.ts); unknown slugs show the 404 page
                path: ':slug',
                name: 'blog-post',
                component: () => import('@/views/blog/BlogPostView.vue'),
                props: true,
            },
        ],
    },
] as Array<RouteRecordRaw>
