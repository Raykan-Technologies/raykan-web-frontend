<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { defineArticle, defineBreadcrumb, useSchemaOrg, useSeoMeta } from '#imports'
import { RButton, RPost, type TPostBlock } from '@/components/elements'
import { usePageSeo } from '@/composables/seo'
import HttpError from '@/views/errors/HttpError.vue'
import { findPost, postCover, postShareImage } from './posts'

const props = defineProps<{
  slug: string;
}>()
const { t, te, tm, rt } = useI18n()

const post = computed(() => findPost(props.slug))
const key = (field: string) => `blog.posts.${props.slug}.${field}`

// i18n blocks come back as message functions; resolve them to plain strings for RPost
const blocks = computed<Array<TPostBlock>>(() => {
  const raw = tm(key('body')) as Array<Record<string, unknown>>
  return (Array.isArray(raw) ? raw : []).map((block) => {
    const type = rt(block.type as Parameters<typeof rt>[0]) as TPostBlock['type']
    return type === 'ul' || type === 'ol'
      ? { type, items: (block.items as Array<Parameters<typeof rt>[0]>).map((item) => rt(item)) }
      : { type, text: rt(block.text as Parameters<typeof rt>[0]) }
  })
})

if (post.value) {
  usePageSeo({
    title: () => t(key(te(key('seoTitle')) ? 'seoTitle' : 'title')),
    description: () => t(key('description')),
    image: () => postShareImage(props.slug),
    imageAlt: () => t(key('imageAlt')),
  })

  useSeoMeta({
    ogType: 'article',
    articlePublishedTime: () => post.value?.published,
    articleModifiedTime: () => post.value?.updated ?? post.value?.published,
  })

  useSchemaOrg([
    defineArticle({
      headline: () => t(key('title')),
      description: () => t(key('description')),
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
        { name: () => t(key('title')) },
      ],
    }),
  ])
}
</script>
<template>
  <main v-if="post">
    <r-post :title="t(key('title'))" :category="t(key('category'))" :author="t(key('author'))"
      :published="post.published" :image="postCover(slug)" :image-alt="t(key('imageAlt'))" :blocks="blocks"
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
