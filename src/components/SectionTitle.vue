<script setup lang="ts">
import { useI18n, type Localized } from '@/i18n'

defineProps<{ eyebrow: Localized; title: Localized; subtitle?: Localized }>()

const { t } = useI18n()
</script>

<template>
  <header class="mx-auto mb-12 max-w-2xl text-center md:mb-16">
    <p data-reveal class="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-sm font-semibold text-accent">
      {{ t(eyebrow) }}
    </p>
    <h2 data-reveal="0.05" class="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl md:leading-[1.1]">
      {{ t(title) }}
    </h2>
    <p v-if="subtitle" data-reveal="0.1" class="mt-4 text-lg text-muted">{{ t(subtitle) }}</p>
  </header>
</template>
