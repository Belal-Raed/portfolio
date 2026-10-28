import { computed, ref, watch } from 'vue'

export type Locale = 'en' | 'ar'
export type Localized = Record<Locale, string>

const root = document.documentElement
const locale = ref<Locale>(root.lang === 'ar' ? 'ar' : 'en')

watch(locale, (value) => {
  root.lang = value
  root.dir = value === 'ar' ? 'rtl' : 'ltr'
  document.title = value === 'ar' ? 'بلال رائد — مهندس باك-إند' : 'Belal Raed — Backend Engineer'
  try {
    localStorage.setItem('locale', value)
  } catch {}
})

const isRtl = computed(() => locale.value === 'ar')

const t = (value: Localized) => value[locale.value]

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'ar' : 'en'
}

export function useI18n() {
  return { locale, isRtl, t, toggleLocale }
}
