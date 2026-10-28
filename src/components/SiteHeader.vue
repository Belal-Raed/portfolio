<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { useTheme } from '@/composables/useTheme'
import { scrollToTarget } from '@/composables/useMotion'
import AppIcon from './AppIcon.vue'

const { t, toggleLocale } = useI18n()
const { isDark, toggleTheme } = useTheme()
const open = ref(false)
const scrolled = ref(false)

const links = [
  { id: '#services', label: ui.nav.services },
  { id: '#work', label: ui.nav.work },
  { id: '#about', label: ui.nav.about },
  { id: '#contact', label: ui.nav.contact },
]

const go = (id: string) => {
  open.value = false
  scrollToTarget(id)
}

const onScroll = () => (scrolled.value = scrollY > 12)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:pt-4">
    <div
      class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 rounded-full border px-2.5 ps-4 transition-all duration-300"
      :class="scrolled || open ? 'border-line bg-surface/90 backdrop-blur-md' : 'border-transparent bg-transparent'"
    >
      <a href="#top" class="flex items-center gap-2" @click.prevent="go('#top')">
        <span class="grid size-8 place-items-center rounded-lg bg-ink text-sm font-bold text-bg">B</span>
        <span class="font-bold text-ink">{{ t(ui.name) }}</span>
      </a>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.id"
          class="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          @click.prevent="go(link.id)"
          >{{ t(link.label) }}</a
        >
      </nav>

      <div class="flex items-center gap-1">
        <button
          type="button"
          class="rounded-full px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface-2"
          @click="toggleLocale"
        >
          {{ t(ui.nav.lang) }}
        </button>
        <button
          type="button"
          class="grid size-9 place-items-center rounded-full text-ink transition-colors hover:bg-surface-2"
          :aria-label="t(ui.nav.theme)"
          @click="toggleTheme"
        >
          <AppIcon :name="isDark ? 'sun' : 'moon'" :size="17" />
        </button>
        <a
          href="#contact"
          class="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-80 sm:inline-flex"
          @click.prevent="go('#contact')"
          >{{ t(ui.nav.cta) }}</a
        >
        <button
          type="button"
          class="grid size-9 place-items-center rounded-full text-ink hover:bg-surface-2 md:hidden"
          :aria-label="t(ui.nav.menu)"
          :aria-expanded="open"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" :size="18" />
        </button>
      </div>
    </div>

    <Transition
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
      enter-active-class="transition duration-200"
      leave-active-class="transition duration-150"
    >
      <nav v-if="open" class="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-surface p-2 md:hidden" aria-label="Mobile">
        <a
          v-for="link in links"
          :key="link.id"
          :href="link.id"
          class="block rounded-2xl px-4 py-3 text-lg font-semibold text-ink hover:bg-surface-2"
          @click.prevent="go(link.id)"
          >{{ t(link.label) }}</a
        >
        <a
          href="#contact"
          class="mt-1 block rounded-2xl bg-ink px-4 py-3 text-center font-semibold text-bg"
          @click.prevent="go('#contact')"
          >{{ t(ui.nav.cta) }}</a
        >
      </nav>
    </Transition>
  </header>
</template>
