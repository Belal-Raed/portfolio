<script setup lang="ts">
// Illustrated mini-UI per project, used until real screenshots are added.
import { useI18n } from '@/i18n'
import type { CoverKind } from '@/data/projects'
import AppIcon from './AppIcon.vue'

defineProps<{ kind: CoverKind }>()

const { t } = useI18n()
const l = (en: string, ar: string) => ({ en, ar })

const copy = {
  customer: l('2 pizzas + 1 cola please 🍕', 'بدي 2 بيتزا + كولا لو سمحت 🍕'),
  bot: l('Sure! Delivery to the same address?', 'أكيد! التوصيل لنفس العنوان؟'),
  confirmed: l('Order #218 confirmed', 'تم تأكيد الطلب #218'),
  revenue: l('This month', 'هذا الشهر'),
  branches: l('Branches', 'الفروع'),
  students: l('Students', 'الطلاب'),
  teacher: l('Teacher', 'معلم'),
  admin: l('Admin', 'إدارة'),
  staff: l('Staff', 'موظف'),
  export: l('Export PDF', 'تصدير PDF'),
  newOrder: l('New order', 'طلب جديد'),
  branch: l('Branch', 'فرع'),
  citizen: l('Citizen', 'المواطن'),
  employee: l('Employee', 'الموظف'),
}
</script>

<template>
  <div
    class="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-accent/15 via-accent-2/10 to-transparent p-6 sm:p-8"
    aria-hidden="true"
  >
    <div class="absolute -bottom-20 -end-20 size-64 rounded-full bg-accent/20 blur-3xl" />

    <!-- chat -->
    <div v-if="kind === 'chat'" class="relative w-full max-w-xs space-y-2.5">
      <div class="ms-auto w-fit max-w-[85%] rounded-2xl rounded-se-md bg-emerald-500 px-3.5 py-2 text-sm text-white shadow-card">{{ t(copy.customer) }}</div>
      <div class="flex items-end gap-2">
        <span class="grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white"><AppIcon name="sparkle" :size="14" /></span>
        <div class="w-fit rounded-2xl rounded-ss-md bg-surface px-3.5 py-2 text-sm text-ink shadow-card">{{ t(copy.bot) }}</div>
      </div>
      <div class="mx-auto flex w-fit items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-xs font-semibold text-emerald-600 shadow-card dark:text-emerald-400">
        <AppIcon name="check" :size="14" />{{ t(copy.confirmed) }}
      </div>
    </div>

    <!-- chart -->
    <div v-else-if="kind === 'chart'" class="relative w-full max-w-xs rounded-2xl bg-surface p-4 shadow-card">
      <div class="flex items-center justify-between">
        <p class="text-xs font-semibold text-muted">{{ t(copy.revenue) }}</p>
        <span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-600 dark:text-emerald-400">▲</span>
      </div>
      <div class="mt-4 flex h-24 items-end gap-2" dir="ltr">
        <span v-for="(h, i) in [40, 62, 48, 75, 58, 88, 70]" :key="i" class="flex-1 rounded-t-md bg-gradient-to-t from-accent to-accent-2" :style="{ height: h + '%', opacity: 0.45 + i * 0.08 }" />
      </div>
      <div class="mt-3 flex gap-2 text-[0.65rem] font-semibold text-muted">
        <span class="rounded-full bg-surface-2 px-2 py-0.5">{{ t(copy.branches) }} · A</span>
        <span class="rounded-full bg-surface-2 px-2 py-0.5">B</span>
        <span class="rounded-full bg-surface-2 px-2 py-0.5">C</span>
      </div>
    </div>

    <!-- table -->
    <div v-else-if="kind === 'table'" class="relative w-full max-w-xs rounded-2xl bg-surface p-4 shadow-card">
      <div class="mb-3 flex items-center justify-between">
        <p class="text-xs font-semibold text-muted">{{ t(copy.students) }}</p>
        <span class="rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold text-accent-ink">{{ t(copy.export) }}</span>
      </div>
      <div v-for="(role, i) in [copy.admin, copy.teacher, copy.staff]" :key="i" class="flex items-center gap-2.5 border-t border-line py-2">
        <span class="size-6 rounded-full bg-gradient-to-br from-accent/60 to-accent-2/60" />
        <span class="h-2 flex-1 rounded-full bg-surface-2" />
        <span class="rounded-full bg-accent/10 px-2 py-0.5 text-[0.65rem] font-semibold text-accent">{{ t(role) }}</span>
      </div>
    </div>

    <!-- orders -->
    <div v-else-if="kind === 'orders'" class="relative w-full max-w-xs space-y-2">
      <div
        v-for="(n, i) in [1, 2, 3]"
        :key="n"
        class="flex items-center gap-3 rounded-2xl bg-surface p-3 shadow-card"
        :style="{ opacity: 1 - i * 0.18, transform: `scale(${1 - i * 0.03})` }"
      >
        <span class="grid size-9 place-items-center rounded-xl bg-emerald-500 text-white"><AppIcon name="whatsapp" :size="17" /></span>
        <div class="flex-1">
          <p class="text-xs font-bold text-ink">{{ t(copy.newOrder) }}</p>
          <span class="mt-1 block h-1.5 w-20 rounded-full bg-surface-2" />
        </div>
        <span class="rounded-full bg-accent/10 px-2 py-0.5 text-[0.65rem] font-semibold text-accent">{{ t(copy.branch) }} {{ n }}</span>
      </div>
    </div>

    <!-- translate -->
    <div v-else class="relative w-full max-w-xs space-y-2.5">
      <div>
        <p class="mb-1 text-[0.65rem] font-semibold text-muted">{{ t(copy.citizen) }}</p>
        <div class="w-fit rounded-2xl rounded-ss-md bg-surface px-3.5 py-2 text-sm text-ink shadow-card" dir="ltr">I need to renew my permit</div>
      </div>
      <div class="mx-auto grid size-8 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white shadow-card"><AppIcon name="sparkle" :size="15" /></div>
      <div class="ms-auto w-fit">
        <p class="mb-1 text-end text-[0.65rem] font-semibold text-muted">{{ t(copy.employee) }}</p>
        <div class="rounded-2xl rounded-se-md bg-accent px-3.5 py-2 text-sm text-accent-ink shadow-card" dir="rtl">بدي أجدد التصريح تبعي</div>
      </div>
    </div>
  </div>
</template>
