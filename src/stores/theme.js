import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useThemeStore = defineStore('theme', () => {
  const theme = ref(localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const dataContent = ref('☀️')

  if (theme.value == 'light') {
    dataContent.value == '🌙'
  } else {
    dataContent.value == '☀️'
  }

  function toggleDarkMode() {
    dataContent
  }



  return { dataContent, theme, toggleDarkMode }
})
