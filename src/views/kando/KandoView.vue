<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTitle } from 'vue-page-title'

const { t } = useI18n()

useTitle(t('kando.title'))
</script>
<template>
  <main>
    <h1>{{ t('kando.title') }}</h1>
  </main>
</template>
