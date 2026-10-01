import type { TIcons } from '@/components/icons'
import type { TSolution } from '@/router/solutions'

/**
 * Icon boxes of each solution's offerings section; `key` is the i18n key under
 * `solutions.pages.<solution>.offerings.items`
 */
export const SOLUTION_OFFERINGS: Partial<Record<TSolution, Array<{ key: string; icon: TIcons }>>> = {
    'software-development': [
        { key: 'web', icon: 'globe' },
        { key: 'mobile', icon: 'smartphone' },
        { key: 'desktop', icon: 'laptop-code' },
        { key: 'game', icon: 'gamepad' },
    ],
    'data-science': [
        { key: 'mining', icon: 'chart-growth' },
        { key: 'intelligence', icon: 'head-thinking' },
        { key: 'engineering', icon: 'database' },
    ],
    'digital-marketing': [
        { key: 'seo', icon: 'search-chart' },
        { key: 'ppc', icon: 'cursor-click' },
        { key: 'social', icon: 'share-nodes' },
        { key: 'content', icon: 'pen-line' },
        { key: 'email', icon: 'envelope' },
        { key: 'mobile', icon: 'smartphone' },
        { key: 'analysis', icon: 'chart-pie' },
        { key: 'affiliate', icon: 'link' },
    ],
}
