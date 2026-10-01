<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RIconBox, RSection } from '@/components/elements'
import type { TSolution } from '@/router/solutions'
import { SOLUTION_OFFERINGS } from '../offerings'

const props = defineProps<{
  solution: TSolution;
}>()
const { t } = useI18n()

const prefix = computed(() => `solutions.pages.${props.solution}.offerings`)
const items = computed(() => SOLUTION_OFFERINGS[props.solution] ?? [])
// one row of 3 (data science) or a 2x2 grid (software development), as in wp-raykan;
// 3 icon boxes don't fit side by side on tablet, so they stack there
const columns = computed(() => items.value.length % 3 === 0 ? { desktop: 3, tablet: 1 } : 2)
</script>
<template>
  <!-- wp-raykan solution page section 3d14f47: intro + 2x2 icon boxes, at least 80% of the screen tall -->
  <r-section class="offerings-section" width="1040px" align="center" vertical-align="middle"
    min-height="calc(var(--app-height, 100svh) * 0.8)" :title="t(`${prefix}.title`)"
    :description="t(`${prefix}.description`)">
    <r-section class="offerings-section__grid" inner :columns="columns" gap="wider">
      <r-icon-box v-for="item in items" :key="item.key" :icon="item.icon"
        :title="t(`${prefix}.items.${item.key}.title`)">
        <p>{{ t(`${prefix}.items.${item.key}.text`) }}</p>
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

    @include mobile {
      row-gap: 40px;
    }
  }
}
</style>
