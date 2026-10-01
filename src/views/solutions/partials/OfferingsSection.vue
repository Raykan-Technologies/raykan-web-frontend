<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RIconBox, RSection } from '@/components/elements'
import type { TSolution } from '@/router/solutions'
import { SOLUTION_OFFERINGS } from '../offerings'

const props = defineProps<{
  solution: TSolution;
}>()
const { t, te } = useI18n()

const prefix = computed(() => `solutions.pages.${props.solution}.offerings`)
const items = computed(() => SOLUTION_OFFERINGS[props.solution] ?? [])

// wp-raykan rows: 4 items = 2x2, anything else = rows of 3 on a 6-track grid,
// where a shorter last row shares the width evenly (digital marketing: 3 + 3 + 2)
const isGrid2x2 = computed(() => items.value.length === 4)
// tablet: 3 described boxes don't fit side by side, title-only rows go 2 across
const columns = computed(() => isGrid2x2.value ? 2 : { desktop: 6, tablet: items.value.length > 3 ? 2 : 1 })

const span = (index: number) => {
  if (isGrid2x2.value) return undefined
  const lastRow = items.value.length % 3
  return index >= items.value.length - lastRow ? 6 / lastRow : 2
}
</script>
<template>
  <!-- wp-raykan solution page section 3d14f47: intro + icon boxes, at least 80% of the screen tall -->
  <r-section class="offerings-section" width="1040px" align="center" vertical-align="middle"
    min-height="calc(var(--app-height, 100svh) * 0.8)" :title="t(`${prefix}.title`)"
    :description="t(`${prefix}.description`)">
    <r-section class="offerings-section__grid" inner :columns="columns" gap="wider">
      <r-icon-box v-for="(item, index) in items" :key="item.key" :icon="item.icon"
        :title="t(`${prefix}.items.${item.key}.title`)" :style="{ '--offering-span': span(index) }">
        <p v-if="te(`${prefix}.items.${item.key}.text`)">{{ t(`${prefix}.items.${item.key}.text`) }}</p>
      </r-icon-box>
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.offerings-section {
  // the WP title and intro are long; wide enough to stay at 2 lines on desktop
  // larger, regular-weight heading (wp-raykan 400), in scale with the icon boxes
  .r-section__title {
    max-width: 22em;
    font-size: var(--font-size-section-title-lg);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-section-title-lg);
  }

  .r-section__description {
    max-width: 46em;
    font-size: var(--font-size-section-description-lg);
    line-height: var(--line-height-section-description-lg);
  }

  .offerings-section__grid > .r-section__container {
    row-gap: 64px;

    // the 6-track desktop grid; tablet and mobile use plain columns
    @include desktop {
      > .r-icon-box {
        grid-column: span var(--offering-span, 1);
      }
    }

    @include mobile {
      row-gap: 40px;
    }
  }
}
</style>
