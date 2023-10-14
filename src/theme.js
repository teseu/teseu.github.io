
const html = document.querySelector('html')

let storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme)
}

let currentTheme = document.documentElement.getAttribute('data-theme')

if (currentTheme == 'dark') {
  const toggle = document.getElementById('theme-toggle')
  html.classList.add('dark')
  toggle.checked = false
} else {
  const toggle = document.getElementById('theme-toggle')
  html.classList.remove('dark')
  toggle.setAttribute('data-content', '🌙')
}

function toggleDarkMode() {

  let currentTheme = document.documentElement.getAttribute('data-theme')
  let targetTheme = 'light'

  const toggle = document.querySelector('#theme-toggle')
  if (currentTheme === 'light') {
    targetTheme = 'dark'
    html.classList.add('dark')
    toggle.setAttribute('data-content', '☀️')
  } else {
    html.classList.remove('dark')
    toggle.setAttribute('data-content', '🌙')
  }
  console.debug('toggleDarkMode', targetTheme)
  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme)
}
