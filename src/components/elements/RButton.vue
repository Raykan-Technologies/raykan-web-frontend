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
// Elementor button widget: accent background, Inter 16/16, 12px 24px, 5px radius
.r-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius);
  font: var(--font-kit-accent);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &.r-button--solid {
    background-color: var(--color-accent);
    color: var(--color-white);

    &:hover {
      color: var(--color-white);
    }
  }

  // border and text follow `color`, so set it on the button to recolor both
  &.r-button--outline {
    border: 2px solid currentColor;
    background-color: transparent;
    color: var(--color-white);

    &:hover {
      color: var(--color-accent);
    }
  }

  &.r-button--block {
    display: flex;
    width: 100%;
    white-space: normal;
  }
}
</style>
