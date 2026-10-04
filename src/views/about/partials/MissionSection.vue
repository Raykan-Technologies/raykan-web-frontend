<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'

const { t } = useI18n()
// outline shapes in the lower-left and upper-right corners, each big one overlapped by a solid
// one: the card badges' hexagon and square, a ring, and circuit traces like the Raykan logo's R
type TShape = {
  kind: 'hexagon' | 'square' | 'trace' | 'ring';
  solid?: boolean;
  size: number;
  position: Record<string, string>;
  // trace only: the connected nodes, in the 100×100 viewBox
  nodes?: Array<[number, number]>;
}

const NODE_RADIUS = 7

// the lines between a trace's nodes, stopping at each node's ring
const traceLines = (nodes: Array<[number, number]>) => nodes.slice(1).map(([x2, y2], index) => {
  const [x1, y1] = nodes[index]!
  const length = Math.hypot(x2 - x1, y2 - y1)
  const dx = ((x2 - x1) / length) * NODE_RADIUS
  const dy = ((y2 - y1) / length) * NODE_RADIUS
  return `M${x1 + dx} ${y1 + dy} L${x2 - dx} ${y2 - dy}`
})

const shapes: TShape[] = [
  { kind: 'hexagon', size: 220, position: { bottom: '12%', left: '10%' } },
  {
    kind: 'hexagon', solid: true, size: 110,
    position: { bottom: 'calc(12% + 120px * var(--shape-scale))', left: 'calc(10% + 120px * var(--shape-scale))' },
  },
  {
    kind: 'trace', size: 150, nodes: [[8, 88], [34, 62], [64, 62], [92, 34]],
    position: { bottom: 'calc(12% + 230px * var(--shape-scale))', left: '10%' },
  },
  { kind: 'square', size: 100, position: { bottom: '6%', left: 'calc(10% + 260px * var(--shape-scale))' } },
  { kind: 'ring', size: 220, position: { top: '12%', right: '10%' } },
  {
    kind: 'ring', solid: true, size: 110,
    position: { top: 'calc(12% + 110px * var(--shape-scale))', right: 'calc(10% + 120px * var(--shape-scale))' },
  },
  {
    kind: 'trace', size: 130, nodes: [[10, 30], [50, 30], [88, 72]],
    position: { top: 'calc(12% + 100px * var(--shape-scale))', right: 'calc(10% + 250px * var(--shape-scale))' },
  },
]

// each shape floats and sways (traces slide side to side) on its own clock
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
      <div class="mission-section__shapes" aria-hidden="true">
        <div v-for="(shape, index) in shapes" :key="index" class="mission-section__shape"
          :class="{ 'mission-section__shape--solid': shape.solid, 'mission-section__shape--trace': shape.nodes }" :style="shapeStyle(shape, index)">
          <svg :style="swayStyle(index)" viewBox="0 0 100 100">
            <path v-if="shape.kind === 'hexagon'" d="M45.7 8.5 Q50 6 54.3 8.5 L83.7 25.5 Q88 28 88 33 L88 67 Q88 72 83.7 74.5 L54.3 91.5 Q50 94 45.7 91.5 L16.3 74.5 Q12 72 12 67 L12 33 Q12 28 16.3 25.5 Z" />
            <rect v-else-if="shape.kind === 'square'" x="22" y="22" width="56" height="56" rx="10"
              transform="rotate(45 50 50)" />
            <!-- nodes joined by a bent circuit line -->
            <g v-else-if="shape.nodes">
              <circle v-for="([cx, cy], node) in shape.nodes" :key="node" :cx="cx" :cy="cy" :r="NODE_RADIUS" />
              <path v-for="(line, segment) in traceLines(shape.nodes)" :key="`line-${segment}`" :d="line" />
            </g>
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
      fill: none;
      stroke: currentColor;
      stroke-width: 7px;
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

  .mission-section__shape--trace > svg {
    animation-name: drift;
  }

  // full white, unlike the faint outlines
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
