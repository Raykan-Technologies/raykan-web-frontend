<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import ContactSection from './partials/ContactSection.vue'

const { t } = useI18n()

usePageSeo({
  title: () => t('contact.seo.title'),
  description: () => t('contact.seo.description'),
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.contact') },
    ],
  }),
])
</script>
<template>
  <main>
    <ContactSection />
  </main>
</template>
