<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RSection } from '@/components/elements'
import { CONTACT_EMAIL } from '@/constants'

const { t, tm, rt } = useI18n()
type TMessage = Parameters<typeof rt>[0]

// i18n paths of each block, so paragraphs and list items can carry links through <i18n-t>
const blocks = computed(() => ((tm('privacy.body') as Array<Record<string, unknown>> | undefined) ?? [])
  .map((block, index) => {
    const path = `privacy.body.${index}`
    const type = rt(block.type as TMessage)
    const items = Array.isArray(block.items) ? block.items.map((_, item) => `${path}.items.${item}`) : []
    return { path, type, items }
  }))
</script>
<template>
  <!-- the policy as one list of headings, paragraphs and lists; links to the contact email and the NPC -->
  <r-section class="policy-section" width="var(--container-width-privacy)">
    <p class="policy-section__updated">
      {{ t('privacy.updated', { date: t('privacy.updatedDate') }) }}
    </p>

    <div class="policy-section__body">
      <template v-for="block in blocks" :key="block.path">
        <h2 v-if="block.type === 'h2'" class="policy-section__heading">{{ t(`${block.path}.text`) }}</h2>
        <h3 v-else-if="block.type === 'h3'" class="policy-section__subheading">{{ t(`${block.path}.text`) }}</h3>
        <ul v-else-if="block.type === 'ul'" class="policy-section__list">
          <li v-for="item in block.items" :key="item">{{ t(item) }}</li>
        </ul>
        <i18n-t v-else :keypath="`${block.path}.text`" scope="global" tag="p" class="policy-section__text">
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
    </div>
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

  .policy-section__body {
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

  // a section starts with extra room above its heading
  .policy-section__heading:not(:first-child) {
    margin-top: 28px;
  }

  .policy-section__subheading {
    margin: 8px 0 0;
    color: var(--color-heading);
    font-family: var(--font-primary);
    font-size: var(--font-size-privacy-subheading);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-privacy-subheading);
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
