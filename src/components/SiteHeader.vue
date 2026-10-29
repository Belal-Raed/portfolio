<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { useTheme } from '@/composables/useTheme'
import { scrollToTarget } from '@/composables/useMotion'

const { t, toggleLocale } = useI18n()
const { isDark, toggleTheme } = useTheme()
const open = ref(false)

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
</script>

<template>
  <header class="border-b border-line">
    <div class="container-page flex items-center justify-between gap-4 py-5">
      <a href="#top" class="font-display text-lg font-bold text-ink" @click.prevent="go('#top')">{{ t(ui.name) }}</a>

      <div class="flex items-center gap-x-4 text-[15px] sm:gap-x-6">
        <nav class="hidden items-center gap-x-6 md:flex" aria-label="Primary">
          <a
            v-for="link in links"
            :key="link.id"
            :href="link.id"
            class="text-muted transition-colors duration-150 hover:text-ink"
            @click.prevent="go(link.id)"
            >{{ t(link.label) }}</a
          >
        </nav>

        <button type="button" class="font-sans text-muted transition-colors duration-150 hover:text-ink" @click="toggleLocale">
          {{ t(ui.nav.lang) }}
        </button>
        <button type="button" class="link font-sans" @click="toggleTheme">
          {{ t(isDark ? ui.nav.lightMode : ui.nav.darkMode) }}
        </button>
        <a href="#contact" class="btn hidden px-4 py-2 text-[15px] lg:inline-flex" @click.prevent="go('#contact')">{{ t(ui.nav.cta) }}</a>
        <button
          type="button"
          class="font-sans text-muted transition-colors duration-150 hover:text-ink md:hidden"
          :aria-expanded="open"
          aria-controls="mobile-nav"
          @click="open = !open"
        >
          {{ t(ui.nav.menu) }}
        </button>
      </div>
    </div>

    <nav v-if="open" id="mobile-nav" class="container-page pb-6 md:hidden" aria-label="Mobile">
      <a
        v-for="link in links"
        :key="link.id"
        :href="link.id"
        class="block border-t border-line py-3 font-display text-lg font-bold text-ink transition-colors duration-150 hover:text-accent"
        @click.prevent="go(link.id)"
        >{{ t(link.label) }}</a
      >
      <a href="#contact" class="btn mt-3 w-full" @click.prevent="go('#contact')">{{ t(ui.nav.cta) }}</a>
    </nav>
  </header>
</template>
