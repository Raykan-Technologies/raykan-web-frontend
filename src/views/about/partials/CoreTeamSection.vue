<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import ericMagto from '@/assets/images/about/eric-magto.webp'
import raymundSesican from '@/assets/images/about/raymund-sesican.webp'

const { t, tm, rt } = useI18n()

// wp-raykan order
const members = computed(() => [
  { key: 'raymund', photo: raymundSesican },
  { key: 'eric', photo: ericMagto },
].map(({ key, photo }) => ({
  key,
  photo,
  name: t(`about.coreTeam.members.${key}.name`),
  role: t(`about.coreTeam.members.${key}.role`),
  bio: (tm(`about.coreTeam.members.${key}.bio`) as Array<string>).map((line) => rt(line)),
})))
</script>
<template>
  <!-- wp-raykan about "Our Core Team" (a4d3c49): photo left, role, name and bio right -->
  <r-section class="core-team-section" theme="light" align="center" min-height="var(--app-height, 100svh)"
    :label="t('about.coreTeam.label')" :title="t('about.coreTeam.title')">
    <r-section v-for="member in members" :key="member.key" class="core-team-section__member" tag="article"
      inner :columns="[30, 70]" gap="wide" columns-align="start">
      <img class="core-team-section__photo" :src="member.photo" :alt="member.name" width="250" height="250"
        loading="lazy">
      <div class="core-team-section__info">
        <span class="core-team-section__role">{{ member.role }}</span>
        <h3 class="core-team-section__name">{{ member.name }}</h3>
        <div class="core-team-section__bio">
          <p v-for="(paragraph, index) in member.bio" :key="index">{{ paragraph }}</p>
        </div>
      </div>
    </r-section>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.core-team-section {
  > .r-section__container {
    gap: 40px;
  }

  // shown on every screen here, not only on phones
  .r-section__label {
    display: block;
  }

  .r-section__title {
    font-size: var(--font-size-about-title);
    line-height: var(--line-height-about-title);
  }

  // wp-raykan leaves 80px under the title on desktop
  > .r-section__container > .r-section__header {
    margin-bottom: 40px;

    @include tablet {
      margin-bottom: 0;
    }
  }

  .core-team-section__photo {
    justify-self: end;
    width: 250px;
    // the 30% column is narrower than the photo on small tablets
    max-width: 100%;
    height: auto;

    @include mobile {
      justify-self: center;
      width: 75%;
    }
  }

  .core-team-section__info {
    display: flex;
    flex-direction: column;
    gap: var(--widget-spacing);
    margin-left: 50px;
    text-align: left;

    @include tablet {
      margin-left: 20px;
    }

    @include mobile {
      margin: 0;
      padding-inline: 30px;
      text-align: center;
    }
  }

  .core-team-section__role {
    color: var(--color-grey-600);
    font-family: var(--font-secondary);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-xs);
    letter-spacing: 1px;
  }

  .core-team-section__name {
    margin: 0;
    color: var(--color-heading);
    font-family: var(--font-primary);
    font-size: var(--font-size-about-member-name);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-about-member-name);
  }

  .core-team-section__bio {
    color: var(--color-grey-600);
    font-family: var(--font-secondary);
    font-size: var(--font-size-about-member-bio);
    line-height: var(--line-height-about-member-bio);

    p {
      margin: 0 0 1em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
