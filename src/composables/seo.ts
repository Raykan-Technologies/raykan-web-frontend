import { computed, toValue, type MaybeRefOrGetter } from 'vue'
import { useI18n } from 'vue-i18n'
import { createSitePathResolver, useHead, useRoute, useSeoMeta } from '#imports'

/** Open Graph image size, every image under public/og/ is cropped to it */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 }

export interface IPageSeo {
  title: MaybeRefOrGetter<string>;
  description?: MaybeRefOrGetter<string | undefined>;
  /**
   * Share image under public/, e.g. `/og/software-development.jpg`; app.vue's default when unset
   */
  image?: MaybeRefOrGetter<string | undefined>;
  imageAlt?: MaybeRefOrGetter<string | undefined>;
  /**
   * Use `title` as is, without the ` | Raykan Technologies` suffix (home page)
   */
  absoluteTitle?: boolean;
}

/**
 * Builds the full page title: `Page | Raykan Technologies`, or just the company name.
 * Shared with app.vue's titleTemplate so both stay in sync.
 */
export const useTitleFormatter = () => {
  const { t } = useI18n()

  return (title?: string | null) => title ? `${title} | ${t('common.companyName')}` : t('common.companyName')
}

/**
 * Sets the page's title, description, canonical url and Open Graph tags (site-wide defaults are in app.vue).
 * Values may be getters, so tags follow i18n and route props (solution pages share one view).
 */
export const usePageSeo = (seo: IPageSeo) => {
  const route = useRoute()
  const formatTitle = useTitleFormatter()
  const resolveUrl = createSitePathResolver({ absolute: true, canonical: true, withBase: true })

  const title = computed(() => seo.absoluteTitle ? toValue(seo.title) : formatTitle(toValue(seo.title)))
  // path only: query strings never end up in the canonical url
  const url = resolveUrl(computed(() => route.path))
  const image = computed(() => toValue(seo.image))
  const imageUrl = resolveUrl(computed(() => image.value ?? ''))

  useHead({
    // the title is already formatted above
    titleTemplate: null,
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    title,
    description: () => toValue(seo.description),
    ogTitle: title,
    ogDescription: () => toValue(seo.description),
    ogUrl: url,
    ogImage: () => image.value ? imageUrl.value : undefined,
    ogImageWidth: () => image.value ? OG_IMAGE_SIZE.width : undefined,
    ogImageHeight: () => image.value ? OG_IMAGE_SIZE.height : undefined,
    ogImageAlt: () => image.value ? toValue(seo.imageAlt) : undefined,
  })
}
