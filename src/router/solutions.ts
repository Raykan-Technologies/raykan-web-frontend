import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';

/**
 * Solution slugs, in wp-raykan menu order. Each one is also its route name and path
 * (kept at the root like the WordPress site, e.g. `/software-development`).
 */
export const SOLUTIONS = [
    'software-development',
    'data-science',
    'digital-marketing',
    'blockchain',
    'enterprise-resource-planning',
    'it-managed-service',
] as const

export type TSolution = typeof SOLUTIONS[number]

export default [
    {
        path: '/solutions',
        component: defineComponent({
            render: () => h(RouterView)
        }),
        children: [
            {
                path: '',
                name: 'solutions',
                component: () => import('@/views/solutions/SolutionsView.vue'),
            },
        ],
    },
    ...SOLUTIONS.map((solution) => ({
        path: `/${solution}`,
        name: solution,
        component: () => import('@/views/solutions/SolutionView.vue'),
        props: { solution },
    })),
] as Array<RouteRecordRaw>
