import { createI18n } from 'vue-i18n'
import messages from './messages'

const instance = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    messages,
})

export default instance

export const i18n = instance.global
