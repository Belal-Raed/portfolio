// Personal links and contact details — edit here, the whole site updates.
export const site = {
  email: 'belaljenana2@gmail.com',
  phone: '+970 56 792 4209',
  whatsapp: '970567924209',
  github: 'https://github.com/Belal-Raed',
  // Paste your LinkedIn URL here when it's ready; empty hides it everywhere.
  linkedin: '',
  root: 'https://rootps.com',
  cv: '/belal-raed-cv.pdf',
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY ?? '',
}

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
