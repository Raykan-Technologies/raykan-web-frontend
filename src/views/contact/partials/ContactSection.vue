<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import { useI18n } from 'vue-i18n'
import { RButton, RIcon, RSection } from '@/components/elements'
import type { TIcons } from '@/components/icons'
import AppSocialLinks from '@/components/AppSocialLinks.vue'
import { CONTACT_EMAIL, CONTACT_MESSAGE_MAX, CONTACT_PHONE } from '@/constants'
import contactGrid from '@/assets/images/contact/contact-grid.svg'
import { useRuntimeConfig, useScriptGoogleRecaptcha } from '#imports'

const { t } = useI18n()
const id = useId()

const MESSAGE_MAX = CONTACT_MESSAGE_MAX

// wp-raykan FormCraft fields plus a contact number; `half` fields share a row
const fields = computed<Array<{ key: 'name' | 'company' | 'email' | 'phone'; type: string; icon: TIcons; required: boolean; autocomplete: string; half?: boolean }>>(() => [
  { key: 'name', type: 'text', icon: 'user', required: true, autocomplete: 'name' },
  { key: 'company', type: 'text', icon: 'building', required: false, autocomplete: 'organization' },
  { key: 'email', type: 'email', icon: 'envelope', required: true, autocomplete: 'email', half: true },
  { key: 'phone', type: 'tel', icon: 'telephone', required: false, autocomplete: 'tel', half: true },
])

const empty = () => ({ name: '', company: '', email: '', phone: '', message: '', website: '' })
const values = ref(empty())
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

// reCAPTCHA v3 (Nuxt Scripts), loaded on first focus of the form; no site key in local dev
const siteKey = useRuntimeConfig().public.scripts?.googleRecaptcha?.siteKey ?? ''
const recaptcha = siteKey ? useScriptGoogleRecaptcha({ scriptOptions: { trigger: 'manual' } }) : undefined

// tokens expire after two minutes, so get one right before sending
const getToken = async () => {
  if (!recaptcha) return ''
  const { grecaptcha } = await recaptcha.load()
  return new Promise<string>((resolve, reject) => {
    grecaptcha.ready(() => grecaptcha.execute(siteKey, { action: 'contact' }).then(resolve, reject))
  })
}

// the browser checks the required fields first, the server checks them again
const onSubmit = async () => {
  if (status.value === 'sending') return
  status.value = 'sending'
  try {
    const token = await getToken()
    await $fetch('/api/contact', { method: 'POST', body: { ...values.value, token } })
    values.value = empty()
    status.value = 'sent'
  } catch {
    status.value = 'error'
  }
}
</script>
<template>
  <!-- wp-raykan contact page (5c811d2), colors reversed: white, the home hero grid in blue in the
    corner, the heading over two columns: how to reach us, and the message form -->
  <r-section class="contact-section" hero theme="light" width="var(--container-width-contact)"
    min-height="var(--app-height, 100svh)" vertical-align="middle">
    <template #background>
      <img class="contact-section__grid" :src="contactGrid" alt="" width="1271" height="999">
    </template>

    <h1 class="contact-section__title">{{ t('contact.heading') }}</h1>

    <div class="contact-section__columns">
      <address class="contact-section__info">
        <h2 class="contact-section__label">{{ t('contact.info.reach') }}</h2>
        <p class="contact-section__detail">
          <i18n-t keypath="contact.info.phone" scope="global" tag="span">
            <template #number>
              <a :href="`tel:${CONTACT_PHONE.tel}`">{{ CONTACT_PHONE.display }}</a>
            </template>
          </i18n-t>
          <i18n-t keypath="contact.info.email" scope="global" tag="span">
            <template #email>
              <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
            </template>
          </i18n-t>
        </p>

        <h2 class="contact-section__label">{{ t('contact.info.visit') }}</h2>
        <p class="contact-section__detail contact-section__detail--address">{{ t('contact.info.address') }}</p>

        <h2 class="contact-section__label contact-section__label--light">{{ t('contact.info.connect') }}</h2>
        <app-social-links class="contact-section__socials" :size="25" effect="highlight" />
      </address>

      <form class="contact-section__form" :aria-label="t('contact.form.label')" @submit.prevent="onSubmit"
        @focusin.once="recaptcha?.load()">
        <div class="contact-section__fields">
          <label v-for="field in fields" :key="field.key" class="contact-section__field"
            :class="{ 'contact-section__field--half': field.half }">
            <span class="contact-section__field-label">{{ t(`contact.form.${field.key}`) }}</span>
            <span class="contact-section__control">
              <input v-model="values[field.key]" class="contact-section__input" :type="field.type"
                :name="field.key" :placeholder="t(`contact.form.${field.key}Placeholder`)"
                :required="field.required" :autocomplete="field.autocomplete">
              <r-icon class="contact-section__field-icon" :name="field.icon" :size="20" aria-hidden="true" />
            </span>
          </label>
        </div>

        <label class="contact-section__field">
          <span class="contact-section__field-label">{{ t('contact.form.message') }}</span>
          <textarea v-model="values.message" class="contact-section__input contact-section__input--message"
            name="message" rows="5" :maxlength="MESSAGE_MAX" :placeholder="t('contact.form.messagePlaceholder')"
            :aria-describedby="`${id}-count`" required></textarea>
          <span :id="`${id}-count`" class="contact-section__count">
            {{ t('contact.form.count', { count: values.message.length, max: MESSAGE_MAX }) }}
          </span>
        </label>

        <!-- honeypot: off screen and skipped by keyboard and screen readers -->
        <input v-model="values.website" class="contact-section__honeypot" type="text" name="website"
          tabindex="-1" autocomplete="off" aria-hidden="true">

        <r-button class="contact-section__submit" type="submit" :disabled="status === 'sending'">
          {{ t(status === 'sending' ? 'contact.form.sending' : 'contact.form.submit') }}
        </r-button>

        <p class="contact-section__status" :class="`contact-section__status--${status}`" role="status">
          <template v-if="status === 'sent' || status === 'error'">{{ t(`contact.form.${status}`) }}</template>
        </p>

        <!-- Google's required notice, since the floating badge is hidden -->
        <i18n-t v-if="siteKey" keypath="contact.form.recaptcha.notice" scope="global" tag="p"
          class="contact-section__recaptcha">
          <template #privacy>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">{{ t('contact.form.recaptcha.privacy') }}</a>
          </template>
          <template #terms>
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener">{{ t('contact.form.recaptcha.terms') }}</a>
          </template>
        </i18n-t>
      </form>
    </div>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.contact-section {
  // solid header above it, so no header room on top; still fills the screen under the header
  &.r-section--hero {
    min-height: calc(var(--app-height, 100svh) - var(--header-height));
    padding-top: var(--section-padding-y);
  }

  > .r-section__container {
    gap: 30px;
  }

  // the home hero grid in blue, hanging off the top-left corner like wp-raykan's
  .contact-section__grid {
    position: absolute;
    top: -205px;
    left: -329px;
    max-width: none;
    pointer-events: none;
  }

  .contact-section__title {
    margin: 0;
    color: var(--color-heading);
    font-family: var(--font-primary);
    font-size: var(--font-size-contact-title);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-contact-title);
  }

  // wp-raykan 25% info, 5% gap, 40% form
  .contact-section__columns {
    display: grid;
    grid-template-columns: 25fr 40fr;
    column-gap: 7%;
    align-items: start;

    @include tablet {
      grid-template-columns: 35fr 48fr;
      column-gap: 5%;
    }

    @include mobile {
      grid-template-columns: 1fr;
      row-gap: 40px;
    }
  }

  .contact-section__info {
    font-style: normal;
  }

  .contact-section__label {
    margin: 20px 0 0;
    color: var(--color-primary);
    font-family: var(--font-secondary);
    font-size: var(--font-size-contact-label);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-contact-label);

    &:first-child {
      margin-top: 0;
    }
  }

  .contact-section__label--light {
    color: var(--color-text-muted);
  }

  .contact-section__detail {
    display: flex;
    flex-direction: column;
    margin: 0;
    color: var(--color-text-muted);
    font-family: var(--font-secondary);
    font-size: var(--font-size-contact-detail);
    line-height: var(--line-height-contact-detail);

    a {
      color: inherit;
      text-decoration: none;

      &:hover,
      &:focus-visible {
        color: var(--color-accent);
      }
    }
  }

  .contact-section__detail--address {
    color: var(--color-contact-address);
  }

  // white hover would vanish on the white page
  .contact-section__socials {
    --social-color-highlight: var(--color-primary);

    margin-top: 10px;

    @include mobile {
      justify-content: center;
    }
  }

  .contact-section__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  // two columns so email and contact number share a row; stacked on mobile
  .contact-section__fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  .contact-section__field {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .contact-section__field--half {
    grid-column: auto;
    min-width: 0;

    @include mobile {
      grid-column: 1 / -1;
    }
  }

  .contact-section__field-label {
    color: var(--color-heading);
    font-family: var(--font-secondary);
    font-size: var(--font-size-contact-detail);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-contact-detail);
  }

  // icon inside the field on the right
  .contact-section__control {
    position: relative;
    display: block;
  }

  .contact-section__field-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    color: var(--color-grey-600);
    transform: translateY(-50%);
    pointer-events: none;
  }

  .contact-section__input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--color-contact-field-border);
    border-radius: 4px;
    background-color: var(--color-contact-field-bg);
    color: var(--color-contact-field-text);
    font-family: var(--font-secondary);
    // 16px keeps iOS from zooming into the field
    font-size: var(--font-size-base);
    line-height: 22px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: var(--color-grey-600);
      opacity: 1;
    }

    &:focus {
      border-color: var(--color-accent);
      outline: none;
      box-shadow: 0 0 0 2px var(--color-accent);
    }
  }

  .contact-section__control .contact-section__input {
    padding-right: 42px;
  }

  .contact-section__input--message {
    min-height: 111px;
    resize: vertical;
  }

  .contact-section__count {
    align-self: flex-end;
    color: var(--color-text-muted);
    font-family: var(--font-secondary);
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
  }

  .contact-section__honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .contact-section__status {
    margin: 0;
    font-family: var(--font-secondary);
    font-size: var(--font-size-contact-detail);
    line-height: var(--line-height-contact-detail);
    text-align: right;

    &:empty {
      display: none;
    }
  }

  .contact-section__status--sent {
    color: var(--color-primary);
  }

  .contact-section__status--error {
    color: var(--color-contact-error);
  }

  .contact-section__recaptcha {
    margin: 0;
    color: var(--color-text-muted);
    font-family: var(--font-secondary);
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
    text-align: right;

    a {
      color: var(--color-link);

      &:hover,
      &:focus-visible {
        color: var(--color-link-hover);
      }
    }

    @include mobile {
      text-align: center;
    }
  }

  .contact-section__submit {
    align-self: flex-end;

    @include mobile {
      align-self: stretch;
    }
  }
}

// the reCAPTCHA notice under the form replaces Google's floating badge
.grecaptcha-badge {
  visibility: hidden;
}
</style>
