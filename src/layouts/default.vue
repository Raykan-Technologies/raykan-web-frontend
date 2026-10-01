<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { AppFooter, AppHeader } from '@/components'

const route = useRoute()
const headerTransparent = computed(() => !!route.meta.headerTransparent)
const footer = computed(() => route.meta.footer ?? 'solid')
</script>
<template>
  <div class="default-layout" :class="{ 'default-layout--header-offset': !headerTransparent }">
    <AppHeader :transparent="headerTransparent" />
    <slot></slot>
    <AppFooter :variant="footer" />
  </div>
</template>
<style lang="scss">
.default-layout {
  // at least one screen tall (measured by useViewport), so the footer sits at the bottom of the
  // screen on short pages instead of floating under the content
  display: flex;
  flex-direction: column;
  min-height: var(--app-height, 100svh);

  > .app-footer {
    margin-top: auto;

    // pulled up over the last section, which leaves --app-footer-height of room at its bottom
    &.app-footer--transparent {
      margin-top: calc(-1 * var(--app-footer-height, 0px));
    }
  }

  // the header is fixed, so solid-header pages start below it
  &.default-layout--header-offset {
    padding-top: var(--header-height);
  }
}
</style>
