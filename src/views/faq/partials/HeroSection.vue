<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RPageHero } from '@/components/elements'
// reuses the IT Managed Service support-desk photo
import heroPhoto from '@/assets/images/solutions/it-managed-service.webp'

const { t } = useI18n()
</script>
<template>
  <!-- wp-raykan FAQ hero: same page hero as the solution pages -->
  <r-page-hero class="faq-hero" :title="t('faq.hero.title')" :description="t('faq.hero.description')"
    :image="heroPhoto" />
</template>
<style lang="scss">
// the WP lead is longer than the solution ones; show all of it instead of cutting it at 2 lines
.faq-hero .r-page-hero__description {
  display: block;
  -webkit-line-clamp: unset;
  line-clamp: unset;
}
</style>
