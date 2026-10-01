<script setup lang="ts">
import type { TIcons } from '../icons'
import RIcon from './RIcon.vue'

interface IProps {
  icon: TIcons;
  title: string;
  titleTag?: 'h3' | 'h4';
  iconSize?: number;
}

withDefaults(defineProps<IProps>(), {
  titleTag: 'h3',
  iconSize: 80,
})
</script>
<template>
  <!-- Elementor icon box: icon left of the text, on top on mobile -->
  <div class="r-icon-box">
    <r-icon :name="icon" :size="iconSize" class="r-icon-box__icon" />
    <div class="r-icon-box__content">
      <component :is="titleTag" class="r-icon-box__title">{{ title }}</component>
      <div v-if="$slots.default" class="r-icon-box__text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.r-icon-box {
  display: flex;
  align-items: center;
  gap: 24px;
  text-align: left;

  @include mobile {
    flex-direction: column;
    text-align: center;
  }

  .r-icon-box__icon {
    flex-shrink: 0;
    color: var(--color-primary);
  }

  .r-icon-box__title {
    margin: 0 0 12px;
    color: var(--color-heading);
    font-family: var(--font-primary);
    font-size: var(--font-size-icon-box-title);
    font-weight: var(--font-weight-semibold);
    line-height: 1.2;
  }

  .r-icon-box__text {
    color: var(--color-grey-600);
    font-family: var(--font-secondary);
    font-size: var(--font-size-icon-box-text);
    line-height: var(--line-height-icon-box-text);

    > :first-child {
      margin-top: 0;
    }

    > :last-child {
      margin-bottom: 0;
    }
  }
}
</style>
