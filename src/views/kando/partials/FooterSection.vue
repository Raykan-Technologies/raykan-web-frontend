<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RIcon, RSection } from '@/components/elements'
import type { TIcons } from '@/components/icons'
import { KANDO_CONTACT_EMAIL, KANDO_CONTACT_PHONE } from '@/constants'
import logo from '@/assets/images/kando/logo-white.webp'
import poweredBy from '@/assets/images/kando/powered-by-raykan.webp'

const { t } = useI18n()

const contacts = computed<Array<{ key: string; icon: TIcons; text: string; href?: string }>>(() => [
  { key: 'address', icon: 'location', text: t('kando.footer.address') },
  { key: 'phone', icon: 'telephone', text: KANDO_CONTACT_PHONE.display, href: `tel:${KANDO_CONTACT_PHONE.tel}` },
  { key: 'email', icon: 'mail', text: KANDO_CONTACT_EMAIL, href: `mailto:${KANDO_CONTACT_EMAIL}` },
])

const year = new Date().getFullYear()
</script>
<template>
  <!-- wp-raykan kando "footer" (17e276f): orange gradient, logo, contact details, copyright -->
  <r-section tag="footer" class="kando-footer" width="var(--kando-section-width)">
    <img class="kando-footer__logo" :src="logo" :alt="t('kando.logo')" width="236" height="82" loading="lazy" />
    <hr class="kando-footer__divider" />

    <h2 class="kando-footer__heading">{{ t('kando.footer.contactUs') }}</h2>
    <ul class="kando-footer__contacts">
      <li v-for="contact in contacts" :key="contact.key">
        <component :is="contact.href ? 'a' : 'span'" :href="contact.href" class="kando-footer__contact">
          <r-icon :name="contact.icon" :size="22" />
          <span>{{ contact.text }}</span>
        </component>
      </li>
    </ul>

    <div class="kando-footer__bottom">
      <img :src="poweredBy" :alt="t('kando.footer.poweredBy')" width="127" height="51" loading="lazy" />
      <p class="kando-footer__copyright">{{ t('common.copyright', { year }) }}</p>
    </div>
  </r-section>
</template>
<style lang="scss">
@use '@/assets/css/breakpoints' as *;

.kando-footer {
  color: var(--color-white);

  // beats the section theme's background
  &.r-section {
    background: var(--color-kando-footer-bg);
  }

  > .r-section__container {
    @include mobile {
      text-align: center;
    }
  }

  .kando-footer__logo {
    width: 236px;
    height: auto;

    @include mobile {
      align-self: center;
    }
  }

  .kando-footer__divider {
    width: 100%;
    margin: 15px 0;
    border: 0;
    border-top: 3px solid var(--color-white);
    border-radius: 50px;
  }

  .kando-footer__heading {
    margin: 0;
    color: var(--color-white);
    font-family: var(--font-kando-text);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
    text-transform: uppercase;

    @include mobile {
      font-size: var(--font-size-xl);
    }
  }

  // wp-raykan: 4 equal columns (the last one empty), stacked on phones
  .kando-footer__contacts {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
    margin: 0;
    padding: 20px 0 0;
    list-style: none;

    @include mobile {
      grid-template-columns: minmax(0, 1fr);
      justify-items: center;
    }
  }

  .kando-footer__contact {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--color-white);
    font-family: var(--font-kando-heading);
    font-size: var(--font-size-base);
    line-height: 1.4;
    text-decoration: none;
    transition: transform 0.2s ease;

    &:hover {
      color: var(--color-white);
      transform: scale(1.03);
    }

    .r-icon {
      flex-shrink: 0;
    }
  }

  .kando-footer__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-top: 60px;

    @include mobile {
      flex-direction: column;
      margin-top: 40px;
    }
  }

  .kando-footer__copyright {
    margin: 0;
    font-family: var(--font-kando-text);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-light);
  }
}
</style>
