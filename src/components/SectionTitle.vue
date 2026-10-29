<script setup lang="ts">
import { useI18n, type Localized } from '@/i18n'

defineProps<{ title: Localized; subtitle?: Localized }>()

const { t } = useI18n()
</script>

<template>
  <header class="mb-10 grid gap-3 border-t border-line pt-10 md:mb-14 md:grid-cols-2 md:items-end md:gap-10 md:pt-14">
    <h2 data-reveal class="tick">{{ t(title) }}</h2>
    <p v-if="subtitle" data-reveal="0.05" class="text-muted md:max-w-md md:justify-self-end">{{ t(subtitle) }}</p>
  </header>
</template>
