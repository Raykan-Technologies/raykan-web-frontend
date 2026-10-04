<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'

const { t } = useI18n()
// outline shapes drifting in the lower-left and upper-right corners: the card badges'
// hexagon and square, and the Raykan logo's circuit node and ring
const shapes: Array<{ kind: 'hexagon' | 'square' | 'node' | 'ring'; corner: string; size: number }> = [
  { kind: 'hexagon', corner: 'lower-left-large', size: 180 },
  { kind: 'square', corner: 'lower-left-small', size: 84 },
  { kind: 'node', corner: 'upper-right-large', size: 180 },
  { kind: 'ring', corner: 'upper-right-small', size: 60 },
]

const section = useTemplateRef<{ $el: HTMLElement }>('section')

let frame = 0

// 0 → 1 over the first screen its hero stage scrolls; drives the circle and the text
const update = () => {
  const el = section.value?.$el
  const stage = el?.parentElement
  if (!el || !stage) return
  const progress = Math.min(Math.max(-stage.getBoundingClientRect().top / window.innerHeight, 0), 1)
  el.style.setProperty('--mission-progress', progress.toFixed(4))
}

const onScroll = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>
<template>
  <!-- wp-raykan about "Mission Text" (5cddd23): one screen tall over the hero photo. A brand-blue
    circle grows from the centre with the scroll and the text fades in as it does -->
  <r-section ref="section" class="mission-section" theme="transparent" align="center"
    min-height="var(--app-height, 100svh)" :label="t('about.mission.label')"
    :title="t('about.mission.title')" :description="t('about.mission.description')">
    <template #background>
      <div class="mission-section__circle" aria-hidden="true"></div>
      <svg v-for="shape in shapes" :key="shape.kind" class="mission-section__shape"
        :class="`mission-section__shape--${shape.corner}`" :width="shape.size" :height="shape.size"
        viewBox="0 0 100 100" aria-hidden="true">
        <path v-if="shape.kind === 'hexagon'" d="M45.7 8.5 Q50 6 54.3 8.5 L83.7 25.5 Q88 28 88 33 L88 67 Q88 72 83.7 74.5 L54.3 91.5 Q50 94 45.7 91.5 L16.3 74.5 Q12 72 12 67 L12 33 Q12 28 16.3 25.5 Z" />
        <rect v-else-if="shape.kind === 'square'" x="22" y="22" width="56" height="56" rx="10"
          transform="rotate(45 50 50)" />
        <g v-else-if="shape.kind === 'node'" transform="rotate(35 50 50)">
          <circle cx="50" cy="14" r="9" />
          <path d="M50 23 V77" />
          <circle cx="50" cy="86" r="9" />
        </g>
        <circle v-else cx="50" cy="50" r="40" />
      </svg>
    </template>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.mission-section {
  --mission-progress: 0;

  // the circle can grow past the screen's corners
  overflow: hidden;

  // 150vmax is wider than any screen's diagonal, so at full scale it covers the section
  .mission-section__circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150vmax;
    height: 150vmax;
    border-radius: 50%;
    background: var(--color-primary);
    box-shadow: 0 20px 60px rgb(0 0 0 / 35%);
    transform: translate(-50%, -50%) scale(var(--mission-progress));
  }

  // fade in after the text, from 75% to 95% of the growth
  .mission-section__shape {
    position: absolute;
    color: var(--color-white);
    opacity: calc(clamp(0, var(--mission-progress) * 5 - 3.75, 1) * 0.35);
    animation: float 6s ease-in-out infinite;

    @include mobile {
      scale: 0.6;
    }

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

    fill: none;
    stroke: currentColor;
    stroke-width: 7px;
    stroke-linecap: round;
    stroke-linejoin: round;

    * {
      vector-effect: non-scaling-stroke;
    }
  }

  .mission-section__shape--lower-left-large {
    bottom: 14%;
    left: 12%;
  }

  .mission-section__shape--lower-left-small {
    --float-distance: 12px;

    bottom: 32%;
    left: 22%;
    animation-delay: -2s;
  }

  .mission-section__shape--upper-right-large {
    top: 14%;
    right: 12%;
    animation-delay: -3s;
  }

  .mission-section__shape--upper-right-small {
    --float-distance: 12px;

    top: 32%;
    right: 22%;
    animation-delay: -1s;
  }

  // comes in from 30% to 70% of the growth
  > .r-section__container {
    opacity: clamp(0, var(--mission-progress) * 2.5 - 0.75, 1);
    transform: translateY(calc((1 - var(--mission-progress)) * 40px));
  }

  .r-section__header {
    margin-bottom: 0;
  }

  // shown on every screen here, not only on phones
  .r-section__label {
    display: block;
    color: var(--color-white);
    font-weight: var(--font-weight-bold);
  }

  // widened so the WP copy stays on one line on desktop
  .r-section__title {
    max-width: 24em;
    color: var(--color-white);
    font-size: var(--font-size-about-title);
    line-height: var(--line-height-about-title);
  }

  .r-section__description {
    max-width: 50em;
    color: var(--color-white);
    font-size: var(--font-size-about-mission-description);
    font-weight: var(--font-weight-medium);
    line-height: 22px;
  }
}
</style>
