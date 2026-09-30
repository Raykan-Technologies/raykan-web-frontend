<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RIcon } from '@/components/elements'
import type { TIcons } from '@/components/icons'

withDefaults(defineProps<{
  size?: number;
  /**
   * Hover effect: `pulse` scales the icon, `highlight` turns it white
   */
  effect?: 'pulse' | 'highlight';
}>(), {
  size: 35,
  effect: 'pulse',
})

const { t } = useI18n()

// icon names double as the i18n keys under common.socials
const links: Array<{ icon: Extract<TIcons, 'facebook' | 'linkedin' | 'instagram'>; url: string }> = [
  { icon: 'facebook', url: 'https://www.facebook.com/profile.php?id=61553746709358' },
  { icon: 'linkedin', url: 'https://www.linkedin.com/company/raykan-technologies/' },
  { icon: 'instagram', url: 'https://www.instagram.com/raykantech/' },
]
</script>
<template>
  <ul class="app-social-links" :class="`app-social-links--${effect}`">
    <li v-for="link in links" :key="link.icon">
      <a class="app-social-links__link" :class="{ 'animate-pulse': effect === 'pulse' }"
        :href="link.url" target="_blank" rel="noopener"
        :aria-label="t(`common.socials.${link.icon}`)">
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
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-accent);
    }
  }

  &.app-social-links--highlight .app-social-links__link {
    &:hover,
    &:focus-visible {
      color: var(--color-white);
    }
  }
}
</style>
