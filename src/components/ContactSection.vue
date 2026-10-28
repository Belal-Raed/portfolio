<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { site, whatsappLink } from '@/config/site'
import AppIcon from './AppIcon.vue'

const { t } = useI18n()

const form = reactive({ name: '', contact: '', message: '' })
const sending = ref(false)
const notice = ref<{ ok: boolean; text: string } | null>(null)

const plainText = () =>
  `${form.message.trim()}\n\n— ${form.name.trim()}${form.contact.trim() ? ` (${form.contact.trim()})` : ''}`

function validate(needContact: boolean) {
  if (!form.name.trim() || !form.message.trim()) return t(ui.contact.required)
  const c = form.contact.trim()
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c) || /^\+?[\d\s()-]{7,}$/.test(c)
  if ((needContact || c) && !valid) return t(ui.contact.badContact)
  return ''
}

function sendWhatsapp() {
  const error = validate(false)
  if (error) return (notice.value = { ok: false, text: error })
  notice.value = null
  window.open(whatsappLink(plainText()), '_blank', 'noopener')
}

async function sendEmail() {
  const error = validate(true)
  if (error) return (notice.value = { ok: false, text: error })

  const subject = `Portfolio — ${form.name.trim()}`
  if (!site.web3formsKey) {
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainText())}`
    notice.value = { ok: true, text: t(ui.contact.mailOpened) }
    return
  }

  sending.value = true
  try {
    const isEmail = form.contact.includes('@')
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: site.web3formsKey,
        subject,
        from_name: 'Belal Raed — Portfolio',
        name: form.name.trim(),
        ...(isEmail ? { email: form.contact.trim() } : { phone: form.contact.trim() }),
        message: form.message.trim(),
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || data.success === false) throw new Error(data.message || res.statusText)
    notice.value = { ok: true, text: t(ui.contact.ok) }
    form.name = form.contact = form.message = ''
  } catch {
    notice.value = { ok: false, text: t(ui.contact.failed) }
  } finally {
    sending.value = false
  }
}

const field =
  'w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 text-white placeholder:text-white/55 transition focus:border-white/60 focus:bg-white/15 focus:outline-none'
</script>

<template>
  <section id="contact" class="container-page py-24 md:py-32">
    <div
      data-reveal
      class="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent to-accent-2 p-7 text-white shadow-float sm:p-10 md:p-14"
    >
      <div class="pointer-events-none absolute -end-24 -top-24 size-80 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
      <div class="pointer-events-none absolute -bottom-32 -start-24 size-96 rounded-full bg-black/10 blur-3xl" aria-hidden="true" />

      <div class="relative grid gap-12 lg:grid-cols-2">
        <div>
          <p class="inline-flex rounded-full bg-white/15 px-3.5 py-1 text-sm font-semibold">{{ t(ui.contact.eyebrow) }}</p>
          <h2 class="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{{ t(ui.contact.title) }}</h2>
          <p class="mt-4 max-w-md text-lg text-white/80">{{ t(ui.contact.subtitle) }}</p>

          <div class="mt-10 space-y-3">
            <a
              :href="whatsappLink()"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-4 rounded-2xl bg-white p-4 text-neutral-900 shadow-float transition hover:-translate-y-0.5"
            >
              <span class="grid size-12 shrink-0 place-items-center rounded-xl bg-emerald-500 text-white"><AppIcon name="whatsapp" :size="24" /></span>
              <span class="flex-1">
                <span class="block font-bold">{{ t(ui.contact.whatsapp) }}</span>
                <span class="block text-sm text-neutral-500">{{ t(ui.contact.whatsappSub) }}</span>
              </span>
              <span class="hidden text-sm font-semibold text-neutral-500 sm:block" dir="ltr">{{ site.phone }}</span>
            </a>
            <a
              :href="`mailto:${site.email}`"
              class="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 transition hover:bg-white/15"
            >
              <span class="grid size-12 shrink-0 place-items-center rounded-xl bg-white/15"><AppIcon name="mail" :size="22" /></span>
              <span class="flex-1">
                <span class="block font-bold">{{ t(ui.contact.email) }}</span>
                <span class="block truncate text-sm text-white/75" dir="ltr">{{ site.email }}</span>
              </span>
            </a>
          </div>
        </div>

        <form class="space-y-4 rounded-3xl bg-black/10 p-5 ring-1 ring-white/15 backdrop-blur sm:p-7" novalidate @submit.prevent="sendEmail">
          <label class="block">
            <span class="mb-1.5 block text-sm font-semibold text-white/85">{{ t(ui.contact.name) }}</span>
            <input v-model="form.name" type="text" autocomplete="name" :class="field" />
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-semibold text-white/85">{{ t(ui.contact.contactField) }}</span>
            <input v-model="form.contact" type="text" inputmode="email" autocomplete="email" dir="ltr" :class="[field, 'rtl:text-end']" />
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-semibold text-white/85">{{ t(ui.contact.message) }}</span>
            <textarea v-model="form.message" rows="4" :placeholder="t(ui.contact.messagePh)" :class="[field, 'resize-none']" />
          </label>

          <p
            v-if="notice"
            class="rounded-xl px-4 py-3 text-sm font-medium"
            :class="notice.ok ? 'bg-white/20 text-white' : 'bg-black/25 text-white'"
            role="status"
          >
            {{ notice.text }}
          </p>

          <div class="flex flex-col gap-3 pt-1 sm:flex-row">
            <button
              type="submit"
              :disabled="sending"
              class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-neutral-900 transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              <AppIcon name="mail" :size="18" />{{ sending ? t(ui.contact.sending) : t(ui.contact.send) }}
            </button>
            <button
              type="button"
              class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5"
              @click="sendWhatsapp"
            >
              <AppIcon name="whatsapp" :size="18" />{{ t(ui.contact.sendWa) }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
