<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead, useLoadingIndicator, useNuxtApp } from '#imports'

const { t } = useI18n()

// first load: in the server HTML, removed once the page has hydrated
const booting = ref(true)
useNuxtApp().hooks.hookOnce('app:suspense:resolve', () => {
  booting.value = false
})

// page changes: only those slower than 300ms show it
const { isLoading } = useLoadingIndicator({ throttle: 300, hideDelay: 0 })

const visible = computed(() => booting.value || isLoading.value)

// without JavaScript nothing would remove it
useHead({ noscript: [{ innerHTML: '<style>.app-loading { display: none; }</style>' }] })
</script>
<template>
  <!-- full-screen loader on first load and while the next page's code and data load -->
  <!-- type: follow the fade only, not the 10s fail-safe animation (it would keep the overlay up) -->
  <Transition name="fade" type="transition">
    <div v-if="visible" class="app-loading" :class="{ 'app-loading--boot': booting }" role="status"
      aria-live="polite">
      <span class="app-loading__spinner" aria-hidden="true"></span>
      <span class="sr-only">{{ t('common.loading') }}</span>
    </div>
  </Transition>
</template>
<style lang="scss">
.app-loading {
  position: fixed;
  inset: 0;
  // above the header and the mobile menu
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);

  // fail-safe: if the app never starts (script error), get out of the way after 10s
  &.app-loading--boot {
    animation: app-loading-give-up 0.3s 10s forwards;
  }

  .app-loading__spinner {
    width: 48px;
    height: 48px;
    border: 4px solid var(--color-loading-track);
    border-top-color: var(--color-primary);
    border-radius: 50%;
    animation: app-loading-spin 0.8s linear infinite;

    // still turning so it reads as busy, just slower
    @media (prefers-reduced-motion: reduce) {
      animation-duration: 2.4s;
    }
  }
}

@keyframes app-loading-give-up {
  to {
    visibility: hidden;
    opacity: 0;
  }
}

@keyframes app-loading-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
