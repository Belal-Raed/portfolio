<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { process } from '@/data/career'
import SectionTitle from './SectionTitle.vue'

const { t } = useI18n()
</script>

<template>
  <section class="container-page py-24 md:py-32">
    <SectionTitle :eyebrow="ui.process.eyebrow" :title="ui.process.title" />
    <ol class="relative grid gap-5 md:grid-cols-4">
      <span class="absolute inset-x-[12%] top-7 hidden h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 md:block" aria-hidden="true" />
      <li v-for="(step, i) in process" :key="i" :data-reveal="i * 0.08" class="relative text-center">
        <span class="relative mx-auto grid size-14 place-items-center rounded-2xl border border-line bg-surface text-lg font-extrabold text-accent shadow-card">
          {{ i + 1 }}
        </span>
        <h3 class="mt-5 text-lg font-bold text-ink">{{ t(step.title) }}</h3>
        <p class="mx-auto mt-2 max-w-60 text-sm leading-relaxed text-muted">{{ t(step.body) }}</p>
      </li>
    </ol>
  </section>
</template>
