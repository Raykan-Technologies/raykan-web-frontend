<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { defineBreadcrumb, useSchemaOrg } from '#imports'
import { usePageSeo } from '@/composables/seo'
import CoreTeamSection from './partials/CoreTeamSection.vue'
import HeroSection from './partials/HeroSection.vue'
import MissionSection from './partials/MissionSection.vue'
import PrinciplesSection from './partials/PrinciplesSection.vue'
import TeamSection from './partials/TeamSection.vue'

const { t } = useI18n()

usePageSeo({
  title: () => t('about.seo.title'),
  description: () => t('about.seo.description'),
  image: '/og/about.jpg',
  imageAlt: () => t('about.seo.imageAlt'),
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: () => t('menus.home'), item: '/' },
      { name: () => t('menus.about') },
    ],
  }),
])
</script>
<template>
  <main>
    <HeroSection>
      <MissionSection />
    </HeroSection>
    <PrinciplesSection />
    <CoreTeamSection />
    <TeamSection />
  </main>
</template>
