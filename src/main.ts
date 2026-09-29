import './assets/css/app.scss'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { PiniaSharedState } from './plugins/shareStore'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
pinia.use(PiniaSharedState())

app.use(pinia)
app.use(router)

app.mount('#app')
