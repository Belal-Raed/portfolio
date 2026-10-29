<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { projects } from '@/data/projects'
import SectionTitle from './SectionTitle.vue'

const { t } = useI18n()
</script>

<template>
  <section id="work" class="container-page py-16 md:py-24">
    <SectionTitle :title="ui.work.title" :subtitle="ui.work.subtitle" />

    <div class="border-b border-line">
      <article
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        class="grid gap-4 border-t border-line py-8 md:grid-cols-[1fr_2.2fr_1fr] md:gap-10 md:py-10"
      >
        <div class="text-[15px]">
          <p class="font-display font-bold text-ink">{{ project.name }}</p>
          <p class="text-muted">{{ t(project.industry) }}</p>
          <p class="text-muted">{{ t(project.status === 'live' ? ui.work.live : ui.work.ready) }}</p>
        </div>

        <div>
          <h3 class="text-xl leading-snug tracking-tight md:text-2xl">{{ t(project.title) }}</h3>
          <p class="mt-3 text-muted">{{ t(project.description) }}</p>
          <img
            v-if="project.images.length"
            :src="project.images[0]"
            :alt="project.name"
            loading="lazy"
            class="mt-6 aspect-[16/10] w-full border border-line object-cover"
          />
        </div>

        <ul class="text-[15px] text-muted">
          <li v-for="(h, j) in project.highlights" :key="j">{{ t(h) }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
