<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from '@/i18n'
import { ui } from '@/i18n/messages'
import { site, whatsappLink } from '@/config/site'

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
  'w-full border border-muted bg-surface px-4 py-3 text-ink placeholder:text-muted transition-colors duration-150 hover:border-ink focus:border-accent'
</script>

<template>
  <section id="contact" class="container-page py-16 md:py-24">
    <div data-reveal class="grid gap-12 border-t border-line pt-10 md:grid-cols-2 md:gap-14 md:pt-14">
      <div>
        <h2 class="tick text-[clamp(2.1rem,4.6vw,3.4rem)]">{{ t(ui.contact.title) }}</h2>
        <p class="mt-5 text-lg text-muted">{{ t(ui.contact.subtitle) }}</p>

        <a :href="whatsappLink()" target="_blank" rel="noopener" class="btn mt-9">{{ t(ui.contact.whatsapp) }}</a>

        <div class="mt-7 flex flex-col items-start gap-3">
          <a :href="`mailto:${site.email}`" class="link" dir="ltr">{{ site.email }}</a>
          <a :href="whatsappLink()" target="_blank" rel="noopener" class="link" dir="ltr">{{ site.phone }}</a>
        </div>
      </div>

      <form class="space-y-5" novalidate @submit.prevent="sendEmail">
        <label class="block">
          <span class="mb-2 block text-[15px] font-semibold text-ink">{{ t(ui.contact.name) }}</span>
          <input v-model="form.name" type="text" autocomplete="name" :class="field" />
        </label>
        <label class="block">
          <span class="mb-2 block text-[15px] font-semibold text-ink">{{ t(ui.contact.contactField) }}</span>
          <input v-model="form.contact" type="text" inputmode="email" autocomplete="email" dir="ltr" :class="[field, 'rtl:text-end']" />
        </label>
        <label class="block">
          <span class="mb-2 block text-[15px] font-semibold text-ink">{{ t(ui.contact.message) }}</span>
          <textarea v-model="form.message" rows="4" :placeholder="t(ui.contact.messagePh)" :class="[field, 'resize-none']" />
        </label>

        <p
          v-if="notice"
          class="border-s-2 ps-4 text-[15px] text-ink"
          :class="notice.ok ? 'border-accent' : 'border-ink'"
          role="status"
        >
          {{ notice.text }}
        </p>

        <div class="flex flex-col gap-3 pt-1 sm:flex-row">
          <button type="submit" :disabled="sending" class="btn flex-1">
            {{ sending ? t(ui.contact.sending) : t(ui.contact.send) }}
          </button>
          <button type="button" class="btn btn-quiet flex-1" @click="sendWhatsapp">
            {{ t(ui.contact.sendWa) }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
