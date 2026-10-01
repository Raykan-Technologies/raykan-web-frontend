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

// 4 described cards = 2x2, 3 = one row (stacked on tablet), more = 4 across (2 on tablet);
// mobile always stacks
const columns = computed(() => {
  if (items.value.length === 4) return 2
  return items.value.length === 3 ? { desktop: 3, tablet: 1 } : { desktop: 4, tablet: 2 }
})

const text = (key: string) => te(`${prefix.value}.items.${key}.text`) ? t(`${prefix.value}.items.${key}.text`) : undefined
</script>
<template>
  <!-- wp-raykan solution page section 3d14f47: intro + offering cards, at least 80% of the screen tall -->
  <r-section class="offerings-section" align="center" vertical-align="middle"
    min-height="calc(var(--app-height, 100svh) * 0.8)" :title="t(`${prefix}.title`)"
    :description="t(`${prefix}.description`)">
    <r-section class="offerings-section__grid" inner :columns="columns" gap="default">
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

  // same gap between rows as between columns
  .offerings-section__grid > .r-section__container {
    row-gap: var(--section-gap);

    @include mobile {
      row-gap: var(--section-gap);
    }
  }
}
</style>
