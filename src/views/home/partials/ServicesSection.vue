<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { pickCardBadges, RCard, RSection } from '@/components/elements'
import type { TIcons } from '@/components/icons'
import type { TSolution } from '@/router/solutions'

const { t } = useI18n()

// wp-raykan card order; each card links to its solution page
const services: Array<{ solution: TSolution; icon: TIcons }> = [
  { solution: 'software-development', icon: 'code-window' },
  { solution: 'data-science', icon: 'chart-growth' },
  { solution: 'enterprise-resource-planning', icon: 'modules' },
  { solution: 'digital-marketing', icon: 'megaphone' },
  { solution: 'it-managed-service', icon: 'server-shield' },
  { solution: 'blockchain', icon: 'blocks' },
]

// a random-looking badge shape per card, the same on every load
const badges = pickCardBadges('home-services', services.length)

const cards = computed(() => services.map(({ solution, icon }, index) => ({
  solution,
  icon,
  badge: badges[index],
  title: t(`solutions.items.${solution}`),
  description: t(`home.services.items.${solution}`),
})))
</script>
<template>
  <r-section class="services-section" tag="article" align="center" min-height="400px"
    :label="t('home.services.label')" :title="t('home.services.title')"
    :description="t('home.services.text')">
    <r-section class="services-section__cards" inner :columns="3" gap="default">
      <r-card v-for="card in cards" :key="card.solution" :icon="card.icon" :badge="card.badge" :title="card.title"
        :to="{ name: card.solution }">
        <p>{{ card.description }}</p>
      </r-card>
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan home services (sections 5594714 desktop/tablet, b658762 mobile)
.services-section {
  .services-section__cards {
    // same gap between rows as between columns, like the solution offering cards
    > .r-section__container {
      row-gap: var(--section-gap);

      @include mobile {
        row-gap: var(--section-gap);
      }
    }
  }
}
</style>
