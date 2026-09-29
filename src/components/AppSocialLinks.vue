<script setup lang="ts">
import { RIcon } from '@/components/elements'
import type { TIcons } from '@/components/icons'

withDefaults(defineProps<{
  size?: number;
}>(), {
  size: 35,
})

const links: Array<{ label: string; icon: TIcons; url: string }> = [
  { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61553746709358' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/raykan-technologies/' },
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/raykantech/' },
]
</script>
<template>
  <ul class="app-social-links">
    <li v-for="link in links" :key="link.icon">
      <a class="app-social-links__link animate-pulse" :href="link.url" target="_blank" rel="noopener"
        :aria-label="link.label">
        <r-icon :name="link.icon" :size="size" />
      </a>
    </li>
  </ul>
</template>
<style lang="scss">
.app-social-links {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  .app-social-links__link {
    display: flex;
    color: var(--color-accent);

    &:hover {
      color: var(--color-accent);
    }
  }
}
</style>
