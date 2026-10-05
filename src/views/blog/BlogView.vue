<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'

const { t } = useI18n()

usePageSeo({
  title: () => t('blog.seo.title'),
  description: () => t('blog.seo.description'),
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.blog') },
    ],
  }),
])
</script>
<template>
  <main>
    <h1>{{ t('blog.title') }}</h1>
  </main>
</template>
