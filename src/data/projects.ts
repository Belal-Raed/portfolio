import type { Localized } from '@/i18n'

export type CoverKind = 'chat' | 'chart' | 'table' | 'orders' | 'translate'

export interface Project {
  id: string
  name: string
  status: 'live' | 'ready'
  industry: Localized
  title: Localized
  description: Localized
  highlights: Localized[]
  /** Illustrated cover shown until real screenshots are added. */
  cover: CoverKind
  /** Paths under /public, e.g. '/projects/chatcore/1.webp'. First one replaces the cover. */
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'chatcore',
    name: 'ChatCore',
    status: 'live',
    industry: { en: 'Restaurants & shops', ar: 'مطاعم ومتاجر' },
    title: {
      en: 'An AI assistant that takes orders inside WhatsApp, Instagram and Messenger',
      ar: 'مساعد ذكي يستقبل الطلبات داخل واتساب وإنستغرام وماسنجر',
    },
    description: {
      en: 'Customers just send a message. ChatCore understands it, asks for anything missing, confirms the price and sends a clean order to one dashboard — no staff needed to answer chats.',
      ar: 'العميل بس يبعت رسالة، وChatCore بيفهمها، وبيسأل عن أي تفصيل ناقص، وبيأكد السعر، وبيبعت الطلب مرتب على لوحة تحكم واحدة. من غير ما تحتاج موظف يرد على المحادثات.',
    },
    highlights: [
      { en: 'Works 24/7', ar: 'شغّال 24/7' },
      { en: '3 channels, 1 inbox', ar: '3 قنوات بصندوق واحد' },
      { en: 'AI-powered', ar: 'بالذكاء الاصطناعي' },
    ],
    cover: 'chat',
    images: [],
  },
  {
    id: 'dentalcore',
    name: 'DentalCore',
    status: 'live',
    industry: { en: 'Dental clinics', ar: 'عيادات أسنان' },
    title: {
      en: 'Run every branch of your dental clinic from one place',
      ar: 'أدِر كل فروع عيادة الأسنان من مكان واحد',
    },
    description: {
      en: 'Patients, appointments and staff across all branches in one system, with live numbers so the owner always knows how each branch is doing.',
      ar: 'المرضى والمواعيد والطاقم بكل الفروع بنظام واحد، مع أرقام لحظية عشان صاحب العيادة يعرف وضع كل فرع أول بأول.',
    },
    highlights: [
      { en: 'Multi-branch', ar: 'متعدد الفروع' },
      { en: 'Live reports', ar: 'تقارير لحظية' },
      { en: 'Fully Arabic', ar: 'عربي بالكامل' },
    ],
    cover: 'chart',
    images: [],
  },
  {
    id: 'madrasacore',
    name: 'MadrasaCore',
    status: 'live',
    industry: { en: 'Schools', ar: 'مدارس' },
    title: {
      en: 'A school management system where everyone sees exactly what they need',
      ar: 'نظام إدارة مدارس، كل واحد بيشوف اللي بيخصّه بالزبط',
    },
    description: {
      en: 'Admins, teachers and staff each get their own view and permissions, with ready Excel and PDF reports in one click.',
      ar: 'الإدارة والمعلمين والموظفين، كل واحد إله صلاحياته وواجهته، مع تقارير Excel وPDF جاهزة بكبسة زر.',
    },
    highlights: [
      { en: 'Role permissions', ar: 'صلاحيات حسب الدور' },
      { en: 'Excel & PDF reports', ar: 'تقارير Excel وPDF' },
      { en: 'Fully Arabic', ar: 'عربي بالكامل' },
    ],
    cover: 'table',
    images: [],
  },
  {
    id: 'shams',
    name: 'Shams',
    status: 'live',
    industry: { en: 'Restaurants & butchers · Oman', ar: 'مطاعم وملاحم · عُمان' },
    title: {
      en: 'WhatsApp ordering for a butcher shop, two restaurants and a meat store',
      ar: 'طلبات عبر الواتساب لملحمة ومطعمين ومتجر لحوم',
    },
    description: {
      en: 'Customers order on WhatsApp, every order goes automatically to the right branch, and the owner manages all four businesses from one admin panel.',
      ar: 'العملاء بيطلبوا على الواتساب، وكل طلب بيروح تلقائياً للفرع الصح، وصاحب الشغل بيدير الأربع محلات من لوحة تحكم وحدة.',
    },
    highlights: [
      { en: 'Official WhatsApp API', ar: 'واتساب رسمي' },
      { en: 'Smart branch routing', ar: 'توزيع ذكي على الفروع' },
      { en: '4 businesses, 1 panel', ar: '4 محلات بلوحة وحدة' },
    ],
    cover: 'orders',
    images: [],
  },
  {
    id: 'gov',
    name: 'Government Services Platform',
    status: 'ready',
    industry: { en: 'Public services', ar: 'خدمات حكومية' },
    title: {
      en: 'Citizens send requests on WhatsApp — in any language',
      ar: 'المواطن يبعت طلبه على الواتساب، بأي لغة',
    },
    description: {
      en: 'Requests are assigned to the right employee, and AI translates the conversation live, so citizen and employee understand each other even without a shared language.',
      ar: 'الطلبات بتنوزع على الموظف المناسب، والذكاء الاصطناعي بيترجم المحادثة لحظياً، فالمواطن والموظف بيفهموا على بعض حتى لو ما بيحكوا نفس اللغة.',
    },
    highlights: [
      { en: 'Live AI translation', ar: 'ترجمة لحظية بالذكاء الاصطناعي' },
      { en: 'Case assignment', ar: 'توزيع الطلبات' },
      { en: 'Multilingual', ar: 'متعدد اللغات' },
    ],
    cover: 'translate',
    images: [],
  },
]
