<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RPageHero } from '@/components/elements'
// Unsplash, Kawê Rodrigues (Unsplash License), cropped wide
import heroPhoto from '@/assets/images/blog/hero.webp'

const { t } = useI18n()
</script>
<template>
  <!-- the inner-page hero at half the screen's height -->
  <r-page-hero class="blog-hero" height="half" :title="t('blog.hero.title')" :description="t('blog.hero.description')"
    :image="heroPhoto" />
</template>
