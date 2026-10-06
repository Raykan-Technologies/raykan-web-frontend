<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { readingMinutes, RPagination, RPostCard, RSection } from '@/components/elements'
import { usePostCopy } from '../copy'
import { BLOG_PAGE_COUNT, postCover, postsOnPage } from '../posts'

const props = defineProps<{
  page: number;
}>()

const { t } = useI18n()
const { text, blocks } = usePostCopy()

// this page's posts, newest first as listed in posts.ts
const posts = computed(() => postsOnPage(props.page).map(({ slug, published }) => ({
  slug,
  published,
  title: text(slug, 'title'),
  excerpt: text(slug, 'description'),
  category: text(slug, 'category'),
  imageAlt: text(slug, 'imageAlt'),
  readingTime: readingMinutes(blocks(slug)),
})))

const pageRoute = (page: number) => page === 1 ? { name: 'blog' } : { name: 'blog-page', params: { page } }
</script>
<template>
  <!-- one page of posts as cards, 3 per row, page links below -->
  <r-section class="posts-section" :title="t('blog.list.title')">
    <r-section class="posts-section__cards" inner :columns="3" gap="default">
      <r-post-card v-for="post in posts" :key="post.slug" :to="{ name: 'blog-post', params: { slug: post.slug } }"
        :title="post.title" :excerpt="post.excerpt" :category="post.category" :published="post.published"
        :reading-time="post.readingTime" :image="postCover(post.slug)" :image-alt="post.imageAlt" />
    </r-section>
    <r-pagination class="posts-section__pagination" :page="page" :total="BLOG_PAGE_COUNT" :to="pageRoute"
      :label="t('blog.list.pagination')" />
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

  .posts-section__pagination {
    margin-top: var(--section-gap);
  }
}
</style>
