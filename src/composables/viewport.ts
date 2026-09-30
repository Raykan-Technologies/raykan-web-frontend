import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Tracks the device's visible screen height and publishes it as the `--app-height` CSS variable
 * on <html>, so sections can fill the screen of whatever device they're on.
 *
 * Uses `visualViewport` when available: it excludes mobile browser bars and the on-screen
 * keyboard, and updates when the address bar collapses. CSS keeps `100svh` as a fallback.
 */
export const useViewport = () => {
  const height = ref(0)
  let frame = 0

  const measure = () => {
    height.value = Math.round(window.visualViewport?.height ?? window.innerHeight)
    document.documentElement.style.setProperty('--app-height', `${height.value}px`)
  }

  // batch bursts of resize events into one update per frame
  const onResize = () => {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(measure)
  }

  onMounted(() => {
    measure()
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    window.visualViewport?.addEventListener('resize', onResize)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', onResize)
    window.removeEventListener('orientationchange', onResize)
    window.visualViewport?.removeEventListener('resize', onResize)
  })

  return { height }
}
