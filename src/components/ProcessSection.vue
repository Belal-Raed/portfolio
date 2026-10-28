<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { process } from '@/data/career'
import SectionTitle from './SectionTitle.vue'

const { t } = useI18n()
</script>

<template>
  <section class="container-page py-16 md:py-24">
    <SectionTitle :title="ui.process.title" />
    <ol class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <li v-for="(step, i) in process" :key="i" :data-reveal="i * 0.05">
        <p class="text-sm font-semibold text-accent">0{{ i + 1 }}</p>
        <h3 class="mt-2 text-lg font-semibold text-ink">{{ t(step.title) }}</h3>
        <p class="mt-2 leading-relaxed text-muted">{{ t(step.body) }}</p>
      </li>
    </ol>
  </section>
</template>
