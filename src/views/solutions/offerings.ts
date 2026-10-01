import type { TIcons } from '@/components/icons'
import type { TSolution } from '@/router/solutions'

/**
 * Offering cards of each solution page; `key` is the i18n key under
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
    'blockchain': [
        { key: 'cryptocurrency', icon: 'coins' },
        { key: 'dapps', icon: 'app-network' },
        { key: 'contracts', icon: 'document-signed' },
        { key: 'storage', icon: 'cloud-upload' },
        { key: 'supplyChain', icon: 'truck' },
    ],
    'enterprise-resource-planning': [
        { key: 'projectManagement', icon: 'kanban' },
        { key: 'spendAnalysis', icon: 'receipt' },
        { key: 'businessPlanning', icon: 'head-thinking' },
        { key: 'dataManagement', icon: 'database' },
        { key: 'managementAccounting', icon: 'chart-growth' },
        { key: 'financialAccounting', icon: 'calculator' },
        { key: 'finance', icon: 'banknote' },
        { key: 'manufacturing', icon: 'factory' },
        { key: 'sales', icon: 'shopping-cart' },
        { key: 'commerce', icon: 'credit-card' },
        { key: 'security', icon: 'shield-check' },
    ],
}
