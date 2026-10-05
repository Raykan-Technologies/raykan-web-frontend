<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import HeroSection from './partials/HeroSection.vue'
import PolicySection from './partials/PolicySection.vue'

const { t } = useI18n()

usePageSeo({
  title: () => t('privacy.seo.title'),
  description: () => t('privacy.seo.description'),
})

useSchemaOrg([
  defineWebPage(),
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.privacy') },
    ],
  }),
])
</script>
<template>
  <main>
    <HeroSection />
    <PolicySection />
  </main>
</template>
