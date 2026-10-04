<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, shallowRef, useTemplateRef } from 'vue'

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

// each line stops at its nodes' rings, so it stretches and shrinks as they slide
const lines = computed(() => props.links.map(([from, to]) => {
  const a = points.value[from]!
  const b = points.value[to]!
  const length = Math.hypot(b.x - a.x, b.y - a.y)
  const dx = ((b.x - a.x) / length) * RADIUS
  const dy = ((b.y - a.y) / length) * RADIUS
  return `M${round(a.x + dx)} ${round(a.y + dy)} L${round(b.x - dx)} ${round(b.y - dy)}`
}))

// runs only while on screen; JS so the lines can follow the nodes in every browser
let frame = 0
let observer: IntersectionObserver | undefined

const tick = (now: number) => {
  time.value = now / 1000
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
  <!-- circuit trace for MissionSection: rings joined by lines, the rings sliding side to side -->
  <g ref="root">
    <circle v-for="(point, index) in points" :key="index" :cx="point.x" :cy="point.y" :r="RADIUS" />
    <path v-for="(line, index) in lines" :key="`line-${index}`" :d="line" />
  </g>
</template>
