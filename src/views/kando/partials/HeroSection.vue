<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import pattern from '@/assets/images/kando/hero-pattern.png'
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
  <r-section id="home" class="kando-hero" hero theme="light" align="center"
    :min-height="minHeight">
    <template #background>
      <div class="kando-hero__pattern" :style="{ backgroundImage: `url(${pattern})` }"></div>
      <div class="kando-hero__shade"></div>
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
  // photo width: 736px (its natural size) or 75% of the screen, 85% on phones
  // so the curve doesn't cut into its corners
  --kando-hero-image-width: min(736px, 75%);
  // U-shaped bottom (wp-raykan's drafted 250px curve), smaller on small screens.
  // The U is wider than the screen, so its sides and border run off the edges
  --kando-hero-curve: clamp(60px, 17vw, 250px);
  --kando-hero-overhang: clamp(16px, 2.2vw, 32px);
  --kando-hero-border: 15px;
  --kando-hero-shape: 0 calc(-1 * var(--kando-hero-overhang));

  // room for the photo (329 / 736 of its width) plus the same spacing as the top,
  // so the text sits midway between the header and the photo
  padding-bottom: calc(var(--kando-hero-image-width) * 329 / 736 + var(--section-padding-y));
  clip-path: inset(var(--kando-hero-shape) round 0 0 var(--kando-hero-curve) var(--kando-hero-curve));

  @include tablet {
    --kando-hero-border: 12px;
  }

  @include mobile {
    --kando-hero-image-width: min(736px, 85%);
    --kando-hero-border: 8px;
  }

  // gradient border following the U at full thickness, cut off at the screen edges
  // (drawn over the photo)
  &::after {
    content: '';
    position: absolute;
    inset: var(--kando-hero-shape);
    z-index: 1;
    padding: 0 var(--kando-hero-border) var(--kando-hero-border);
    border-radius: 0 0 var(--kando-hero-curve) var(--kando-hero-curve);
    background: var(--color-kando-gradient);
    // keeps only the padding ring; -webkit- lines for older Safari
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box exclude, linear-gradient(#fff 0 0);
    pointer-events: none;
  }

  // Kando figure pattern over white, at half strength (wp-raykan overlay)
  .kando-hero__pattern {
    position: absolute;
    inset: 0;
    background-position: center;
    background-size: cover;
    opacity: 0.5;
    pointer-events: none;
  }

  // dark inner shadow along the bottom, over the pattern and under the photo
  .kando-hero__shade {
    position: absolute;
    inset: var(--kando-hero-shape);
    border-radius: 0 0 var(--kando-hero-curve) var(--kando-hero-curve);
    box-shadow: inset 0 -25px 20px var(--color-kando-hero-shadow);
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
