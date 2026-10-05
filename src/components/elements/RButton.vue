<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'
import type { TButtonVariant } from './types'

interface IProps {
  /**
   * Internal route (renders a router link)
   */
  to?: RouteLocationRaw;
  /**
   * External or mailto link (renders an anchor)
   */
  href?: string;
  variant?: TButtonVariant;
  /**
   * Stretch to the full width of the parent
   */
  block?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  variant: 'solid',
})

const tag = computed(() => props.to ? RouterLink : props.href ? 'a' : 'button')
const isExternal = computed(() => !!props.href && /^https?:\/\//.test(props.href))

// touch screens can't hover, so pressing and holding shows the hover colors instead.
// Driven by pointer events rather than :active, which mobile browsers apply inconsistently;
// the press is dropped on release, and on cancel (e.g. when the finger starts scrolling)
const pressed = ref(false)
let pointerType = ''

const onPointerDown = (e: PointerEvent) => {
  pointerType = e.pointerType
  if (e.pointerType === 'touch') pressed.value = true
}
const release = () => {
  pressed.value = false
}
// a long press would otherwise open the browser's link menu
const onContextMenu = (e: MouseEvent) => {
  if (pointerType === 'touch') e.preventDefault()
}
</script>
<template>
  <component :is="tag" class="r-button"
    :class="[`r-button--${variant}`, { 'r-button--block': block, 'r-button--pressed': pressed }]"
    v-bind="to ? { to } : { href }" :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener' : undefined" :type="tag === 'button' ? 'button' : undefined"
    @pointerdown="onPointerDown" @pointerup="release" @pointercancel="release"
    @pointerleave="release" @contextmenu="onContextMenu">
    <slot></slot>
  </component>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// hover colors: both variants turn white with cyan text
@mixin highlighted {
  background-color: var(--color-white);
  color: var(--color-accent);
}

// Kando outline hover: fills orange
@mixin kando-filled {
  background-color: var(--color-kando-500);
  color: var(--color-white);
}

// Elementor button widget: Inter 16/16, 5px radius, 40px tall
// (2px border + 10px/22px padding on both variants, so hovering never changes the size)
.r-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  border: 2px solid transparent;
  border-radius: var(--radius);
  font: var(--font-kit-accent);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s, opacity 0.2s;
  -webkit-tap-highlight-color: transparent;
  // long press: no link preview / text selection, so the pressed colors show
  -webkit-touch-callout: none;
  user-select: none;

  // touch-friendly on phones: 44px tap target, long labels wrap instead of overflowing
  @include mobile {
    min-height: 44px;
    max-width: 100%;
    padding-inline: 14px;
    white-space: normal;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  // mouse: slight dim while clicking
  @media (hover: hover) {
    &:active {
      opacity: 0.85;
    }
  }

  // hover effects only on devices that can hover, so colors don't stick after a tap;
  // touch screens get the same colors while the button is pressed and held (--pressed)

  // cyan with white text; on hover the colors swap (the cyan border keeps it visible on light
  // backgrounds once it turns white)
  &.r-button--solid {
    border-color: var(--color-accent);
    background-color: var(--color-accent);
    color: var(--color-white);

    @media (hover: hover) {
      &:hover {
        @include highlighted;
      }
    }

    &.r-button--pressed {
      @include highlighted;
    }
  }

  // white outline and text; on hover it fills solid white with cyan text
  &.r-button--outline {
    border-color: var(--color-white);
    background-color: transparent;
    color: var(--color-white);

    @media (hover: hover) {
      &:hover {
        @include highlighted;
      }
    }

    &.r-button--pressed {
      @include highlighted;
    }
  }

  // Kando page (wp-raykan .kando-button): its own orange brand, grows slightly on hover
  &.r-button--kando,
  &.r-button--kando-outline,
  &.r-button--kando-light {
    transition: transform 0.2s ease, background-color 0.2s, color 0.2s, border-color 0.2s;

    &:focus-visible {
      outline-color: var(--color-kando-500);
    }

    @media (hover: hover) {
      &:hover {
        transform: scale(1.03);
      }
    }

    &.r-button--pressed {
      transform: scale(1.03);
    }
  }

  // solid orange, no border (padding grown by 2px so it stays 40px tall)
  &.r-button--kando {
    padding: 12px 24px;
    border: 0;
    background-color: var(--color-kando-500);

    @include mobile {
      padding-inline: 16px;
    }

    &,
    &:hover {
      color: var(--color-white);
    }
  }

  &.r-button--kando-outline {
    border-color: var(--color-kando-500);
    background-color: var(--color-white);
    color: var(--color-kando-500);

    @media (hover: hover) {
      &:hover {
        @include kando-filled;
      }
    }

    &.r-button--pressed {
      @include kando-filled;
    }
  }

  // 1px border, padding grown by 1px so it stays 40px tall like the others
  &.r-button--kando-light {
    padding: 11px 23px;
    border-width: 1px;
    border-color: var(--color-kando-border-light);
    background-color: var(--color-white);

    &,
    &:hover {
      color: var(--color-kando-text);
    }

    @include mobile {
      padding-inline: 15px;
    }
  }

  &.r-button--block {
    display: flex;
    width: 100%;
    white-space: normal;
  }
}
</style>
