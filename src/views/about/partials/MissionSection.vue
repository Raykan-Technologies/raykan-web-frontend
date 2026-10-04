<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'

const { t } = useI18n()
// outline shapes in the lower-left and upper-right corners, each big one overlapped by a solid
// one: the card badges' hexagon and square, and the Raykan logo's circuit node and ring
type TShape = {
  kind: 'hexagon' | 'square' | 'node' | 'ring';
  solid?: boolean;
  size: number;
  position: Record<string, string>;
}

const shapes: TShape[] = [
  { kind: 'hexagon', size: 220, position: { bottom: '12%', left: '10%' } },
  {
    kind: 'hexagon', solid: true, size: 110,
    position: { bottom: 'calc(12% + 120px * var(--shape-scale))', left: 'calc(10% + 120px * var(--shape-scale))' },
  },
  { kind: 'square', size: 100, position: { bottom: '6%', left: 'calc(10% + 260px * var(--shape-scale))' } },
  { kind: 'ring', size: 220, position: { top: '12%', right: '10%' } },
  {
    kind: 'ring', solid: true, size: 110,
    position: { top: 'calc(12% + 110px * var(--shape-scale))', right: 'calc(10% + 120px * var(--shape-scale))' },
  },
  {
    kind: 'node', size: 120,
    position: { top: 'calc(12% + 100px * var(--shape-scale))', right: 'calc(10% + 250px * var(--shape-scale))' },
  },
]

// each shape floats and sways on its own clock
const shapeStyle = (shape: TShape, index: number) => ({
  ...shape.position,
  width: `calc(${shape.size}px * var(--shape-scale))`,
  height: `calc(${shape.size}px * var(--shape-scale))`,
  animationDuration: `${6 + (index % 3)}s, ${9 + (index % 4) * 2}s`,
  animationDelay: `${-index * 1.3}s, ${-index * 2.1}s`,
})

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
      <svg v-for="(shape, index) in shapes" :key="index" class="mission-section__shape"
        :class="{ 'mission-section__shape--solid': shape.solid }" :style="shapeStyle(shape, index)"
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
  // sizes and offsets of the shapes
  --shape-scale: 1;

  @include mobile {
    --shape-scale: 0.6;
  }

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
    --shape-alpha: 0.35;

    position: absolute;
    color: var(--color-white);
    opacity: calc(clamp(0, var(--mission-progress) * 5 - 3.75, 1) * var(--shape-alpha));
    fill: none;
    stroke: currentColor;
    stroke-width: 7px;
    stroke-linecap: round;
    stroke-linejoin: round;
    animation-name: float, sway;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal, alternate;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }

    * {
      vector-effect: non-scaling-stroke;
    }
  }

  // full white, unlike the faint outlines
  .mission-section__shape--solid {
    --shape-alpha: 1;

    fill: currentColor;
    stroke: none;
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
