<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'

const { t } = useI18n()

usePageSeo({
  title: () => t('careers.seo.title'),
  description: () => t('careers.seo.description'),
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.careers') },
    ],
  }),
])
</script>
<template>
  <main>
    <h1>{{ t('careers.title') }}</h1>
  </main>
</template>
