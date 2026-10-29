<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { services } from '@/data/career'
import SectionTitle from './SectionTitle.vue'

const { t } = useI18n()
</script>

<template>
  <section id="services" class="container-page py-16 md:py-24">
    <SectionTitle :title="ui.services.title" />
    <div class="grid border-b border-line md:grid-cols-2 md:gap-x-14">
      <article v-for="(service, i) in services" :key="i" class="border-t border-line py-6">
        <h3 class="text-lg">{{ t(service.title) }}</h3>
        <p class="mt-2 text-muted">{{ t(service.body) }}</p>
      </article>
    </div>
  </section>
</template>
