<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from 'vue-page-title'
import HeroSection from './partials/HeroSection.vue'

const { t } = useI18n()

useTitle(t('home.title'))
</script>
<template>
  <main>
    <HeroSection />
  </main>
</template>
