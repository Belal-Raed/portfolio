<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { journey } from '@/data/career'
import { site } from '@/config/site'

const { t } = useI18n()

const period = (from: string, to: string) => (from === to ? from : `${from} — ${to || t(ui.about.present)}`)
</script>

<template>
  <section id="about" class="container-page py-16 md:py-24">
    <div class="grid gap-6 border-t border-line pt-10 md:grid-cols-2 md:gap-10 md:pt-14">
      <h2 class="tick">{{ t(ui.about.title) }}</h2>
      <div>
        <p class="text-lg">{{ t(ui.about.body1) }}</p>
        <p class="mt-4 text-lg">{{ t(ui.about.body2) }}</p>
        <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a :href="site.cv" download="Belal-Raed-CV.pdf" class="btn">{{ t(ui.about.downloadCv) }}</a>
          <a :href="site.github" target="_blank" rel="noopener" class="link font-display font-bold">GitHub</a>
          <a v-if="site.linkedin" :href="site.linkedin" target="_blank" rel="noopener" class="link font-display font-bold">LinkedIn</a>
        </div>
      </div>
    </div>

    <div class="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
      <div>
        <h3 class="text-[15px] text-muted">{{ t(ui.about.journey) }}</h3>
        <ol class="mt-3 border-b border-line">
          <li v-for="(item, i) in journey" :key="i" class="flex flex-wrap items-baseline justify-between gap-x-4 border-t border-line py-4">
            <div>
              <p class="font-bold text-ink">{{ t(item.role) }}</p>
              <p class="text-[15px] text-muted">{{ t(item.org) }}</p>
            </div>
            <p class="text-[15px] text-muted tabular-nums" dir="ltr">{{ period(item.from, item.to) }}</p>
          </li>
        </ol>
      </div>

      <div class="space-y-10">
        <div>
          <h3 class="text-[15px] text-muted">{{ t(ui.about.education) }}</h3>
          <div class="mt-3 border-y border-line py-4">
            <p class="font-bold text-ink">{{ t(ui.about.degree) }}</p>
            <p class="text-[15px] text-muted">{{ t(ui.about.university) }}</p>
            <p class="text-[15px] text-muted">{{ t(ui.about.grade) }}</p>
          </div>
        </div>
        <div>
          <h3 class="text-[15px] text-muted">{{ t(ui.about.languages) }}</h3>
          <p class="mt-3 border-y border-line py-4 font-bold text-ink">{{ t(ui.about.langs) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
