<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { AppFooter } from '@/components'
import { RButton, RSection } from '@/components/elements'
import team from '@/assets/images/home/team.webp'

const { t } = useI18n()
</script>
<template>
  <!-- fills the device's screen: --app-height is measured live (useViewport), 100svh until then -->
  <r-section class="footer-section" tag="footer" theme="primary" width="1200px" align="center"
    min-height="var(--app-height, 100svh)" :image="team" overlay="var(--color-overlay-about)">
    <h2 class="footer-section__title">{{ t('home.about.title') }}</h2>

    <div class="footer-section__statement">
      <p>{{ t('home.about.statement') }}</p>
      <p>{{ t('home.about.closing') }}</p>
    </div>

    <div class="footer-section__actions">
      <r-button href="mailto:info@raykan.co">{{ t('home.about.startBuilding') }}</r-button>
      <r-button :to="{ name: 'careers' }" variant="outline" class="footer-section__join">
        {{ t('home.about.joinTeam') }}
      </r-button>
    </div>

    <AppFooter class="footer-section__footer" />
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

// wp-raykan home "We are Raykan" block with the footer rows (section 32dbc0c, mobile 9f4f15d)
.footer-section {
  // soft dark-blue glow behind the white text over the photo
  --footer-title-shadow: 0 0 18px rgba(9, 4, 77, 0.77);
  --footer-text-shadow: 0 0 68px rgba(44, 23, 151, 0.67);

  // the shared section padding, plus room for the fixed header so the content centers below it.
  // --app-header-height is the header's measured height (AppHeader), already shrunk by the time
  // you reach the footer
  padding-top: calc(
    var(--app-header-height, var(--header-height-sticky)) + var(--section-padding-y)
  );

  // strictly 2 lines, like every section title
  .footer-section__title {
    display: -webkit-box;
    margin: 0;
    overflow: hidden;
    color: var(--color-white);
    font-family: var(--font-primary);
    font-size: clamp(32px, 6vw, 83px);
    font-weight: var(--font-weight-bold);
    line-height: 1.05;
    text-shadow: var(--footer-title-shadow);
    text-wrap: balance;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .footer-section__statement {
    font-family: var(--font-primary);
    font-size: var(--font-size-2xl);
    line-height: 30px;
    text-shadow: var(--footer-text-shadow);

    p {
      margin: 0;
    }

    @include tablet {
      padding-inline: 50px;
      font-size: 18px;
      line-height: 1.6;
    }

    @include mobile {
      padding-inline: 0;
      font-size: var(--font-size-base);
    }
  }

  .footer-section__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px 76px;
    padding-top: 15px;

    @include mobile {
      gap: 16px;
    }
  }

  // wp-raykan: 1px accent outline with accent text
  .footer-section__join {
    border-width: 1px;
    color: var(--color-accent);
  }

  .footer-section__footer {
    margin-top: 30px;
  }
}
</style>
