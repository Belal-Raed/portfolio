import type { Localized } from '.'

const l = (en: string, ar: string): Localized => ({ en, ar })

export const ui = {
  name: l('Belal Raed', 'بلال رائد'),

  nav: {
    services: l('Services', 'الخدمات'),
    work: l('Projects', 'المشاريع'),
    about: l('About', 'عنّي'),
    contact: l('Contact', 'تواصل'),
    cta: l('Get in touch', 'تواصل معي'),
    menu: l('Menu', 'القائمة'),
    theme: l('Toggle dark mode', 'تبديل الوضع الليلي'),
    lang: l('العربية', 'English'),
  },

  hero: {
    intro: l('Belal Raed — software developer, Gaza', 'بلال رائد — مطوّر برمجيات، غزة'),
    title: l(
      'I build the software that runs clinics, schools and restaurants.',
      'أبني البرامج اللي بتشغّل العيادات والمدارس والمطاعم.',
    ),
    subtitle: l(
      "Since 2022 I've been building WhatsApp ordering, management systems and the AI that ties them together — mostly for businesses that work in Arabic. I'm also a co-founder of ROOT.",
      'من 2022 وأنا ببني أنظمة طلبات على الواتساب، وأنظمة إدارة، والذكاء الاصطناعي اللي بيربطهم ببعض، وأغلبها لشركات شغلها بالعربي. وأنا كمان شريك مؤسس في ROOT.',
    ),
    primary: l('Get in touch', 'تواصل معي'),
    secondary: l('WhatsApp', 'واتساب'),
    photoAlt: l('Belal Raed', 'بلال رائد'),
  },

  services: {
    title: l('What I work on', 'شو بشتغل'),
  },

  work: {
    title: l('Projects', 'المشاريع'),
    subtitle: l(
      "Some of the systems I've built that are in use today.",
      'بعض الأنظمة اللي بنيتها وشغّالة اليوم.',
    ),
    live: l('In use', 'قيد الاستخدام'),
    ready: l('Ready to launch', 'جاهز للإطلاق'),
  },

  process: {
    title: l('How a project goes', 'كيف بيمشي المشروع'),
  },

  about: {
    title: l('About', 'عنّي'),
    body1: l(
      "I'm a software developer from Gaza. I've been building business systems with Laravel since 2022, and I co-founded ROOT, where we make Arabic-first software for companies across the Middle East and North Africa.",
      'أنا مطوّر برمجيات من غزة. ببني أنظمة للشركات بـ Laravel من 2022، وشاركت في تأسيس ROOT، وهناك بنعمل برامج عربية أولاً لشركات بالشرق الأوسط وشمال أفريقيا.',
    ),
    body2: l(
      'I usually handle a project from the first conversation through to launch, and I keep maintaining it afterwards.',
      'عادةً بمسك المشروع من أول حديث لحد الإطلاق، وبضل أتابعه وأطوّره بعدها.',
    ),
    journey: l('Experience', 'الخبرة'),
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
    title: l("Let's talk about your project", 'خلّينا نحكي عن مشروعك'),
    subtitle: l(
      'Message me on WhatsApp or send an email, and tell me a bit about what you need.',
      'راسلني على الواتساب أو ابعتلي إيميل، واحكيلي شوي عن اللي بتحتاجه.',
    ),
    whatsapp: l('WhatsApp', 'واتساب'),
    email: l('Email', 'الإيميل'),
    name: l('Your name', 'اسمك'),
    contactField: l('Email or phone', 'الإيميل أو رقم الهاتف'),
    message: l('What do you need?', 'شو بتحتاج؟'),
    messagePh: l('e.g. A WhatsApp ordering system for my restaurant', 'مثلاً: نظام طلبات واتساب لمطعمي'),
    send: l('Send by email', 'أرسل بالإيميل'),
    sendWa: l('Send on WhatsApp', 'أرسل على الواتساب'),
    sending: l('Sending…', 'جارٍ الإرسال…'),
    ok: l("Thanks, your message arrived. I'll get back to you soon.", 'شكراً، وصلتني رسالتك وبرد عليك قريباً.'),
    mailOpened: l('Opening your email app with the message ready…', 'جارٍ فتح تطبيق البريد والرسالة جاهزة…'),
    failed: l("Couldn't send right now — please try WhatsApp.", 'ما زبط الإرسال هلأ، جرّب الواتساب لو سمحت.'),
    required: l('Please fill in your name and message.', 'عبّي اسمك والرسالة لو سمحت.'),
    badContact: l('Please add a valid email or phone number.', 'أضف إيميل أو رقم هاتف صحيح لو سمحت.'),
  },

  footer: {
    place: l('Gaza, Palestine', 'غزة، فلسطين'),
    top: l('Back to top', 'للأعلى'),
  },
}
