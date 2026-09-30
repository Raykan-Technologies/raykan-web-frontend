<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RCarousel, RSection, RTestimonialCard } from '@/components/elements'
import edenPilarye from '@/assets/images/testimonials/eden-pilarye.webp'
import jayVieSobiono from '@/assets/images/testimonials/jay-vie-sobiono.webp'

const { t } = useI18n()

// keys under home.testimonials.items
const clients = [
  { key: 'edenPilarye', photo: edenPilarye },
  { key: 'jayVieSobiono', photo: jayVieSobiono },
]

const testimonials = computed(() => clients.map(({ key, photo }) => ({
  key,
  photo,
  name: t(`home.testimonials.items.${key}.name`),
  role: t(`home.testimonials.items.${key}.role`),
  quote: t(`home.testimonials.items.${key}.quote`),
})))
</script>
<template>
  <r-section class="testimonials-section" theme="primary"
    :min-height="{ desktop: '55vh', tablet: '60vh', mobile: 'auto' }">
    <r-section inner :columns="2" gap="narrow" columns-align="center">
      <r-section class="testimonials-section__intro" inner :label="t('home.testimonials.label')"
        :title="t('home.testimonials.title')" :description="t('home.testimonials.text')" />

      <!-- one testimonial at a time, next one every 6 seconds -->
      <r-carousel class="testimonials-section__carousel" :items="testimonials" effect="fade"
        :slides-per-view="1" :space-between="30" :speed="800" :autoplay="6000"
        :fade-edges="false" pagination>
        <template #default="{ item }">
          <r-testimonial-card :quote="item.quote" :name="item.name" :role="item.role"
            :photo="item.photo" />
        </template>
      </r-carousel>
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan home testimonials (sections 0b0a63c desktop/tablet, 3bcd39c mobile)
.testimonials-section {
  .testimonials-section__intro {
    // title sits right on top of the text here (wp-raykan: 20px apart)
    .r-section__header {
      margin-bottom: 0;
    }

    @include mobile {
      text-align: center;

      .r-section__header {
        align-items: center;
      }
    }
  }

  // wp-raykan: 85.153% of the column
  .testimonials-section__intro .r-section__description {
    max-width: 85%;

    @include mobile {
      max-width: none;
    }
  }

  // every slide as tall as the tallest testimonial
  .testimonials-section__carousel .r-carousel__slide {
    height: auto;
  }
}
</style>
