<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { scrollToTarget } from '@/composables/useMotion'
import { site, whatsappLink } from '@/config/site'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
const year = new Date().getFullYear()

const social = [
  { href: whatsappLink(), label: 'WhatsApp', icon: 'whatsapp' as const },
  { href: `mailto:${site.email}`, label: 'Email', icon: 'mail' as const },
  { href: site.github, label: 'GitHub', icon: 'github' as const },
  ...(site.linkedin ? [{ href: site.linkedin, label: 'LinkedIn', icon: 'linkedin' as const }] : []),
]
</script>

<template>
  <footer class="border-t border-line">
    <div class="container-page flex flex-col items-center justify-between gap-5 py-10 text-sm text-muted md:flex-row">
      <div class="flex items-center gap-2.5">
        <span class="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-sm font-extrabold text-white">B</span>
        <p>© {{ year }} {{ t(ui.name) }}. {{ t(ui.footer.rights) }} · {{ t(ui.footer.made) }}</p>
      </div>
      <div class="flex items-center gap-2">
        <a
          v-for="s in social"
          :key="s.label"
          :href="s.href"
          :aria-label="s.label"
          target="_blank"
          rel="noopener"
          class="grid size-10 place-items-center rounded-full border border-line bg-surface text-ink transition hover:-translate-y-0.5 hover:text-accent"
          ><AppIcon :name="s.icon" :size="17"
        /></a>
        <a href="#top" class="ms-2 font-medium hover:text-ink" @click.prevent="scrollToTarget('#top')">↑ {{ t(ui.footer.top) }}</a>
      </div>
    </div>
  </footer>
</template>
