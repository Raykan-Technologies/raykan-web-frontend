<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, type RouteLocationRaw } from 'vue-router'
import { formatPostDate } from './post'

interface IProps {
  /**
   * The post's page
   */
  to: RouteLocationRaw;
  title: string;
  /**
   * Short summary, 3 lines at most
   */
  excerpt?: string;
  category?: string;
  /**
   * Publish date, ISO `YYYY-MM-DD`
   */
  published: string;
  readingTime?: number;
  /**
   * Cover image url, 16:9
   */
  image?: string;
  imageAlt?: string;
}

const props = defineProps<IProps>()
const { t, locale } = useI18n()

const date = computed(() => formatPostDate(props.published, locale.value))
</script>
<template>
  <!-- a blog post in a list: cover, category, title, excerpt and date; the whole card links to the post.
    Same hover and focus as RCard, like every card on the site -->
  <router-link :to="to" class="r-post-card">
    <img v-if="image" class="r-post-card__cover" :src="image" :alt="imageAlt ?? ''" width="1600" height="900"
      loading="lazy">
    <div class="r-post-card__content">
      <p v-if="category" class="r-post-card__category">{{ category }}</p>
      <h3 class="r-post-card__title">{{ title }}</h3>
      <p v-if="excerpt" class="r-post-card__excerpt">{{ excerpt }}</p>
      <p class="r-post-card__meta">
        <time :datetime="published">{{ date }}</time>
        <span v-if="readingTime">{{ t('common.post.readingTime', { minutes: readingTime }) }}</span>
      </p>
    </div>
  </router-link>
</template>
<style lang="scss">
.r-post-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 16px;
  border-radius: var(--radius-lg);
  color: var(--color-text-muted);
  text-align: left;
  text-decoration: none;
  transition: background-color 0.4s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: var(--color-card-hover);
    color: var(--color-text-muted);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    background-color: var(--color-card-hover);
  }

  .r-post-card__cover {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-md);
    object-fit: cover;
  }

  .r-post-card__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;
  }

  .r-post-card__category {
    margin: 0;
    color: var(--color-accent);
    font-family: var(--font-secondary);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-xs);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  // 2 lines at most, like RCard titles
  .r-post-card__title {
    display: -webkit-box;
    margin: 0;
    overflow: hidden;
    color: var(--color-primary);
    font-family: var(--font-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    line-height: 1.3;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .r-post-card__excerpt {
    display: -webkit-box;
    margin: 0;
    overflow: hidden;
    font-family: var(--font-secondary);
    font-size: var(--font-size-base);
    line-height: var(--line-height-sm);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }

  // pushed to the bottom, so dates line up across a row; a dot between date and reading time
  .r-post-card__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 10px;
    margin: auto 0 0;
    padding-top: 4px;
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);

    > * + *::before {
      display: inline-block;
      width: 4px;
      height: 4px;
      margin-right: 10px;
      border-radius: 50%;
      background-color: currentColor;
      vertical-align: middle;
      content: '';
    }
  }
}
</style>
