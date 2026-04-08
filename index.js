const themeToggle = document.querySelector(".theme-btn");
const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector(".site-header");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));
const counters = Array.from(document.querySelectorAll("[data-count]"));
const contactForm = document.querySelector(".contact-form");
const contactSubmitButton = contactForm?.querySelector('button[type="submit"]');

const translations = {
  uz: {
    navHome: "Bosh sahifa",
    navServices: "Xizmatlar",
    navWorks: "Loyihalar",
    navAbout: "Biz haqimizda",
    navTestimonials: "Fikrlar",
    navFaq: "Savollar",
    navContact: "Aloqa",

    heroEyebrow: "TheUzSoft - zamonaviy IT yechimlar markazi",
    heroTitle: "Biz biznesingizni raqamli olamga olib chiqamiz.",
    heroSubtitle:
      "Veb-saytlar, mobil ilovalar, CRM tizimlar, Telegram botlar va AI yechimlar.",
    heroPrimary: "Buyurtma berish",
    heroSecondary: "Batafsil",
    statProjects: "Loyihalar",
    statClients: "Mijozlar",
    statExperience: "Yillik tajriba",
    heroCardLabel: "Raqamli mahsulotlar",
    heroCardValue: "Bir xil dizayn tizimi",

    brandsKicker: "Biz ishlagan brendlar",
    brandsTitle: "Biz ishlagan brendlar",
    brandsSubtitle: "Bizga ishonch bildirgan kompaniyalar",

    servicesKicker: "Xizmatlar",
    servicesTitle: "Bizning xizmatlarimiz",
    servicesSubtitle: "Bizning xizmatlarimiz haqida qisqacha",
    service1Title: "Veb-sayt va CRM tizimlar",
    service1Desc:
      "Korporativ saytlar, landing sahifalar va biznes jarayonlarini boshqaruvchi platformalar.",
    service2Title: "Mobil ilovalar",
    service2Desc: "Android va iOS uchun tez ishlaydigan, qulay va chiroyli ilovalar.",
    service3Title: "Telegram botlar",
    service3Desc: "Buyurtma, bildirishnoma, avtomatlashtirish va integratsiya uchun botlar.",
    service4Title: "AI loyihalar",
    service4Desc: "Sun'iy intellektga tayangan yechimlar bilan ish jarayonini tezlashtirish.",

    processKicker: "Ish jarayoni",
    processTitle: "Har bosqich o'ylangan, har o'tish silliq.",
    processSubtitle: "Dizayn, ishlab chiqish va ishga tushirish bir zanjirga bog'langan.",
    step1Title: "Tahlil",
    step1Desc: "Biznes maqsad va foydalanuvchi yo'lini aniqlaymiz.",
    step2Title: "Dizayn",
    step2Desc: "Bir xil ranglar, animatsiya va kompozitsiya tizimini quramiz.",
    step3Title: "Ishga tushirish",
    step3Desc: "Tezkor, responsive va tayyor mahsulotni topshiramiz.",

    aboutKicker: "Biz haqimizda",
    aboutTitle: "Biz haqimizda",
    aboutSubtitle:
      "Biz zamonaviy IT yechimlar va innovatsion xizmatlar ko'rsatamiz. Mijozlarimizga yuqori sifatli va ishonchli xizmatlar taqdim etamiz.",
    aboutFeature1: "Bir xil dizayn tizimi",
    aboutFeature2: "Mobilga mos, tez ishlaydigan sahifalar",
    aboutFeature3: "Animatsiya va mikro-interaksiyalar",
    aboutNote: "Har bir bo'lim sahifa bo'ylab bir xil ritmda ochilib boradi.",
    statSupport: "Qo'llab-quvvatlash",

    testimonialsKicker: "Mijozlar fikri",
    testimonialsTitle: "Mijozlarimiz nima deyishadi",
    testimonialsSubtitle: "Bizga ishonch bildirgan mijozlarimiz fikrlari",
    testimonial1Quote: '"Juda professional va tezkor xizmat!"',
    testimonial1Role: "Tadbirkor",
    testimonial2Quote:
      '"TheUzSoft bilan ishlashdan juda mamnunman. Yangi loyihalar uchun yana murojaat qilaman."',
    testimonial2Role: "Startap asoschisi",
    testimonial3Quote: '"Natijadan juda xursandman. Tavsiya qilaman!"',
    testimonial3Role: "Kompaniya rahbari",

    faqKicker: "Tez-tez so'raladigan savollar",
    faqTitle: "Hammasi oldindan aniq bo'lishi kerak.",
    faqSubtitle: "Qisqa javoblar jarayonni tushunarli qiladi va qaror qabul qilishni osonlashtiradi.",
    faq1Question: "Qanday xizmatlar ko'rsatasiz?",
    faq1Answer:
      "Veb-saytlar, CRM tizimlar, mobil ilovalar, Telegram botlar va AI asosidagi loyihalar.",
    faq2Question: "Loyiha qancha vaqtda tayyor bo'ladi?",
    faq2Answer:
      "Oddiy landing sahifa bir necha kunda, murakkab tizimlar esa bosqichma-bosqich ishlab chiqiladi.",
    faq3Question: "Narx qanday belgilanadi?",
    faq3Answer:
      "Narx funksionallik, animatsiya darajasi va integratsiyalar soniga qarab aniqlanadi.",

    contactKicker: "Aloqa",
    contactTitle: "Bog'lanish",
    contactSubtitle: "Biz bilan aloqaga chiqing",
    contactPhoneLabel: "Telefon",
    contactAddressLabel: "Manzil",
    contactAddressValue: "Toshkent, O'zbekiston",
    nameLabel: "Ism",
    phoneLabel: "Telefon raqami",
    messageLabel: "Xabar",
    sendBtn: "Yuborish",
    formNote: "Xabar Telegramga yuboriladi.",
    formSending: "Yuborilmoqda...",
    namePlaceholder: "Ismingiz",
    phonePlaceholder: "+998 90 123 45 67",
    messagePlaceholder: "Xabaringiz",
    nameRequired: "Ismni kiriting.",
    phoneRequired: "Telefon raqamini kiriting.",
    phoneInvalid: "Telefon raqamini to'g'ri kiriting.",
    messageRequired: "Xabarni kiriting.",
    sendSuccess: "Xabaringiz muvaffaqiyatli yuborildi!",
    sendError: "Xabar yuborishda xatolik yuz berdi.",

    footerDesc: "Zamonaviy IT va raqamli yechimlar markazi. Biznesingiz uchun ishonchli va innovatsion xizmatlar.",
    footerLinksTitle: "Tezkor havolalar",
    footerContactTitle: "Bog'lanish",
    footerNote: "Barcha huquqlar himoyalangan."
  },
  ru: {
    navHome: "Главная",
    navServices: "Услуги",
    navWorks: "Проекты",
    navAbout: "О нас",
    navTestimonials: "Отзывы",
    navFaq: "Вопросы",
    navContact: "Контакты",

    heroEyebrow: "TheUzSoft - Ташкент, Uzbekistan",
    heroTitle: "Мы создаём быстрые, красивые и надёжные цифровые продукты для вашего бизнеса.",
    heroSubtitle:
      "Веб-сайты, CRM, мобильные приложения и Telegram-боты, построенные на едином визуальном языке, плавной анимации и сильном UX.",
    heroPrimary: "Начать проект",
    heroSecondary: "Смотреть услуги",
    statProjects: "Проекты",
    statClients: "Клиенты",
    statExperience: "Лет опыта",
    heroCardLabel: "Цифровые продукты",
    heroCardValue: "Единая дизайн-система",

    brandsKicker: "Портфолио и партнёры",
    brandsTitle: "Бренды и направления в одном визуальном языке.",
    brandsSubtitle:
      "Анимация, цвета, карточки и ритм отступов одинаковы во всех блоках.",

    servicesKicker: "Услуги",
    servicesTitle: "Единый стиль, сильный результат.",
    servicesSubtitle:
      "Каждый модуль опирается на одну визуальную систему и чётко выполняет свою задачу.",
    service1Title: "Сайты и CRM-системы",
    service1Desc:
      "Корпоративные сайты, лендинги и платформы для управления бизнес-процессами.",
    service2Title: "Мобильные приложения",
    service2Desc: "Быстрые, удобные и красивые приложения для Android и iOS.",
    service3Title: "Telegram-боты",
    service3Desc: "Боты для заказов, уведомлений, автоматизации и интеграций.",
    service4Title: "AI-проекты",
    service4Desc: "Ускоряем рабочие процессы с помощью решений на базе искусственного интеллекта.",

    processKicker: "Процесс работы",
    processTitle: "Каждый этап продуман, каждый переход плавный.",
    processSubtitle: "Дизайн, разработка и запуск связаны в одну цепочку.",
    step1Title: "Анализ",
    step1Desc: "Определяем бизнес-цели и путь пользователя.",
    step2Title: "Дизайн",
    step2Desc: "Строим единые цвета, анимацию и композиционную систему.",
    step3Title: "Запуск",
    step3Desc: "Передаём быстрый, responsive и готовый продукт.",

    aboutKicker: "О нас",
    aboutTitle: "TheUzSoft объединяет скорость и точность.",
    aboutSubtitle:
      "Мы IT-команда из Ташкента, работающая по всему Узбекистану. Наша цель - единый стиль, сильная техническая база и измеримый результат в каждом проекте.",
    aboutFeature1: "Единая дизайн-система",
    aboutFeature2: "Адаптивные и быстрые страницы",
    aboutFeature3: "Анимации и микро-взаимодействия",
    aboutNote: "Каждый блок раскрывается по странице в одном и том же ритме.",
    statSupport: "Поддержка",

    testimonialsKicker: "Отзывы клиентов",
    testimonialsTitle: "Результат виден, доверие остаётся.",
    testimonialsSubtitle:
      "Одинаковое качество и плавный опыт повторяются от проекта к проекту.",
    testimonial1Quote: '"Очень профессиональный и быстрый сервис!"',
    testimonial1Role: "Предприниматель",
    testimonial2Quote:
      '"Очень доволен работой TheUzSoft. Обязательно обращусь снова для новых проектов."',
    testimonial2Role: "Основатель стартапа",
    testimonial3Quote: '"Очень доволен результатом. Рекомендую!"',
    testimonial3Role: "Руководитель компании",

    faqKicker: "Часто задаваемые вопросы",
    faqTitle: "Всё должно быть понятно заранее.",
    faqSubtitle:
      "Короткие ответы упрощают процесс и помогают быстрее принять решение.",
    faq1Question: "Какие услуги вы оказываете?",
    faq1Answer:
      "Сайты, CRM-системы, мобильные приложения, Telegram-боты и AI-проекты.",
    faq2Question: "Сколько времени занимает проект?",
    faq2Answer:
      "Простой лендинг готов за несколько дней, сложные системы делаются поэтапно.",
    faq3Question: "Как формируется цена?",
    faq3Answer:
      "Цена зависит от функциональности, уровня анимации и количества интеграций.",

    contactKicker: "Контакты",
    contactTitle: "Соберём ваш сайт в том же стиле.",
    contactSubtitle:
      "Напишите мне, и я адаптирую вашу текущую страницу под этот визуальный язык.",
    contactPhoneLabel: "Телефон",
    contactAddressLabel: "Адрес",
    contactAddressValue: "Ташкент, Узбекистан",
    nameLabel: "Имя",
    phoneLabel: "Номер телефона",
    messageLabel: "Сообщение",
    sendBtn: "Отправить",
    formNote: "Сообщение будет отправлено в Telegram.",
    formSending: "Отправка...",
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "+998 90 123 45 67",
    messagePlaceholder: "Ваше сообщение",
    nameRequired: "Введите имя.",
    phoneRequired: "Введите номер телефона.",
    phoneInvalid: "Введите корректный номер телефона.",
    messageRequired: "Введите сообщение.",
    sendSuccess: "Сообщение успешно отправлено!",
    sendError: "Произошла ошибка при отправке сообщения.",

    footerDesc: "Цифровые продукты одинакового качества для web, mobile и automation.",
    footerLinksTitle: "Быстрые ссылки",
    footerContactTitle: "Связаться",
    footerNote: "Все права защищены."
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navWorks: "Projects",
    navAbout: "About",
    navTestimonials: "Reviews",
    navFaq: "FAQ",
    navContact: "Contact",

    heroEyebrow: "TheUzSoft - Tashkent, Uzbekistan",
    heroTitle: "We build fast, beautiful, and reliable digital products for your business.",
    heroSubtitle:
      "Websites, CRM systems, mobile apps, and Telegram bots with a unified visual language, smooth motion, and strong UX.",
    heroPrimary: "Start a project",
    heroSecondary: "View services",
    statProjects: "Projects",
    statClients: "Clients",
    statExperience: "Years of experience",
    heroCardLabel: "Digital products",
    heroCardValue: "One design system",

    brandsKicker: "Portfolio and partners",
    brandsTitle: "Brands and directions in one visual language.",
    brandsSubtitle:
      "Animation, colors, cards, and spacing rhythm stay consistent across every block.",

    servicesKicker: "Services",
    servicesTitle: "One style, strong outcome.",
    servicesSubtitle:
      "Each module follows the same visual system and handles its role clearly.",
    service1Title: "Websites and CRM systems",
    service1Desc:
      "Corporate websites, landing pages, and platforms for managing business processes.",
    service2Title: "Mobile applications",
    service2Desc: "Fast, convenient, and polished apps for Android and iOS.",
    service3Title: "Telegram bots",
    service3Desc: "Bots for orders, notifications, automation, and integrations.",
    service4Title: "AI projects",
    service4Desc:
      "Speed up workflows with solutions powered by artificial intelligence.",

    processKicker: "Workflow",
    processTitle: "Each stage is planned, each transition is smooth.",
    processSubtitle: "Design, development, and launch are connected as one chain.",
    step1Title: "Analysis",
    step1Desc: "We define business goals and the user journey.",
    step2Title: "Design",
    step2Desc: "We build a unified color, motion, and composition system.",
    step3Title: "Launch",
    step3Desc: "We deliver a fast, responsive, production-ready product.",

    aboutKicker: "About us",
    aboutTitle: "TheUzSoft combines speed and precision.",
    aboutSubtitle:
      "We are an IT team based in Tashkent and working across Uzbekistan. Our goal is a single style, a strong technical base, and measurable results in every project.",
    aboutFeature1: "Unified design system",
    aboutFeature2: "Responsive, fast-loading pages",
    aboutFeature3: "Animation and micro-interactions",
    aboutNote: "Each block reveals in the same rhythm across the page.",
    statSupport: "Support",

    testimonialsKicker: "Client reviews",
    testimonialsTitle: "The result is visible, trust stays.",
    testimonialsSubtitle:
      "Consistent quality and a smooth experience repeat from project to project.",
    testimonial1Quote: '"Very professional and fast service!"',
    testimonial1Role: "Entrepreneur",
    testimonial2Quote:
      '"I am very happy working with TheUzSoft. I will definitely come back for new projects."',
    testimonial2Role: "Startup founder",
    testimonial3Quote: '"Very happy with the result. Highly recommended!"',
    testimonial3Role: "Company director",

    faqKicker: "Frequently asked questions",
    faqTitle: "Everything should be clear upfront.",
    faqSubtitle:
      "Short answers make the process easier to understand and decisions faster to make.",
    faq1Question: "What services do you provide?",
    faq1Answer:
      "Websites, CRM systems, mobile applications, Telegram bots, and AI-based projects.",
    faq2Question: "How long does a project take?",
    faq2Answer:
      "A simple landing page can be done in a few days, while complex systems are delivered in stages.",
    faq3Question: "How is pricing determined?",
    faq3Answer:
      "Pricing depends on functionality, motion complexity, and the number of integrations.",

    contactKicker: "Contact",
    contactTitle: "We can shape your site in the same style.",
    contactSubtitle:
      "Send me a message and I will adapt your current page to this visual language.",
    contactPhoneLabel: "Phone",
    contactAddressLabel: "Address",
    contactAddressValue: "Tashkent, Uzbekistan",
    nameLabel: "Name",
    phoneLabel: "Phone number",
    messageLabel: "Message",
    sendBtn: "Send",
    formNote: "The message will be sent to Telegram.",
    formSending: "Sending...",
    namePlaceholder: "Your name",
    phonePlaceholder: "+998 90 123 45 67",
    messagePlaceholder: "Your message",
    nameRequired: "Enter your name.",
    phoneRequired: "Enter your phone number.",
    phoneInvalid: "Enter a valid phone number.",
    messageRequired: "Enter your message.",
    sendSuccess: "Your message has been sent successfully!",
    sendError: "An error occurred while sending the message.",

    footerDesc: "Digital products of the same quality for web, mobile, and automation.",
    footerLinksTitle: "Quick links",
    footerContactTitle: "Get in touch",
    footerNote: "All rights reserved."
  }
};

const supportedLangs = ["uz", "ru", "en"];
let currentLang = localStorage.getItem("lang") || "uz";
if (!supportedLangs.includes(currentLang)) currentLang = "uz";

function applyTheme(theme) {
  const icon = themeToggle?.querySelector("i");
  const dark = theme === "dark";

  document.body.classList.toggle("dark-mode", dark);
  if (themeToggle) {
    themeToggle.setAttribute("aria-label", dark ? "Light mode" : "Dark mode");
    themeToggle.classList.toggle("active", dark);
  }

  if (icon) {
    icon.classList.toggle("fa-moon", !dark);
    icon.classList.toggle("fa-sun", dark);
  }
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.uz;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (dict[key]) node.setAttribute("placeholder", dict[key]);
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTextMotion();
}

function resetTextMotion(node) {
  node.classList.remove("word-animate", "letter-animate");
  node.innerHTML = node.textContent || "";
}

function animateWords(node) {
  const text = (node.textContent || "").trim();
  if (!text) return;
  node.textContent = "";
  node.classList.add("word-animate");

  text.split(/\s+/).forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "word";
    span.style.setProperty("--word-index", index);
    span.textContent = word;
    node.appendChild(span);
    if (index < text.split(/\s+/).length - 1) node.appendChild(document.createTextNode(" "));
  });
}

function animateLetters(node) {
  const text = (node.textContent || "").trim();
  if (!text) return;
  node.textContent = "";
  node.classList.add("letter-animate");

  Array.from(text).forEach((char, index) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.style.setProperty("--letter-index", index);
    span.textContent = char === " " ? "\u00A0" : char;
    node.appendChild(span);
  });
}

function applyTextMotion() {
  const selectors = [
    { selector: ".hero-title", mode: "letters" },
    { selector: ".section-title", mode: "letters" },
    { selector: ".hero-subtitle", mode: "words" },
    { selector: ".section-subtitle", mode: "words" },
    { selector: ".eyebrow", mode: "words" },
    { selector: ".section-kicker", mode: "words" }
  ];

  selectors.forEach(({ selector, mode }) => {
    document.querySelectorAll(selector).forEach((node) => {
      resetTextMotion(node);
      if (mode === "letters") animateLetters(node);
      else animateWords(node);
    });
  });
}

function scrollToSection(hash) {
  const target = document.querySelector(hash);
  if (!target) return;

  const headerHeight = header?.offsetHeight || 0;
  const top = window.scrollY + target.getBoundingClientRect().top - headerHeight - 12;
  window.scrollTo({ top, behavior: "smooth" });
}

function closeMenu() {
  if (!header) return;
  header.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

function openMenu() {
  if (!header) return;
  header.classList.add("nav-open");
  navToggle?.setAttribute("aria-expanded", "true");
}

function formatCount(value) {
  return value >= 100 ? `${value}+` : `${value}`;
}

function animateCounter(node) {
  if (node.dataset.countAnimated) return;
  node.dataset.countAnimated = "true";

  const target = Number.parseInt(node.dataset.count || "0", 10);
  if (!Number.isFinite(target) || target <= 0) return;

  const duration = 1200;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    node.textContent = formatCount(current);

    if (progress < 1) requestAnimationFrame(tick);
    else node.textContent = formatCount(target);
  };

  requestAnimationFrame(tick);
}

function validatePhone(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 15;
}

applyTheme(localStorage.getItem("theme") || "light");
applyLanguage(currentLang);

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  applyTheme(nextTheme);
});

navToggle?.addEventListener("click", () => {
  if (header?.classList.contains("nav-open")) closeMenu();
  else openMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");
    if (!hash || !hash.startsWith("#")) return;
    event.preventDefault();
    closeMenu();
    scrollToSection(hash);
  });
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang || "uz");
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!header?.classList.contains("nav-open")) return;
  if (header.contains(event.target)) return;
  closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => {
  if (counter.textContent.trim() === "24/7") return;
  counterObserver.observe(counter);
});

const sectionIds = ["home", "services", "brands", "about", "testimonials", "faq", "contact"];
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (!visible.length) return;

    const active = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target.id;
    navLinks.forEach((link) => {
      const hash = link.getAttribute("href");
      link.classList.toggle("active", hash === `#${active}`);
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: [0.15, 0.3, 0.6] }
);

sections.forEach((section) => navObserver.observe(section));

if (contactForm) {
  const fields = Array.from(contactForm.querySelectorAll(".field"));
  const note = contactForm.querySelector(".form-note");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstErrorField = null;
    const values = new FormData(contactForm);
    const name = String(values.get("name") || "").trim();
    const phone = String(values.get("phone") || "").trim();
    const message = String(values.get("message") || "").trim();

    const validation = [
      {
        index: 0,
        valid: name.length > 0,
        message: translations[currentLang].nameRequired
      },
      {
        index: 1,
        valid: phone.length > 0,
        message: translations[currentLang].phoneRequired
      },
      {
        index: 1,
        valid: phone.length === 0 || validatePhone(phone),
        message: translations[currentLang].phoneInvalid
      },
      {
        index: 2,
        valid: message.length > 0,
        message: translations[currentLang].messageRequired
      }
    ];

    fields.forEach((field) => {
      const error = field.querySelector(".error");
      if (error) error.textContent = "";
    });

    validation.forEach((rule) => {
      if (rule.valid) return;
      const field = fields[rule.index];
      const error = field?.querySelector(".error");
      if (error && !error.textContent) error.textContent = rule.message;
      if (!firstErrorField) firstErrorField = field?.querySelector("input, textarea");
    });

    if (validation.some((rule) => !rule.valid)) {
      firstErrorField?.focus();
      if (note) note.textContent = translations[currentLang].formNote;
      return;
    }

    const previousLabel = contactSubmitButton?.textContent || "";
    if (contactSubmitButton) {
      contactSubmitButton.disabled = true;
      contactSubmitButton.textContent = translations[currentLang].formSending || "Sending...";
    }
    if (note) note.textContent = translations[currentLang].formSending || "Sending...";

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        message,
        language: currentLang
      })
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(data.error || "Request failed");
        }
        return data;
      })
      .then(() => {
        contactForm.reset();
        if (note) note.textContent = translations[currentLang].sendSuccess;
      })
      .catch(() => {
        if (note) note.textContent = translations[currentLang].sendError || "Xabar yuborishda xatolik yuz berdi.";
      })
      .finally(() => {
        if (contactSubmitButton) {
          contactSubmitButton.disabled = false;
          contactSubmitButton.textContent = previousLabel || translations[currentLang].sendBtn;
        }
      });
  });
}

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (header) header.style.boxShadow = y > 8 ? "0 18px 50px rgba(15,23,42,0.12)" : "none";
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq-item").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
