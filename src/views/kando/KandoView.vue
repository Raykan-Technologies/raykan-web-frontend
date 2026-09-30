<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useHead } from '#imports'

const { t } = useI18n()

useHead({ title: () => t('kando.title') })
</script>
<template>
  <main>
    <h1>{{ t('kando.title') }}</h1>
  </main>
</template>
