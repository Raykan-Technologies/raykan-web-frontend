<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'

const { t } = useI18n()
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
    </template>
  </r-section>
</template>
<style lang="scss">
.mission-section {
  --mission-progress: 0;

  // 71% of circle()'s reference length reaches the corners
  .mission-section__circle {
    position: absolute;
    inset: 0;
    background: var(--color-primary);
    clip-path: circle(calc(var(--mission-progress) * 71%) at 50% 50%);
  }

  // comes in over the second half of the growth
  > .r-section__container {
    opacity: clamp(0, var(--mission-progress) * 2 - 1, 1);
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
