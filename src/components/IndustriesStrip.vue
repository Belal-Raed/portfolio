<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { industries } from '@/data/career'

const { t } = useI18n()
</script>

<template>
  <section class="border-y border-line bg-surface py-8" aria-label="Industries">
    <div class="container-page flex flex-col items-center gap-5 md:flex-row md:gap-8">
      <p class="shrink-0 text-sm font-semibold text-muted">{{ t(ui.industries.title) }}</p>
      <div class="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]" dir="ltr">
        <div class="flex w-max animate-[marquee_32s_linear_infinite] gap-3 hover:[animation-play-state:paused]">
          <template v-for="copy in 2" :key="copy">
            <span
              v-for="item in industries"
              :key="item.en + copy"
              class="whitespace-nowrap rounded-full border border-line bg-bg px-4 py-2 text-sm font-semibold text-ink"
              >{{ t(item) }}</span
            >
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
