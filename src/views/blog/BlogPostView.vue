<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { defineArticle, defineBreadcrumb, useSchemaOrg, useSeoMeta } from '#imports'
import { RButton, RPost } from '@/components/elements'
import { usePageSeo } from '@/composables/seo'
import HttpError from '@/views/errors/HttpError.vue'
import { usePostCopy } from './copy'
import { findPost, postCover, postShareImage } from './posts'

const props = defineProps<{
  slug: string;
}>()
const { t } = useI18n()
const { text, seoTitle, blocks } = usePostCopy()

const post = computed(() => findPost(props.slug))
const body = computed(() => blocks(props.slug))

if (post.value) {
  usePageSeo({
    title: () => seoTitle(props.slug),
    description: () => text(props.slug, 'description'),
    image: () => postShareImage(props.slug),
    imageAlt: () => text(props.slug, 'imageAlt'),
  })

  useSeoMeta({
    ogType: 'article',
    articlePublishedTime: () => post.value?.published,
    articleModifiedTime: () => post.value?.updated ?? post.value?.published,
  })

  useSchemaOrg([
    defineArticle({
      headline: () => text(props.slug, 'title'),
      description: () => text(props.slug, 'description'),
      image: () => postShareImage(props.slug),
      datePublished: () => post.value?.published,
      dateModified: () => post.value?.updated ?? post.value?.published,
      // posts are credited to the company, the Organization from app.vue
      author: { '@id': '#identity' },
    }),
    defineBreadcrumb({
      itemListElement: [
        { name: () => t('menus.home'), item: '/' },
        { name: () => t('menus.blog'), item: '/blog' },
        { name: () => text(props.slug, 'title') },
      ],
    }),
  ])
}
</script>
<template>
  <main v-if="post">
    <r-post :title="text(slug, 'title')" :category="text(slug, 'category')" :author="text(slug, 'author')"
      :published="post.published" :image="postCover(slug)" :image-alt="text(slug, 'imageAlt')" :blocks="body"
      :back-to="{ name: 'blog' }" :back-label="t('blog.backToBlog')">
      <r-button class="blog-post__cta" :to="{ name: 'contact' }">{{ t('buttons.talkWithUs') }}</r-button>
    </r-post>
  </main>
  <http-error v-else code="404" />
</template>
<style lang="scss">
.blog-post__cta {
  align-self: flex-start;
  margin-top: 12px;
}
</style>
