<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RButton, RIcon } from '@/components/elements'
import MobileMenu from './MobileMenu.vue'

// wp-raykan sticky_effects_offset
const STICKY_OFFSET = 100

const { t } = useI18n()
const scrolled = ref(false)
const menuOpen = ref(false)

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
  <!-- wp-raykan kando desktop_menu (f4839bd) and mobile_menu (f6ea8a2): no logo, just the two actions -->
  <header class="kando-header" :class="{ 'kando-header--scrolled': scrolled }">
    <div class="kando-header__container">
      <r-button :to="{ name: 'home' }" variant="kando-light" class="kando-header__back">
        <r-icon name="chevron-left" :size="18" />
        {{ t('kando.header.back') }}
      </r-button>

      <r-button :to="{ name: 'contact' }" variant="kando" class="kando-header__demo">
        {{ t('kando.header.demo') }}
      </r-button>

      <button type="button" class="kando-header__toggle" :aria-label="t('buttons.openMenu')"
        :aria-expanded="menuOpen" @click="menuOpen = true">
        <r-icon name="menu" :size="30" />
      </button>
    </div>
  </header>
  <MobileMenu v-model:open="menuOpen" />
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// fixed over the hero, transparent; tablets and phones get a white bar once scrolled
.kando-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: var(--transition-header-bg);

  .kando-header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    min-height: var(--header-height);
    padding: 0 clamp(40px, 8.7vw, 125px);
    transition: var(--transition-header-height);

    @include tablet {
      padding: 0 24px;
    }

    @include mobile {
      padding: 0 12px;
    }
  }

  .kando-header__back {
    gap: 8px;
  }

  .kando-header__toggle {
    display: none;
    padding: 0;
    background: none;
    color: var(--color-kando-500);
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-kando-400);
    }
  }

  @include tablet {
    .kando-header__demo {
      display: none;
    }

    .kando-header__toggle {
      display: flex;
    }

    &.kando-header--scrolled {
      background-color: var(--color-kando-header-sticky);

      .kando-header__container {
        min-height: var(--header-height-sticky);
      }
    }
  }
}
</style>
