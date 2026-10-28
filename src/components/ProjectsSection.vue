<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { projects } from '@/data/projects'
import SectionTitle from './SectionTitle.vue'
import ProjectCover from './ProjectCover.vue'

const { t } = useI18n()
</script>

<template>
  <section id="work" class="container-page py-16 md:py-24">
    <SectionTitle :title="ui.work.title" :subtitle="ui.work.subtitle" />

    <div class="grid gap-x-8 gap-y-14 md:grid-cols-2">
      <article
        v-for="(project, i) in projects"
        :id="project.id"
        :key="project.id"
        :data-reveal="(i % 2) * 0.06"
        :class="i === 0 && 'md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-10'"
      >
        <div class="aspect-[16/11] overflow-hidden rounded-2xl border border-line">
          <img v-if="project.images.length" :src="project.images[0]" :alt="project.name" loading="lazy" class="size-full object-cover" />
          <ProjectCover v-else :kind="project.cover" />
        </div>

        <div class="mt-6" :class="i === 0 && 'md:mt-0'">
          <p class="flex flex-wrap items-center gap-x-2 text-sm text-muted">
            <span class="font-semibold text-ink">{{ project.name }}</span>
            <span aria-hidden="true">·</span>
            <span>{{ t(project.industry) }}</span>
            <span aria-hidden="true">·</span>
            <span :class="project.status === 'live' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'">
              {{ t(project.status === 'live' ? ui.work.live : ui.work.ready) }}
            </span>
          </p>
          <h3 class="mt-3 font-bold leading-snug tracking-tight text-ink" :class="i === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'">
            {{ t(project.title) }}
          </h3>
          <p class="mt-3 leading-relaxed text-muted">{{ t(project.description) }}</p>
          <p class="mt-4 text-sm font-medium text-text">
            <template v-for="(h, j) in project.highlights" :key="j"
              ><span v-if="j" class="mx-2 text-line" aria-hidden="true">/</span>{{ t(h) }}</template
            >
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
