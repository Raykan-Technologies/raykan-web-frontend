<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RIcon } from '@/components/elements'
import { SOCIAL_LINKS, type TSocial } from '@/constants'

withDefaults(defineProps<{
  size?: number;
  /**
   * Hover effect: `pulse` scales the icon, `highlight` turns it white
   */
  effect?: 'pulse' | 'highlight';
  /**
   * Icon color: `accent` is cyan (turns white with `highlight`), `light` is white (turns cyan)
   */
  tone?: 'accent' | 'light';
}>(), {
  size: 35,
  effect: 'pulse',
  tone: 'accent',
})

const { t } = useI18n()

// icon names double as the i18n keys under common.socials
const links = (Object.keys(SOCIAL_LINKS) as TSocial[]).map((icon) => ({ icon, url: SOCIAL_LINKS[icon] }))
</script>
<template>
  <ul class="app-social-links" :class="[`app-social-links--${effect}`, `app-social-links--${tone}`]">
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

  // the icon color, and the one `highlight` switches to
  --social-color: var(--color-accent);
  --social-color-highlight: var(--color-white);

  &.app-social-links--light {
    --social-color: var(--color-white);
    --social-color-highlight: var(--color-accent);
  }

  .app-social-links__link {
    display: flex;
    color: var(--social-color);
    transition: color 0.3s ease;

    &:hover {
      color: var(--social-color);
    }
  }

  &.app-social-links--highlight .app-social-links__link {
    &:hover,
    &:focus-visible {
      color: var(--social-color-highlight);
    }
  }
}
</style>
