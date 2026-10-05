<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import OverviewSection from './partials/OverviewSection.vue'

const { t } = useI18n()

usePageSeo({
  title: () => t('solutions.seo.title'),
  description: () => t('solutions.seo.description'),
})

useSchemaOrg([
  defineWebPage({ '@type': 'CollectionPage' }),
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.solutions') },
    ],
  }),
])
</script>
<template>
  <main>
    <OverviewSection />
  </main>
</template>
