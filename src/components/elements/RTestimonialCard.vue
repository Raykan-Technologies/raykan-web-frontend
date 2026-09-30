<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import RIcon from './RIcon.vue'

interface IProps {
  quote: string;
  name: string;
  /**
   * Job title / company
   */
  role?: string;
  /**
   * Photo url (imported asset)
   */
  photo?: string;
  /**
   * Stars out of 5
   */
  rating?: number;
}

withDefaults(defineProps<IProps>(), {
  rating: 5,
})

const { t } = useI18n()
</script>
<template>
  <figure class="r-testimonial-card">
    <div v-if="rating" class="r-testimonial-card__rating" role="img"
      :aria-label="t('common.rating', { rating })">
      <r-icon v-for="star in rating" :key="star" name="star" :size="16" />
    </div>

    <blockquote class="r-testimonial-card__quote">
      <p>{{ quote }}</p>
    </blockquote>

    <figcaption class="r-testimonial-card__author">
      <img v-if="photo" class="r-testimonial-card__photo" :src="photo" alt="" width="70" height="70">
      <span class="r-testimonial-card__info">
        <strong class="r-testimonial-card__name">{{ name }}</strong>
        <span v-if="role" class="r-testimonial-card__role">{{ role }}</span>
      </span>
    </figcaption>

    <r-icon name="quote" :size="48" class="r-testimonial-card__mark" />
  </figure>
</template>
<style lang="scss">
// wp-raykan ElementsKit testimonial (style 5)
.r-testimonial-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  margin: 0;
  padding: 30px;
  border-radius: var(--radius-lg);
  background-color: var(--color-testimonial-card);
  color: var(--color-white);
  text-align: left;

  .r-testimonial-card__rating {
    display: flex;
    gap: 8px;
    color: var(--color-accent);
  }

  .r-testimonial-card__quote {
    flex: 1;
    margin: 0;
    font-family: var(--font-primary);
    font-size: var(--font-size-base);
    line-height: 1.4;

    p {
      margin: 0;
    }
  }

  .r-testimonial-card__author {
    display: flex;
    align-items: center;
    gap: 20px;
    // keep clear of the quote mark in the corner
    padding-right: 68px;
  }

  .r-testimonial-card__photo {
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  .r-testimonial-card__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-family: var(--font-primary);
  }

  .r-testimonial-card__name {
    font-size: 18px;
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
  }

  .r-testimonial-card__role {
    color: var(--color-text-subtle);
    font-size: var(--font-size-base);
    line-height: 1.2;
  }

  .r-testimonial-card__mark {
    position: absolute;
    right: 30px;
    bottom: 30px;
    color: var(--color-accent);
  }
}
</style>
