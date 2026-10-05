import { defineComponent, h } from 'vue';
import { RouterView, type RouteRecordRaw } from 'vue-router';
import { SOLUTIONS, type TSolution } from '@/constants'

// slugs live in constants.ts so server routes (sitemap) can use them without the route tree
export { SOLUTIONS, type TSolution }

/**
 * Solution pages that open with a hero (views/solutions/partials/HeroSection.vue);
 * the header overlays it
 */
export const SOLUTION_HEROES = [
    'software-development',
    'data-science',
    'digital-marketing',
    'blockchain',
    'enterprise-resource-planning',
    'it-managed-service',
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
