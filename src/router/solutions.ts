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

/**
 * Solution pages that open with a hero (views/solutions/partials/HeroSection.vue);
 * the header overlays it
 */
export const SOLUTION_HEROES = [
    'software-development',
] as const satisfies ReadonlyArray<TSolution>

export type TSolutionHero = typeof SOLUTION_HEROES[number]

export const hasHero = (solution: TSolution): solution is TSolutionHero =>
    (SOLUTION_HEROES as ReadonlyArray<TSolution>).includes(solution)

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
        meta: {
            headerTransparent: hasHero(solution),
        },
    })),
] as Array<RouteRecordRaw>
