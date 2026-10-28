<script setup lang="ts">
// Temporary: compare accent colours live. Rendered in dev only.
import { ref } from 'vue'

const accents = [
  { id: '', name: 'Blue', color: '#3b5bfd' },
  { id: 'violet', name: 'Violet', color: '#7c3aed' },
  { id: 'emerald', name: 'Emerald', color: '#0e9f6e' },
  { id: 'orange', name: 'Orange', color: '#f2601d' },
]

const active = ref(document.documentElement.dataset.accent ?? '')

function pick(id: string) {
  active.value = id
  if (id) document.documentElement.dataset.accent = id
  else delete document.documentElement.dataset.accent
}
</script>

<template>
  <div class="fixed inset-x-0 bottom-4 z-[70] flex justify-center px-4" dir="ltr">
    <div class="flex items-center gap-1 rounded-full border border-black/10 bg-white p-1.5 shadow-2xl">
      <span class="px-3 text-xs font-bold text-neutral-500">Color</span>
      <button
        v-for="a in accents"
        :key="a.id"
        type="button"
        class="flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors"
        :class="active === a.id ? 'bg-neutral-900 text-white' : 'text-neutral-800 hover:bg-neutral-100'"
        @click="pick(a.id)"
      >
        <span class="size-4 rounded-full" :style="{ background: a.color }" />{{ a.name }}
      </button>
    </div>
  </div>
</template>
