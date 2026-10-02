<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { pickCardBadges, RCard, RSection } from '@/components/elements'
import type { TIcons } from '@/components/icons'

const { t } = useI18n()

// wp-raykan card order
const principles: Array<{ key: string; icon: TIcons }> = [
  { key: 'integrity', icon: 'shield-check' },
  { key: 'growth', icon: 'sprout' },
  { key: 'collaboration', icon: 'users' },
  { key: 'improvement', icon: 'arrows-cycle' },
  { key: 'value', icon: 'gem' },
]

// a random-looking badge shape per card, the same on every load
const badges = pickCardBadges('about-principles', principles.length)

const cards = computed(() => principles.map(({ key, icon }, index) => ({
  key,
  icon,
  badge: badges[index],
  title: t(`about.principles.items.${key}.title`),
  text: t(`about.principles.items.${key}.text`),
})))
</script>
<template>
  <!-- wp-raykan about "The Ideas we live by" (20b5d14): slides up over the pinned hero,
    so it's at least a screen tall to cover it -->
  <r-section class="principles-section" align="center" min-height="var(--app-height, 100svh)"
    :label="t('about.principles.label')" :title="t('about.principles.title')">
    <r-section class="principles-section__cards" inner gap="default">
      <r-card v-for="card in cards" :key="card.key" :icon="card.icon" :badge="card.badge" :title="card.title">
        <p>{{ card.text }}</p>
      </r-card>
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.principles-section {
  // shown on every screen here, not only on phones
  .r-section__label {
    display: block;
  }

  .r-section__title {
    font-size: var(--font-size-about-title);
    line-height: var(--line-height-about-title);
  }

  // 3 + 2 with the short row centred; 2 across on tablets, stacked on phones
  .principles-section__cards > .r-section__container {
    --columns: 3;

    flex-flow: row wrap;
    justify-content: center;
    align-items: stretch;
    gap: var(--section-gap);

    @include tablet {
      --columns: 2;
    }

    @include mobile {
      --columns: 1;
    }

    > .r-card {
      flex: 0 0 calc((100% - (var(--columns) - 1) * var(--section-gap)) / var(--columns));
    }
  }
}
</style>
