<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '#imports'

const { t } = useI18n()

useHead({ title: () => t('contact.title') })
</script>
<template>
  <main>
    <h1>{{ t('contact.title') }}</h1>
  </main>
</template>
