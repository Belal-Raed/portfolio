<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { scrollToTarget } from '@/composables/useMotion'
import { site, whatsappLink } from '@/config/site'

const { t } = useI18n()
const year = new Date().getFullYear()

const links = [
  { href: whatsappLink(), label: 'WhatsApp' },
  { href: `mailto:${site.email}`, label: 'Email' },
  { href: site.github, label: 'GitHub' },
  ...(site.linkedin ? [{ href: site.linkedin, label: 'LinkedIn' }] : []),
]
</script>

<template>
  <footer class="container-page">
    <div class="flex flex-col gap-4 border-t border-line py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
      <p>© {{ year }} {{ t(ui.name) }} · {{ t(ui.footer.place) }}</p>
      <nav class="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Footer">
        <a v-for="link in links" :key="link.label" :href="link.href" target="_blank" rel="noopener" class="hover:text-ink">{{ link.label }}</a>
        <a href="#top" class="hover:text-ink" @click.prevent="scrollToTarget('#top')">↑ {{ t(ui.footer.top) }}</a>
      </nav>
    </div>
  </footer>
</template>
