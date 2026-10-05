<script setup lang="ts">
import { computed, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { RButton, RIcon } from '@/components/elements'
import logo from '@/assets/images/kando/logo.webp'

const open = defineModel<boolean>('open', { default: false })

const { t } = useI18n()
const route = useRoute()

// in-page sections (ids on the kando sections)
const links = computed(() => [
  { hash: '#home', label: t('kando.header.menu.home') },
  { hash: '#services', label: t('kando.header.menu.services') },
  { hash: '#core', label: t('kando.header.menu.core') },
])

const close = () => {
  open.value = false
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
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
    <Transition name="kando-menu">
      <div v-if="open" class="kando-menu" @click.self="close">
        <div class="kando-menu__panel" role="dialog" aria-modal="true">
          <button type="button" class="kando-menu__close" :aria-label="t('buttons.closeMenu')" @click="close">
            <r-icon name="x-icon" :size="30" />
          </button>

          <router-link :to="{ name: 'home' }" class="kando-menu__logo">
            <img :src="logo" :alt="t('kando.logo')" width="203" height="70" />
          </router-link>

          <nav>
            <ul class="kando-menu__list">
              <li v-for="link in links" :key="link.hash" class="kando-menu__item">
                <router-link :to="{ hash: link.hash }" class="kando-menu__link" @click="close">
                  {{ link.label }}
                </router-link>
              </li>
              <li class="kando-menu__item">
                <r-button :to="{ name: 'contact' }" variant="kando-outline" class="kando-menu__cta">
                  {{ t('kando.header.meeting') }}
                </r-button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan kando popup (6031): 90vw panel sliding in from the right, orange links
.kando-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  justify-content: flex-end;
  background-color: var(--color-mobile-menu-backdrop);

  .kando-menu__panel {
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

  .kando-menu__close {
    position: absolute;
    top: 2.5%;
    right: 4.1%;
    display: flex;
    padding: 0;
    background: none;
    color: var(--color-kando-500);
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-kando-amber);
    }
  }

  .kando-menu__logo {
    display: flex;
    margin: 10px 0 0 50px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(0.9);
    }

    img {
      width: 203px;
      height: auto;
    }

    @include mobile {
      margin-left: 10px;
    }
  }

  .kando-menu__list {
    margin: 0;
    padding: 0 15%;
    list-style: none;
  }

  .kando-menu__item {
    padding: 10px 0;
  }

  .kando-menu__link {
    display: inline-flex;
    padding: 10px 20px;
    color: var(--color-kando-500);
    font-family: var(--font-kando-text);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-xs);
    text-decoration: none;

    &:hover {
      color: var(--color-kando-400);
    }
  }

  // lined up with the link labels (20px inline padding)
  .kando-menu__cta {
    margin-left: 20px;
  }
}

// entrance: slideInRight, 0.2s
.kando-menu-enter-active,
.kando-menu-leave-active {
  transition: opacity 0.2s ease;

  .kando-menu__panel {
    transition: transform 0.2s ease;
  }
}

.kando-menu-enter-from,
.kando-menu-leave-to {
  opacity: 0;

  .kando-menu__panel {
    transform: translateX(100%);
  }
}
</style>
