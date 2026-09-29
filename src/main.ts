import './assets/css/app.scss'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaSharedState } from './plugins/shareStore'
import { pageTitle } from 'vue-page-title'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
pinia.use(PiniaSharedState())

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(pageTitle({
    suffix: ` - ${import.meta.env.VITE_APP_NAME}`
}))

app.mount('#app')
