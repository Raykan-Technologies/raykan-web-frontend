<script setup lang="ts">
import { shallowRef } from 'vue'
import { RouterView } from 'vue-router'
import router from '@/router'
import layouts from '@/layouts'

const layout = shallowRef()

router.afterEach((to) => layout.value = to.meta.layout ? (layouts[to.meta.layout] || 'div') : 'div')
</script>

<template>
  <component :is="layout || 'div'">
    <RouterView />
  </component>
</template>
