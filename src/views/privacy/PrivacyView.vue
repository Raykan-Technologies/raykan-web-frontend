<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, defineWebPage, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import HeroSection from './partials/HeroSection.vue'
import PolicySection from './partials/PolicySection.vue'

const props = withDefaults(defineProps<{ source?: string }>(), { source: 'privacy' })

const { t } = useI18n()

usePageSeo({
  title: () => t(`${props.source}.seo.title`),
  description: () => t(`${props.source}.seo.description`),
})

useSchemaOrg([
  defineWebPage(),
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t(`${props.source}.title`) },
    ],
  }),
])
</script>
<template>
  <main>
    <HeroSection :source="props.source" />
    <PolicySection :source="props.source" />
  </main>
</template>
