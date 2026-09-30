<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setResponseStatus, useHead, useRequestEvent } from '#imports'

const props = withDefaults(defineProps<{
  code?: string;
}>(), {
  code: '404',
})
const { t } = useI18n()

// server-rendered error pages answer with their own status instead of 200
const event = useRequestEvent()
if (event) setResponseStatus(event, Number(props.code))

useHead({ title: () => t(`errorPages.${props.code}.title`) })
</script>
<template>
  <main>
    <h1>{{ code }}</h1>
    <h3>{{ t(`errorPages.${code}.title`) }}</h3>
    <p>{{ t(`errorPages.${code}.description`) }}</p>
  </main>
</template>
