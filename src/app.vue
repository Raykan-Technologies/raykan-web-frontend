<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead, useRuntimeConfig } from '#imports'
import { useViewport } from '@/composables/viewport'

const { locale } = useI18n()
const { appName } = useRuntimeConfig().public

useHead({
  htmlAttrs: { lang: locale },
  titleTemplate: (title) => title ? `${title} - ${appName}` : appName,
})

// publishes the device's visible screen height as --app-height
useViewport()
</script>

<template>
  <NuxtLoadingIndicator color="var(--color-accent)" />
  <!-- route meta `layout` picks the layout (src/layouts), `default` when unset -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
