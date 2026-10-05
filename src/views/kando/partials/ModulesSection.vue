<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RButton, RSection } from '@/components/elements'
import wave from '@/assets/images/kando/wave-pattern.webp'
import payroll from '@/assets/images/kando/module-payroll.webp'
import record from '@/assets/images/kando/module-record.webp'
import time from '@/assets/images/kando/module-time.webp'

const { t } = useI18n()

// wp-raykan card order
const images = { doTime: time, doPayroll: payroll, doRecord: record }

const modules = computed(() => (Object.keys(images) as Array<keyof typeof images>).map((key) => ({
  key,
  image: images[key],
  name: t(`kando.modules.items.${key}.name`),
  text: t(`kando.modules.items.${key}.text`),
  imageAlt: t(`kando.modules.items.${key}.imageAlt`),
})))
</script>
<template>
  <!-- wp-raykan kando "services" (af0ab1c): the HR modules as photo cards -->
  <r-section id="services" class="kando-section kando-modules" width="var(--kando-section-width)"
    :label="t('kando.modules.label')" :description="t('kando.modules.description')">
    <template #background>
      <div class="kando-modules__pattern" :style="{ backgroundImage: `url(${wave})` }"></div>
    </template>
    <template #title>
      <i18n-t keypath="kando.modules.title" scope="global">
        <template #modules><span class="kando-highlight">{{ t('kando.modules.modules') }}</span></template>
        <template #needs><span class="kando-highlight">{{ t('kando.modules.needs') }}</span></template>
      </i18n-t>
    </template>

    <div class="kando-modules__cards">
      <article v-for="module in modules" :key="module.key" class="kando-module">
        <img class="kando-module__image" :src="module.image" :alt="module.imageAlt" width="600" height="338"
          loading="lazy" />
        <div class="kando-module__content">
          <h3 class="kando-module__name">{{ module.name }}</h3>
          <p class="kando-module__text">{{ module.text }}</p>
        </div>
      </article>
    </div>

    <r-button variant="kando" class="kando-modules__brochure">{{ t('kando.modules.brochure') }}</r-button>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.kando-modules {
  // wave pattern in the bottom left corner, at half strength
  .kando-modules__pattern {
    position: absolute;
    inset: 0;
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
    pointer-events: none;
  }

  // 3 across (32% each with 16px margins, like wp-raykan), stacked on phones
  .kando-modules__cards {
    display: flex;
    justify-content: center;
    align-items: stretch;

    @include mobile {
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
  }

  .kando-module {
    display: flex;
    flex: 0 0 calc(32% - 32px);
    flex-direction: column;
    margin: 0 16px;
    overflow: hidden;
    border-radius: 75px 25px;
    background-color: var(--color-white);
    filter: grayscale(100%);
    transition: filter 0.3s ease, box-shadow 0.2s ease, transform 0.2s ease;

    &:hover {
      box-shadow: 0 2px 0 4px var(--color-kando-500);
      filter: grayscale(0%);
      transform: scale(1.03);
    }

    @include tablet {
      flex-basis: calc(33% - 32px);
    }

    @include mobile {
      flex-basis: auto;
      width: 75%;
      margin: 0;
    }
  }

  .kando-module__image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 600 / 338;
    object-fit: cover;
  }

  .kando-module__content {
    flex: 1;
    padding: 21px 32px 26px;
    border: 1px solid var(--color-kando-border);
    border-top: 0;
    border-radius: 0 0 75px 25px;
    text-align: center;

    @include tablet {
      padding: 13px 16px 26px;
    }
  }

  .kando-module__name {
    margin: 0 0 10px;
    color: var(--color-kando-text);
    font-family: var(--font-kando-text);
    font-size: var(--font-size-kando-card-title);
    font-weight: var(--font-weight-bold);
    line-height: 1.3;
  }

  .kando-module__text {
    margin: 0;
    color: var(--color-kando-text);
    font-family: var(--font-kando-heading);
    font-size: var(--font-size-sm);
    line-height: 1.5;
  }

  .kando-modules__brochure {
    align-self: center;
    margin-top: 25px;
  }
}
</style>
