<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppLogo from '@/assets/AppLogo.vue'
import { RSection } from '@/components/elements'
import { SOLUTIONS } from '@/router/solutions'
import AppSocialLinks from './AppSocialLinks.vue'

defineProps<{
  /**
   * No background, so the footer sits over the page's last section (route meta `footerTransparent`)
   */
  transparent?: boolean;
}>()

const { t } = useI18n()
const route = useRoute()
const footer = useTemplateRef<{ $el: HTMLElement }>('footer')

// publishes the footer's rendered height as --app-footer-height, so a page's last section can
// leave room for it when the footer is laid over it
const footerObserver = new ResizeObserver(([entry]) => {
  const height = entry?.borderBoxSize[0]?.blockSize ?? 0
  document.documentElement.style.setProperty('--app-footer-height', `${Math.round(height)}px`)
})

onMounted(() => {
  if (footer.value?.$el) footerObserver.observe(footer.value.$el)
})

onBeforeUnmount(() => {
  footerObserver.disconnect()
})

// current year from the visitor's clock
const year = new Date().getFullYear()

// wp-raykan "footer-menu"
const menus = computed(() => [
  { menu: t('menus.home'), route: 'home' },
  { menu: t('menus.solutions'), route: 'solutions' },
  { menu: t('menus.about'), route: 'about' },
  { menu: t('menus.blog'), route: 'blog' },
  { menu: t('menus.faq'), route: 'faq' },
  { menu: t('menus.contact'), route: 'contact' },
])

// solution pages count towards "Solutions"
const isActive = (name: string) => route.name === name
  || (name === 'solutions' && SOLUTIONS.some((solution) => solution === route.name))
</script>
<template>
  <!-- site-wide footer, rendered once by DefaultLayout under every page -->
  <r-section ref="footer" class="app-footer" :class="{ 'app-footer--transparent': transparent }"
    tag="footer" :theme="transparent ? 'transparent' : 'primary'">
    <div class="app-footer__row">
      <router-link :to="{ name: 'home' }" class="app-footer__logo" :aria-label="t('common.companyName')">
        <AppLogo />
      </router-link>
      <!-- white icons over the home page photo, cyan on the solid footer -->
      <AppSocialLinks :size="28" effect="highlight" :tone="transparent ? 'light' : 'accent'"
        class="app-footer__socials" />
    </div>

    <div class="app-footer__row">
      <nav :aria-label="t('common.footerMenu')">
        <ul class="app-footer__menu">
          <li v-for="item in menus" :key="item.route">
            <router-link :to="{ name: item.route }" class="app-footer__link"
              :class="{ 'app-footer__link--active': isActive(item.route) }">
              {{ item.menu }}
            </router-link>
          </li>
        </ul>
      </nav>
      <p class="app-footer__copyright">{{ t('common.copyright', { year }) }}</p>
    </div>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan footer rows: logo + socials, then footer menu + copyright
.app-footer {
  // a small section: 30% of the usual top/bottom padding
  padding-block: calc(var(--section-padding-y) * 0.3);
  color: var(--color-white);
  text-align: left;

  > .r-section__container {
    gap: 6px;
  }

  // laid over the bottom of the page's last section, which reserves --app-footer-height for it
  &.app-footer--transparent {
    position: relative;
    z-index: 1;
  }

  .app-footer__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @include mobile {
      flex-direction: column;
      text-align: center;
    }
  }

  .app-footer__logo {
    display: flex;
    color: var(--color-white);

    svg {
      width: 140px;
      height: auto;
    }
  }

  .app-footer__socials {
    gap: 28px;

  }

  .app-footer__menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // links have 15px side padding; pull the row out so the first label lines up with the logo
    margin: 0 -15px;
    padding: 0;
    list-style: none;
  }

  .app-footer__link {
    display: block;
    padding: 3px 15px;
    color: var(--color-white);
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-xs);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover,
    &.app-footer__link--active {
      color: var(--color-accent);
    }
  }

  // same size as the footer links
  .app-footer__copyright {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-light);
    line-height: var(--line-height-xs);
  }
}
</style>
