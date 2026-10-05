<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import AppSolutionCards from '@/components/AppSolutionCards.vue'

const { t } = useI18n()
</script>
<template>
  <!-- wp-raykan home services (sections 5594714 desktop/tablet, b658762 mobile) -->
  <r-section class="services-section" tag="article" align="center" min-height="400px"
    :label="t('home.services.label')" :title="t('home.services.title')"
    :description="t('home.services.text')">
    <app-solution-cards seed="home-services" />
  </r-section>
</template>
