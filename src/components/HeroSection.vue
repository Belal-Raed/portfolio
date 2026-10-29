<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { scrollToTarget } from '@/composables/useMotion'
import { whatsappLink } from '@/config/site'

const { t } = useI18n()
</script>

<template>
  <section id="top" class="container-page pt-10 pb-14 md:pt-20 md:pb-24">
    <div class="grid items-end gap-10 md:grid-cols-[1.6fr_1fr] md:gap-14">
      <div>
        <p class="text-muted">{{ t(ui.hero.intro) }}</p>

        <h1 class="tick mt-5">{{ t(ui.hero.title) }}</h1>

        <span class="hero-bar mt-8 block h-1.5 w-24 bg-accent" aria-hidden="true" />

        <p class="mt-8 text-lg text-muted">{{ t(ui.hero.subtitle) }}</p>

        <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#contact" class="btn" @click.prevent="scrollToTarget('#contact')">{{ t(ui.hero.primary) }}</a>
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="link font-display font-bold">{{ t(ui.hero.secondary) }}</a>
        </div>
      </div>

      <div class="w-full max-w-sm md:max-w-none">
        <img
          src="/belal-raed.webp"
          :alt="t(ui.hero.photoAlt)"
          width="880"
          height="1100"
          class="aspect-[4/5] w-full border border-line object-cover object-top"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>
