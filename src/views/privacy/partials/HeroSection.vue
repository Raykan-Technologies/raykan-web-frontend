<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RPageHero } from '@/components/elements'
// reuses the Data Science photo
import heroPhoto from '@/assets/images/solutions/data-science.webp'

const { t } = useI18n()
</script>
<template>
  <!-- same page hero as FAQ and the solution pages -->
  <r-page-hero class="privacy-hero" :title="t('privacy.hero.title')" :description="t('privacy.hero.description')"
    :image="heroPhoto" />
</template>
