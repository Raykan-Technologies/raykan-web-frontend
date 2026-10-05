<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RButton, RIcon, RSection } from '@/components/elements'
import type { TIcons } from '@/components/icons'
import { KANDO_SIGN_UP_URL } from '@/constants'

const { t, tm, rt } = useI18n()

// wp-raykan: clock = timekeeping, clipboard = payroll, both for the bundle
const plans: Array<{ key: string; icons: Array<TIcons> }> = [
  { key: 'doTime', icons: ['clock'] },
  { key: 'doPayroll', icons: ['clipboard'] },
  { key: 'bundle', icons: ['clock', 'clipboard'] },
]

const cards = computed(() => plans.map(({ key, icons }) => ({
  key,
  icons,
  name: t(`kando.pricing.plans.${key}.name`),
  features: (tm(`kando.pricing.plans.${key}.features`) as Array<string>).map((feature) => rt(feature)),
})))
</script>
<template>
  <!-- wp-raykan kando "cta" (ec08ec4): plan cards, each opening the Kando sign-up -->
  <r-section class="kando-section kando-pricing" width="var(--kando-section-width)"
    :label="t('kando.pricing.label')" :description="t('kando.pricing.description')">
    <template #title>
      <i18n-t keypath="kando.pricing.title" scope="global">
        <template #highlight><span class="kando-highlight">{{ t('kando.pricing.highlight') }}</span></template>
      </i18n-t>
    </template>

    <div class="kando-pricing__plans">
      <article v-for="card in cards" :key="card.key" class="kando-plan">
        <div class="kando-plan__head">
          <r-icon v-for="icon in card.icons" :key="icon" :name="icon" class="kando-plan__icon" />
          <h3 class="kando-plan__name">{{ card.name }}</h3>
        </div>
        <div class="kando-plan__features">
          <p class="kando-plan__includes">{{ t('kando.pricing.includes') }}</p>
          <ul class="kando-plan__list">
            <li v-for="feature in card.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <div class="kando-plan__footer">
          <r-button :href="KANDO_SIGN_UP_URL" variant="kando-outline" block class="kando-plan__cta">
            {{ t('kando.pricing.getStarted') }}
          </r-button>
        </div>
      </article>
    </div>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.kando-pricing {
  border-block: 5px solid var(--color-kando-500);

  // white fading into orange; beats the section theme's background
  &.r-section {
    background: var(--color-kando-pricing-bg);
  }

  // 3 equal cards, stacked and centred on phones
  .kando-pricing__plans {
    display: flex;
    align-items: stretch;
    gap: 20px;

    @include mobile {
      flex-direction: column;
      align-items: center;
    }
  }

  .kando-plan {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    border-radius: 18px;
    background-color: var(--color-white);
    box-shadow: 0 4px 12px var(--color-kando-shadow-card);
    transition: transform 0.2s ease;

    @include mobile {
      flex: none;
      width: 300px;
      max-width: 100%;
    }
  }

  .kando-plan__head {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 20px;
    color: var(--color-kando-500);
    transition: background-color 0.2s, color 0.2s;
  }

  .kando-plan__name {
    margin: 0;
    color: var(--color-kando-text-card);
    font-family: var(--font-kando-text);
    font-size: var(--font-size-kando-card-title);
    font-weight: var(--font-weight-semibold);
    line-height: 1.2;
    transition: color 0.2s;
  }

  .kando-plan__features {
    flex: 1;
    border-top: 1.5px solid var(--color-kando-divider);
  }

  .kando-plan__includes {
    margin: 0;
    padding: 20px 20px 10px;
    color: var(--color-kando-text-card);
    font-family: var(--font-kando-text);
    font-size: var(--font-size-sm);
  }

  .kando-plan__list {
    margin: 0;
    padding: 0 20px 15px;
    list-style: none;

    li {
      margin: 6px 0;
      color: var(--color-kando-text-card);
      font-family: var(--font-kando-heading);
      font-size: var(--font-size-sm);
      line-height: 1.3;

      &::before {
        content: '✔';
        margin-right: 8px;
        color: var(--color-kando-500);
        font-weight: var(--font-weight-bold);
      }
    }
  }

  .kando-plan__footer {
    padding: 0 20px 20px;
  }

  // the whole card drives the hover, so the button doesn't grow on its own
  .kando-plan__cta {
    font-family: var(--font-kando-text);

    &:hover,
    &.r-button--pressed {
      transform: none;
    }
  }

  // hover: orange head and button, slight lift
  .kando-plan:hover {
    transform: scale(1.01);

    .kando-plan__head,
    .kando-plan__cta {
      background-color: var(--color-kando-500);
      color: var(--color-white);
    }

    .kando-plan__name {
      color: var(--color-white);
    }
  }
}
</style>
