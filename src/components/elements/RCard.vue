<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'
import type { TIcons } from '../icons'
import RIcon from './RIcon.vue'

interface IProps {
  /**
   * Icon shown on a hexagon badge above the title
   */
  icon?: TIcons;
  title?: string;
  /**
   * Makes the whole card a router link
   */
  to?: RouteLocationRaw;
}

const props = defineProps<IProps>()

const tag = computed(() => props.to ? RouterLink : 'div')
</script>
<template>
  <component :is="tag" class="r-card" :class="{ 'r-card--link': to }" :to="to">
    <div v-if="icon" class="r-card__icon">
      <r-icon name="hexagon" :size="74" class="r-card__icon-badge" />
      <r-icon :name="icon" :size="32" class="r-card__icon-glyph" />
    </div>
    <h3 v-if="title" class="r-card__title">{{ title }}</h3>
    <div v-if="$slots.default" class="r-card__body">
      <slot></slot>
    </div>
  </component>
</template>
<style lang="scss">
// wp-raykan service card (Elementor column): 40px vertical padding, 12px radius, hover tint
.r-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--widget-spacing);
  padding: 40px 0;
  border-radius: var(--radius-lg);
  color: var(--color-text-muted);
  text-align: center;
  text-decoration: none;
  transition: background-color 0.4s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: var(--color-card-hover);
    color: var(--color-text-muted);
  }

  &.r-card--link:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    background-color: var(--color-card-hover);
  }

  // hexagon badge with the icon centered on it
  .r-card__icon {
    display: grid;
    place-items: center;

    > * {
      grid-area: 1 / 1;
    }
  }

  .r-card__icon-badge {
    color: var(--color-card-icon-bg);
  }

  .r-card__icon-glyph {
    color: var(--color-primary);
  }

  .r-card__title {
    margin: 0;
    color: var(--color-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-medium);
    line-height: 1.2;
  }

  .r-card__body {
    width: 84.166%;
    font-family: var(--font-secondary);
    font-size: var(--font-size-base);
    line-height: var(--line-height-sm);

    p {
      margin: 0;
    }
  }
}
</style>
