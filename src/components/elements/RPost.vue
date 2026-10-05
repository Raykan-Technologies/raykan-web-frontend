<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { RouteLocationRaw } from 'vue-router'
import { formatPostDate, readingMinutes } from './post'
import RIcon from './RIcon.vue'
import RSection from './RSection.vue'
import type { TPostBlock } from './types'

interface IProps {
  /**
   * Post heading (the page's h1)
   */
  title: string;
  category?: string;
  author?: string;
  /**
   * Publish date, ISO `YYYY-MM-DD`
   */
  published: string;
  /**
   * Cover image url, 16:9
   */
  image?: string;
  imageAlt?: string;
  /**
   * The post's content, rendered in order; the default slot goes after it (e.g. a call to action)
   */
  blocks: Array<TPostBlock>;
  /**
   * Link back to the post list, shown above the category
   */
  backTo?: RouteLocationRaw;
  backLabel?: string;
}

const props = defineProps<IProps>()
const { t, locale } = useI18n()

const date = computed(() => formatPostDate(props.published, locale.value))
const minutes = computed(() => readingMinutes(props.blocks))
</script>
<template>
  <!-- a blog post: back link, category, title and meta, the cover, then the body in a readable column -->
  <r-section class="r-post" tag="article" width="var(--container-width-post)">
    <header class="r-post__header">
      <router-link v-if="backTo" :to="backTo" class="r-post__back">
        <r-icon name="chevron-left" :size="16" aria-hidden="true" />
        <span>{{ backLabel }}</span>
      </router-link>
      <p v-if="category" class="r-post__category">{{ category }}</p>
      <h1 class="r-post__title">{{ title }}</h1>
      <p class="r-post__meta">
        <span v-if="author">{{ author }}</span>
        <time :datetime="published">{{ date }}</time>
        <span>{{ t('common.post.readingTime', { minutes }) }}</span>
      </p>
    </header>

    <img v-if="image" class="r-post__cover" :src="image" :alt="imageAlt ?? ''" width="1600" height="900">

    <div class="r-post__body">
      <template v-for="(block, index) in blocks" :key="index">
        <ul v-if="block.type === 'ul'">
          <li v-for="(item, itemIndex) in block.items" :key="itemIndex">{{ item }}</li>
        </ul>
        <ol v-else-if="block.type === 'ol'">
          <li v-for="(item, itemIndex) in block.items" :key="itemIndex">{{ item }}</li>
        </ol>
        <blockquote v-else-if="block.type === 'quote'">
          <p>{{ block.text }}</p>
        </blockquote>
        <component :is="block.type" v-else-if="'text' in block">{{ block.text }}</component>
      </template>
      <slot></slot>
    </div>
  </r-section>
</template>
<style lang="scss">
.r-post {
  > .r-section__container {
    gap: 40px;
  }

  .r-post__header {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .r-post__back {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: 4px;
    margin-bottom: 8px;
    color: var(--color-text-muted);
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
    text-decoration: none;

    &:hover,
    &:focus-visible {
      color: var(--color-link-hover);
    }
  }

  .r-post__category {
    margin: 0;
    color: var(--color-accent);
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-sm);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .r-post__title {
    margin: 0;
    color: var(--color-heading);
    font-family: var(--font-primary);
    font-size: var(--font-size-post-title);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-post-title);
    text-wrap: balance;
  }

  // author · date · reading time, a dot between each
  .r-post__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 12px;
    margin: 0;
    color: var(--color-text-muted);
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);

    > * + *::before {
      display: inline-block;
      width: 4px;
      height: 4px;
      margin-right: 12px;
      border-radius: 50%;
      background-color: currentColor;
      vertical-align: middle;
      content: '';
    }
  }

  .r-post__cover {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    object-fit: cover;
  }

  .r-post__body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--color-post-text);
    font-family: var(--font-secondary);
    font-size: var(--font-size-post-body);
    line-height: var(--line-height-post-body);

    h2,
    h3,
    p,
    ul,
    ol,
    blockquote {
      margin: 0;
    }

    h2,
    h3 {
      color: var(--color-heading);
      font-family: var(--font-primary);
      font-weight: var(--font-weight-semibold);
    }

    // extra room above a heading, so each part reads as its own block
    h2 {
      margin-top: 20px;
      font-size: var(--font-size-post-heading);
      line-height: var(--line-height-post-heading);
    }

    h3 {
      margin-top: 8px;
      font-size: var(--font-size-post-subheading);
      line-height: var(--line-height-post-subheading);
    }

    ul,
    ol {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-left: 1.4em;
    }

    li::marker {
      color: var(--color-accent);
    }

    blockquote {
      padding: 4px 0 4px 24px;
      border-left: 4px solid var(--color-accent);
      color: var(--color-primary);
      font-family: var(--font-primary);
      font-size: var(--font-size-post-quote);
      font-weight: var(--font-weight-medium);
      line-height: var(--line-height-post-quote);
    }

    // links in the text only, so buttons in the slot keep their own colors
    :where(p, li, blockquote) a {
      color: var(--color-link);

      &:hover,
      &:focus-visible {
        color: var(--color-link-hover);
      }
    }
  }
}
</style>
