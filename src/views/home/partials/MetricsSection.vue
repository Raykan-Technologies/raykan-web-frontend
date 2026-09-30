<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection, RStat } from '@/components/elements'

const { t } = useI18n()

// wp-raykan funfacts; descriptions under home.metrics.items
const metrics = [
  { key: 'ticketResolution', value: 100, suffix: '%' },
  { key: 'clientRetention', value: 100, suffix: '%' },
  { key: 'clientSatisfaction', value: 97, suffix: '%' },
]

const stats = computed(() => metrics.map((metric) => ({
  ...metric,
  description: t(`home.metrics.items.${metric.key}`),
})))
</script>
<template>
  <r-section class="metrics-section" theme="accent-soft" align="center"
    :min-height="{ desktop: '40vh', tablet: '35vh', mobile: 'auto' }"
    :label="t('home.metrics.label')" :title="t('home.metrics.title')"
    :description="t('home.metrics.text')">
    <r-section inner :columns="3">
      <r-stat v-for="stat in stats" :key="stat.key" :value="stat.value" :suffix="stat.suffix">
        <p>{{ stat.description }}</p>
      </r-stat>
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan home metrics (sections 21c8833 desktop/tablet, ad14f64 mobile)
.metrics-section {
  // stacked stats need more room between them than side-by-side ones
  @include mobile {
    .r-section--inner > .r-section__container {
      row-gap: 40px;
    }
  }
}
</style>
