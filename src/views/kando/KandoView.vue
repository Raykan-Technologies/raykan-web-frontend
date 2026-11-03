<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { createSitePathResolver, defineBreadcrumb, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import FeaturesSection from './partials/FeaturesSection.vue'
import FooterSection from './partials/FooterSection.vue'
import HeaderSection from './partials/HeaderSection.vue'
import HeroSection from './partials/HeroSection.vue'
import ModulesSection from './partials/ModulesSection.vue'
import PricingSection from './partials/PricingSection.vue'

const { t, tm, rt } = useI18n()
// a plain node gets no url resolving from nuxt-schema-org, so its links are made absolute here
const resolveUrl = createSitePathResolver({ absolute: true, canonical: true, withBase: true })
const pageUrl = resolveUrl('/kando')
const identityUrl = resolveUrl('/')

usePageSeo({
  title: () => t('kando.seo.title'),
  description: () => t('kando.seo.description'),
})

// the product itself, published by the Organization from app.vue. A plain node rather than defineSoftwareApp,
// which requires a price and a rating: add `offers` (price, priceCurrency) once pricing is public
useSchemaOrg([
  {
    '@type': 'SoftwareApplication',
    '@id': () => `${pageUrl.value}#software`,
    name: () => t('kando.logo'),
    description: () => t('kando.seo.description'),
    url: () => pageUrl.value,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Human resource management system (HRMS)',
    operatingSystem: 'Web, Android, iOS',
    featureList: () => [
      ...(tm('kando.pricing.plans.doTime.features') as Array<string>),
      ...(tm('kando.pricing.plans.doPayroll.features') as Array<string>),
    ].map((feature) => rt(feature)).filter((feature, index, all) => all.indexOf(feature) === index),
    publisher: { '@id': () => `${identityUrl.value}#identity` },
    countryOfOrigin: 'PH',
  },
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.kando') },
    ],
  }),
])
</script>
<template>
  <!-- wp-raykan /kando (post 5321): the product's own landing page, header and footer -->
  <div class="kando-page">
    <HeaderSection />
    <main>
      <HeroSection />
      <ModulesSection />
      <PricingSection />
      <FeaturesSection />
    </main>
    <FooterSection />
  </div>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.kando-page {
  // wp-raykan section content widths
  --kando-section-width: 980px;
  --kando-core-width: 1140px;

  display: flex;
  flex-direction: column;
  min-height: var(--app-height, 100svh);
  color: var(--color-kando-text);

  @include tablet {
    --kando-section-width: 720px;
    --kando-core-width: 720px;
  }

  @include mobile {
    --kando-section-width: 520px;
    --kando-core-width: 520px;
  }

  > main {
    flex: 1;
  }

  // words picked out in orange
  .kando-highlight {
    color: var(--color-kando-500);
  }

  // anchor targets of the menu, kept clear of the fixed header
  [id] {
    scroll-margin-top: var(--header-height);
  }
}

// shared section heading: gradient pill label, Quicksand title, soft intro
.kando-section {
  > .r-section__container > .r-section__header {
    gap: 20px;

    @include tablet {
      align-items: center;
      text-align: center;
    }
  }

  .r-section__label {
    display: inline-block;
    padding: 8px 16px;
    border: 3px solid transparent;
    border-radius: 50px;
    background: linear-gradient(var(--color-white), var(--color-white)) padding-box, var(--color-kando-gradient) border-box;
    color: var(--color-kando-text);
    font-family: var(--font-kando-text);
    font-size: var(--font-size-kando-tag);
    font-weight: var(--font-weight-medium);
    line-height: 1.2;

    @include mobile {
      padding: 4px 8px;
    }
  }

  .r-section__title {
    max-width: none;
    color: var(--color-kando-text);
    font-family: var(--font-kando-heading);
    font-size: var(--font-size-kando-title);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-kando-title);
  }

  .r-section__description {
    margin: 0;
    color: var(--color-kando-text-soft);
    font-family: var(--font-kando-heading);
    font-size: var(--font-size-kando-description);
    line-height: 1.2;
  }
}
</style>
