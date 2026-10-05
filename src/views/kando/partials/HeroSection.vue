<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import people from '@/assets/images/kando/hero.webp'

const { t } = useI18n()

// wp-raykan: 85vh / 75vh / 60vh plus the column's 50px top padding
const minHeight = {
  desktop: 'calc(var(--app-height, 100svh) * 0.85 + 50px)',
  tablet: 'calc(var(--app-height, 100svh) * 0.75 + 50px)',
  mobile: 'calc(var(--app-height, 100svh) * 0.6 + 50px)',
}
</script>
<template>
  <!-- wp-raykan kando hero (1f2c830): centred headline, office photo rising from an orange bottom bar -->
  <r-section id="home" class="kando-hero" hero theme="transparent" align="center" vertical-align="top"
    :min-height="minHeight">
    <template #background>
      <img class="kando-hero__image" :src="people" alt="" width="736" height="329" />
    </template>

    <p class="kando-hero__lead">{{ t('kando.hero.lead') }}</p>
    <i18n-t keypath="kando.hero.title" tag="h1" class="kando-hero__title" scope="global">
      <template #automated><span class="kando-highlight">{{ t('kando.hero.automated') }}</span></template>
      <template #timekeeping><span class="kando-highlight">{{ t('kando.hero.timekeeping') }}</span></template>
      <template #payroll><span class="kando-highlight">{{ t('kando.hero.payroll') }}</span></template>
      <template #hr><span class="kando-highlight">{{ t('kando.hero.hr') }}</span></template>
      <template #break><br /></template>
      <template #mobileBreak><br class="kando-hero__mobile-break" /></template>
    </i18n-t>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.kando-hero {
  // photo width: 736px (its natural size) or 75% of the screen, nearly full width on phones
  --kando-hero-image-width: min(736px, 75%);

  // leaves room under the text for the photo (329 / 736 of its width)
  padding-bottom: calc(var(--kando-hero-image-width) * 329 / 736 + 24px);
  box-shadow: inset 0 -25px 20px var(--color-kando-hero-shadow);

  // beats the section theme's background
  &.r-section {
    background-color: var(--color-kando-hero-bg);
  }

  @include mobile {
    --kando-hero-image-width: min(736px, 100% - 20px);
  }

  // orange bar along the bottom edge, over the photo
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 15px;
    background: var(--color-kando-gradient);
    pointer-events: none;
  }

  .kando-hero__image {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: var(--kando-hero-image-width);
    height: auto;
    transform: translateX(-50%);
  }

  .kando-hero__lead {
    margin: 0;
    color: var(--color-kando-text);
    font-family: var(--font-kando-text);
    font-size: var(--font-size-kando-hero-lead);
    line-height: 1.2;
    text-wrap: balance;
  }

  .kando-hero__title {
    margin: 0;
    color: var(--color-kando-text);
    font-family: var(--font-kando-heading);
    font-size: var(--font-size-kando-hero);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
  }

  .kando-hero__mobile-break {
    display: none;

    @include mobile {
      display: inline;
    }
  }
}
</style>
