import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const dataContent = ref('☀')
  const theme = ref('light')
  function toggleDarkMode() {
    dataContent
  }

  let storedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme)

  console.log('theme', storedTheme)

  return { dataContent, theme, storedTheme, toggleDarkMode }
})
