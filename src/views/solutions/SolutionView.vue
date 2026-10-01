<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, defineService, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import { hasHero, type TSolution } from '@/router/solutions'
import { SOLUTION_OFFERINGS } from './offerings'
import HeroSection from './partials/HeroSection.vue'
import OfferingsSection from './partials/OfferingsSection.vue'

const props = defineProps<{
  solution: TSolution;
}>()
const { t, te } = useI18n()

// share images under public/og/, the rest fall back to the default one
const SOLUTION_OG_IMAGES: ReadonlyArray<TSolution> = ['software-development']

// all solution routes share this view, so every value must follow the prop;
// pages without `seo` copy yet fall back to the solution name
const seoKey = (key: string) => `solutions.pages.${props.solution}.seo.${key}`
const seoText = (key: string) => te(seoKey(key)) ? t(seoKey(key)) : undefined
const name = () => t(`solutions.items.${props.solution}`)

usePageSeo({
  title: () => seoText('title') ?? name(),
  description: () => seoText('description'),
  image: () => SOLUTION_OG_IMAGES.includes(props.solution) ? `/og/${props.solution}.jpg` : undefined,
  imageAlt: () => seoText('imageAlt'),
})

useSchemaOrg([
  defineService({
    name,
    serviceType: name,
    description: () => seoText('description'),
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.solutions'), item: '/solutions' },
      { name },
    ],
  }),
])
</script>
<template>
  <main>
    <HeroSection v-if="hasHero(solution)" :solution="solution" />
    <h1 v-else>{{ t(`solutions.items.${solution}`) }}</h1>
    <OfferingsSection v-if="SOLUTION_OFFERINGS[solution]" :solution="solution" />
  </main>
</template>
