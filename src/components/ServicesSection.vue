<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { services } from '@/data/career'
import SectionTitle from './SectionTitle.vue'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()
</script>

<template>
  <section id="services" class="container-page py-16 md:py-24">
    <SectionTitle :title="ui.services.title" />
    <div class="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      <article v-for="(service, i) in services" :key="i" :data-reveal="(i % 2) * 0.06" class="flex gap-4">
        <AppIcon :name="service.icon" :size="24" class="mt-1 text-accent" />
        <div>
          <h3 class="text-lg font-semibold text-ink">{{ t(service.title) }}</h3>
          <p class="mt-2 leading-relaxed text-muted">{{ t(service.body) }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
