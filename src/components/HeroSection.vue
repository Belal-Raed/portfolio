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
    gsap.from('[data-hero]', { y: 28, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out' })
    gsap.from('[data-hero-photo]', { scale: 0.94, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 })
    gsap.from('[data-hero-float]', { y: 20, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.6)', delay: 0.6 })
  }, root.value)
})
</script>

<template>
  <section id="top" ref="root" class="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
    <!-- soft background glow -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute -top-40 start-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl rtl:translate-x-1/2" />
      <div class="absolute top-40 -end-40 size-[28rem] rounded-full bg-accent-2/15 blur-3xl" />
    </div>

    <div class="container-page grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
      <div class="text-center lg:text-start">
        <p data-hero class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink shadow-card">
          <span class="relative flex size-2">
            <span class="absolute inset-0 rounded-full bg-emerald-500 [animation:ping-soft_1.8s_ease-out_infinite]" />
            <span class="relative size-2 rounded-full bg-emerald-500" />
          </span>
          {{ t(ui.hero.badge) }}
        </p>

        <h1 data-hero class="mt-6 text-[clamp(2.5rem,6.2vw,4.75rem)] font-extrabold leading-[1.05] tracking-tight text-ink rtl:leading-[1.3]">
          {{ t(ui.hero.title1) }}
          <span class="text-gradient block">{{ t(ui.hero.title2) }}</span>
        </h1>

        <p data-hero class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl lg:mx-0">
          {{ t(ui.hero.subtitle) }}
        </p>

        <div data-hero class="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            href="#contact"
            class="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-accent-ink shadow-[0_10px_30px_-10px_var(--accent)] transition hover:-translate-y-0.5"
            @click.prevent="scrollToTarget('#contact')"
          >
            {{ t(ui.hero.primary) }}
            <AppIcon name="arrow" :size="18" class="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </a>
          <a
            :href="whatsappLink()"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 py-4 font-semibold text-ink shadow-card transition hover:-translate-y-0.5"
          >
            <AppIcon name="whatsapp" :size="19" class="text-emerald-500" />
            {{ t(ui.hero.secondary) }}
          </a>
        </div>

        <ul data-hero class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted lg:justify-start">
          <li v-for="item in [ui.hero.trust1, ui.hero.trust2, ui.hero.trust3]" :key="item.en" class="flex items-center gap-1.5">
            <AppIcon name="check" :size="16" class="text-accent" />{{ t(item) }}
          </li>
        </ul>
      </div>

      <!-- photo + floating cards -->
      <div class="relative mx-auto w-full max-w-sm lg:max-w-md">
        <div
          data-hero-photo
          class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[color-mix(in_srgb,var(--accent)_14%,white)] to-[color-mix(in_srgb,var(--accent-2)_14%,white)] shadow-float"
        >
          <img
            src="/belal-raed.webp"
            :alt="t(ui.hero.photoAlt)"
            width="880"
            height="1100"
            class="aspect-[4/5] w-full object-cover object-top"
            fetchpriority="high"
          />
        </div>

        <div data-hero-float class="absolute -start-4 top-10 sm:-start-12">
          <div class="flex animate-[float_6s_ease-in-out_infinite] items-center gap-3 rounded-2xl border border-line bg-surface/95 p-3 pe-4 shadow-float backdrop-blur">
            <span class="grid size-10 place-items-center rounded-xl bg-emerald-500 text-white"><AppIcon name="whatsapp" :size="20" /></span>
            <div>
              <p class="text-sm font-bold text-ink">{{ t(ui.hero.floatOrder) }}</p>
              <p class="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <AppIcon name="check" :size="13" />{{ t(ui.hero.floatOrderSub) }}
              </p>
            </div>
          </div>
        </div>

        <div data-hero-float class="absolute -end-3 bottom-20 sm:-end-10">
          <div class="flex animate-[float_7s_ease-in-out_infinite] items-center gap-2.5 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-float backdrop-blur [animation-delay:-2s]">
            <span class="relative flex size-2.5">
              <span class="absolute inset-0 rounded-full bg-accent [animation:ping-soft_1.8s_ease-out_infinite]" />
              <span class="relative size-2.5 rounded-full bg-accent" />
            </span>
            <span class="text-sm font-bold text-ink">{{ t(ui.hero.floatLive) }}</span>
          </div>
        </div>

        <div data-hero-float class="absolute -bottom-5 start-8">
          <div class="flex animate-[float_6.5s_ease-in-out_infinite] items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-bg shadow-float [animation-delay:-4s]">
            <span class="text-base leading-none">ع</span>{{ t(ui.hero.floatArabic) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
