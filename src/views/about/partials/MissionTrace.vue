<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, shallowRef, useId, useTemplateRef } from 'vue'

export type TTraceNode = {
  x: number;
  y: number;
  // how far it slides side to side, in viewBox units; 0 keeps it still
  sway?: number;
  // seconds per back-and-forth
  period?: number;
  phase?: number;
}

const props = defineProps<{
  nodes: TTraceNode[];
  // pairs of node indexes joined by a line
  links: Array<[number, number]>;
}>()

const RADIUS = 7

const round = (value: number) => Math.round(value * 100) / 100

const root = useTemplateRef<SVGGElement>('root')
const time = shallowRef(0)

const points = computed(() => props.nodes.map(({ x, y, sway = 0, period = 6, phase = 0 }) => ({
  x: round(x + sway * Math.sin((2 * Math.PI * time.value) / period + phase)),
  y,
})))

// where a line starts and ends: at its nodes' rings, so it stretches and shrinks as they slide
const segment = (from: number, to: number) => {
  const a = points.value[from]!
  const b = points.value[to]!
  const length = Math.hypot(b.x - a.x, b.y - a.y)
  const dx = ((b.x - a.x) / length) * RADIUS
  const dy = ((b.y - a.y) / length) * RADIUS
  return { x1: a.x + dx, y1: a.y + dy, x2: b.x - dx, y2: b.y - dy }
}

const path = ({ x1, y1, x2, y2 }: ReturnType<typeof segment>) =>
  `M${round(x1)} ${round(y1)} L${round(x2)} ${round(y2)}`

const lines = computed(() => props.links.map(([from, to]) => path(segment(from, to))))

// a signal spreads from a random ring: it pulses, a wave of data runs down each line leaving it,
// then the rings those reach pulse, and so on until every ring has fired
type TStep =
  | { nodes: number[] }
  | { waves: Array<{ from: number; to: number }> }

const NODE_SECONDS = 0.28
const WAVE_SECONDS = 0.5
// share of the line the bright wave covers
const WAVE_LENGTH = 0.45

const buildSteps = (start: number) => {
  const steps: TStep[] = []
  const visited = new Set([start])
  let frontier = [start]
  while (frontier.length) {
    steps.push({ nodes: frontier })
    const waves: Array<{ from: number; to: number }> = []
    props.links.forEach(([a, b]) => {
      const [from, to] = frontier.includes(a) ? [a, b] : frontier.includes(b) ? [b, a] : [-1, -1]
      if (from < 0 || visited.has(to)) return
      visited.add(to)
      waves.push({ from, to })
    })
    if (waves.length) steps.push({ waves })
    frontier = waves.map(({ to }) => to)
  }
  return steps
}

const stepSeconds = (step: TStep) => 'nodes' in step ? NODE_SECONDS : WAVE_SECONDS

// the current signal, then a 1.5–3.5s rest before the next one from another random ring
let signal: { start: number; steps: TStep[]; end: number } | undefined
let nextSignal = Math.random() * 2

const startSignal = (now: number) => {
  const steps = buildSteps(Math.floor(Math.random() * props.nodes.length))
  const duration = steps.reduce((total, step) => total + stepSeconds(step), 0)
  signal = { start: now, steps, end: now + duration }
  nextSignal = signal.end + 1.5 + Math.random() * 2
}

// which step is running and how far through it (0 → 1)
const current = computed(() => {
  // read time first: it's the only reactive input, so the computed must always track it
  const now = time.value
  if (!signal || now >= signal.end) return undefined
  let elapsed = now - signal.start
  for (const step of signal.steps) {
    const seconds = stepSeconds(step)
    if (elapsed < seconds) return { step, progress: elapsed / seconds }
    elapsed -= seconds
  }
  return undefined
})

const litNodes = computed(() => current.value && 'nodes' in current.value.step ? current.value.step.nodes : [])

// the bright stretch of each running wave: a gradient from clear at its tail to white at its head.
// The gradient spans the whole wave even while it's cut off at either end of the line
const id = useId()

const waves = computed(() => {
  if (!current.value || !('waves' in current.value.step)) return []
  // the head runs past the end so the tail can follow it into the next ring
  const front = current.value.progress * (1 + WAVE_LENGTH)
  const head = Math.min(front, 1)
  const tail = Math.max(front - WAVE_LENGTH, 0)
  return current.value.step.waves.map(({ from, to }, index) => {
    const { x1, y1, x2, y2 } = segment(from, to)
    const at = (share: number) => ({ x: round(x1 + (x2 - x1) * share), y: round(y1 + (y2 - y1) * share) })
    const [start, end] = [at(tail), at(head)]
    const [fadeFrom, fadeTo] = [at(front - WAVE_LENGTH), at(front)]
    return {
      id: `${id}-wave-${index}`,
      d: path({ x1: start.x, y1: start.y, x2: end.x, y2: end.y }),
      gradient: { x1: fadeFrom.x, y1: fadeFrom.y, x2: fadeTo.x, y2: fadeTo.y },
    }
  })
})

// runs only while on screen; JS so the lines can follow the nodes in every browser
let frame = 0
let observer: IntersectionObserver | undefined

const tick = (now: number) => {
  const seconds = now / 1000
  if (seconds >= nextSignal) startSignal(seconds)
  time.value = seconds
  frame = requestAnimationFrame(tick)
}

const stop = () => {
  cancelAnimationFrame(frame)
  frame = 0
}

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !root.value) return
  if (!('IntersectionObserver' in window)) {
    frame = requestAnimationFrame(tick)
    return
  }
  observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting && !frame) frame = requestAnimationFrame(tick)
    else if (!entry?.isIntersecting) stop()
  })
  observer.observe(root.value)
})

onBeforeUnmount(() => {
  stop()
  observer?.disconnect()
})
</script>
<template>
  <!-- circuit trace for MissionSection: rings joined by lines, the rings sliding side to side
    and a signal of pulses and data waves running through it -->
  <g ref="root" class="mission-trace">
    <!-- lines first so the rings sit on top of their ends -->
    <path v-for="(line, index) in lines" :key="`line-${index}`" class="mission-trace__line" :d="line" />
    <template v-for="wave in waves" :key="wave.id">
      <linearGradient :id="wave.id" gradientUnits="userSpaceOnUse" v-bind="wave.gradient">
        <stop offset="0" class="mission-trace__wave-stop" stop-opacity="0" />
        <stop offset="1" class="mission-trace__wave-stop" />
      </linearGradient>
      <path class="mission-trace__wave" :d="wave.d" :stroke="`url(#${wave.id})`" />
    </template>
    <circle v-for="(point, index) in points" :key="index" class="mission-trace__node"
      :class="{ 'mission-trace__node--lit': litNodes.includes(index) }" :cx="point.x" :cy="point.y" :r="RADIUS" />
  </g>
</template>
<style lang="scss">
.mission-trace {
  // looks like the other 35% outlines but drawn solid, so where a ring meets its line
  // (or grows over it) nothing shows through; white while the signal passes
  .mission-trace__node,
  .mission-trace__line {
    stroke: var(--color-about-mission-trace);
    transition: stroke 0.25s ease, fill 0.25s ease, transform 0.25s ease;
  }

  // pulses from its own centre; filled with the circle's blue so a line end never shows inside it
  .mission-trace__node {
    fill: var(--color-primary);
    transform-box: fill-box;
    transform-origin: center;
  }

  // solid white while it pulses
  .mission-trace__node--lit {
    fill: var(--color-white);
    stroke: var(--color-white);
    transform: scale(1.35);
  }

  // the data running down a line; its stroke is the per-wave gradient
  .mission-trace__wave-stop {
    stop-color: var(--color-white);
  }
}
</style>
