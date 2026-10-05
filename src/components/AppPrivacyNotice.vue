<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCookie } from '#imports'
import { RButton } from '@/components/elements'

const { t } = useI18n()

// "Ok" is remembered for a year in a cookie, so the server leaves the bar out once it's dismissed (no flash)
const dismissed = useCookie<boolean>('privacy-notice-dismissed', {
  default: () => false,
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax',
})
</script>
<template>
  <!-- slim bar fixed to the bottom of every page until the visitor presses Ok -->
  <transition name="app-privacy-notice">
    <section v-if="!dismissed" class="app-privacy-notice" :aria-label="t('common.privacyNotice.label')">
      <p class="app-privacy-notice__text">{{ t('common.privacyNotice.text') }}</p>
      <div class="app-privacy-notice__actions">
        <r-button @click="dismissed = true">{{ t('common.privacyNotice.ok') }}</r-button>
        <r-button variant="outline" :to="{ name: 'privacy' }">{{ t('common.privacyNotice.policy') }}</r-button>
      </div>
    </section>
  </transition>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.app-privacy-notice {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px 32px;
  padding: 14px var(--section-padding-x);
  // clears the iPhone home bar
  padding-bottom: max(14px, env(safe-area-inset-bottom));
  background-color: var(--color-privacy-notice-bg);
  box-shadow: var(--shadow-privacy-notice);
  color: var(--color-white);

  @include mobile {
    flex-direction: column;
    text-align: center;
  }

  .app-privacy-notice__text {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
  }

  .app-privacy-notice__actions {
    display: flex;
    flex-shrink: 0;
    gap: 12px;
  }
}

// slides down out of view when dismissed
.app-privacy-notice-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.app-privacy-notice-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media (prefers-reduced-motion: reduce) {
  .app-privacy-notice-leave-active {
    transition: none;
  }
}
</style>
