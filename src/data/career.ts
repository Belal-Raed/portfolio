import type { Localized } from '@/i18n'
import type { IconName } from '@/components/AppIcon.vue'

export const services: { icon: IconName; title: Localized; body: Localized }[] = [
  {
    icon: 'chat',
    title: { en: 'WhatsApp & AI ordering', ar: 'طلبات واتساب بالذكاء الاصطناعي' },
    body: {
      en: 'Your customers order through WhatsApp, Instagram or Messenger. An AI assistant takes the order, confirms it and sends it to your dashboard.',
      ar: 'عملاءك بيطلبوا عبر واتساب أو إنستغرام أو ماسنجر، ومساعد ذكي بيستلم الطلب وبيأكده وبيبعته على لوحة التحكم.',
    },
  },
  {
    icon: 'layout',
    title: { en: 'Business management systems', ar: 'أنظمة إدارة للشركات' },
    body: {
      en: 'Clinics, schools, restaurants, multi-branch companies — one system to run everything, fully in Arabic.',
      ar: 'عيادات، مدارس، مطاعم، شركات بفروع كثيرة. نظام واحد بيدير كل إشي، وعربي بالكامل.',
    },
  },
  {
    icon: 'bolt',
    title: { en: 'Automation & integrations', ar: 'أتمتة وربط أنظمة' },
    body: {
      en: 'Connect your tools, messaging and AI so repetitive work happens on its own — and your team focuses on what matters.',
      ar: 'بربطلك أدواتك والرسائل والذكاء الاصطناعي، عشان الشغل المتكرر يصير لحاله، وفريقك يركّز على المهم.',
    },
  },
  {
    icon: 'wrench',
    title: { en: 'Support & new features', ar: 'دعم وتطوير مستمر' },
    body: {
      en: 'Already have a system? I fix problems, add features and improve it — and I stay with you after launch.',
      ar: 'عندك نظام جاهز؟ بصلّح المشاكل، وبضيف ميزات، وبحسّنه، وبضل معك بعد الإطلاق.',
    },
  },
]

export const process: { title: Localized; body: Localized }[] = [
  {
    title: { en: 'We talk', ar: 'نحكي' },
    body: {
      en: 'You tell me about your business and the problem. I listen and ask the right questions.',
      ar: 'بتحكيلي عن شغلك والمشكلة، وأنا بسمع وبسأل الأسئلة الصح.',
    },
  },
  {
    title: { en: 'I plan it', ar: 'بخطط' },
    body: {
      en: 'A clear plan: what we build, how it works, and when it’s ready.',
      ar: 'خطة واضحة: شو رح نبني، وكيف رح يشتغل، وإيمتى بيكون جاهز.',
    },
  },
  {
    title: { en: 'I build it', ar: 'ببني' },
    body: {
      en: 'You see progress along the way and give feedback before anything is final.',
      ar: 'بتشوف الشغل وهو ماشي، وبتعطي رأيك قبل ما أي إشي يصير نهائي.',
    },
  },
  {
    title: { en: 'Launch & support', ar: 'إطلاق ودعم' },
    body: {
      en: 'We go live together, and I keep it running smoothly after launch.',
      ar: 'منطلق مع بعض، وبضل متابع عشان يضل كل إشي شغّال تمام.',
    },
  },
]

export const journey: { role: Localized; org: Localized; from: string; to: string }[] = [
  {
    role: { en: 'Co-founder & Full-stack Developer', ar: 'شريك مؤسس ومطوّر' },
    org: { en: 'ROOT · rootps.com', ar: 'ROOT · rootps.com' },
    from: '2026',
    to: '',
  },
  {
    role: { en: 'Backend Developer', ar: 'مطوّر أنظمة' },
    org: { en: 'MuscatApps', ar: 'MuscatApps' },
    from: '2025',
    to: '',
  },
  {
    role: { en: 'Freelance Developer', ar: 'مطوّر مستقل' },
    org: { en: 'Independent', ar: 'عمل حر' },
    from: '2024',
    to: '',
  },
  {
    role: { en: 'Started building with Laravel', ar: 'بداية البرمجة بـ Laravel' },
    org: { en: 'Gaza, Palestine', ar: 'غزة، فلسطين' },
    from: '2022',
    to: '2022',
  },
]

export const industries: Localized[] = [
  { en: 'Restaurants', ar: 'المطاعم' },
  { en: 'Dental clinics', ar: 'عيادات الأسنان' },
  { en: 'Schools', ar: 'المدارس' },
  { en: 'Public services', ar: 'الخدمات الحكومية' },
  { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
  { en: 'Bookings', ar: 'الحجوزات' },
  { en: 'Finance', ar: 'المالية' },
  { en: 'HR & staff', ar: 'إدارة الموظفين' },
]
