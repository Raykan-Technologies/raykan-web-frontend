<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import AppSolutionCards from '@/components/AppSolutionCards.vue'
// wp-raykan Background-Grid, the home hero grid in blue (also on the contact page)
import grid from '@/assets/images/contact/contact-grid.svg'

const { t } = useI18n()
</script>
<template>
  <!-- wp-raykan /solutions: a full-screen white section, the blue grid off the top-left corner,
    the heading over the six solution cards -->
  <r-section class="overview-section" tag="article" hero theme="light" align="center" title-tag="h1"
    :title="t('solutions.overview.title')" min-height="var(--app-height, 100svh)" vertical-align="middle">
    <template #background>
      <img class="overview-section__grid" :src="grid" alt="" width="1271" height="999">
    </template>

    <app-solution-cards seed="solutions-overview" />
  </r-section>
</template>
<style lang="scss">
.overview-section {
  // solid header above it, so no header room on top; still fills the screen under the header
  &.r-section--hero {
    min-height: calc(var(--app-height, 100svh) - var(--header-height));
    padding-top: var(--section-padding-y);
  }

  // wp-raykan offsets it -332px / -180px
  .overview-section__grid {
    position: absolute;
    top: -180px;
    left: -332px;
    max-width: none;
    pointer-events: none;
  }

  // wp-raykan breaks the heading over two lines
  .r-section__title {
    max-width: 14em;
  }
}
</style>
