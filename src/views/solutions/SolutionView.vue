<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '#imports'
import type { TSolution } from '@/router/solutions'

const props = defineProps<{
  solution: TSolution;
}>()
const { t } = useI18n()

// all solution routes share this view, so the title must follow the prop
useHead({ title: () => t(`solutions.items.${props.solution}`) })
</script>
<template>
  <main>
    <h1>{{ t(`solutions.items.${solution}`) }}</h1>
  </main>
</template>
