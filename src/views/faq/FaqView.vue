<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, defineQuestion, defineWebPage, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import HeroSection from './partials/HeroSection.vue'
import QuestionsSection from './partials/QuestionsSection.vue'
import { FAQ_KEYS } from './questions'

const { t, tm, rt } = useI18n()

usePageSeo({
  title: () => t('faq.seo.title'),
  description: () => t('faq.seo.description'),
})

// an FAQPage with every question, so search can show them as rich results
const answer = (key: string) => (tm(`faq.questions.items.${key}.answer`) as Array<string>).map((line) => rt(line)).join(' ')

useSchemaOrg([
  defineWebPage({ '@type': 'FAQPage' }),
  ...FAQ_KEYS.map((key) => defineQuestion({
    name: () => t(`faq.questions.items.${key}.question`),
    acceptedAnswer: () => answer(key),
  })),
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.faq') },
    ],
  }),
])
</script>
<template>
  <main>
    <HeroSection />
    <QuestionsSection />
  </main>
</template>
