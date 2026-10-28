<script setup lang="ts">
import { useI18n, type Localized } from '@/i18n'

defineProps<{ title: Localized; subtitle?: Localized }>()

const { t } = useI18n()
</script>

<template>
  <header class="mb-10 border-t border-line pt-8 md:mb-14 md:flex md:items-end md:justify-between md:gap-10">
    <h2 data-reveal class="text-3xl font-bold tracking-tight text-ink md:text-4xl">{{ t(title) }}</h2>
    <p v-if="subtitle" data-reveal="0.05" class="mt-3 max-w-md text-muted md:mt-0 md:text-end">{{ t(subtitle) }}</p>
  </header>
</template>
