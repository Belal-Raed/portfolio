import { ref, watch } from 'vue'

const root = document.documentElement
const isDark = ref(root.classList.contains('dark'))

watch(isDark, (dark) => {
  root.classList.toggle('dark', dark)
  // Read the active --bg token so the browser chrome always matches the page.
  const bg = getComputedStyle(root).getPropertyValue('--bg').trim()
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)
})

const hasChosenTheme = () => {
  try {
    return !!(new URLSearchParams(location.search).get('theme') || localStorage.getItem('theme'))
  } catch {
    return false
  }
}

// Follow the system setting until the visitor picks a theme themselves.
matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  if (!hasChosenTheme()) isDark.value = !e.matches
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  try {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  } catch {}
}

export function useTheme() {
  return { isDark, toggleTheme }
}
