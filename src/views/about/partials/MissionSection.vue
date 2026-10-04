<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef, useId, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import MissionTrace, { type TTraceNode } from './MissionTrace.vue'

const { t } = useI18n()
// outline shapes in the lower-left and upper-right corners, each big one overlapped by a striped
// one, plus a few solid ones: the card badges' hexagon and square, a ring, and circuit traces like the Raykan logo's R
type TShape = {
  kind: 'hexagon' | 'square' | 'triangle' | 'trace' | 'ring';
  // outline when unset
  fill?: 'solid' | 'stripes';
  // slides side to side instead of swaying, so it wanders on its own
  drift?: boolean;
  size: number;
  position: Record<string, string>;
  // trace only: its rings and the lines joining them (see MissionTrace)
  trace?: { nodes: TTraceNode[]; links: Array<[number, number]> };
}

const shapes: TShape[] = [
  { kind: 'hexagon', size: 260, position: { bottom: '12%', left: '10%' } },
  {
    kind: 'hexagon', fill: 'stripes', size: 130,
    position: { bottom: 'calc(12% + 144px * var(--shape-scale))', left: 'calc(10% + 144px * var(--shape-scale))' },
  },
  {
    // a Y: the centre ring stays put, the three ends slide on their own
    kind: 'trace', size: 150,
    trace: {
      nodes: [
        { x: 50, y: 56 },
        { x: 22, y: 20, sway: 9, period: 5.2 },
        { x: 78, y: 20, sway: 9, period: 6.4, phase: 1 },
        { x: 50, y: 92, sway: 10, period: 7.1, phase: 2 },
      ],
      links: [[0, 1], [0, 2], [0, 3]],
    },
    position: { bottom: 'calc(12% + 280px * var(--shape-scale))', left: '10%' },
  },
  { kind: 'square', fill: 'solid', size: 120, position: { bottom: '6%', left: 'calc(10% + 310px * var(--shape-scale))' } },
  { kind: 'ring', size: 260, position: { top: '12%', right: '10%' } },
  // a small outline circle peeking out from under the striped one
  {
    kind: 'ring', size: 80, drift: true,
    position: { top: 'calc(12% + 217px * var(--shape-scale))', right: 'calc(10% + 190px * var(--shape-scale))' },
  },
  {
    kind: 'ring', fill: 'stripes', size: 130,
    position: { top: 'calc(12% + 132px * var(--shape-scale))', right: 'calc(10% + 144px * var(--shape-scale))' },
  },
  {
    // a K: a stem of three rings with two arms off its middle, every ring sliding on its own
    kind: 'trace', size: 150,
    trace: {
      nodes: [
        { x: 28, y: 10, sway: 6, period: 5.5 },
        { x: 28, y: 50, sway: 5, period: 6.8, phase: 1.5 },
        { x: 28, y: 90, sway: 6, period: 6.1, phase: 2.6 },
        { x: 78, y: 12, sway: 6, period: 4.9, phase: 3 },
        { x: 78, y: 88, sway: 6, period: 5.8, phase: 0.7 },
      ],
      links: [[0, 1], [1, 2], [1, 3], [1, 4]],
    },
    position: { top: 'calc(12% + 280px * var(--shape-scale))', right: '10%' },
  },
  {
    kind: 'triangle', fill: 'solid', size: 84,
    position: { top: 'calc(12% - 10px * var(--shape-scale))', right: 'calc(10% + 310px * var(--shape-scale))' },
  },
]

// each shape floats and sways on its own clock (traces move their rings instead of swaying)
const shapeStyle = (shape: TShape, index: number) => ({
  ...shape.position,
  width: `calc(${shape.size}px * var(--shape-scale))`,
  height: `calc(${shape.size}px * var(--shape-scale))`,
  animationDuration: `${6 + (index % 3)}s`,
  animationDelay: `${-index * 1.3}s`,
})

const swayStyle = (index: number) => ({
  animationDuration: `${9 + (index % 4) * 2}s`,
  animationDelay: `${-index * 2.1}s`,
})

// ids for each striped shape's pattern
const id = useId()
const stripesId = (index: number) => `${id}-stripes-${index}`

const section = useTemplateRef<{ $el: HTMLElement }>('section')

let frame = 0

const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1)

// 0 → 1 over the first screen its hero stage scrolls; drives the circle, text and shapes.
// The fades are worked out here so the CSS needs no clamp()/calc() on opacity (older browsers)
const update = () => {
  const el = section.value?.$el
  const stage = el?.parentElement
  if (!el || !stage) return
  const progress = clamp01(-stage.getBoundingClientRect().top / window.innerHeight)
  el.style.setProperty('--mission-progress', progress.toFixed(4))
  // text from 30% to 70% of the growth, shapes after it from 75% to 95%
  el.style.setProperty('--mission-text', clamp01((progress - 0.3) / 0.4).toFixed(4))
  el.style.setProperty('--mission-shapes', clamp01((progress - 0.75) / 0.2).toFixed(4))
}

const onScroll = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

// every outline shape flashes on its own random timer, so several can be lit at once
// (traces run their own signal, see MissionTrace)
const flashing = shallowRef<number[]>([])
const flashTimers: number[] = []

const flash = (index: number) => {
  flashing.value = [...flashing.value, index]
  // lit for 500ms, then a 1–3s pause before it flashes again
  flashTimers[index] = window.setTimeout(() => {
    flashing.value = flashing.value.filter((lit) => lit !== index)
    flashTimers[index] = window.setTimeout(() => flash(index), 1000 + Math.random() * 2000)
  }, 500)
}

onMounted(() => {
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shapes.forEach((shape, index) => {
      if (!shape.fill && !shape.trace) flashTimers[index] = window.setTimeout(() => flash(index), Math.random() * 2000)
    })
  }
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  flashTimers.forEach((timer) => clearTimeout(timer))
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
      <div class="mission-section__shapes" aria-hidden="true">
        <div v-for="(shape, index) in shapes" :key="index" class="mission-section__shape"
          :class="{
            'mission-section__shape--solid': shape.fill === 'solid',
            'mission-section__shape--stripes': shape.fill === 'stripes',
            'mission-section__shape--trace': shape.trace,
            'mission-section__shape--drift': shape.drift,
            'mission-section__shape--flash': flashing.includes(index),
          }" :style="shapeStyle(shape, index)">
          <svg :style="[swayStyle(index), shape.fill === 'stripes' && { fill: `url(#${stripesId(index)})` }]"
            viewBox="0 0 100 100">
            <!-- white diagonal stripes on the circle's blue, so the outline behind doesn't show through -->
            <pattern v-if="shape.fill === 'stripes'" :id="stripesId(index)" width="10" height="10"
              patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="10" height="10" class="mission-section__stripes-gap" />
              <rect width="4.5" height="10" fill="currentColor" />
            </pattern>
            <path v-if="shape.kind === 'hexagon'" d="M45.7 8.5 Q50 6 54.3 8.5 L83.7 25.5 Q88 28 88 33 L88 67 Q88 72 83.7 74.5 L54.3 91.5 Q50 94 45.7 91.5 L16.3 74.5 Q12 72 12 67 L12 33 Q12 28 16.3 25.5 Z" />
            <rect v-else-if="shape.kind === 'square'" x="22" y="22" width="56" height="56" rx="10"
              transform="rotate(45 50 50)" />
            <path v-else-if="shape.kind === 'triangle'" d="M47.1 15.3 Q50 10 52.9 15.3 L89.1 80.7 Q92 86 86 86 L14 86 Q8 86 10.9 80.7 Z" />
            <mission-trace v-else-if="shape.trace" :nodes="shape.trace.nodes" :links="shape.trace.links" />
            <circle v-else cx="50" cy="50" r="40" />
          </svg>
        </div>
      </div>
    </template>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.mission-section {
  --mission-progress: 0;
  --mission-text: 0;
  --mission-shapes: 0;
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
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
    transform: translate(-50%, -50%) scale(var(--mission-progress));
    will-change: transform;
  }

  // fades in after the text (see update())
  .mission-section__shapes {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: var(--mission-shapes);
    pointer-events: none;
  }

  // the wrapper floats, the svg inside it sways
  .mission-section__shape {
    position: absolute;
    animation: float 6s ease-in-out infinite;

    > svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
      color: var(--color-white);
      opacity: 0.35;
      transition: opacity 0.4s ease;
      fill: none;
      stroke: currentColor;
      // thins with the screen: 7px from ~1400px wide down to 3px on phones (plain 7px where clamp() isn't supported)
      stroke-width: 7px;
      stroke-width: clamp(3px, 0.5vw, 7px);
      stroke-linecap: round;
      stroke-linejoin: round;
      animation: sway 10s ease-in-out infinite alternate;
    }

    @media (prefers-reduced-motion: reduce) {
      &,
      > svg {
        animation: none;
      }
    }

    svg * {
      vector-effect: non-scaling-stroke;
    }
  }

  // the trace fades its own rings and lines (MissionTrace)
  .mission-section__shape--trace > svg {
    opacity: 1;
    animation: none;
  }

  // full white, unlike the faint outlines
  .mission-section__shape--flash > svg {
    opacity: 0.95;
  }

  .mission-section__shape--drift > svg {
    animation-name: drift;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  // drawn with its own stripe pattern (set inline)
  .mission-section__shape--stripes > svg {
    opacity: 1;
    stroke: none;
  }

  .mission-section__stripes-gap {
    fill: var(--color-primary);
  }

  .mission-section__shape--solid > svg {
    opacity: 1;
    fill: currentColor;
    stroke: none;
  }

  // comes in from 30% to 70% of the growth (see update())
  > .r-section__container {
    opacity: var(--mission-text);
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
