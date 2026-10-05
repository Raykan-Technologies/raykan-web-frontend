<script setup lang="ts">
import RSection from './RSection.vue'

interface IProps {
  /**
   * Page heading (the page's h1)
   */
  title: string;
  /**
   * Lead text under the title, 2 lines max
   */
  description?: string;
  /**
   * Background photo (imported asset), drawn under the brand gradient
   */
  image?: string;
  imagePosition?: string;
  /**
   * Minimum height: `full` screen (70% on mobile), or `half` the screen (blog, FAQ)
   */
  height?: 'full' | 'half';
}

withDefaults(defineProps<IProps>(), {
  imagePosition: 'center center',
  height: 'full',
})
</script>
<template>
  <!-- inner-page hero (wp-raykan solution/FAQ pages); the page's route sets meta.headerTransparent -->
  <r-section class="r-page-hero" hero theme="primary" vertical-align="middle" :min-height="height === 'half'
    ? 'calc(var(--app-height, 100svh) * 0.5)'
    : { desktop: 'var(--app-height, 100svh)', mobile: 'calc(var(--app-height, 100svh) * 0.7)' }"
    :image="image" :image-position="imagePosition" overlay="var(--color-overlay-page-hero)"
    :overlay-opacity="0.8">
    <template v-if="$slots.background" #background>
      <slot name="background"></slot>
    </template>

    <h1 class="r-page-hero__title">{{ title }}</h1>
    <p v-if="description" class="r-page-hero__description">{{ description }}</p>
    <div v-if="$slots.actions" class="r-page-hero__actions">
      <slot name="actions"></slot>
    </div>
    <slot></slot>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.r-page-hero {
  // capped at 16cqw so long words like "Development" never overflow on phones.
  // No line clamp: at this line height it would cut the descenders
  .r-page-hero__title {
    margin: 0 0 10px;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: min(var(--font-size-page-hero), 16cqw);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-page-hero);
    letter-spacing: var(--letter-spacing-page-hero);
    text-wrap: balance;

    @include mobile {
      margin-bottom: 0;
    }
  }

  // strictly 2 lines, like section descriptions
  .r-page-hero__description {
    display: -webkit-box;
    max-width: 36em;
    margin: 0;
    overflow: hidden;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: var(--font-size-page-hero-lead);
    line-height: var(--line-height-page-hero-lead);
    text-wrap: balance;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .r-page-hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--widget-spacing);
  }
}
</style>
