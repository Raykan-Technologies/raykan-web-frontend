<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppLogo from '@/assets/AppLogo.vue'
import { SOLUTIONS } from '@/router/solutions'
import AppSocialLinks from './AppSocialLinks.vue'

const { t } = useI18n()
const route = useRoute()

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
  <div class="app-footer">
    <div class="app-footer__row">
      <router-link :to="{ name: 'home' }" class="app-footer__logo" :aria-label="t('common.companyName')">
        <AppLogo />
      </router-link>
      <AppSocialLinks :size="35" class="app-footer__socials" />
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
      <p class="app-footer__copyright">{{ t('common.copyright') }}</p>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan footer rows: logo + socials, then footer menu + copyright
.app-footer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  // wp-raykan: the rows sit ~82px in from each side of the 1180px column
  max-width: 1016px;
  margin-inline: auto;
  color: var(--color-white);
  text-align: left;

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
      width: 200px;
      height: auto;
    }
  }

  // wp-raykan icons sit in 70px boxes, 20px apart
  .app-footer__socials {
    gap: 55px;

    @include mobile {
      gap: 35px;
    }
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

  .app-footer__copyright {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: var(--font-size-2xs);
    font-weight: var(--font-weight-light);
    line-height: var(--line-height-2xs);
  }
}
</style>
