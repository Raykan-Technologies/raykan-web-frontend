<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import heroPhoto from '@/assets/images/about/hero.webp'

const { t, tm, rt } = useI18n()

const statement = computed(() => (tm('about.hero.statement') as Array<string>).map((line) => rt(line)))
</script>
<template>
  <!-- wp-raykan about page (sections 5a6814c + e8eded0): the photo stays pinned while each panel
    holds for one screen. The welcome comes in after the photo and holds for half -->
  <div class="about-hero" :style="{ '--about-hero-photo': `url(${heroPhoto})` }">
    <div class="about-hero__backdrop" aria-hidden="true"></div>

    <div class="about-hero__stage">
      <r-section class="about-hero__welcome" hero theme="transparent" align="center"
        min-height="var(--app-height, 100svh)">
        <h1 class="about-hero__title">
          <span class="about-hero__title-lead">{{ t('about.hero.titleLead') }}</span>
          {{ ' ' }}
          <span class="about-hero__title-name">{{ t('about.hero.titleName') }}</span>
        </h1>

        <p class="about-hero__statement">
          <span v-for="(line, index) in statement" :key="index">{{ line }}</span>
        </p>
      </r-section>
    </div>

    <div v-for="(panel, index) in $slots.default?.()" :key="index" class="about-hero__stage">
      <component :is="panel" />
    </div>
  </div>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.about-hero {
  // how long each part stays on screen before the next one comes in
  --about-hero-hold: var(--app-height, 100svh);

  // the next section slides over the last screen (see the last stage) while the hero stays
  // pinned; z-index 0 keeps the sticky panels under that section
  position: relative;
  z-index: 0;
  margin-bottom: calc(-1 * var(--about-hero-hold));

  // in the flow for its first screen, then pinned behind the panels until the hero ends
  .about-hero__backdrop {
    position: sticky;
    top: 0;
    height: var(--app-height, 100svh);
    background: var(--about-hero-photo) center / cover no-repeat;

    @include mobile {
      background-position: -505px 0;
    }

    &::after {
      position: absolute;
      inset: 0;
      background: var(--color-overlay-about-hero);
      opacity: 0.5;
      content: '';
    }
  }

  // the welcome scrolls in after one screen of just the photo and holds for half a screen
  .about-hero__backdrop + .about-hero__stage {
    &::after {
      height: calc(var(--about-hero-hold) * 0.5);
    }

    // the next panel pins with the welcome, so its scroll effect runs while the welcome leaves
    + .about-hero__stage {
      margin-top: calc(-1 * var(--app-height, 100svh));
    }
  }

  // the panel pins to the top while the stage's extra space scrolls past
  // (a spacer, not padding: sticky can't move into its parent's padding)
  .about-hero__stage {
    &::after {
      display: block;
      height: var(--about-hero-hold);
      content: '';
    }

    // its hold plus the screen the next section covers it in
    &:last-child::after {
      height: calc(2 * var(--about-hero-hold));
    }

    > .r-section {
      position: sticky;
      top: 0;
      z-index: 1;
    }
  }

  .about-hero__welcome {
    color: var(--color-white);
  }

  // one line on desktop; "We are" gets its own small italic line on tablets and phones.
  // Each line is nowrap and capped by cqw so it always fits the hero
  .about-hero__title {
    margin: 0;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: min(var(--font-size-about-hero), 7.4cqw);
    font-weight: var(--font-weight-bold);
    line-height: 1;
    white-space: nowrap;

    @include tablet {
      font-size: min(var(--font-size-about-hero), 10.2cqw);
    }
  }

  .about-hero__title-lead {
    @include tablet {
      display: block;
      // never larger than the name line once that shrinks to fit
      font-size: min(var(--font-size-about-hero-lead), 0.85em);
      font-weight: var(--font-weight-regular);
      font-style: italic;
    }
  }

  .about-hero__statement {
    margin: 0;
    padding-inline: 50px;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: var(--font-size-about-statement);
    line-height: var(--line-height-about-statement);

    @include tablet {
      padding-inline: 150px;
    }

    @include mobile {
      padding-inline: 0;
    }

    > span {
      display: block;
    }
  }
}
</style>
