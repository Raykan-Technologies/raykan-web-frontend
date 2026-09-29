<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppLogo from '@/assets/AppLogo.vue'
import { RButton, RIcon } from '@/components/elements'
import AppMobileMenu from './AppMobileMenu.vue'
import { useAppMenu } from './menu'

defineProps<{
  /**
   * Overlay the page and stay transparent until scrolled (pages with a hero)
   */
  transparent?: boolean;
}>()

// wp-raykan sticky_effects_offset
const STICKY_OFFSET = 100

const { t } = useI18n()
const { menus, isActive } = useAppMenu()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > STICKY_OFFSET
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
<template>
  <header class="app-header"
    :class="{ 'app-header--transparent': transparent, 'app-header--scrolled': scrolled }">
    <div class="app-header__container">
      <router-link :to="{ name: 'home' }" class="app-header__logo" :aria-label="t('common.companyName')">
        <AppLogo />
      </router-link>

      <nav class="app-header__nav">
        <ul class="app-header__menu">
          <li v-for="item in menus" :key="item.route" class="app-header__item">
            <router-link :to="{ name: item.route }" class="app-header__link"
              :class="{ 'app-header__link--active': isActive(item) }">
              {{ item.menu }}
              <r-icon v-if="item.child" name="chevron-down" :size="14" class="app-header__arrow" />
            </router-link>
            <ul v-if="item.child" class="app-header__submenu">
              <li v-for="child in item.child" :key="child.route">
                <router-link :to="{ name: child.route }" class="app-header__sublink"
                  :class="{ 'app-header__sublink--active': isActive(child) }">
                  {{ child.menu }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="app-header__actions">
        <r-button :to="{ name: 'careers' }">{{ t('buttons.joinOurTeam') }}</r-button>
      </div>

      <button type="button" class="app-header__toggle" :aria-label="t('buttons.openMenu')"
        :aria-expanded="mobileMenuOpen" @click="mobileMenuOpen = true">
        <r-icon name="menu" :size="30" />
      </button>
    </div>
  </header>
  <AppMobileMenu v-model:open="mobileMenuOpen" />
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--color-primary);
  transition: var(--transition-header-bg);

  &.app-header--transparent {
    background-color: transparent;
  }

  &.app-header--scrolled {
    background-color: var(--color-header-sticky);

    @include tablet {
      background-color: var(--color-header-sticky-mobile);
    }
  }

  .app-header__container {
    display: flex;
    align-items: center;
    gap: 20px;
    min-height: var(--header-height);
    // wp-raykan: 125px at full width, eased down so the menu fits on one row
    padding: 0 clamp(40px, 8.7vw, 125px);
    transition: var(--transition-header-height);

    @include nav-collapsed {
      justify-content: space-between;
    }

    @include tablet {
      padding: 0 24px;
    }

    @include mobile {
      padding: 0 12px;
    }
  }

  &.app-header--scrolled .app-header__container {
    min-height: var(--header-height-sticky);
  }

  .app-header__logo {
    display: flex;
    // 250px (wp-raykan) from 1600px wide, scaled down so the menu keeps fitting
    flex: 0 0 clamp(180px, 15.6vw, 250px);
    color: var(--color-white);

    svg {
      display: block;
      width: 100%;
      max-width: 250px;
      height: auto;
      transition: var(--transition-logo);
    }

    @include nav-collapsed {
      flex-basis: 200px;
    }
  }

  &.app-header--scrolled .app-header__logo svg {
    max-width: 180px;
  }

  // Elementor nav menu widget
  .app-header__nav {
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    margin-top: 10px;

    @include nav-collapsed {
      display: none;
    }
  }

  .app-header__menu {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .app-header__item {
    position: relative;
    margin: 0 5px;

    &:hover,
    &:focus-within {
      .app-header__submenu {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .app-header__link {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px clamp(10px, 1.2vw, 20px);
    color: var(--color-text);
    font: var(--font-kit-primary);
    text-decoration: none;
    white-space: nowrap;
    transition: 0.4s;

    // underline pointer, fade animation
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: var(--color-accent);
      opacity: 0;
      transition: 0.3s;
    }

    &:hover,
    &:focus-visible,
    &.app-header__link--active {
      color: var(--color-accent);

      &::after {
        opacity: 1;
      }
    }
  }

  .app-header__submenu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 12em;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: var(--color-dropdown-bg);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
  }

  .app-header__sublink {
    display: block;
    padding: 13px 20px;
    color: var(--color-dropdown-text);
    font: var(--font-kit-accent);
    font-size: 0.85em;
    line-height: 1.3;
    text-decoration: none;
    transition: 0.4s;

    &:hover,
    &:focus-visible,
    &.app-header__sublink--active {
      background-color: var(--color-dropdown-bg-hover);
      color: var(--color-dropdown-text-hover);
    }
  }

  // Elementor button widget
  .app-header__actions {
    display: flex;
    flex: 0 0 auto;
    justify-content: flex-end;

    @include nav-collapsed {
      display: none;
    }
  }


  .app-header__toggle {
    display: none;
    padding: 0;
    background: none;
    color: var(--color-white);

    &:hover {
      color: var(--color-accent);
    }

    @include nav-collapsed {
      display: flex;
    }
  }
}
</style>
