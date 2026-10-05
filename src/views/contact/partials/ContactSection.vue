<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import { useI18n } from 'vue-i18n'
import { RButton, RIcon, RSection } from '@/components/elements'
import type { TIcons } from '@/components/icons'
import AppSocialLinks from '@/components/AppSocialLinks.vue'
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/constants'
import heroGrid from '@/assets/images/home/hero-grid.svg'

const { t } = useI18n()
const id = useId()

const MESSAGE_MAX = 1000

// wp-raykan FormCraft fields, in order
const fields = computed<Array<{ key: 'name' | 'company' | 'email'; type: string; icon: TIcons; required: boolean; autocomplete: string }>>(() => [
  { key: 'name', type: 'text', icon: 'user', required: true, autocomplete: 'name' },
  { key: 'company', type: 'text', icon: 'building', required: false, autocomplete: 'organization' },
  { key: 'email', type: 'email', icon: 'envelope', required: true, autocomplete: 'email' },
])

const values = ref({ name: '', company: '', email: '', message: '' })

// TODO: send the message once the backend is decided; the browser checks the required fields first
const onSubmit = () => {}
</script>
<template>
  <!-- wp-raykan contact page (5c811d2): blue, the grid from the home hero in the corner, the
    heading over two columns: how to reach us, and the message form -->
  <r-section class="contact-section" hero theme="primary" width="var(--container-width-contact)"
    min-height="var(--app-height, 100svh)" vertical-align="middle">
    <template #background>
      <img class="contact-section__grid" :src="heroGrid" alt="" width="1271" height="999">
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

      <form class="contact-section__form" :aria-label="t('contact.form.label')" @submit.prevent="onSubmit">
        <label v-for="field in fields" :key="field.key" class="contact-section__field">
          <span class="contact-section__field-label">{{ t(`contact.form.${field.key}`) }}</span>
          <span class="contact-section__control">
            <input v-model="values[field.key]" class="contact-section__input" :type="field.type"
              :name="field.key" :placeholder="t(`contact.form.${field.key}Placeholder`)"
              :required="field.required" :autocomplete="field.autocomplete">
            <r-icon class="contact-section__field-icon" :name="field.icon" :size="20" aria-hidden="true" />
          </span>
        </label>

        <label class="contact-section__field">
          <span class="contact-section__field-label">{{ t('contact.form.message') }}</span>
          <textarea v-model="values.message" class="contact-section__input contact-section__input--message"
            name="message" rows="5" :maxlength="MESSAGE_MAX" :placeholder="t('contact.form.messagePlaceholder')"
            :aria-describedby="`${id}-count`" required></textarea>
          <span :id="`${id}-count`" class="contact-section__count">
            {{ t('contact.form.count', { count: values.message.length, max: MESSAGE_MAX }) }}
          </span>
        </label>

        <r-button class="contact-section__submit" type="submit">{{ t('contact.form.submit') }}</r-button>
      </form>
    </div>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.contact-section {
  > .r-section__container {
    gap: 30px;
  }

  // the home hero grid, hanging off the top-left corner like wp-raykan's
  .contact-section__grid {
    position: absolute;
    top: -205px;
    left: -329px;
    max-width: none;
    pointer-events: none;
  }

  .contact-section__title {
    margin: 0;
    color: var(--color-white);
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
    color: var(--color-accent);
    font-family: var(--font-secondary);
    font-size: var(--font-size-contact-label);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-contact-label);

    &:first-child {
      margin-top: 0;
    }
  }

  .contact-section__label--light {
    color: var(--color-white);
  }

  .contact-section__detail {
    display: flex;
    flex-direction: column;
    margin: 0;
    color: var(--color-white);
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

  .contact-section__socials {
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

  .contact-section__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .contact-section__field-label {
    color: var(--color-white);
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
    color: var(--color-white);
    font-family: var(--font-secondary);
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
  }

  .contact-section__submit {
    align-self: flex-end;

    @include mobile {
      align-self: stretch;
    }
  }
}
</style>
