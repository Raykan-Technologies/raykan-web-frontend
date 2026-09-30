<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import type { ICarouselImage, TResponsive } from './types'

interface IProps {
  images: Array<ICarouselImage>;
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
   * Delay between slides in ms, `0` to disable autoplay
   */
  autoplay?: number;
  loop?: boolean;
  /**
   * Fade slides in and out at the left and right edges instead of clipping them
   */
  fadeEdges?: boolean;
}

// defaults: wp-raykan testimonial-carousel settings
const props = withDefaults(defineProps<IProps>(), {
  slidesPerView: () => ({ desktop: 4, tablet: 4, mobile: 1 }),
  spaceBetween: () => ({ desktop: 10, tablet: 8, mobile: 10 }),
  speed: 2000,
  autoplay: 5000,
  loop: true,
  fadeEdges: true,
})

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
  <swiper class="r-carousel" :class="{ 'r-carousel--fade': fadeEdges }" :modules="[Autoplay]"
    :slides-per-view="swiperOptions.slidesPerView" :space-between="swiperOptions.spaceBetween"
    :breakpoints="swiperOptions.breakpoints" :speed="speed" :loop="loop" :autoplay="autoplayOptions">
    <swiper-slide v-for="image in images" :key="image.src" class="r-carousel__slide">
      <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height">
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
