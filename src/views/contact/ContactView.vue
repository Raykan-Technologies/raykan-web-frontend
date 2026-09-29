<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from 'vue-page-title'

const { t } = useI18n()

useTitle(t('contact.title'))
</script>
<template>
  <main>
    <h1>{{ t('contact.title') }}</h1>
  </main>
</template>
