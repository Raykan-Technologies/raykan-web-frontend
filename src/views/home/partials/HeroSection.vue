<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RButton, RCarousel, RSection, type ICarouselImage } from '@/components/elements'
// still frame (2s) of wp-raykan's softwaredev background video
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
  <!-- full width and anchored to the left edge, leaving open space on the right for the photo -->
  <r-section class="hero-section" theme="primary" width="full" vertical-align="middle"
    min-height="var(--app-height, 100svh)" :image="heroBackground" overlay="var(--color-overlay-hero)"
    :overlay-opacity="0.8">
    <template #background>
      <img class="hero-section__grid" :src="heroGrid" alt="" width="1271" height="999">
    </template>

    <span class="hero-section__tagline">{{ t('home.hero.tagline') }}</span>

    <h1 class="hero-section__title">
      <span>{{ t('home.hero.titleLine1') }}</span>
      <span>{{ t('home.hero.titleLine2') }}</span>
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

    <r-section class="hero-section__clients" inner min-height="150px"
      :aria-label="t('home.hero.clientsLabel')">
      <r-carousel class="hero-section__carousel" :items="clients" />
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan home hero (sections 21e2f83 desktop/tablet, 1c19732 mobile)
.hero-section {
  // hero only: the same side padding as the header, so the hero text lines up with the header
  // logo on desktop (125px at 1440px and up); content hugs the left, leaving space on the right
  --section-padding-x: clamp(40px, 8.7vw, 125px);

  // the shared section padding, plus room for the fixed header on top
  padding-top: calc(var(--header-height) + var(--section-padding-y));
  overflow: hidden;

  // tablets and phones: the site-wide margins
  @include tablet {
    --section-padding-x: 40px;
  }

  @include mobile {
    --section-padding-x: 24px;
  }

  // lets the title size itself to the content width (cqw units). Desktop: left-aligned with
  // open space on the right; tablets and phones: everything centered
  > .r-section__container {
    container-type: inline-size;

    // each item centers itself below (margin-inline: auto) on tablets and phones
    @include tablet {
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
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    font-style: italic;
    line-height: 1;

    @include mobile {
      font-size: var(--font-size-xs);
    }
  }

  // strictly 2 lines: one unwrapped line per span, and the font shrinks so the longer line
  // always fits ("Creating technologies" is ~9em wide with the hero letter spacing, ~9.9em without).
  // No line clamp here: its overflow clipping would cut the descenders at line-height 1
  .hero-section__title {
    --hero-title-width: 100cqw;

    width: var(--hero-title-width);
    margin: 0 0 20px;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: min(var(--font-size-hero), calc(var(--hero-title-width) / 9.2));
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-hero);
    letter-spacing: var(--letter-spacing-hero);

    span {
      display: block;
      white-space: nowrap;
    }

    @include tablet {
      --hero-title-width: 82cqw;

      margin-inline: auto;
    }

    @include mobile {
      --hero-title-width: 100cqw;

      margin-bottom: 0;
      font-size: min(var(--font-size-hero), calc(var(--hero-title-width) / 11.5));
    }
  }

  // strictly 2 lines, like section descriptions: wide enough for the copy to wrap into two
  // balanced lines, anything longer is clamped with an ellipsis
  .hero-section__lead {
    display: -webkit-box;
    max-width: 27em;
    margin: 0;
    overflow: hidden;
    color: var(--color-white);
    font-family: var(--font-secondary);
    font-size: var(--font-size-hero-lead);
    line-height: var(--line-height-hero-lead);
    text-wrap: balance;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;

    // wp-raykan: 40px below, minus the 20px container gap (margin: the clamp hides padding)
    margin-bottom: 20px;

    @include tablet {
      margin-inline: auto;
      margin-bottom: 0;
    }
  }

  // wp-raykan stacks the two buttons (the first widget is full width)
  .hero-section__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--widget-spacing);
    max-width: 568px;

    @include tablet {
      align-items: center;
      width: 100%;
      margin-inline: auto;
    }

    @include mobile {
      max-width: none;
    }
  }

  .hero-section__team {
    @include mobile {
      display: none;
    }
  }

  // wp-raykan: 100px top padding + 10px column padding, minus the 20px container gap
  .hero-section__clients {
    padding-top: 90px;
  }

  // spans the full content width on every screen (wp-raykan capped it at 555px on tablets,
  // which crammed the four logos together)
  .hero-section__carousel {
    width: 100%;
  }

  // at least one logo row tall; taller logos (Desert Moving) set the row height
  .hero-section__carousel .r-carousel__slide {
    min-height: 50px;
  }
}
</style>
