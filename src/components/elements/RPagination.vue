<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, type RouteLocationRaw } from 'vue-router'
import RIcon from './RIcon.vue'

interface IProps {
  /**
   * Current page, 1-based
   */
  page: number;
  total: number;
  /**
   * Route of a page; every page is a real link, so crawlers can follow them
   */
  to: (page: number) => RouteLocationRaw;
  /**
   * Accessible name of the nav, e.g. "Blog pages"
   */
  label?: string;
}

const props = defineProps<IProps>()
const { t } = useI18n()

// first, last and the current page with its neighbours; gaps become an ellipsis (0)
const items = computed(() => {
  const pages = [...new Set([1, props.page - 1, props.page, props.page + 1, props.total])]
    .filter((page) => page >= 1 && page <= props.total)
    .sort((a, b) => a - b)
  return pages.flatMap((page, index) => {
    const previous = pages[index - 1]
    if (previous === undefined || page - previous === 1) return [page]
    // a gap of one page shows that page instead of an ellipsis
    return page - previous === 2 ? [page - 1, page] : [0, page]
  })
})
</script>
<template>
  <!-- page links under a list; hidden when everything fits on one page -->
  <nav v-if="total > 1" class="r-pagination" :aria-label="label ?? t('common.pagination.label')">
    <router-link v-if="page > 1" class="r-pagination__item r-pagination__step" :to="to(page - 1)" rel="prev"
      :aria-label="t('common.pagination.previous')">
      <r-icon name="chevron-left" :size="18" aria-hidden="true" />
    </router-link>
    <span v-else class="r-pagination__item r-pagination__step r-pagination__item--disabled" aria-hidden="true">
      <r-icon name="chevron-left" :size="18" />
    </span>

    <template v-for="(item, index) in items" :key="item || `gap-${index}`">
      <span v-if="!item" class="r-pagination__gap" aria-hidden="true">…</span>
      <span v-else-if="item === page" class="r-pagination__item r-pagination__item--current" aria-current="page"
        :aria-label="t('common.pagination.page', { page: item })">{{ item }}</span>
      <router-link v-else class="r-pagination__item" :to="to(item)"
        :aria-label="t('common.pagination.page', { page: item })">{{ item }}</router-link>
    </template>

    <router-link v-if="page < total" class="r-pagination__item r-pagination__step r-pagination__step--next"
      :to="to(page + 1)" rel="next" :aria-label="t('common.pagination.next')">
      <r-icon name="chevron-left" :size="18" aria-hidden="true" />
    </router-link>
    <span v-else class="r-pagination__item r-pagination__step r-pagination__step--next r-pagination__item--disabled"
      aria-hidden="true">
      <r-icon name="chevron-left" :size="18" />
    </span>
  </nav>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.r-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;

  // 40px squares like RButton's height, 44px tap targets on phones
  .r-pagination__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    padding-inline: 8px;
    border: 2px solid var(--color-accent);
    border-radius: var(--radius);
    color: var(--color-primary);
    font: var(--font-kit-accent);
    text-decoration: none;
    transition: background-color 0.3s, color 0.3s, opacity 0.2s;
    -webkit-tap-highlight-color: transparent;

    @include mobile {
      min-width: 44px;
      height: 44px;
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }
  }

  a.r-pagination__item {
    @media (hover: hover) {
      &:hover {
        background-color: var(--color-accent);
        color: var(--color-white);
      }
    }

    &:active {
      opacity: 0.85;
    }
  }

  .r-pagination__item--current {
    background-color: var(--color-accent);
    color: var(--color-white);
  }

  .r-pagination__item--disabled {
    opacity: 0.35;
  }

  // the next arrow is the back chevron mirrored
  .r-pagination__step--next .r-icon {
    transform: scaleX(-1);
  }

  .r-pagination__gap {
    min-width: 24px;
    color: var(--color-primary);
    text-align: center;
  }
}
</style>
