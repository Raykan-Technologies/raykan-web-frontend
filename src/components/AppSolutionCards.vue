<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { pickCardBadges, RCard, RSection } from '@/components/elements'
import type { TIcons } from '@/components/icons'
import type { TSolution } from '@/router/solutions'

const props = defineProps<{
  /**
   * Seed for the badge shapes, so each page keeps its own (stable) mix
   */
  seed: string;
}>()

const { t } = useI18n()

// wp-raykan card order; each card links to its solution page
const solutions: Array<{ solution: TSolution; icon: TIcons }> = [
  { solution: 'software-development', icon: 'code-window' },
  { solution: 'data-science', icon: 'chart-growth' },
  { solution: 'enterprise-resource-planning', icon: 'modules' },
  { solution: 'digital-marketing', icon: 'megaphone' },
  { solution: 'it-managed-service', icon: 'server-shield' },
  { solution: 'blockchain', icon: 'blocks' },
]

// a random-looking badge shape per card, the same on every load
const badges = computed(() => pickCardBadges(props.seed, solutions.length))

const cards = computed(() => solutions.map(({ solution, icon }, index) => ({
  solution,
  icon,
  badge: badges.value[index],
  title: t(`solutions.items.${solution}`),
  description: t(`solutions.summaries.${solution}`),
})))
</script>
<template>
  <!-- the six solution cards, 3 per row: home services and the solutions page -->
  <r-section class="app-solution-cards" inner :columns="3" gap="default">
    <r-card v-for="card in cards" :key="card.solution" :icon="card.icon" :badge="card.badge" :title="card.title"
      :to="{ name: card.solution }">
      <p>{{ card.description }}</p>
    </r-card>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// same gap between rows as between columns, like the solution offering cards
.app-solution-cards > .r-section__container {
  row-gap: var(--section-gap);

  @include mobile {
    row-gap: var(--section-gap);
  }
}
</style>
