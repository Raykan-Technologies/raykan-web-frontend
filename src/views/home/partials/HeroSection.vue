<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RButton, RCarousel, RSection, type ICarouselImage } from '@/components/elements'
import heroBackground from '@/assets/images/home/hero-background.webp'
import heroGrid from '@/assets/images/home/hero-grid.svg'
import bond from '@/assets/images/clients/bond.svg'
import eliteAnywhere from '@/assets/images/clients/elite-anywhere.svg'
import kcFence from '@/assets/images/clients/kc-fence.webp'
import dmc from '@/assets/images/clients/dmc.webp'
import bni from '@/assets/images/clients/bni.webp'

const { t } = useI18n()

// client logos (wp-raykan testimonial-carousel slides, rendered sizes)
const clients = computed<Array<ICarouselImage>>(() => [
  { src: bond, alt: t('clients.bond'), width: 150, height: 50 },
  { src: eliteAnywhere, alt: t('clients.eliteAnywhere'), width: 150, height: 50 },
  { src: kcFence, alt: t('clients.kcFence'), width: 130, height: 40 },
  { src: dmc, alt: t('clients.desertMoving'), width: 150, height: 50 },
  { src: bni, alt: t('clients.bni'), width: 100, height: 40 },
])
</script>
<template>
  <r-section class="hero-section" theme="primary" width="full" gutter="lg" vertical-align="top"
    :min-height="{ desktop: '100vh', mobile: 'auto' }" :image="heroBackground"
    overlay="var(--color-overlay-hero)" :overlay-opacity="0.8">
    <template #background>
      <img class="hero-section__grid" :src="heroGrid" alt="" width="1271" height="999">
    </template>

    <span class="hero-section__tagline">{{ t('home.hero.tagline') }}</span>

    <h1 class="hero-section__title">
      {{ t('home.hero.titleLine1') }}<br>
      {{ t('home.hero.titleLine2') }}
    </h1>

    <i18n-t keypath="home.hero.lead" tag="p" class="hero-section__lead" scope="global">
      <template #highlight>
        <b>{{ t('home.hero.leadHighlight') }}</b>
      </template>
    </i18n-t>

    <div class="hero-section__actions">
      <r-button href="mailto:info@raykan.co" class="hero-section__start">
        {{ t('home.hero.startBuilding') }}
      </r-button>
      <r-button :to="{ name: 'about' }" variant="outline" class="hero-section__team">
        {{ t('home.hero.meetTheTeam') }}
      </r-button>
    </div>

    <r-section class="hero-section__clients" inner gutter="sm" min-height="150px"
      :aria-label="t('home.hero.clientsLabel')">
      <r-carousel class="hero-section__carousel" :images="clients" />
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan home hero (sections 21e2f83 desktop/tablet, 1c19732 mobile)
.hero-section {
  padding-top: 20px;
  overflow: hidden;

  // wp-raykan tablet column padding: 40px all around
  @include tablet {
    padding-top: 60px;
    padding-bottom: 40px;
  }

  @include mobile {
    padding-top: 0;
    padding-bottom: 100px;

    > .r-section__container {
      align-items: center;
      text-align: center;
    }
  }

  .hero-section__grid {
    position: absolute;
    top: 20px;
    left: 50%;
    max-width: none;
    transform: translateX(-50%);
    pointer-events: none;

    @include mobile {
      display: none;
    }
  }

  .hero-section__tagline {
    display: block;
    margin-top: 70px;
    color: var(--color-accent);
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    font-style: italic;
    line-height: 1px;

    @include mobile {
      margin-top: 100px;
      font-size: var(--font-size-xs);
    }
  }

  .hero-section__title {
    width: 100%;
    margin: 0 0 20px;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: var(--font-size-hero);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-hero);
    letter-spacing: var(--letter-spacing-hero);

    @include tablet {
      width: 82%;
    }

    @include mobile {
      width: 100%;
      margin-bottom: 0;
    }
  }

  .hero-section__lead {
    width: 41.431%;
    margin: 0;
    // wp-raykan: 40px below, minus the 20px container gap
    padding-bottom: 20px;
    color: var(--color-grey-350);
    font-family: var(--font-secondary);
    font-size: var(--font-size-hero-lead);
    line-height: var(--line-height-hero-lead);

    @include tablet {
      width: 60%;
      padding-bottom: 0;
    }

    @include mobile {
      width: 100%;
      padding: 4px 0;
    }
  }

  // wp-raykan stacks the two buttons (the first widget is full width)
  .hero-section__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--widget-spacing);
    max-width: 568px;

    @include mobile {
      align-items: center;
      width: 93%;
      max-width: none;
    }
  }

  .hero-section__start {
    @include mobile {
      width: 100%;
      border: 2px solid var(--color-accent);
      border-radius: var(--radius-sm);
    }
  }

  .hero-section__team {
    padding: 10px;

    @include mobile {
      display: none;
    }
  }

  // wp-raykan: 100px top padding + 10px column padding, minus the 20px container gap
  .hero-section__clients {
    padding-top: 90px;
    padding-bottom: 10px;
  }

  .hero-section__carousel {
    // wp-raykan renders an empty testimonial footer (100px margin + name line) under each logo
    padding-bottom: 168px;

    @include tablet {
      max-width: 555px;
      margin-inline: auto;
    }

    @include mobile {
      padding-bottom: 0;
    }
  }

  .hero-section__carousel .r-carousel__slide {
    height: 50px;
  }
}
</style>
