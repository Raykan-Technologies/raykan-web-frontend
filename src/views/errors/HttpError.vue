<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from 'vue-page-title'

const props = withDefaults(defineProps<{
  code?: string;
}>(), {
  code: '404',
})
const { t } = useI18n()

useTitle(t(`errorPages.${props.code}.title`))
</script>
<template>
  <main>
    <h1>{{ code }}</h1>
    <h3>{{ t(`errorPages.${code}.title`) }}</h3>
    <p>{{ t(`errorPages.${code}.description`) }}</p>
  </main>
</template>
