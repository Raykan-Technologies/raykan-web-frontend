<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import dennisUy from '@/assets/images/about/dennis-uy.webp'
import dionleeUy from '@/assets/images/about/dionlee-uy.webp'
import enriquePacudan from '@/assets/images/about/enrique-pacudan.webp'
import jcPogosa from '@/assets/images/about/jc-pogosa.webp'

const { t } = useI18n()

// wp-raykan order
const members = computed(() => [
  { key: 'enrique', photo: enriquePacudan },
  { key: 'jc', photo: jcPogosa },
  { key: 'dionlee', photo: dionleeUy },
  { key: 'dennis', photo: dennisUy },
].map(({ key, photo }) => ({
  key,
  photo,
  name: t(`about.team.members.${key}.name`),
  role: t(`about.team.members.${key}.role`),
})))
</script>
<template>
  <!-- wp-raykan about "Our Raykan Team" (836601b): white fading into primary, 4 member cards -->
  <r-section class="team-section" width="full" align="center" min-height="var(--app-height, 100svh)"
    :label="t('about.team.label')" :title="t('about.team.title')">
    <r-section class="team-section__members" inner :columns="{ desktop: 4, tablet: 2 }" gap="default">
      <article v-for="member in members" :key="member.key" class="team-section__member">
        <img class="team-section__photo" :src="member.photo" :alt="member.name" width="400" height="400"
          loading="lazy">
        <h3 class="team-section__name">{{ member.name }}</h3>
        <p class="team-section__role">{{ member.role }}</p>
      </article>
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.team-section {
  background: var(--color-about-team-gradient);

  // shown on every screen here, not only on phones
  .r-section__label {
    display: block;
  }

  .r-section__title {
    font-size: var(--font-size-about-title);
    line-height: var(--line-height-about-title);
  }

  // wp-raykan insets the row by 100px on desktop; tablets show 2 across, not 4 tiny ones
  .team-section__members > .r-section__container {
    row-gap: var(--section-gap);
    padding-inline: 100px;

    @include tablet {
      padding-inline: 0;
    }
  }

  // full size in the wide desktop row (wp-raykan is full width); capped on smaller screens
  .team-section__member {
    width: 100%;
    margin-inline: auto;
    color: var(--color-white);

    @include tablet {
      max-width: 322px;
    }
  }

  .team-section__photo {
    display: block;
    width: 100%;
    height: auto;
    // same rounding as the cards
    border-radius: var(--radius-lg);
  }

  .team-section__name,
  .team-section__role {
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .team-section__name {
    margin: 15px 0 5px;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: var(--font-size-about-team-name);
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
  }

  .team-section__role {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: var(--font-size-about-team-role);
    line-height: 1.5;
  }
}
</style>
