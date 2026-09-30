<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

interface IProps {
  /**
   * Number the counter ends on
   */
  value: number;
  /**
   * Shown right after the number, e.g. `%` or `+`
   */
  suffix?: string;
  /**
   * Count-up duration in ms
   */
  duration?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  suffix: '',
  duration: 2000,
})

const root = useTemplateRef<HTMLElement>('root')
const current = ref(0)
let observer: IntersectionObserver | undefined
let frame = 0

// ease-out so the count slows down as it lands
const easeOut = (t: number) => 1 - (1 - t) ** 3

const count = () => {
  const start = performance.now()
  const step = (now: number) => {
    const progress = Math.min((now - start) / props.duration, 1)
    current.value = Math.round(props.value * easeOut(progress))
    if (progress < 1) frame = requestAnimationFrame(step)
  }
  frame = requestAnimationFrame(step)
}

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    current.value = props.value
    return
  }

  // count once, the first time the stat scrolls into view
  observer = new IntersectionObserver(([entry]) => {
    if (!entry?.isIntersecting) return
    observer?.disconnect()
    count()
  }, { threshold: 0.4 })
  if (root.value) observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  cancelAnimationFrame(frame)
})
</script>
<template>
  <div ref="root" class="r-stat">
    <p class="r-stat__value">
      <!-- screen readers get the final figure, not the ticking count -->
      <span class="sr-only">{{ value }}{{ suffix }}</span>
      <span aria-hidden="true">{{ current }}{{ suffix }}</span>
    </p>
    <div v-if="$slots.default" class="r-stat__description">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
// wp-raykan ElementsKit funfact: big italic number over a short bold description
.r-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;

  .r-stat__value {
    margin: 0;
    color: var(--color-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-5xl);
    font-style: italic;
    font-weight: var(--font-weight-extrabold);
    line-height: 1;
    // digits keep the same width while counting, so the number doesn't jitter
    font-variant-numeric: tabular-nums;
  }

  .r-stat__description {
    color: var(--color-secondary);
    font-family: var(--font-secondary);
    font-size: 15px;
    font-weight: var(--font-weight-bold);
    line-height: 1.3;

    p {
      margin: 0;
    }
  }
}
</style>
