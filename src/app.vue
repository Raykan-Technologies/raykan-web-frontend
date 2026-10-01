<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { createSitePathResolver, defineOrganization, useHead, useSchemaOrg, useSeoMeta } from '#imports'
import { OG_IMAGE_SIZE, useTitleFormatter } from '@/composables/seo'
import { useViewport } from '@/composables/viewport'
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/constants'

const { t, locale } = useI18n()
const formatTitle = useTitleFormatter()
const resolveUrl = createSitePathResolver({ absolute: true, canonical: true, withBase: true })

useHead({
  htmlAttrs: { lang: locale },
  titleTemplate: (title) => formatTitle(title),
})

// defaults for every page, usePageSeo (src/composables/seo.ts) overrides per page
useSeoMeta({
  ogSiteName: () => t('common.companyName'),
  ogType: 'website',
  ogLocale: 'en_US',
  ogImage: resolveUrl('/og/default.jpg'),
  ogImageWidth: OG_IMAGE_SIZE.width,
  ogImageHeight: OG_IMAGE_SIZE.height,
  ogImageAlt: () => t('common.seo.imageAlt'),
  twitterCard: 'summary_large_image',
})

// WebSite and WebPage nodes are added by nuxt-schema-org, linked to this identity
useSchemaOrg([
  defineOrganization({
    name: () => t('common.companyName'),
    logo: '/logo.png',
    email: CONTACT_EMAIL,
    sameAs: Object.values(SOCIAL_LINKS),
  }),
])

// publishes the device's visible screen height as --app-height
useViewport()
</script>

<template>
  <NuxtLoadingIndicator color="var(--color-accent)" />
  <!-- route meta `layout` picks the layout (src/layouts), `default` when unset -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
