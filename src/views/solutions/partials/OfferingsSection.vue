<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RCard, RSection } from '@/components/elements'
import type { TSolution } from '@/router/solutions'
import { SOLUTION_OFFERINGS } from '../offerings'

const props = defineProps<{
  solution: TSolution;
}>()
const { t, te } = useI18n()

const prefix = computed(() => `solutions.pages.${props.solution}.offerings`)
const items = computed(() => SOLUTION_OFFERINGS[props.solution] ?? [])

const text = (key: string) => te(`${prefix.value}.items.${key}.text`) ? t(`${prefix.value}.items.${key}.text`) : undefined
const hasText = computed(() => items.value.some((item) => text(item.key)))

// 3 cards = one row (stacked on tablet), described cards = 2 across, title-only = 4 across
// (3 when 4 leaves a short row, like wp-raykan's ERP), 2 on tablet; mobile always stacks
const columns = computed(() => {
  const count = items.value.length
  if (count === 3) return { desktop: 3, tablet: 1 }
  if (hasText.value) return { desktop: 2, tablet: 2 }
  return { desktop: count % 4 === 0 ? 4 : 3, tablet: 2 }
})
</script>
<template>
  <!-- wp-raykan solution page section 3d14f47: intro + offering cards, at least 80% of the screen tall -->
  <r-section class="offerings-section" align="center" vertical-align="middle"
    min-height="calc(var(--app-height, 100svh) * 0.8)" :title="t(`${prefix}.title`)"
    :description="t(`${prefix}.description`)">
    <r-section class="offerings-section__grid" inner gap="default"
      :style="{ '--offering-columns': columns.desktop, '--offering-columns-tablet': columns.tablet }">
      <r-card v-for="item in items" :key="item.key" :icon="item.icon" icon-position="left"
        :title="t(`${prefix}.items.${item.key}.title`)">
        <p v-if="text(item.key)">{{ text(item.key) }}</p>
      </r-card>
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.offerings-section {
  // the WP title and intro are long; wide enough to stay at 2 lines on desktop
  // larger, regular-weight heading (wp-raykan 400)
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

  // rows of cards that wrap; a short last row is centred (blockchain 2+2+1, ERP 3+3+3+2)
  .offerings-section__grid > .r-section__container {
    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;
    gap: var(--section-gap);

    > .r-card {
      --columns: var(--offering-columns);

      flex: 0 0 calc((100% - (var(--columns) - 1) * var(--section-gap)) / var(--columns));

      @include tablet {
        --columns: var(--offering-columns-tablet);
      }

      @include mobile {
        --columns: 1;
      }
    }
  }
}
</style>
