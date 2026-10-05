<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { readingMinutes, RPostCard, RSection } from '@/components/elements'
import { usePostCopy } from '../copy'
import { BLOG_POSTS, postCover } from '../posts'

const { t } = useI18n()
const { text, blocks } = usePostCopy()

// newest first, as listed in posts.ts
const posts = computed(() => BLOG_POSTS.map(({ slug, published }) => ({
  slug,
  published,
  title: text(slug, 'title'),
  excerpt: text(slug, 'description'),
  category: text(slug, 'category'),
  imageAlt: text(slug, 'imageAlt'),
  readingTime: readingMinutes(blocks(slug)),
})))
</script>
<template>
  <!-- every post as a card, 3 per row -->
  <r-section class="posts-section" :title="t('blog.list.title')">
    <r-section class="posts-section__cards" inner :columns="3" gap="default">
      <r-post-card v-for="post in posts" :key="post.slug" :to="{ name: 'blog-post', params: { slug: post.slug } }"
        :title="post.title" :excerpt="post.excerpt" :category="post.category" :published="post.published"
        :reading-time="post.readingTime" :image="postCover(post.slug)" :image-alt="post.imageAlt" />
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.posts-section {
  // same gap between rows as between columns, like the solution cards
  .posts-section__cards > .r-section__container {
    row-gap: var(--section-gap);

    @include mobile {
      row-gap: var(--section-gap);
    }
  }
}
</style>
