<script setup lang="ts" generic="T extends object = ICarouselImage">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules'
import type { Swiper as TSwiper } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import type { ICarouselImage, TResponsive } from './types'

interface IProps {
  /**
   * One slide per item. Images (`ICarouselImage`) render on their own; anything else is drawn
   * by the default slot: `<template #default="{ item }">`
   */
  items: Array<T>;
  slidesPerView?: TResponsive<number>;
  /**
   * Space between slides in px
   */
  spaceBetween?: TResponsive<number>;
  /**
   * Slide transition duration in ms
   */
  speed?: number;
  /**
   * Moves to the next slide every n ms, `0` to disable autoplay
   */
  autoplay?: number;
  loop?: boolean;
  /**
   * Fade slides in and out at the left and right edges instead of clipping them
   */
  fadeEdges?: boolean;
  /**
   * `slide` moves slides sideways, `fade` cross-fades one slide into the next (one per view)
   */
  effect?: 'slide' | 'fade';
  /**
   * Clickable dots below the slides; the active dot fills up until the next autoplay move
   */
  pagination?: boolean;
}

// defaults: wp-raykan testimonial-carousel settings
const props = withDefaults(defineProps<IProps>(), {
  slidesPerView: () => ({ desktop: 4, tablet: 4, mobile: 1 }),
  spaceBetween: () => ({ desktop: 10, tablet: 8, mobile: 10 }),
  speed: 2000,
  autoplay: 5000,
  loop: true,
  fadeEdges: true,
  effect: 'slide',
  pagination: false,
})

const { t } = useI18n()

defineSlots<{
  default?(props: { item: T; index: number }): unknown;
}>()

const isImage = (item: object): item is ICarouselImage => 'src' in item && 'alt' in item

const modules = [
  Autoplay,
  ...(props.effect === 'fade' ? [EffectFade] : []),
  ...(props.pagination ? [Pagination, A11y] : []),
]

// Swiper fills `{{index}}` / `{{slidesLength}}` itself, so pass them through untranslated
const paginationOptions = computed(() => props.pagination ? { clickable: true } : false)
const a11yOptions = computed(() => ({
  paginationBulletMessage: t('common.carousel.goToSlide', { index: '{{index}}' }),
  slideLabelMessage: t('common.carousel.slideLabel', { index: '{{index}}', total: '{{slidesLength}}' }),
}))

// drives the fill of the active dot from Swiper's own autoplay timer
const onAutoplayTimeLeft = (swiper: TSwiper, _time: number, timeLeft: number) => {
  swiper.el.style.setProperty('--r-carousel-progress', String(1 - timeLeft))
}

const toBreakpoints = (value: TResponsive<number>) => {
  const { desktop, tablet, mobile } = typeof value === 'number' ? { desktop: value } : value

  return {
    mobile: mobile ?? tablet ?? desktop,
    tablet: tablet ?? desktop,
    desktop,
  }
}

// Swiper breakpoints are min-width, matching css/_breakpoints (mobile <= 767, tablet <= 1024)
const swiperOptions = computed(() => {
  const perView = toBreakpoints(props.slidesPerView)
  const space = toBreakpoints(props.spaceBetween)

  return {
    slidesPerView: perView.mobile,
    spaceBetween: space.mobile,
    breakpoints: {
      768: { slidesPerView: perView.tablet, spaceBetween: space.tablet },
      1025: { slidesPerView: perView.desktop, spaceBetween: space.desktop },
    },
  }
})

const autoplayOptions = computed(() => props.autoplay > 0
  ? { delay: props.autoplay, disableOnInteraction: false }
  : false)
</script>
<template>
  <swiper class="r-carousel"
    :class="{ 'r-carousel--fade': fadeEdges, 'r-carousel--pagination': pagination }"
    :modules="modules" :slides-per-view="swiperOptions.slidesPerView"
    :space-between="swiperOptions.spaceBetween" :breakpoints="swiperOptions.breakpoints"
    :speed="speed" :loop="loop" :autoplay="autoplayOptions" :effect="effect"
    :fade-effect="{ crossFade: true }" :pagination="paginationOptions" :a11y="a11yOptions"
    @autoplay-time-left="onAutoplayTimeLeft">
    <swiper-slide v-for="(item, index) in items" :key="index" class="r-carousel__slide">
      <slot :item="item" :index="index">
        <img v-if="isImage(item)" :src="item.src" :alt="item.alt" :width="item.width"
          :height="item.height">
      </slot>
    </swiper-slide>
  </swiper>
</template>
<style lang="scss">
.r-carousel {
  // width of the faded strip on each side
  --r-carousel-fade: 12%;

  width: 100%;

  &.r-carousel--fade {
    $mask: linear-gradient(to right, transparent, #000 var(--r-carousel-fade),
      #000 calc(100% - var(--r-carousel-fade)), transparent);

    -webkit-mask-image: $mask;
    mask-image: $mask;
  }

  // dots: inactive ones follow the text color, the active one is a pill that fills with accent
  &.r-carousel--pagination {
    --r-carousel-dot: color-mix(in srgb, currentColor 35%, transparent);
    --r-carousel-dot-active: var(--color-accent);

    padding-bottom: 36px;

    .swiper-pagination {
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      line-height: 0;
    }

    .swiper-pagination-bullet {
      position: relative;
      width: 8px;
      height: 8px;
      margin: 0 !important;
      overflow: hidden;
      border-radius: 4px;
      background-color: var(--r-carousel-dot);
      opacity: 1;
      transition: width 0.3s ease;

      &:focus-visible {
        outline: 2px solid var(--r-carousel-dot-active);
        outline-offset: 2px;
      }
    }

    .swiper-pagination-bullet-active {
      width: 32px;

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--r-carousel-dot-active);
        transform: scaleX(var(--r-carousel-progress, 1));
        transform-origin: left;
      }
    }
  }

  .r-carousel__slide {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
