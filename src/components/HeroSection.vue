<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { gsap, prefersReducedMotion, scrollToTarget } from '@/composables/useMotion'
import { whatsappLink } from '@/config/site'
import AppIcon from './AppIcon.vue'

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
  <section id="top" ref="root" class="pt-28 pb-16 md:pt-36 md:pb-24">
    <div class="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div>
        <p data-hero class="text-sm font-medium text-muted">{{ t(ui.hero.intro) }}</p>

        <h1 data-hero class="mt-5 text-[clamp(2.25rem,5.2vw,4rem)] font-bold leading-[1.08] tracking-tight text-ink rtl:leading-[1.35]">
          {{ t(ui.hero.title) }}
        </h1>

        <p data-hero class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {{ t(ui.hero.subtitle) }}
        </p>

        <div data-hero class="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-ink transition-opacity hover:opacity-90"
            @click.prevent="scrollToTarget('#contact')"
          >
            {{ t(ui.hero.primary) }}
            <AppIcon name="arrow" :size="18" />
          </a>
          <a
            :href="whatsappLink()"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 font-semibold text-ink transition-colors hover:border-ink"
          >
            <AppIcon name="whatsapp" :size="19" />
            {{ t(ui.hero.secondary) }}
          </a>
        </div>
      </div>

      <div data-hero-photo class="mx-auto w-full max-w-sm lg:max-w-none">
        <img
          src="/belal-raed.webp"
          :alt="t(ui.hero.photoAlt)"
          width="880"
          height="1100"
          class="aspect-[4/5] w-full rounded-3xl object-cover object-top"
          fetchpriority="high"
        />
      </div>
    </div>
  </section>
</template>
