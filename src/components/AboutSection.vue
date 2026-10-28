<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { journey } from '@/data/career'
import { site } from '@/config/site'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()

const period = (from: string, to: string) => (from === to ? from : `${from} — ${to || t(ui.about.present)}`)
</script>

<template>
  <section id="about" class="container-page py-24 md:py-32">
    <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <p data-reveal class="inline-flex rounded-full bg-accent/10 px-3.5 py-1 text-sm font-semibold text-accent">{{ t(ui.about.eyebrow) }}</p>
        <h2 data-reveal="0.05" class="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">{{ t(ui.about.title) }}</h2>
        <p data-reveal="0.1" class="mt-6 text-lg leading-relaxed text-text">{{ t(ui.about.body1) }}</p>
        <p data-reveal="0.15" class="mt-4 text-lg leading-relaxed text-text">{{ t(ui.about.body2) }}</p>
        <div data-reveal="0.2" class="mt-8 flex flex-wrap gap-3">
          <a
            :href="site.cv"
            download="Belal-Raed-CV.pdf"
            class="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-bg transition hover:opacity-85"
          >
            <AppIcon name="download" :size="18" />{{ t(ui.about.downloadCv) }}
          </a>
          <a
            :href="site.github"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-semibold text-ink shadow-card transition hover:-translate-y-0.5"
          >
            <AppIcon name="github" :size="18" />GitHub
          </a>
          <a
            v-if="site.linkedin"
            :href="site.linkedin"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-semibold text-ink shadow-card transition hover:-translate-y-0.5"
          >
            <AppIcon name="linkedin" :size="18" />LinkedIn
          </a>
        </div>
      </div>

      <div class="space-y-5">
        <div data-reveal class="rounded-3xl border border-line bg-surface p-7 shadow-card">
          <h3 class="text-sm font-bold text-muted">{{ t(ui.about.journey) }}</h3>
          <ol class="mt-5 space-y-5">
            <li v-for="(item, i) in journey" :key="i" class="relative flex gap-4">
              <span class="relative mt-1.5 flex flex-col items-center" aria-hidden="true">
                <span class="size-3 rounded-full" :class="i === 0 ? 'bg-accent ring-4 ring-accent/20' : 'border-2 border-line bg-surface'" />
                <span v-if="i < journey.length - 1" class="absolute top-4 h-[calc(100%+0.75rem)] w-px bg-line" />
              </span>
              <div class="flex-1">
                <div class="flex flex-wrap items-baseline justify-between gap-x-3">
                  <p class="font-bold text-ink">{{ t(item.role) }}</p>
                  <p class="text-sm font-medium text-muted" dir="ltr">{{ period(item.from, item.to) }}</p>
                </div>
                <p class="text-sm text-muted">{{ t(item.org) }}</p>
              </div>
            </li>
          </ol>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <div data-reveal="0.05" class="rounded-3xl border border-line bg-surface p-6 shadow-card">
            <h3 class="text-sm font-bold text-muted">{{ t(ui.about.education) }}</h3>
            <p class="mt-3 font-bold text-ink">{{ t(ui.about.degree) }}</p>
            <p class="mt-1 text-sm text-muted">{{ t(ui.about.university) }}</p>
            <p class="mt-1 text-sm text-muted">{{ t(ui.about.grade) }}</p>
          </div>
          <div data-reveal="0.1" class="rounded-3xl border border-line bg-surface p-6 shadow-card">
            <h3 class="text-sm font-bold text-muted">{{ t(ui.about.languages) }}</h3>
            <p class="mt-3 font-bold text-ink">{{ t(ui.about.langs) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
