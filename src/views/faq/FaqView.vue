<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from 'vue-page-title'

const { t } = useI18n()

useTitle(t('faq.title'))
</script>
<template>
  <main>
    <h1>{{ t('faq.title') }}</h1>
  </main>
</template>
