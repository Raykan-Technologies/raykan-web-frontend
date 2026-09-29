import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const menuCollapsed = ref(false)

  const toggleMenu = () => {
    menuCollapsed.value = !menuCollapsed.value
  }

  const $reset = () => {
    menuCollapsed.value = false
  }

  return {
    $reset,
    menuCollapsed,
    toggleMenu,
  }
}, { persist: true })
