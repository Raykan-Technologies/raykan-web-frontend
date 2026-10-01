<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '#imports'
import { hasHero, type TSolution } from '@/router/solutions'
import { SOLUTION_OFFERINGS } from './offerings'
import HeroSection from './partials/HeroSection.vue'
import OfferingsSection from './partials/OfferingsSection.vue'

const props = defineProps<{
  solution: TSolution;
}>()
const { t } = useI18n()

// all solution routes share this view, so the title must follow the prop
useHead({ title: () => t(`solutions.items.${props.solution}`) })
</script>
<template>
  <main>
    <HeroSection v-if="hasHero(solution)" :solution="solution" />
    <h1 v-else>{{ t(`solutions.items.${solution}`) }}</h1>
    <OfferingsSection v-if="SOLUTION_OFFERINGS[solution]" :solution="solution" />
  </main>
</template>
