<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'
import type { TIcons } from '../icons'
import type { TCardBadge } from './types'
import RIcon from './RIcon.vue'

interface IProps {
  /**
   * Icon shown on a badge shape, above or left of the title
   */
  icon?: TIcons;
  title?: string;
  /**
   * Makes the whole card a router link
   */
  to?: RouteLocationRaw;
  /**
   * Icon above the centred text (home services) or left of left-aligned text
   */
  iconPosition?: 'top' | 'left';
  /**
   * Shape behind the icon; grids pass `pickCardBadges()` for a random-looking mix
   */
  badge?: TCardBadge;
}

const props = withDefaults(defineProps<IProps>(), {
  iconPosition: 'top',
  badge: 'hexagon',
})

const tag = computed(() => props.to ? RouterLink : 'div')
</script>
<template>
  <component :is="tag" class="r-card" :class="[`r-card--icon-${iconPosition}`, { 'r-card--link': to }]" :to="to">
    <div v-if="icon" class="r-card__icon">
      <r-icon :name="badge" :size="74" class="r-card__icon-badge" />
      <r-icon :name="icon" :size="32" class="r-card__icon-glyph" />
    </div>
    <div class="r-card__content">
      <h3 v-if="title" class="r-card__title">{{ title }}</h3>
      <div v-if="$slots.default" class="r-card__body">
        <slot></slot>
      </div>
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

  // stacked: title and body are laid out as direct items of the card
  .r-card__content {
    display: contents;
  }

  &.r-card--icon-left {
    flex-direction: row;
    gap: 20px;
    padding: 24px 20px;
    text-align: left;

    .r-card__icon {
      flex-shrink: 0;
    }

    .r-card__content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .r-card__body {
      width: auto;
    }
  }

  // badge shape with the icon centered on it
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
