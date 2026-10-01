<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageSeo } from '@/composables/seo'
import FooterSection from './partials/FooterSection.vue'
import HeroSection from './partials/HeroSection.vue'
import MetricsSection from './partials/MetricsSection.vue'
import ServicesSection from './partials/ServicesSection.vue'
import TestimonialsSection from './partials/TestimonialsSection.vue'

const { t } = useI18n()

usePageSeo({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  absoluteTitle: true,
})
</script>
<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <TestimonialsSection />
    <MetricsSection />
    <FooterSection />
  </main>
</template>
