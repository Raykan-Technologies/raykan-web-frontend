<script setup lang="ts">
withDefaults(defineProps<{ code?: string }>(), { code: '404' })
</script>

<template>
  <main>
    <h1>{{ code }}</h1>
  </main>
</template>
