<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RIcon, RSection } from '@/components/elements'
import type { TIcons } from '@/components/icons'
import devices from '@/assets/images/kando/core.webp'
import watermark from '@/assets/images/kando/watermark.webp'

const { t } = useI18n()

// wp-raykan order: 2 cards, card / image / card, 2 cards
const features: Array<{ key: string; icon: TIcons }> = [
  { key: 'costEffective', icon: 'coins-stack' },
  { key: 'payrollAccuracy', icon: 'invoice' },
  { key: 'customizable', icon: 'cursor-edit' },
  { key: 'timekeeping', icon: 'time-quarter-pass' },
  { key: 'selfService', icon: 'account-setting' },
  { key: 'morale', icon: 'user-multiple' },
]

const cards = computed(() => features.map(({ key, icon }) => ({
  key,
  icon,
  title: t(`kando.features.items.${key}.title`),
  text: t(`kando.features.items.${key}.text`),
})))

// wp-raykan mouse track on the image: drifts against the cursor, -0.5..0.5 of the screen
const mouse = ref({ x: 0, y: 0 })
let motion: MediaQueryList | undefined

const onPointerMove = (e: PointerEvent) => {
  if (motion?.matches) return
  mouse.value = { x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 }
}

onMounted(() => {
  motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  window.addEventListener('pointermove', onPointerMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
})
</script>
<template>
  <!-- wp-raykan kando "core" (8e53089): six feature cards around the Kando devices -->
  <r-section id="core" class="kando-section kando-features" align="center" width="var(--kando-core-width)"
    :label="t('kando.features.label')" :description="t('kando.features.description')">
    <template #background>
      <div class="kando-features__watermark" :style="{ backgroundImage: `url(${watermark})` }"></div>
    </template>
    <template #title>
      <i18n-t keypath="kando.features.title" scope="global">
        <template #highlight><span class="kando-highlight">{{ t('kando.features.highlight') }}</span></template>
      </i18n-t>
    </template>

    <div class="kando-features__grid">
      <div v-for="card in cards" :key="card.key" class="kando-feature">
        <r-icon :name="card.icon" :size="50" class="kando-feature__icon" />
        <div class="kando-feature__content">
          <h3 class="kando-feature__title">{{ card.title }}</h3>
          <p class="kando-feature__text">{{ card.text }}</p>
        </div>
      </div>
      <img class="kando-features__devices" :src="devices" :alt="t('kando.features.imageAlt')" width="525"
        height="366" loading="lazy"
        :style="{ '--mouse-x': mouse.x, '--mouse-y': mouse.y }" />
    </div>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.kando-features {
  // the big Kando figure, at half strength (mostly off screen on desktop, like wp-raykan)
  .kando-features__watermark {
    position: absolute;
    inset: 0;
    background-position: -69% -200px;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.5;
    pointer-events: none;

    @include tablet {
      background-position: -120px 0;
    }

    @include mobile {
      background-position: 0 0;
    }
  }

  // wp-raykan intro stays left-aligned under the centred title (centred on phones)
  .r-section__description {
    align-self: center;
    width: 100%;
    max-width: var(--kando-section-width);
    text-align: left;

    @include mobile {
      text-align: center;
    }
  }

  // 3 rows of 200px on a 6-column grid: 2 cards, card / image / card, 2 cards
  .kando-features__grid {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-rows: minmax(200px, auto);
    align-items: center;
    text-align: left;

    @include mobile {
      grid-template-columns: minmax(0, 1fr);
      grid-auto-rows: auto;
      gap: 32px;
      justify-items: center;
    }
  }

  .kando-feature {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px;
    border: 1px solid var(--color-kando-border);
    border-radius: 8px;
    background-color: var(--color-white);
    transition: box-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
      box-shadow: 0 2px 0 4px var(--color-kando-500);
      transform: scale(1.03);
    }

    // pairs meet 25px either side of the centre; side cards hug the edges
    &:nth-child(1),
    &:nth-child(5) {
      grid-column: 1 / 4;
      justify-self: end;
      width: 64%;
      margin-right: 25px;
    }

    &:nth-child(2),
    &:nth-child(6) {
      grid-column: 4 / 7;
      justify-self: start;
      width: 64%;
      margin-left: 25px;
    }

    &:nth-child(3) {
      grid-area: 2 / 1 / 3 / 3;
      justify-self: start;
    }

    &:nth-child(4) {
      grid-area: 2 / 5 / 3 / 7;
      justify-self: end;
    }

    &:nth-child(1),
    &:nth-child(2) {
      grid-row: 1;
    }

    &:nth-child(5),
    &:nth-child(6) {
      grid-row: 3;
    }

    // phones: one column, icon above centred text
    @include mobile {
      flex-direction: column;
      text-align: center;

      &:nth-child(n) {
        grid-area: auto;
        justify-self: center;
        width: 80%;
        margin: 0;
      }
    }
  }

  .kando-feature__icon {
    flex-shrink: 0;
    color: var(--color-kando-500);
  }

  .kando-feature__title {
    margin: 0 0 8px;
    color: var(--color-kando-text);
    font-family: var(--font-kando-text);
    font-size: var(--font-size-kando-feature-title);
    font-weight: var(--font-weight-semibold);
    line-height: 24px;
  }

  .kando-feature__text {
    margin: 0;
    color: var(--color-kando-text);
    font-family: var(--font-secondary);
    font-size: var(--font-size-base);
    line-height: 1.4;
  }

  // centred behind the middle row, drifting against the cursor
  .kando-features__devices {
    z-index: -1;
    grid-area: 1 / 3 / 4 / 5;
    justify-self: center;
    width: 480px;
    max-width: none;
    height: auto;
    transform: translate(calc(var(--mouse-x, 0) * -20px), calc(var(--mouse-y, 0) * -20px));
    transition: transform 0.3s ease-out;
    pointer-events: none;

    @include mobile {
      display: none;
    }
  }
}
</style>
