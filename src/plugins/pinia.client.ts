import type { Pinia } from 'pinia'
import { defineNuxtPlugin } from '#imports'
import { PiniaSharedState } from './pinia/shareStore'

// syncs `share`-enabled stores across tabs (BroadcastChannel only exists in the browser)
export default defineNuxtPlugin(({ $pinia }) => {
  ($pinia as Pinia).use(PiniaSharedState())
})
