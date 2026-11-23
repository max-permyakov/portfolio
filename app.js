/* =========================================================
   Portfolio — language switch, reveal animations, filters
   ========================================================= */

(() => {
  "use strict";

  const translations = {
    ru: {
      "meta.title": "Максим Пермяков — Full-stack разработчик · .NET / React",
      "meta.description": "Портфолио full-stack разработчика: ASP.NET Core, C#, React, TypeScript, Python. Collegium, XenonStore, Prime Messenger и Telegram-боты с локальным AI.",

      "a11y.skip": "Перейти к содержимому",

      "nav.about": "Обо мне",
      "nav.work": "Флагман",
      "nav.projects": "Проекты",
      "nav.stack": "Стек",
      "nav.contact": "Контакты",
      "nav.cta": "Связаться",

      "hero.status": "Открыт к предложениям",
      "hero.greeting": "Привет, я",
      "hero.firstName": "Максим",
      "hero.lastName": "Пермяков",
      "hero.nameFull": "Максим Пермяков",
      "hero.role": "Full-stack разработчик",
      "hero.bio": "Проектирую backend на C# и ASP.NET Core, собираю интерфейсы на React и TypeScript. Делаю проекты от схемы базы данных до деплоя — с чистой архитектурой, тестами и понятной документацией.",
      "hero.ctaProjects": "Смотреть проекты",
      "hero.ctaContact": "Обсудить проект",
      "hero.metaLocation": "Локация",
      "hero.locationValue": "Краснодар, Россия",
      "hero.metaTimezone": "Часовой пояс",
      "hero.metaFocus": "Фокус",
      "hero.scroll": "Листайте вниз",

      "stats.repos": "публичных репозиториев",
      "stats.projects": "проектов в портфолио",
      "stats.prod": "проекта в продакшене",
      "stats.langs": "языка в основном стеке",

      "about.title": "Обо мне",
      "about.lead": "Довожу проекты до состояния, которым можно пользоваться.",
      "about.p1": "Я студент и разработчик из Краснодара. Строю full-stack приложения: ASP.NET Core на бэкенде, React и TypeScript на фронтенде, PostgreSQL или SQL Server под капотом.",
      "about.p2": "Отдельное увлечение — локальные языковые модели. Делаю Telegram-ботов и мессенджеры на Ollama, чтобы AI работал без отправки личных данных в облако.",
      "about.eduTitle": "Образование",
      "about.eduValue": "Краснодарский колледж электронного приборостроения",
      "about.eduNote": "Информационные системы и программирование",
      "about.approachTitle": "Подход",
      "about.approachValue": "Сначала архитектура и данные, потом код. Тесты и README — часть задачи.",
      "about.deployTitle": "Деплой",
      "about.deployValue": "Docker, Linux, systemd, Cloudflare Tunnel. Умею довести проект до рабочего домена.",
      "about.nowTitle": "Сейчас",
      "about.now1": "Развиваю Collegium — портал для студентов колледжа",
      "about.now2": "Углубляюсь в чистую архитектуру и тестирование",
      "about.now3": "Экспериментирую с локальными LLM на Ollama",
      "about.now4": "Решаю задачи на LeetCode на C#",
      "about.quote": "Хороший код читается как хорошая документация.",

      "featured.title": "Флагманский проект",
      "featured.lead": "Проект, который уже работает и приносит пользу.",
      "featured.badge": "В продакшене",
      "featured.subtitle": "Портал для студентов колледжа",
      "featured.desc": "Единое окно в жизнь колледжа: расписание, оценки, задания, новости. Объединяет данные электронного дневника и API расписания в одном интерфейсе с современным UX.",
      "featured.f1": "Расписание, оценки и успеваемость из электронного дневника",
      "featured.f2": "Вход по email-коду или через Google, GitHub, Яндекс и VK",
      "featured.f3": "Чистая архитектура: Api / Application / Domain / Infrastructure",
      "featured.f4": "PostgreSQL, EF Core, React Query, Swagger и xUnit",
      "featured.visit": "Открыть сайт",
      "featured.code": "Исходный код",
      "featured.note": "Реальный продукт: расписание, оценки и задания в одном месте.",

      "projects.title": "Проекты",
      "projects.lead": "Восемь репозиториев, которые лучше всего описывают то, что я умею.",
      "projects.noteText": "Ещё на GitHub",
      "projects.allRepos": "Все репозитории на GitHub",
      "projects.repo": "Репозиторий",

      "filters.all": "Все",
      "filters.web": "Web",
      "filters.ai": "AI и боты",
      "filters.tools": "Инструменты",
      "filters.algo": "Алгоритмы",

      "projects.xenon.type": "E-commerce",
      "projects.xenon.desc": "Интернет-магазин электроники на ASP.NET Core MVC: каталог с фильтрами, корзина, избранное и полноценная админ-панель.",
      "projects.xenon.p1": "Оформление заказов, роли, поставщики и импорт товаров из CSV",
      "projects.xenon.p2": "Недавно просмотренные, кэширование и Docker-развёртывание",

      "projects.messenger.type": "AI-мессенджер",
      "projects.messenger.desc": "Мессенджер с AI-ассистентом на локальной модели Ollama: веб-клиент, real-time чаты и Telegram-бот.",
      "projects.messenger.p1": "Личные и групповые чаты на SignalR, JWT-аутентификация",
      "projects.messenger.p2": "Prime AI, файлы до 5 ГБ, темы оформления и push-уведомления",

      "projects.shadowbot.type": "Telegram Mini App",
      "projects.shadowbot.desc": "Магазин изделий 3D-печати внутри Telegram: каталог, карточки с медиа и заказ в два тапа прямо в чат производителю.",
      "projects.shadowbot.p1": "Админ-панель с загрузкой фото и видео, проверка initData по HMAC",
      "projects.shadowbot.p2": "FastAPI + SQLite + aiogram 3, деплой на Ubuntu через Cloudflare Tunnel",

      "projects.tgbot.type": "AI-бот",
      "projects.tgbot.desc": "Приватный Telegram-бот с локальным LLM: свои личности, история диалогов и поддержка изображений.",
      "projects.tgbot.p1": "Глобальные и приватные system prompt'ы, стриминг ответов",
      "projects.tgbot.p2": "SQLite, управление моделями Ollama и админ-панель",

      "projects.r2f.type": "Desktop-утилита",
      "projects.r2f.desc": "Утилита для Windows, которая приводит отчёты по практическим работам к единым правилам и находит ошибки оформления.",
      "projects.r2f.p1": "Работа с .docx: шрифты, отступы, рисунки, подписи и автонумерация",
      "projects.r2f.p2": "Сборка в один .exe через PyInstaller, без установки",

      "projects.tasktracker.type": "Web-приложение",
      "projects.tasktracker.desc": "Трекер задач на ASP.NET Core MVC с полным CRUD, Entity Framework Core и миграциями.",
      "projects.tasktracker.p1": "Создание, редактирование, просмотр и удаление задач",
      "projects.tasktracker.p2": "Entity Framework Core + SQLite, серверная валидация",

      "projects.leetcode.type": "Алгоритмы",
      "projects.leetcode.desc": "Коллекция решений LeetCode на C# с тестами: массивы, строки, структуры данных и динамическое программирование.",
      "projects.leetcode.p1": "15 решённых задач: 14 Easy, 1 Medium",
      "projects.leetcode.p2": "Отдельный тестовый проект LeetCodeTest",

      "projects.snake.type": "Игра",
      "projects.snake.desc": "Классическая змейка в консоли на C#: управление, рост, счёт и ускорение.",
      "projects.snake.p1": "Без сторонних библиотек — только .NET и консоль",

      "stack.title": "Стек",
      "stack.lead": "Инструменты, с которыми я работаю каждый день — от базы данных до деплоя.",
      "stack.backend.title": "Backend",
      "stack.backend.desc": "API, бизнес-логика и доступ к данным",
      "stack.frontend.title": "Frontend",
      "stack.frontend.desc": "Интерфейсы, состояние и сборка",
      "stack.data.title": "Данные",
      "stack.data.desc": "Схемы, запросы и миграции",
      "stack.ai.title": "AI и боты",
      "stack.ai.desc": "Локальные модели и Telegram",
      "stack.infra.title": "Инфраструктура",
      "stack.infra.desc": "От локального запуска до продакшена",
      "stack.tools.title": "Инструменты",
      "stack.tools.desc": "Среда разработки и документация",

      "contact.title": "Давайте сделаем что‑то стоящее",
      "contact.lead": "Открыт к стажировке, junior-позициям и интересным проектам. Быстрее всего отвечу в Telegram.",
      "contact.cta": "Написать в Telegram",
      "contact.github": "Профиль на GitHub",
      "contact.tgNote": "Самый быстрый способ связи",
      "contact.ghNote": "Код, коммиты и README",
      "contact.lcNote": "15 задач на C#",
      "contact.note": "Краснодар · UTC+3 · ru / en",

      "footer.rights": "© 2026 Maksim Permyakov",
      "footer.built": "Вы ещё тут, Может стоит написать?",
      "footer.top": "Наверх"
    },

    en: {
      "meta.title": "Maksim Permyakov — Full-stack Developer · .NET / React",
      "meta.description": "Full-stack developer portfolio: ASP.NET Core, C#, React, TypeScript, Python. Collegium, XenonStore, Prime Messenger and Telegram bots with local AI.",

      "a11y.skip": "Skip to content",

      "nav.about": "About",
      "nav.work": "Featured",
      "nav.projects": "Projects",
      "nav.stack": "Stack",
      "nav.contact": "Contact",
      "nav.cta": "Get in touch",

      "hero.status": "Open to opportunities",
      "hero.greeting": "Hi, I'm",
      "hero.firstName": "Maksim",
      "hero.lastName": "Permyakov",
      "hero.nameFull": "Maksim Permyakov",
      "hero.role": "Full-stack developer",
      "hero.bio": "I build backends with C# and ASP.NET Core and craft interfaces with React and TypeScript. I take projects from database schema to deployment — with clean architecture, tests and clear documentation.",
      "hero.ctaProjects": "View projects",
      "hero.ctaContact": "Let's talk",
      "hero.metaLocation": "Location",
      "hero.locationValue": "Krasnodar, Russia",
      "hero.metaTimezone": "Timezone",
      "hero.metaFocus": "Focus",
      "hero.scroll": "Scroll down",

      "stats.repos": "public repositories",
      "stats.projects": "projects in the portfolio",
      "stats.prod": "projects in production",
      "stats.langs": "core languages",

      "about.title": "About me",
      "about.lead": "I don't just write code — I ship projects people can actually use.",
      "about.p1": "I'm a student and developer based in Krasnodar. I started with C# console tasks and now build full-stack applications: ASP.NET Core on the backend, React and TypeScript on the frontend, PostgreSQL or SQL Server underneath.",
      "about.p2": "Local language models are a separate passion. I build Telegram bots and messengers on Ollama so AI works without sending private data to the cloud.",
      "about.eduTitle": "Education",
      "about.eduValue": "Krasnodar College of Electronic Instrumentation",
      "about.eduNote": "Information Systems and Programming",
      "about.approachTitle": "Approach",
      "about.approachValue": "Architecture and data first, code second. Tests and README are part of the task, not an option.",
      "about.deployTitle": "Deployment",
      "about.deployValue": "Docker, Linux, systemd, Cloudflare Tunnel. I can take a project all the way to a working domain.",
      "about.nowTitle": "Right now",
      "about.now1": "Building Collegium, a college student portal",
      "about.now2": "Going deeper into clean architecture and testing",
      "about.now3": "Experimenting with local LLMs on Ollama",
      "about.now4": "Solving LeetCode problems in C#",
      "about.quote": "Good code reads like good documentation.",

      "featured.title": "Featured project",
      "featured.lead": "A project that's live and actually used.",
      "featured.badge": "In production",
      "featured.subtitle": "College student portal",
      "featured.desc": "A single window into college life: schedule, grades, assignments and news. It unifies data from the electronic diary and the schedule API in one modern interface.",
      "featured.f1": "Schedule, grades and performance from the electronic diary",
      "featured.f2": "Sign in with an email code or via Google, GitHub, Yandex and VK",
      "featured.f3": "Clean architecture: Api / Application / Domain / Infrastructure",
      "featured.f4": "PostgreSQL, EF Core, React Query, Swagger and xUnit",
      "featured.visit": "Visit site",
      "featured.code": "Source code",
      "featured.note": "A real product: schedule, grades and assignments in one place.",

      "projects.title": "Projects",
      "projects.lead": "Eight repositories that best describe what I can do.",
      "projects.noteText": "Also on GitHub",
      "projects.allRepos": "All repositories on GitHub",
      "projects.repo": "Repository",

      "filters.all": "All",
      "filters.web": "Web",
      "filters.ai": "AI & bots",
      "filters.tools": "Tools",
      "filters.algo": "Algorithms",

      "projects.xenon.type": "E-commerce",
      "projects.xenon.desc": "An electronics store built with ASP.NET Core MVC: a filterable catalog, cart, favorites and a full admin panel.",
      "projects.xenon.p1": "Order checkout, roles, suppliers and CSV product import",
      "projects.xenon.p2": "Recently viewed items, caching and Docker deployment",

      "projects.messenger.type": "AI messenger",
      "projects.messenger.desc": "A messenger with an AI assistant running on a local Ollama model: web client, real-time chats and a Telegram bot.",
      "projects.messenger.p1": "Private and group chats over SignalR, JWT authentication",
      "projects.messenger.p2": "Prime AI, files up to 5 GB, themes and push notifications",

      "projects.shadowbot.type": "Telegram Mini App",
      "projects.shadowbot.desc": "A 3D-printing shop inside Telegram: catalog, media cards and a two-tap order straight to the maker's chat.",
      "projects.shadowbot.p1": "Admin panel with photo and video uploads, HMAC-verified initData",
      "projects.shadowbot.p2": "FastAPI + SQLite + aiogram 3, deployed on Ubuntu via Cloudflare Tunnel",

      "projects.tgbot.type": "AI bot",
      "projects.tgbot.desc": "A privacy-first Telegram bot with a local LLM: custom personalities, chat history and image support.",
      "projects.tgbot.p1": "Global and private system prompts, streamed responses",
      "projects.tgbot.p2": "SQLite, Ollama model management and an admin panel",

      "projects.r2f.type": "Desktop utility",
      "projects.r2f.desc": "A Windows utility that formats lab reports to a unified standard and flags formatting issues it can't fix automatically.",
      "projects.r2f.p1": "Works with .docx: fonts, indents, figures, captions and auto-numbering",
      "projects.r2f.p2": "Ships as a single .exe via PyInstaller, no installation needed",

      "projects.tasktracker.type": "Web app",
      "projects.tasktracker.desc": "A task tracker built with ASP.NET Core MVC, featuring full CRUD, Entity Framework Core and migrations.",
      "projects.tasktracker.p1": "Create, edit, view and delete tasks",
      "projects.tasktracker.p2": "Entity Framework Core + SQLite, server-side validation",

      "projects.leetcode.type": "Algorithms",
      "projects.leetcode.desc": "A collection of LeetCode solutions in C# with tests: arrays, strings, data structures and dynamic programming.",
      "projects.leetcode.p1": "15 solved problems: 14 Easy, 1 Medium",
      "projects.leetcode.p2": "A separate LeetCodeTest project",

      "projects.snake.type": "Game",
      "projects.snake.desc": "Classic console Snake in C#: controls, growth, score and speed-up.",
      "projects.snake.p1": "No third-party libraries — just .NET and the console",

      "stack.title": "Stack",
      "stack.lead": "The tools I work with every day — from database to deployment.",
      "stack.backend.title": "Backend",
      "stack.backend.desc": "APIs, business logic and data access",
      "stack.frontend.title": "Frontend",
      "stack.frontend.desc": "Interfaces, state and build tooling",
      "stack.data.title": "Data",
      "stack.data.desc": "Schemas, queries and migrations",
      "stack.ai.title": "AI & bots",
      "stack.ai.desc": "Local models and Telegram",
      "stack.infra.title": "Infrastructure",
      "stack.infra.desc": "From local run to production",
      "stack.tools.title": "Tooling",
      "stack.tools.desc": "Development environment and docs",

      "contact.title": "Let's build something worth shipping",
      "contact.lead": "Open to internships, junior roles and interesting projects. Telegram is the fastest way to reach me.",
      "contact.cta": "Message on Telegram",
      "contact.github": "GitHub profile",
      "contact.tgNote": "The fastest way to reach me",
      "contact.ghNote": "Code, commits and READMEs",
      "contact.lcNote": "15 problems in C#",
      "contact.note": "Krasnodar · UTC+3 · ru / en",

      "footer.rights": "© 2026 Maksim Permyakov",
      "footer.built": "Built with HTML, CSS and JavaScript. No frameworks.",
      "footer.top": "Back to top"
    }
  };

  const STORAGE_KEY = "mp-portfolio-lang";
  const DEFAULT_LANG = "ru";

  const getStoredLang = () => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored === "ru" || stored === "en" ? stored : null;
    } catch {
      return null;
    }
  };

  const storeLang = (lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage may be unavailable */
    }
  };

  const setLanguage = (lang) => {
    const dictionary = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const value = dictionary[key];
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    document.title = dictionary["meta.title"];

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", dictionary["meta.description"]);
    }

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const isActive = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", dictionary["meta.title"]);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", dictionary["meta.description"]);
    }

    storeLang(lang);
  };

  /* ---------- language switch ---------- */

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  setLanguage(getStoredLang() || DEFAULT_LANG);

  /* ---------- header on scroll + scroll spy ---------- */

  const header = document.getElementById("siteHeader");
  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]')).filter(
    (link) => !link.classList.contains("nav-cta")
  );
  const spySections = ["about", "work", "projects", "stack", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  let ticking = false;

  const updateScrollState = () => {
    const scrollY = window.scrollY;

    if (header) {
      header.classList.toggle("is-scrolled", scrollY > 8);
    }

    let current = "";
    const threshold = scrollY + 150;

    spySections.forEach((section) => {
      if (section.offsetTop <= threshold) {
        current = section.id;
      }
    });

    if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 8) {
      current = "contact";
    }

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
    });

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  updateScrollState();

  /* ---------- mobile menu ---------- */

  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  const closeMenu = () => {
    if (!siteNav || !menuToggle) return;
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!siteNav.classList.contains("is-open")) return;
      if (siteNav.contains(event.target) || menuToggle.contains(event.target)) return;
      closeMenu();
    });
  }

  /* ---------- reveal on scroll ---------- */

  const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));

  revealElements.forEach((element) => {
    const siblings = Array.from(element.parentElement.children).filter((child) =>
      child.hasAttribute("data-reveal")
    );
    const index = siblings.indexOf(element);
    element.style.setProperty("--reveal-delay", `${Math.min(index * 55, 275)}ms`);
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.08 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  /* ---------- project filters ---------- */

  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const projectCards = Array.from(document.querySelectorAll("#projectsGrid .project-card"));

  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));

    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      filterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      projectCards.forEach((card) => {
        const categories = (card.getAttribute("data-category") || "").split(/\s+/);
        const matches = filter === "all" || categories.includes(filter);
        card.classList.toggle("is-hidden", !matches);
        if (matches) {
          card.classList.add("is-visible");
        }
      });
    });
  });

  /* ---------- console signature ---------- */

  console.log(
    "%c max-permyakov ",
    "background:#00e08a;color:#04140c;font-weight:700;border-radius:4px;padding:2px 4px;",
    "\nFull-stack developer · .NET + React\nhttps://github.com/max-permyakov"
  );
})();
