import type { Localized } from '.'

const l = (en: string, ar: string): Localized => ({ en, ar })

export const ui = {
  name: l('Belal Raed', 'بلال رائد'),

  nav: {
    services: l('Services', 'الخدمات'),
    work: l('Work', 'الأعمال'),
    about: l('About', 'عنّي'),
    contact: l('Contact', 'تواصل'),
    cta: l("Let's talk", 'تواصل معي'),
    menu: l('Menu', 'القائمة'),
    theme: l('Toggle dark mode', 'تبديل الوضع الليلي'),
    lang: l('العربية', 'English'),
  },

  hero: {
    badge: l('Available for new projects', 'متاح لمشاريع جديدة'),
    title1: l('I build smart systems', 'أبني أنظمة ذكية'),
    title2: l('that run your business.', 'تدير شغلك عنك.'),
    subtitle: l(
      'From taking orders on WhatsApp with AI, to complete management systems for clinics, schools and restaurants — built in Arabic, ready from day one.',
      'من استقبال الطلبات على الواتساب بالذكاء الاصطناعي، إلى أنظمة إدارة متكاملة للعيادات والمدارس والمطاعم. مبنية بالعربي وجاهزة من أول يوم.',
    ),
    primary: l('Start your project', 'ابدأ مشروعك'),
    secondary: l('Chat on WhatsApp', 'راسلني واتساب'),
    trust1: l('Building since 2022', 'أبني أنظمة منذ 2022'),
    trust2: l('Co-founder of ROOT', 'شريك مؤسس في ROOT'),
    trust3: l('Projects from Palestine to Oman', 'مشاريع من فلسطين لعُمان'),
    floatOrder: l('New order on WhatsApp', 'طلب جديد على الواتساب'),
    floatOrderSub: l('Confirmed automatically', 'تم تأكيده تلقائياً'),
    floatLive: l('3 products live', '3 منتجات تعمل الآن'),
    floatArabic: l('Arabic-first', 'عربي أولاً'),
    photoAlt: l('Belal Raed', 'بلال رائد'),
  },

  industries: {
    title: l('Systems built for', 'أنظمة بنيتها لـ'),
  },

  services: {
    eyebrow: l('Services', 'الخدمات'),
    title: l('What I can build for you', 'شو بقدر أبنيلك'),
    subtitle: l(
      'Practical software that saves your team time and keeps your customers happy.',
      'برامج عملية بتوفّر وقت فريقك وبتخلّي عملاءك مبسوطين.',
    ),
  },

  work: {
    eyebrow: l('Selected work', 'أعمال مختارة'),
    title: l('Real systems, used by real businesses', 'أنظمة حقيقية تستخدمها شركات حقيقية'),
    subtitle: l(
      'Not mockups — these are running every day for clinics, schools, restaurants and public services.',
      'مش مجرد تصاميم، هاي أنظمة شغّالة كل يوم عند عيادات ومدارس ومطاعم وجهات خدمية.',
    ),
    live: l('Live', 'يعمل الآن'),
    ready: l('Ready to launch', 'جاهز للإطلاق'),
  },

  process: {
    eyebrow: l('How it works', 'كيف نشتغل'),
    title: l('Simple, clear, no surprises', 'بسيط وواضح وبدون مفاجآت'),
  },

  about: {
    eyebrow: l('About me', 'عنّي'),
    title: l("Hi, I'm Belal 👋", 'أهلاً، أنا بلال 👋'),
    body1: l(
      "I'm a software developer from Palestine, building business systems since 2022. I co-founded ROOT, a startup that makes Arabic-first software for companies across the Middle East and North Africa.",
      'مطوّر برمجيات من فلسطين، أبني أنظمة للشركات منذ 2022. وأنا شريك مؤسس في ROOT، شركة ناشئة تصنع برامج عربية أولاً للشركات في الشرق الأوسط وشمال أفريقيا.',
    ),
    body2: l(
      "I take a project from the first conversation to launch day — and I stay after it. My goal is simple: software that works, that your team actually enjoys using, and that keeps working.",
      'بمسك المشروع من أول حديث بيننا لحد يوم الإطلاق، وبضل معك بعده. هدفي بسيط: نظام شغّال، فريقك بيحب يستخدمه، وبيضل شغّال.',
    ),
    journey: l('My journey', 'مسيرتي'),
    present: l('Present', 'الآن'),
    education: l('Education', 'التعليم'),
    degree: l("Bachelor's in Web Computing", 'بكالوريوس حوسبة الويب'),
    university: l('Islamic University of Gaza · Expected 2026', 'الجامعة الإسلامية بغزة · التخرج 2026'),
    grade: l('Grade: Very Good', 'التقدير: جيد جداً'),
    languages: l('Languages', 'اللغات'),
    langs: l('Arabic (native) · English (professional)', 'العربية (اللغة الأم) · الإنجليزية (احترافية)'),
    downloadCv: l('Download CV', 'تحميل السيرة الذاتية'),
  },

  contact: {
    eyebrow: l('Contact', 'تواصل'),
    title: l('Have an idea? Let’s build it.', 'عندك فكرة؟ خلّينا نبنيها.'),
    subtitle: l(
      'Tell me about your business and what you need. I reply personally.',
      'احكيلي عن شغلك وشو بتحتاج، وبرد عليك بنفسي.',
    ),
    whatsapp: l('Chat on WhatsApp', 'راسلني واتساب'),
    whatsappSub: l('Fastest way to reach me', 'أسرع طريقة للتواصل'),
    email: l('Send an email', 'أرسل إيميل'),
    name: l('Your name', 'اسمك'),
    contactField: l('Email or phone', 'الإيميل أو رقم الهاتف'),
    message: l('What do you need?', 'شو بتحتاج؟'),
    messagePh: l('e.g. A WhatsApp ordering system for my restaurant…', 'مثلاً: نظام طلبات واتساب لمطعمي…'),
    send: l('Send message', 'أرسل الرسالة'),
    sendWa: l('Send on WhatsApp', 'أرسل على الواتساب'),
    sending: l('Sending…', 'جارٍ الإرسال…'),
    ok: l("Thanks! Your message arrived — I'll get back to you soon.", 'شكراً! وصلتني رسالتك وبرد عليك قريباً.'),
    mailOpened: l('Opening your email app with the message ready…', 'جارٍ فتح تطبيق البريد والرسالة جاهزة…'),
    failed: l("Couldn't send right now — please try WhatsApp.", 'ما زبط الإرسال هلأ، جرّب الواتساب لو سمحت.'),
    required: l('Please fill in your name and message.', 'عبّي اسمك والرسالة لو سمحت.'),
    badContact: l('Please add a valid email or phone number.', 'أضف إيميل أو رقم هاتف صحيح لو سمحت.'),
  },

  footer: {
    rights: l('All rights reserved.', 'جميع الحقوق محفوظة.'),
    made: l('Made with care in Palestine', 'صُنع بحب في فلسطين'),
    top: l('Back to top', 'للأعلى'),
  },
}
