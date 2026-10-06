<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import HttpError from '@/views/errors/HttpError.vue'
import HeroSection from './partials/HeroSection.vue'
import PostsSection from './partials/PostsSection.vue'
import { BLOG_PAGE_COUNT } from './posts'

const props = withDefaults(defineProps<{
  page?: number;
}>(), {
  page: 1,
})
const { t } = useI18n()

// the page is re-created per route, so a plain value is enough
const exists = props.page <= BLOG_PAGE_COUNT

if (exists) {
  // later pages get their number in the title, so search results don't show duplicates
  usePageSeo({
    title: () => props.page > 1 ? t('blog.seo.pageTitle', { title: t('blog.seo.title'), page: props.page }) : t('blog.seo.title'),
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
}
</script>
<template>
  <main v-if="exists">
    <HeroSection />
    <PostsSection :page="page" />
  </main>
  <http-error v-else code="404" />
</template>
