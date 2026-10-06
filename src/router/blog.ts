import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router';
import { BLOG_PAGE_COUNT } from '@/views/blog/posts';

// list pages share one NuxtPage key, so paging only swaps the posts instead of rebuilding the view;
// out-of-range pages (404) keep their own
const listKey = (route: RouteLocationNormalizedLoaded) =>
    Number(route.params.page ?? 1) <= BLOG_PAGE_COUNT ? 'blog-list' : route.path

export default [
    {
        path: '/blog',
        // no component: groups the child routes, which render straight into NuxtPage
        children: [
            {
                path: '',
                name: 'blog',
                component: () => import('@/views/blog/BlogView.vue'),
                meta: {
                    headerTransparent: true,
                    key: listKey,
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
                    key: listKey,
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
