<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from 'vue-page-title'

const { t } = useI18n()

useTitle(t('home.title'))
</script>
<template>
  <main>
    <h1>{{ t('home.title') }}</h1>
  </main>
</template>
