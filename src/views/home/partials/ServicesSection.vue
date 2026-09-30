<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RCard, RSection } from '@/components/elements'
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

const cards = computed(() => services.map(({ solution, icon }) => ({
  solution,
  icon,
  title: t(`solutions.items.${solution}`),
  description: t(`home.services.items.${solution}`),
})))
</script>
<template>
  <r-section class="services-section" tag="article" align="center" min-height="400px"
    :label="t('home.services.label')" :title="t('home.services.title')">
    <r-section class="services-section__cards" inner :columns="3" gap="no">
      <r-card v-for="card in cards" :key="card.solution" :icon="card.icon" :title="card.title"
        :to="{ name: card.solution }">
        <p>{{ card.description }}</p>
      </r-card>
    </r-section>
  </r-section>
</template>
<style lang="scss">
// wp-raykan home services (sections 5594714 desktop/tablet, b658762 mobile)
.services-section {
  .services-section__cards {
    // the cards sit edge to edge (wp-raykan column gap "no"), rows touch too
    > .r-section__container {
      row-gap: 0;
    }
  }
}
</style>
