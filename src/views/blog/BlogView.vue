<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import HeroSection from './partials/HeroSection.vue'
import PostsSection from './partials/PostsSection.vue'

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
    <HeroSection />
    <PostsSection />
  </main>
</template>
