<script setup lang="ts">
import { computed, type StyleValue } from 'vue'
import type {
  TResponsive,
  TResponsiveValue,
  TSectionColumns,
  TSectionGap,
  TSectionGutter,
  TSectionTheme,
  TSectionWidth,
} from './types'

interface IProps {
  /**
   * Root element
   */
  tag?: 'section' | 'article' | 'header' | 'footer' | 'div';
  /**
   * Row nested inside another section's column (Elementor inner section):
   * no background, width limit, gutter or vertical padding unless given
   */
  inner?: boolean;
  theme?: TSectionTheme;
  width?: TSectionWidth;
  gutter?: TSectionGutter;
  /**
   * e.g. `100vh`, or `{ desktop: '55vh', tablet: '60vh' }`
   */
  minHeight?: TResponsiveValue;
  /**
   * Split the content into columns, one per direct child. Tablet keeps the desktop
   * layout and mobile stacks into one column unless set, like Elementor
   */
  columns?: TResponsive<TSectionColumns>;
  gap?: TSectionGap;
  /**
   * Vertical alignment of columns within their row
   */
  columnsAlign?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * Horizontal alignment of the content
   */
  align?: 'start' | 'center';
  /**
   * Vertical position of the content when the section is taller than it
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
  /**
   * Background image url (imported asset)
   */
  image?: string;
  imagePosition?: string;
  imageSize?: string;
  /**
   * Overlay color drawn over the background image
   */
  overlay?: string;
  overlayOpacity?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  tag: 'section',
  gap: 'default',
  columnsAlign: 'stretch',
  align: 'start',
  verticalAlign: 'middle',
  imagePosition: 'center center',
  imageSize: 'cover',
  overlayOpacity: 1,
})

const theme = computed(() => props.theme ?? (props.inner ? 'transparent' : 'light'))
const width = computed(() => props.width ?? (props.inner ? 'full' : 'boxed'))
const gutter = computed(() => props.gutter ?? (props.inner ? 'none' : 'default'))

const toBreakpoints = <T,>(value?: TResponsive<T>): { desktop?: T; tablet?: T; mobile?: T } =>
  value !== null && typeof value === 'object' && !Array.isArray(value)
    ? value as { desktop?: T; tablet?: T; mobile?: T }
    : { desktop: value as T | undefined }

const toGridColumns = (columns?: TSectionColumns) => {
  if (columns === undefined) return undefined
  if (typeof columns === 'number') return `repeat(${columns}, minmax(0, 1fr))`
  return columns.map((size) => `minmax(0, ${size}fr)`).join(' ')
}

const hasColumns = computed(() => props.columns !== undefined)

const sectionStyles = computed(() => {
  const minHeight = toBreakpoints(props.minHeight)
  const columns = toBreakpoints(props.columns)

  return {
    '--section-min-height': minHeight.desktop,
    '--section-min-height-tablet': minHeight.tablet,
    '--section-min-height-mobile': minHeight.mobile,
    '--section-width': width.value === 'boxed' || width.value === 'full' ? undefined : width.value,
    '--section-columns': toGridColumns(columns.desktop),
    '--section-columns-tablet': toGridColumns(columns.tablet),
    '--section-columns-mobile': toGridColumns(columns.mobile),
    backgroundImage: props.image ? `url(${props.image})` : undefined,
    backgroundPosition: props.image ? props.imagePosition : undefined,
    backgroundSize: props.image ? props.imageSize : undefined,
  } as StyleValue
})

const overlayStyles = computed(() => ({
  backgroundColor: props.overlay,
  opacity: props.overlayOpacity,
}))

const sectionClasses = computed(() => [
  `r-section--${theme.value}`,
  `r-section--gutter-${gutter.value}`,
  `r-section--gap-${props.gap}`,
  `r-section--align-${props.align}`,
  `r-section--valign-${props.verticalAlign}`,
  `r-section--columns-${props.columnsAlign}`,
  {
    'r-section--inner': props.inner,
    'r-section--full': width.value === 'full',
    'r-section--grid': hasColumns.value,
  },
])
</script>
<template>
  <component :is="tag" class="r-section" :class="sectionClasses" :style="sectionStyles">
    <div v-if="overlay" class="r-section__overlay" :style="overlayStyles"></div>
    <!-- extra decorative layers (grids, shapes, video) behind the content -->
    <slot name="background"></slot>
    <div class="r-section__container">
      <slot></slot>
    </div>
  </component>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// site-wide section spacing (tokens in css/_layout); :where() keeps specificity at 0
// so a page section can still override it with a single class
:where(.r-section:not(.r-section--inner)) {
  padding-block: var(--section-padding-y);
}

.r-section {
  // stop nested sections from inheriting the parent's values; props set them inline
  --section-min-height: initial;
  --section-min-height-tablet: initial;
  --section-min-height-mobile: initial;
  --section-width: initial;
  --section-columns: initial;
  --section-columns-tablet: initial;
  --section-columns-mobile: initial;

  position: relative;
  display: flex;
  flex-direction: column;
  min-height: var(--section-min-height, auto);
  background-repeat: no-repeat;

  @include tablet {
    min-height: var(--section-min-height-tablet, var(--section-min-height, auto));
  }

  @include mobile {
    min-height: var(--section-min-height-mobile, var(--section-min-height-tablet, var(--section-min-height, auto)));
  }

  .r-section__overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .r-section__container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--widget-spacing);
    width: 100%;
    // the gutter sits outside the content width, so boxed content stays 1140px wide
    max-width: calc(var(--section-width, var(--container-width)) + 2 * var(--section-gutter));
    margin-inline: auto;
    padding-inline: var(--section-gutter);
  }

  &.r-section--full > .r-section__container {
    max-width: none;
  }

  // inner rows always span their column, even inside a centered section
  &.r-section--inner {
    align-self: stretch;
  }

  // columns
  &.r-section--grid > .r-section__container {
    display: grid;
    grid-template-columns: var(--section-columns);
    column-gap: var(--section-gap);
    row-gap: var(--widget-spacing);

    @include tablet {
      grid-template-columns: var(--section-columns-tablet, var(--section-columns));
    }

    @include mobile {
      grid-template-columns: var(--section-columns-mobile, minmax(0, 1fr));
    }
  }

  &.r-section--columns-start > .r-section__container { align-items: start; }
  &.r-section--columns-center > .r-section__container { align-items: center; }
  &.r-section--columns-end > .r-section__container { align-items: end; }
  &.r-section--columns-stretch > .r-section__container { align-items: stretch; }

  // gaps (Elementor column padding, doubled between two columns)
  &.r-section--gap-no { --section-gap: 0; }
  &.r-section--gap-narrow { --section-gap: 10px; }
  &.r-section--gap-default { --section-gap: 20px; }
  &.r-section--gap-extended { --section-gap: 30px; }
  &.r-section--gap-wide { --section-gap: 40px; }
  &.r-section--gap-wider { --section-gap: 60px; }

  // themes
  &.r-section--light {
    background-color: var(--color-white);
    color: var(--color-text-muted);
  }

  &.r-section--primary {
    background-color: var(--color-primary);
    color: var(--color-text);

    h1,
    h2 {
      color: var(--color-text);
    }
  }

  &.r-section--accent-soft {
    background-color: var(--color-metrics-bg);
    color: var(--color-secondary);
  }

  &.r-section--transparent {
    background-color: transparent;
  }

  // gutters
  &.r-section--gutter-default { --section-gutter: var(--section-padding-x); }
  &.r-section--gutter-none { --section-gutter: 0px; }

  // alignment
  &.r-section--align-center > .r-section__container {
    text-align: center;
  }

  &.r-section--align-center:not(.r-section--grid) > .r-section__container {
    align-items: center;
  }

  &.r-section--valign-top { justify-content: flex-start; }
  &.r-section--valign-middle { justify-content: center; }
  &.r-section--valign-bottom { justify-content: flex-end; }
}
</style>
