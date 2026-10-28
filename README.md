# Belal Raed — Portfolio

Vue 3 + Vite + TypeScript + Tailwind v4 + GSAP. Bilingual (EN / AR with full RTL), light & dark.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Where to edit

| What | File |
| --- | --- |
| Email, WhatsApp, GitHub, LinkedIn, CV | `src/config/site.ts` |
| Projects (text, stack, data flow, screenshots) | `src/data/projects.ts` |
| Experience, method, stack | `src/data/career.ts` |
| UI text (EN / AR) | `src/i18n/messages.ts` |
| Colors | `src/style.css` (`:root` and `.dark`) |

**Project screenshots:** put them in `public/projects/<id>/` (e.g. `public/projects/chatcore/1.webp`)
and list them in that project's `images: []`.

**Contact form by email:** get a free key from https://web3forms.com, then add
`VITE_WEB3FORMS_KEY` to `.env` locally and in Vercel → Project → Settings → Environment Variables.
Without a key, "Send via Email" opens the visitor's mail app instead.

**Share links:** `?lang=ar` opens the Arabic version, `?theme=dark` the dark theme.
