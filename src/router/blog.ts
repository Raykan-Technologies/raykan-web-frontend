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
                // list pages 2+ (page 1 is /blog); before :slug so "page" isn't read as a post
                path: 'page/:page([1-9]\\d*)',
                name: 'blog-page',
                component: () => import('@/views/blog/BlogView.vue'),
                props: (route) => ({ page: Number(route.params.page) }),
                beforeEnter: (to) => to.params.page === '1' ? { name: 'blog', replace: true } : true,
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
