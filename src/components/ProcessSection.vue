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
    <ol class="grid border-b border-line md:grid-cols-2 md:gap-x-14">
      <li v-for="(step, i) in process" :key="i" :data-reveal="i * 0.05" class="border-t border-line py-6">
        <p class="text-[15px] text-muted tabular-nums">0{{ i + 1 }}</p>
        <h3 class="mt-1 text-lg">{{ t(step.title) }}</h3>
        <p class="mt-2 text-muted">{{ t(step.body) }}</p>
      </li>
    </ol>
  </section>
</template>
