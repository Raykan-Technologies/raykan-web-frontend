<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppLogo from '@/assets/AppLogo.vue'
import { RIcon } from '@/components/elements'
import AppSocialLinks from './AppSocialLinks.vue'
import { useAppMenu } from './menu'

const open = defineModel<boolean>('open', { default: false })

const { t } = useI18n()
const route = useRoute()
const { menus, isActive } = useAppMenu()
const expanded = ref<string>()

const close = () => {
  open.value = false
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

const toggle = (menu: string) => {
  expanded.value = expanded.value === menu ? undefined : menu
}

// wp-raykan popup: prevent_scroll
watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''

  if (value) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

watch(() => route.fullPath, close)

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>
<template>
  <Teleport to="body">
    <Transition name="app-mobile-menu">
      <div v-if="open" class="app-mobile-menu" @click.self="close">
        <div class="app-mobile-menu__panel" role="dialog" aria-modal="true">
          <button type="button" class="app-mobile-menu__close" :aria-label="t('buttons.closeMenu')"
            @click="close">
            <r-icon name="x-icon" :size="30" />
          </button>

          <router-link :to="{ name: 'home' }" class="app-mobile-menu__logo"
            aria-label="Raykan Technologies">
            <AppLogo :width="160" :height="40" />
          </router-link>

          <nav>
            <ul class="app-mobile-menu__list">
              <li v-for="item in menus" :key="item.route" class="app-mobile-menu__item">
                <template v-if="item.child">
                  <button type="button" class="app-mobile-menu__toggle"
                    :class="{ 'app-mobile-menu__toggle--expanded': expanded === item.route }"
                    :aria-expanded="expanded === item.route" @click="toggle(item.route)">
                    {{ item.menu }}
                    <r-icon name="chevron-down" :size="16" class="app-mobile-menu__arrow" />
                  </button>
                  <ul v-show="expanded === item.route" class="app-mobile-menu__sublist">
                    <li>
                      <router-link :to="{ name: item.route }" class="app-mobile-menu__sublink"
                        :class="{ 'app-mobile-menu__sublink--active': route.name === item.route }">
                        {{ t('menus.allSolutions') }}
                      </router-link>
                    </li>
                    <li v-for="child in item.child" :key="child.route">
                      <router-link :to="{ name: child.route }" class="app-mobile-menu__sublink"
                        :class="{ 'app-mobile-menu__sublink--active': isActive(child) }">
                        {{ child.menu }}
                      </router-link>
                    </li>
                  </ul>
                </template>
                <router-link v-else :to="{ name: item.route }" class="app-mobile-menu__link"
                  :class="{ 'app-mobile-menu__link--active': isActive(item) }">
                  {{ item.menu }}
                </router-link>
              </li>
              <li class="app-mobile-menu__item">
                <router-link :to="{ name: 'careers' }" class="app-mobile-menu__cta">
                  {{ t('buttons.joinOurTeam') }}
                </router-link>
              </li>
            </ul>
          </nav>

          <AppSocialLinks :size="30" class="app-mobile-menu__socials" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan "mobile header" popup: 90vw panel sliding in from the right
.app-mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  justify-content: flex-end;
  background-color: var(--color-mobile-menu-backdrop);

  .app-mobile-menu__panel {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90vw;
    height: 100%;
    padding: 10px 10px 40px;
    overflow-y: auto;
    background-color: var(--color-mobile-menu-bg);
  }

  .app-mobile-menu__close {
    position: absolute;
    top: 2.5%;
    right: 4.1%;
    display: flex;
    padding: 0;
    background: none;
    color: var(--color-primary);

    &:hover {
      color: var(--color-blue-500);
    }
  }

  .app-mobile-menu__logo {
    display: flex;
    margin: 10px 0 0 50px;
    color: var(--color-primary);

    @include mobile {
      margin-left: 10px;
    }
  }

  .app-mobile-menu__list {
    margin: 0;
    padding: 0 15%;
    list-style: none;
  }

  .app-mobile-menu__item {
    padding: 10px 0;
  }

  .app-mobile-menu__link,
  .app-mobile-menu__toggle {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    background: none;
    color: var(--color-primary);
    font-family: var(--font-secondary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-xs);
    text-decoration: none;

    &:hover,
    &.app-mobile-menu__link--active {
      color: var(--color-primary);
    }
  }

  .app-mobile-menu__toggle {
    gap: 10px;
    border-radius: 0;

    .app-mobile-menu__arrow {
      transition: transform 0.2s ease;
    }

    &.app-mobile-menu__toggle--expanded .app-mobile-menu__arrow {
      color: var(--color-accent);
      transform: rotate(180deg);
    }
  }

  .app-mobile-menu__sublist {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 20px 0 0 40px;
    list-style: none;
  }

  .app-mobile-menu__sublink {
    color: var(--color-mobile-menu-submenu);
    font-family: var(--font-secondary);
    font-size: var(--font-size-2xs);
    line-height: var(--line-height-xs);
    text-decoration: none;

    &:hover,
    &.app-mobile-menu__sublink--active {
      color: var(--color-primary);
    }
  }

  .app-mobile-menu__cta {
    display: inline-block;
    padding: 12px 24px;
    border-radius: var(--radius);
    background-color: var(--color-accent);
    color: var(--color-white);
    font: var(--font-kit-accent);
    text-decoration: none;

    &:hover {
      color: var(--color-white);
    }
  }

  .app-mobile-menu__socials {
    justify-content: center;
  }
}

// entrance: slideInRight, 0.2s
.app-mobile-menu-enter-active,
.app-mobile-menu-leave-active {
  transition: opacity 0.2s ease;

  .app-mobile-menu__panel {
    transition: transform 0.2s ease;
  }
}

.app-mobile-menu-enter-from,
.app-mobile-menu-leave-to {
  opacity: 0;

  .app-mobile-menu__panel {
    transform: translateX(100%);
  }
}
</style>
