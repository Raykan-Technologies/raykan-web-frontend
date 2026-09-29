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
  <r-section class="services-section" tag="article" width="full" gutter="none" align="center"
    min-height="400px">
    <span class="services-section__label">{{ t('home.services.label') }}</span>
    <h2 class="services-section__title">{{ t('home.services.title') }}</h2>

    <r-section class="services-section__cards" inner :columns="3" gap="no">
      <r-card v-for="card in cards" :key="card.solution" :icon="card.icon" :title="card.title"
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
  padding: 40px;

  @include mobile {
    padding: 20px 24px 40px;
  }

  // shown on the wp-raykan mobile layout only
  .services-section__label {
    display: none;
    color: var(--color-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);

    @include mobile {
      display: block;
    }
  }

  .services-section__title {
    width: 100%;
    // wp-raykan: 27.432% of the 1360px column, wraps to three lines
    max-width: 373px;
    margin: 0;
    // 60px below, minus the 20px container gap
    padding-bottom: 40px;
    font-family: var(--font-primary);
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-2xl);

    @include tablet {
      max-width: 595px;
      padding-bottom: 0;
    }

    @include mobile {
      max-width: none;
    }
  }

  .services-section__cards {
    max-width: var(--container-width);
    margin-inline: auto;
    // the cards sit edge to edge (wp-raykan column gap "no"), rows touch too
    > .r-section__container {
      row-gap: 0;
    }
  }
}
</style>
