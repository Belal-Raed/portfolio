<script setup lang="ts">
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { projects } from '@/data/projects'
import SectionTitle from './SectionTitle.vue'
import ProjectCover from './ProjectCover.vue'

const { t } = useI18n()
</script>

<template>
  <section id="work" class="bg-surface py-24 md:py-32">
    <div class="container-page">
      <SectionTitle :eyebrow="ui.work.eyebrow" :title="ui.work.title" :subtitle="ui.work.subtitle" />

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="(project, i) in projects"
          :id="project.id"
          :key="project.id"
          :data-reveal="(i % 2) * 0.08"
          class="group overflow-hidden rounded-[2rem] border border-line bg-bg transition duration-300 hover:-translate-y-1 hover:shadow-float"
          :class="i === 0 && 'md:col-span-2 md:grid md:grid-cols-2'"
        >
          <div class="aspect-[16/11] overflow-hidden" :class="i === 0 && 'md:aspect-auto md:min-h-full'">
            <img
              v-if="project.images.length"
              :src="project.images[0]"
              :alt="project.name"
              loading="lazy"
              class="size-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <ProjectCover v-else :kind="project.cover" class="transition duration-700 group-hover:scale-[1.03]" />
          </div>

          <div class="p-7 md:p-9" :class="i === 0 && 'md:flex md:flex-col md:justify-center md:p-12'">
            <div class="flex flex-wrap items-center gap-2">
              <span class="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted ring-1 ring-line">{{ t(project.industry) }}</span>
              <span
                class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                :class="project.status === 'live' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'"
              >
                <span class="size-1.5 rounded-full" :class="project.status === 'live' ? 'bg-emerald-500' : 'bg-amber-500'" />
                {{ t(project.status === 'live' ? ui.work.live : ui.work.ready) }}
              </span>
            </div>
            <p class="mt-5 text-sm font-bold text-accent">{{ project.name }}</p>
            <h3 class="mt-1.5 font-extrabold leading-snug tracking-tight text-ink" :class="i === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'">
              {{ t(project.title) }}
            </h3>
            <p class="mt-3 leading-relaxed text-muted">{{ t(project.description) }}</p>
            <ul class="mt-6 flex flex-wrap gap-2">
              <li
                v-for="(h, j) in project.highlights"
                :key="j"
                class="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
              >
                {{ t(h) }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
