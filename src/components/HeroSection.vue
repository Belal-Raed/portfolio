<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { gsap, prefersReducedMotion, scrollToTarget } from '@/composables/useMotion'
import { whatsappLink } from '@/config/site'

const { t } = useI18n()
const root = ref<HTMLElement>()

onMounted(() => {
  if (prefersReducedMotion() || !root.value) return
  gsap.context(() => {
    gsap.from('[data-hero]', { y: 20, opacity: 0, duration: 0.8, stagger: 0.07, ease: 'power2.out' })
    gsap.from('[data-hero-photo]', { opacity: 0, duration: 1, ease: 'power2.out', delay: 0.1 })
  }, root.value)
})
</script>

<template>
  <section id="top" ref="root" class="container-page pt-10 pb-14 md:pt-20 md:pb-24">
    <div class="grid items-end gap-10 md:grid-cols-[1.6fr_1fr] md:gap-14">
      <div>
        <p data-hero class="text-muted">{{ t(ui.hero.intro) }}</p>

        <h1 data-hero class="tick mt-5">{{ t(ui.hero.title) }}</h1>

        <span data-hero class="mt-8 block h-1.5 w-24 bg-accent" aria-hidden="true" />

        <p data-hero class="mt-8 text-lg text-muted">{{ t(ui.hero.subtitle) }}</p>

        <div data-hero class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#contact" class="btn" @click.prevent="scrollToTarget('#contact')">{{ t(ui.hero.primary) }}</a>
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="link font-display font-bold">{{ t(ui.hero.secondary) }}</a>
        </div>
      </div>

      <div data-hero-photo class="w-full max-w-sm md:max-w-none">
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
