import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { SOLUTIONS } from '@/router/solutions'
import type { IAppMenu } from './types'

/**
 * Main site menu (wp-raykan "main-menu"), shared by the desktop header and the mobile menu
 */
export const useAppMenu = () => {
  const { t } = useI18n()
  const route = useRoute()

  const menus = computed<Array<IAppMenu>>(() => [
    { menu: t('menus.home'), route: 'home' },
    {
      menu: t('menus.solutions'),
      route: 'solutions',
      child: SOLUTIONS.map((solution) => ({
        menu: t(`solutions.items.${solution}`),
        route: solution,
      })),
    },
    { menu: t('menus.about'), route: 'about' },
    { menu: t('menus.blog'), route: 'blog' },
    { menu: t('menus.faq'), route: 'faq' },
    { menu: t('menus.contact'), route: 'contact' },
    { menu: t('menus.kando'), route: 'kando' },
  ])

  // solution pages live at the root, so a parent counts as active when any child is
  const isActive = (item: IAppMenu): boolean =>
    route.name === item.route || !!item.child?.some(isActive)

  return { menus, isActive }
}
