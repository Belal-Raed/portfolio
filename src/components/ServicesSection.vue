<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { services } from '@/data/career'
import SectionTitle from './SectionTitle.vue'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
</script>

<template>
  <section id="services" class="container-page py-24 md:py-32">
    <SectionTitle :eyebrow="ui.services.eyebrow" :title="ui.services.title" :subtitle="ui.services.subtitle" />
    <div class="grid gap-5 sm:grid-cols-2">
      <article
        v-for="(service, i) in services"
        :key="i"
        :data-reveal="(i % 2) * 0.08"
        class="group relative overflow-hidden rounded-3xl border border-line bg-surface p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float md:p-9"
      >
        <div class="pointer-events-none absolute -end-16 -top-16 size-48 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
        <span class="grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-white shadow-[0_10px_24px_-10px_var(--accent)]">
          <AppIcon :name="service.icon" :size="24" />
        </span>
        <h3 class="mt-6 text-xl font-bold text-ink md:text-2xl">{{ t(service.title) }}</h3>
        <p class="mt-3 leading-relaxed text-muted">{{ t(service.body) }}</p>
      </article>
    </div>
  </section>
</template>
