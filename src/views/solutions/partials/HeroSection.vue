<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RButton, RPageHero } from '@/components/elements'
import type { TSolutionHero } from '@/router/solutions'
import blockchain from '@/assets/images/solutions/blockchain.webp'
import dataScience from '@/assets/images/solutions/data-science.webp'
import digitalMarketing from '@/assets/images/solutions/digital-marketing.webp'
import enterpriseResourcePlanning from '@/assets/images/solutions/enterprise-resource-planning.webp'
import itManagedService from '@/assets/images/solutions/it-managed-service.webp'
import softwareDevelopment from '@/assets/images/solutions/software-development.webp'

defineProps<{
  solution: TSolutionHero;
}>()
const { t } = useI18n()

// wp-raykan hero photo per solution (pexels)
const images: Record<TSolutionHero, string> = {
  'software-development': softwareDevelopment,
  'data-science': dataScience,
  'digital-marketing': digitalMarketing,
  'blockchain': blockchain,
  'enterprise-resource-planning': enterpriseResourcePlanning,
  'it-managed-service': itManagedService,
}
</script>
<template>
  <!-- half the screen's height, like the blog and FAQ heroes -->
  <r-page-hero height="half" :title="t(`solutions.items.${solution}`)"
    :description="t(`solutions.pages.${solution}.hero.description`)" :image="images[solution]">
    <template #actions>
      <r-button :to="{ name: 'contact' }">{{ t('buttons.talkWithUs') }}</r-button>
    </template>
  </r-page-hero>
</template>
