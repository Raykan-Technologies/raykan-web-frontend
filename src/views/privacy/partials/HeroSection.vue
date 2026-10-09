<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RPageHero } from '@/components/elements'
// reuses the Data Science photo
import heroPhoto from '@/assets/images/solutions/data-science.webp'

const props = withDefaults(defineProps<{ source?: string }>(), { source: 'privacy' })

const { t } = useI18n()
</script>
<template>
  <!-- half the screen's height, like the FAQ and solution heroes -->
  <r-page-hero class="privacy-hero" height="half" :title="t(`${props.source}.hero.title`)" :description="t(`${props.source}.hero.description`)"
    :image="heroPhoto" />
</template>
