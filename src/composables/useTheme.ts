import { ref, watch } from 'vue'

const root = document.documentElement
const isDark = ref(root.classList.contains('dark'))

watch(isDark, (dark) => {
  root.classList.toggle('dark', dark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#09090D' : '#F6F6F8')
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {}
})

export function useTheme() {
  return { isDark, toggleTheme: () => (isDark.value = !isDark.value) }
}
