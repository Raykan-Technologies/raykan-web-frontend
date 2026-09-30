<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from 'vue-page-title'
import HeroSection from './partials/HeroSection.vue'
import MetricsSection from './partials/MetricsSection.vue'
import ServicesSection from './partials/ServicesSection.vue'
import TestimonialsSection from './partials/TestimonialsSection.vue'

const { t } = useI18n()

useTitle(t('home.title'))
</script>
<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <TestimonialsSection />
    <MetricsSection />
  </main>
</template>
