<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { AppHeader } from '@/components'

const route = useRoute()
const headerTransparent = computed(() => !!route.meta.headerTransparent)
</script>
<template>
  <div class="default-layout" :class="{ 'default-layout--header-offset': !headerTransparent }">
    <AppHeader :transparent="headerTransparent" />
    <slot></slot>
  </div>
</template>
<style lang="scss">
.default-layout {
  // the header is fixed, so solid-header pages start below it
  &.default-layout--header-offset {
    padding-top: var(--header-height);
  }
}
</style>
