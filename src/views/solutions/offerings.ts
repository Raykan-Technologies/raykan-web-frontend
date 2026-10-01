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
}
