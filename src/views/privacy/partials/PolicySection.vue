<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import { CONTACT_EMAIL } from '@/constants'
import { PRIVACY_SECTIONS } from '../sections'

const { t, tm } = useI18n()

// i18n paths of each part, so the paragraphs can carry links through <i18n-t>
const count = (path: string) => ((tm(path) as Array<unknown> | undefined) ?? []).length
const paths = (path: string) => Array.from({ length: count(path) }, (_, index) => `${path}.${index}`)

const sections = computed(() => PRIVACY_SECTIONS.map((key) => {
  const base = `privacy.sections.${key}`
  return { key, heading: t(`${base}.heading`), body: paths(`${base}.body`), list: paths(`${base}.list`), after: paths(`${base}.after`) }
}))
</script>
<template>
  <!-- headed sections of plain text; links to the contact email, Google's policies and the NPC -->
  <r-section class="policy-section" width="var(--container-width-privacy)">
    <p class="policy-section__updated">
      {{ t('privacy.updated', { date: t('privacy.updatedDate') }) }}
    </p>

    <section v-for="section in sections" :key="section.key" class="policy-section__item">
      <h2 class="policy-section__heading">{{ section.heading }}</h2>

      <template v-for="part in ['body', 'list', 'after'] as const" :key="part">
        <ul v-if="part === 'list' && section.list.length" class="policy-section__list">
          <li v-for="path in section.list" :key="path">{{ t(path) }}</li>
        </ul>
        <template v-else-if="part !== 'list'">
          <i18n-t v-for="path in section[part]" :key="path" :keypath="path" scope="global" tag="p"
            class="policy-section__text">
            <template #email>
              <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
            </template>
            <template #npc>
              <a href="https://privacy.gov.ph" target="_blank" rel="noopener">{{ t('privacy.links.npc') }}</a>
            </template>
            <template #googlePrivacy>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">{{ t('privacy.links.googlePrivacy') }}</a>
            </template>
            <template #googleTerms>
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener">{{ t('privacy.links.googleTerms') }}</a>
            </template>
          </i18n-t>
        </template>
      </template>
    </section>
  </r-section>
</template>
<style lang="scss">
.policy-section {
  > .r-section__container {
    gap: 40px;
  }

  .policy-section__updated {
    margin: 0;
    color: var(--color-text-muted);
    font-family: var(--font-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
  }

  .policy-section__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .policy-section__heading {
    margin: 0;
    color: var(--color-heading);
    font-family: var(--font-primary);
    font-size: var(--font-size-privacy-heading);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-privacy-heading);
  }

  .policy-section__text,
  .policy-section__list {
    margin: 0;
    color: var(--color-text-muted);
    font-family: var(--font-secondary);
    font-size: var(--font-size-privacy-body);
    line-height: var(--line-height-privacy-body);
  }

  .policy-section__list {
    padding-left: 1.25em;
  }

  a {
    color: var(--color-link);

    &:hover,
    &:focus-visible {
      color: var(--color-link-hover);
    }
  }
}
</style>
