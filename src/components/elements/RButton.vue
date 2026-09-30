<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'
import type { TButtonVariant } from './types'

interface IProps {
  /**
   * Internal route (renders a router link)
   */
  to?: RouteLocationRaw;
  /**
   * External or mailto link (renders an anchor)
   */
  href?: string;
  variant?: TButtonVariant;
  /**
   * Stretch to the full width of the parent
   */
  block?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  variant: 'solid',
})

const tag = computed(() => props.to ? RouterLink : props.href ? 'a' : 'button')
const isExternal = computed(() => !!props.href && /^https?:\/\//.test(props.href))
</script>
<template>
  <component :is="tag" class="r-button" :class="[`r-button--${variant}`, { 'r-button--block': block }]"
    :to="to" :href="href" :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener' : undefined" :type="tag === 'button' ? 'button' : undefined">
    <slot></slot>
  </component>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// Elementor button widget: Inter 16/16, 5px radius, 40px tall
// (2px border + 10px/22px padding on both variants, so hovering never changes the size)
.r-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  border: 2px solid transparent;
  border-radius: var(--radius);
  font: var(--font-kit-accent);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s, opacity 0.2s;
  -webkit-tap-highlight-color: transparent;

  // touch-friendly on phones: 44px tap target, long labels wrap instead of overflowing
  @include mobile {
    min-height: 44px;
    max-width: 100%;
    padding-inline: 14px;
    white-space: normal;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  &:active {
    opacity: 0.85;
  }

  // hover effects only on devices that can hover, so colors don't stick after a tap

  // cyan with white text; on hover the colors swap (the cyan border keeps it visible on light
  // backgrounds once it turns white)
  &.r-button--solid {
    border-color: var(--color-accent);
    background-color: var(--color-accent);
    color: var(--color-white);

    @media (hover: hover) {
      &:hover {
        background-color: var(--color-white);
        color: var(--color-accent);
      }
    }
  }

  // white outline and text; on hover it fills solid white with cyan text
  &.r-button--outline {
    border-color: var(--color-white);
    background-color: transparent;
    color: var(--color-white);

    @media (hover: hover) {
      &:hover {
        background-color: var(--color-white);
        color: var(--color-accent);
      }
    }
  }

  &.r-button--block {
    display: flex;
    width: 100%;
    white-space: normal;
  }
}
</style>
