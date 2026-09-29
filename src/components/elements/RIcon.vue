<script setup lang="ts">
import { computed } from 'vue';
import { ICONS, type TIcons } from '../icons';
import type { TIconTypes } from './types';
import { FILE_ICONS, type TFileIcons } from '../file-icons';

interface IProps {
  name: TIcons | TFileIcons;
  size?: number;
  spin?: boolean;
  type?: TIconTypes;
  hover?: boolean;
  activeHover?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  size: 24,
  type: 'default',
})

const iconStyles = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  cursor: props.hover || props.activeHover ? 'pointer' : undefined,
}))

const iconClasses = computed(() => [
  `r-icon--${props.type}`,
  {
    'r-icon--spinning': props.spin,
    'animate-loading': props.spin,
    'r-icon--hoverable': props.activeHover,
  },
])
</script>
<template>
  <div class="r-icon" :class="iconClasses" :style="iconStyles">
    <component :is="{ ...ICONS, ...FILE_ICONS }[name]" :height="size" :width="size"
      :type="props.activeHover ? 'default' : props.type" />
  </div>
</template>
<style lang="scss">
.r-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .2s ease;
  user-select: none;

  svg {
    pointer-events: none;
    transition: .2s ease;
  }

  .r-icon__active-path {
    opacity: 0;
    transition: all .2s ease;

    &[non-fill] {
      opacity: 1 !important;
      fill-opacity: 0;
    }
  }

  &.r-icon--two-tone {
    transition: .2s ease;

    .r-icon__two-tone {
      color: var(--color-cyan-500);
    }
  }

  &.r-icon--two-tone.r-icon--hoverable:hover {
    color: var(--color-brand-500) !important;

    .r-icon__two-tone {
      transition: .2s ease;
      color: var(--color-brand-500) !important;
    }

    .r-icon__active-path {
      opacity: 0.2;

      &[non-fill] {
        fill-opacity: 0.2;
      }
    }
  }

  &.r-icon--active {
    color: var(--color-brand-500) !important;

    .r-icon__active-path {
      opacity: 0.2;

      &[non-fill] {
        opacity: 1;
        fill-opacity: 0.2;
      }
    }
  }

  &.r-icon--success {
    color: var(--color-green-700) !important;

    .r-icon__active-path {
      opacity: 0.2;
    }
  }

  &.r-icon--none {
    color: var(--color-grey-700) !important;

    .r-icon__active-path {
      opacity: 0.2;
    }
  }

  &.r-icon--warning {
    color: var(--color-yellow-600) !important;

    .r-icon__active-path {
      opacity: 0.2;
    }
  }

  &.r-icon--error {
    color: var(--color-red-600);

    .r-icon__active-path {
      opacity: 0.2;
    }
  }

  &.r-icon--soft {
    color: var(--color-grey-500) !important;
  }

  &.r-icon--spinning {
    pointer-events: none;
    transition: transform .2s;
  }
}
</style>
