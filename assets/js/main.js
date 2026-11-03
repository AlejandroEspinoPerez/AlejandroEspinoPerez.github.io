/* Alejandro Espino Pérez — portfolio. Theme, language, navigation. No dependencies. */
(function () {
  'use strict';

  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } }
  };

  /* ------------------------------------------------------------------
     Spanish strings. English lives in the HTML and is captured at load,
     so each key here must match a data-i18n / data-i18n-attr key.
     ------------------------------------------------------------------ */
  var ES = {
    'meta.title': 'Alejandro Espino Pérez — Desarrollador Full-Stack · Laravel · React/Next.js · TypeScript',
    'meta.description': 'Portfolio de Alejandro Espino Pérez, desarrollador full-stack (Laravel, React/Next.js, TypeScript) que crea productos SaaS en producción para empresas de EE. UU. y España. La Habana, Cuba · hora del Este · disponible para trabajo remoto.',

    'skip': 'Saltar al contenido',
    'brand.label': 'Alejandro Espino Pérez, volver arriba',
    'nav.label': 'Principal',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.work': 'Clientes',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'lang.label': 'Idioma',

    'hero.status': 'Disponible para trabajo remoto',
    'hero.location': 'La Habana, Cuba · hora del Este',
    'hero.role': 'Desarrollador Full-Stack',
    'hero.lead': 'Desde finales de 2024 creo productos SaaS en producción para empresas de EE.&nbsp;UU. y España. Principal desarrollador frontend, a tiempo completo, de <strong>Falcon Dispute</strong> (Dumbo Credit), con foco en pagos.',
    'hero.photoAlt': 'Foto de Alejandro Espino Pérez',
    'cta.email': 'Escríbeme',
    'cta.resume': 'CV (PDF)',
    'cta.resumeHref': 'cv/Alejandro-Espino-Perez-CV-FullStack-ES.pdf',

    'stats.label': 'Datos destacados',
    'stats.1.n': '3,5+ años',
    'stats.1.l': 'de experiencia profesional',
    'stats.2.n': '2 años',
    'stats.2.l': 'en SaaS para EE.&nbsp;UU. y España',
    'stats.3.n': '1.500+',
    'stats.3.l': 'commits en Falcon Dispute',
    'stats.4.n': '2.400+',
    'stats.4.l': 'contribuciones en GitHub en los últimos 12 meses',

    'about.title': 'Sobre mí',
    'about.intro': 'Desarrollador full-stack desde 2023, con más de 3,5 años de experiencia profesional. Trabajo sobre todo con <strong>Laravel + React/Next.js + TypeScript</strong>, y también con Angular, NestJS, Filament y React Native/Expo.',
    'about.h1': 'Principal desarrollador frontend, a tiempo completo, de <a href="https://falcondispute.com" target="_blank" rel="noopener">Falcon Dispute</a>, un SaaS multiempresa de reparación de crédito para Dumbo Credit.',
    'about.h2': 'Disfruto con las partes más complejas de un producto: pagos (Stripe, Revolut Business, NMI), automatizaciones, control de acceso por roles y paneles de administración.',
    'about.h3': 'En mi tiempo libre desarrollo videojuegos con three.js, Expo y Canvas, y automatizo sus tráileres con Remotion.',
    'about.h4': 'Uso flujos de desarrollo asistidos por IA (Claude Code), con código tipado, pruebas y revisión por pull requests.',
    'facts.title': 'Datos rápidos',
    'facts.edu': 'Formación',
    'facts.degree': 'Ingeniería en Ciencias Informáticas',
    'facts.school': 'Universidad de las Ciencias Informáticas (UCI) · La Habana · 2019 – 2024',
    'facts.gold': 'Título de Oro · máximo reconocimiento académico',
    'facts.langs': 'Idiomas',
    'facts.es': 'Español — lengua materna',
    'facts.en': 'Inglés — A2 (MCER) · lectura técnica diaria',
    'facts.where': 'Ubicación',
    'facts.location': 'La Habana, Cuba · hora del Este (UTC−5/−4) · Remoto',

    'exp.title': 'Experiencia profesional',
    'exp.c.role': 'Full-Stack Developer',
    'exp.c.co': 'Contractor remoto (B2B)',
    'exp.c.date': '11/2024 – actualidad',
    'exp.c.meta': 'Remoto · Tiempo completo en Falcon Dispute (Dumbo Credit, EE.&nbsp;UU.) desde 09/2025; además, proyectos para clientes de España vía la agencia Innet y un equipo de desarrollo remoto.',
    'exp.falcon.kind': 'SaaS de reparación de crédito',
    'exp.falcon.date': '09/2025 – actualidad',
    'exp.falcon.list':
      '<li>Principal desarrollador frontend (<strong>cerca del 75&nbsp;% de los commits de interfaz; más de 1.500 commits en total</strong>) de un CRM con Laravel 10, Inertia.js, React y TypeScript.</li>' +
      '<li>Construí la interfaz completa del flujo central de disputas: revisión del informe de crédito importado, constructor de cartas por rondas, envío postal con PostGrid y resultados.</li>' +
      '<li>Desarrollé la facturación en el frontend con <strong>Stripe y MagicPay</strong> (planes con límites, créditos, facturas, suscripciones y flujo de retención) y el constructor de automatizaciones <strong>AutoFalcon</strong>.</li>' +
      '<li>Creé desde cero el <strong>portal de clientes de marca blanca</strong> (Next.js 16, React 19, TanStack Query, Zustand): marca y ~30 feature flags por dominio, firma electrónica, carga de documentos y pagos tokenizados con NMI.</li>' +
      '<li>Reforcé la seguridad (permisos granulares con Spatie, control de acceso por rol y datos sensibles fuera de las respuestas de la API) e internacionalicé la app (EN/ES).</li>',
    'exp.kruceros.kind': 'CRM/ERP de reservas de una agencia de cruceros (vía Innet)',
    'exp.kruceros.date': '06/2026 – actualidad',
    'exp.kruceros.list':
      '<li>Asumí el desarrollo principal desde junio de 2026 con <strong>Laravel 10 y Filament 3</strong>: liquidaciones trimestrales de comisiones, 45 migraciones y tareas programadas.</li>' +
      '<li>Automaticé los cobros con <strong>webhooks de Revolut Business</strong> (firma HMAC, OAuth con JWT y conciliación cada hora) y construí las integraciones con Shore2Shore (OAuth 2.0) y Awipik (SOAP).</li>',
    'exp.vectra.kind': 'CRM comercial e hipotecario del sector inmobiliario',
    'exp.vectra.list':
      '<li>Desarrollé casi en solitario un CRM con <strong>Laravel 13 y Filament 5</strong>: embudo cliente&nbsp;→ oportunidad&nbsp;→ encargo, agenda, gestión documental y panel con KPI, embudo de conversión y Euríbor diario.</li>',
    'exp.estucalia.kind': 'web corporativa trilingüe y CMS headless',
    'exp.estucalia.list':
      '<li>Desarrollé gran parte del CMS en <strong>Laravel 12 + Filament 3</strong> (14 modelos y 24 controladores de API) e implementé el SEO técnico en Next.js: SSR, hreflang ES/EN/FR, sitemap dinámico y metadatos editables (<a href="https://www.grupoestucalia.com" target="_blank" rel="noopener">grupoestucalia.com</a>).</li>',
    'exp.padel.kind': 'plataforma de torneos de pádel: API, panel y app móvil (vía Innet)',
    'exp.padel.list':
      '<li>Desarrollador principal (<strong>350 de 535 commits</strong>) de la API Laravel 12 + Filament 3 y la app <strong>Expo/React Native</strong> para iOS, Android y web, traducida a 8 idiomas.</li>' +
      '<li>Implementé el motor de competición (grupos, cuadros eliminatorios y americanos), pagos con Stripe (suscripciones con cambio de plan prorrateado) y notificaciones push con OneSignal.</li>' +
      '<li>Añadí la búsqueda de torneos cercanos por geolocalización (fórmula de Haversine), el alta de clubs sobre mapa (Leaflet + Nominatim) y recordatorios programados por email.</li>',
    'exp.capo.title': 'Dumbo Credit y TaxFinder',
    'exp.capo.kind': 'productos para EE.&nbsp;UU. (vía la agencia Capo Digital)',
    'exp.capo.list':
      '<li><strong>Dumbo Credit</strong> (<a href="https://app.dumbocredit.com" target="_blank" rel="noopener">app.dumbocredit.com</a>): informe de crédito de los 3 burós, panel de administración (ingresos, abandono, suscripciones de Stripe, informes PDF/Excel) y portal de afiliados, en Next.js 14 y TypeScript.</li>' +
      '<li><strong>TaxFinder</strong> (<a href="https://app.taxfinder.net" target="_blank" rel="noopener">app.taxfinder.net</a>): implementé el panel de administración, pagos dentro del chat (Stripe y enlaces de pago) y notificaciones push con Firebase Cloud Messaging.</li>',
    'exp.fortes.role': 'Frontend / Full-Stack Developer',
    'exp.fortes.date': '2023 – actualidad',
    'exp.fortes.meta': 'La Habana · Tiempo parcial · SIGIES, sistema nacional de ingreso a la educación superior de Cuba',
    'exp.fortes.list':
      '<li>Construí el layout base responsive del nuevo SIGIES y, en 2024, 24 catálogos de datos maestros (codificadores) y el plan de plazas por provincia en <strong>Angular y NG-ZORRO</strong>, con tabla, filtros y ApiService&lt;T&gt; genéricos.</li>' +
      '<li>En 2026 implementé de principio a fin el codificador Color de piel: API en <strong>NestJS + TypeORM</strong>, migración de permisos, 19 pruebas con Jest y pantallas en Angular 18.</li>',
    'exp.htp.co': 'Parque Tecnológico de La Habana',
    'exp.htp.meta': 'La Habana · Frontend de la plataforma Fyself con React y JavaScript',

    'work.title': 'Trabajo destacado para clientes',
    'work.sub': 'Productos en los que trabajo o he trabajado para empresas de EE.&nbsp;UU. y España.',
    'work.falcon.tag': 'SaaS de reparación de crédito · EE.&nbsp;UU.',
    'work.falcon.role': 'Principal desarrollador frontend · a tiempo completo desde 09/2025',
    'work.falcon.list':
      '<li>Interfaz del flujo de disputas y constructor de cartas por rondas</li>' +
      '<li>Facturación con Stripe y MagicPay</li>' +
      '<li>Interfaz del constructor de automatizaciones AutoFalcon</li>' +
      '<li>Portal de clientes de marca blanca creado desde cero (Next.js 16)</li>',
    'work.falcon.s1': 'de los commits de interfaz',
    'work.falcon.s2': 'commits en total',
    'work.kruceros.tag': 'CRM/ERP de reservas de cruceros · España',
    'work.kruceros.desc': 'Desarrollador principal desde junio de 2026: webhooks de Revolut Business con conciliación cada hora, liquidaciones trimestrales de comisiones e integraciones OAuth 2.0 y SOAP.',
    'work.estucalia.tag': 'Web trilingüe y CMS headless · España',
    'work.estucalia.desc': 'Gran parte del CMS (Laravel 12 + Filament 3) y el SEO técnico en Next.js: SSR, hreflang ES/EN/FR, sitemap dinámico y metadatos editables.',
    'work.padel.tag': 'Plataforma de torneos de pádel · España',
    'work.padel.desc': 'Desarrollador full-stack principal (350 de 535 commits): motor de competición (grupos, cuadros y formato americano), suscripciones con Stripe, notificaciones push y app traducida a 8 idiomas.',
    'work.taxfinder.tag': 'Marketplace de asesores fiscales · EE.&nbsp;UU.',
    'work.taxfinder.desc': 'Panel de administración, pagos dentro del chat y notificaciones push web.',
    'work.dumbo.tag': 'Monitorización de crédito · EE.&nbsp;UU.',
    'work.dumbo.desc': 'Informe de crédito de los 3 burós, panel de administración con KPI de ingresos y abandono, y portal de afiliados.',
    'work.vectra.tag': 'CRM inmobiliario e hipotecario · España',
    'work.vectra.desc': 'Desarrollado casi en solitario: embudo comercial, agenda, gestión documental y panel con KPI, embudo de conversión y Euríbor diario.',
    'work.note': 'El código de los clientes es privado. Con gusto explico la arquitectura y las decisiones en una entrevista.',

    'proj.title': 'Proyectos personales',
    'proj.ai': 'Asistidos por IA',
    'proj.sub': 'Juegos y apps que desarrollo en mi tiempo libre con flujos asistidos por IA (Claude Code).',
    'proj.play': 'Jugar la demo',
    'proj.aldea.tag': 'Estrategia y tower defense en el navegador',
    'proj.aldea.desc': 'Caché de sprites con desalojo LRU, 78 pruebas de humo con Puppeteer y APK Android con Capacitor.',
    'proj.tierra.tag': 'Simulador procedural de mundos y civilizaciones',
    'proj.tierra.desc': 'Generación procedural con semilla (biomas, ríos, clima), caminos con A* y civilizaciones que evolucionan por eras.',
    'proj.battle.tag': 'Auto-battler 3D para móvil',
    'proj.battle.desc': 'Multijugador local por wifi con lockstep determinista y repeticiones; aldea 3D con ciclo día/noche.',
    'proj.battle.demo': 'Demo bajo petición',
    'proj.vende.tag': 'Inventario y punto de venta sin conexión',
    'proj.vende.desc': 'App Android/iOS de 14 pantallas: ventas en SQLite, analítica, informes PDF, copias de seguridad y OTA.',
    'proj.manos.tag': 'Visión por computador en el navegador',
    'proj.manos.desc': 'Seguimiento de manos y cara con 9 modos por gestos y un clasificador kNN de poses entrenable en vivo.',
    'stack': 'Tecnologías',

    'skills.title': 'Habilidades técnicas',
    'skills.backend': '<li>PHP 8</li><li class="core">Laravel 9–13</li><li>Filament</li><li>Livewire</li><li>NestJS</li><li>Node.js</li><li>API REST</li><li>Sanctum/JWT</li><li>Colas</li><li>Webhooks</li>',
    'skills.mobileTitle': 'Móvil y datos',
    'skills.intTitle': 'Integraciones',
    'skills.toolsTitle': 'Herramientas',
    'skills.tools': '<li>Git (GitHub/GitLab)</li><li>Pull requests</li><li>GitHub Actions</li><li>PHPUnit</li><li>Jest</li><li>i18n</li><li>SEO técnico</li><li>RBAC (Spatie)</li>',
    'skills.otherTitle': 'Otros',
    'skills.other': '<li>three.js</li><li>Remotion</li><li>MediaPipe</li><li>Unity (C#)</li><li>Desarrollo asistido por IA (Claude Code)</li><li>Scrum</li>',

    'contact.title': 'Hablemos',
    'contact.text': 'Estoy abierto a <strong>puestos full-stack en remoto</strong> (Laravel · React/Next.js · TypeScript) con equipos de Europa y América.',
    'contact.location': 'La Habana, Cuba · hora del Este (UTC−5/−4)',
    'contact.resumeEn': 'CV en inglés (PDF)',
    'contact.resumeEs': 'CV en español (PDF)',

    'footer.built': 'Hecho con HTML, CSS y JavaScript sin frameworks.',
    'footer.top': 'Volver arriba'
  };

  var UI = {
    en: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode', menuOpen: 'Open menu', menuClose: 'Close menu' },
    es: { toLight: 'Cambiar a modo claro', toDark: 'Cambiar a modo oscuro', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú' }
  };

  /* ---------- i18n ---------- */
  var metaDesc = document.querySelector('meta[name="description"]');
  var original = { title: document.title, description: metaDesc ? metaDesc.content : '' };
  var textEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var attrEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-attr]'));

  textEls.forEach(function (el) { el._en = el.innerHTML; });
  attrEls.forEach(function (el) {
    el._enAttrs = {};
    el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
      var parts = pair.split(':');
      var attr = parts[0].trim();
      el._enAttrs[attr] = { key: parts.slice(1).join(':').trim(), value: el.getAttribute(attr) };
    });
  });
  // Every "Stack" list label follows the language too.
  Array.prototype.forEach.call(document.querySelectorAll('.chips[aria-label]'), function (el) {
    el._enAttrs = { 'aria-label': { key: 'stack', value: el.getAttribute('aria-label') } };
    attrEls.push(el);
  });

  var lang = 'en';
  function t(key, fallback) { return lang === 'es' && ES[key] != null ? ES[key] : fallback; }

  function applyLang(next) {
    lang = next === 'es' ? 'es' : 'en';
    root.lang = lang;
    textEls.forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n'), el._en); });
    attrEls.forEach(function (el) {
      Object.keys(el._enAttrs).forEach(function (attr) {
        var a = el._enAttrs[attr];
        el.setAttribute(attr, t(a.key, a.value));
      });
    });
    document.title = t('meta.title', original.title);
    if (metaDesc) metaDesc.content = t('meta.description', original.description);
    Array.prototype.forEach.call(document.querySelectorAll('.lang-switch button'), function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    syncThemeLabel();
    syncMenuLabel();
  }

  /* ---------- Theme ---------- */
  var themeBtn = document.querySelector('.theme-toggle');
  var themeMeta = document.querySelector('meta[name="theme-color"]');

  function currentTheme() { return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }
  function syncThemeLabel() {
    if (themeBtn) themeBtn.setAttribute('aria-label', UI[lang][currentTheme() === 'dark' ? 'toLight' : 'toDark']);
    if (themeMeta) themeMeta.content = currentTheme() === 'dark' ? '#0A1022' : '#F6F8FC';
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      store.set('theme', next);
      syncThemeLabel();
    });
  }

  /* ---------- Mobile menu ---------- */
  var header = document.querySelector('.site-header');
  var menuBtn = document.querySelector('.menu-toggle');

  function isMenuOpen() { return header.classList.contains('nav-open'); }
  function syncMenuLabel() {
    if (menuBtn) menuBtn.setAttribute('aria-label', UI[lang][isMenuOpen() ? 'menuClose' : 'menuOpen']);
  }
  function setMenu(open) {
    header.classList.toggle('nav-open', open);
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(open));
    syncMenuLabel();
  }
  if (menuBtn) menuBtn.addEventListener('click', function () { setMenu(!isMenuOpen()); });
  Array.prototype.forEach.call(document.querySelectorAll('.nav-list a'), function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isMenuOpen()) { setMenu(false); menuBtn.focus(); }
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });

  /* ---------- Header border on scroll ---------- */
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Language buttons + initial language ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.lang-switch button'), function (b) {
    b.addEventListener('click', function () {
      var next = b.getAttribute('data-lang');
      store.set('lang', next);
      applyLang(next);
    });
  });
  var param = new URLSearchParams(window.location.search).get('lang');
  var initial = param === 'es' || param === 'en' ? param : store.get('lang');
  applyLang(initial === 'es' ? 'es' : 'en');

  /* ---------- Active nav link + reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    var links = {};
    Array.prototype.forEach.call(document.querySelectorAll('.nav-list a'), function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var link = links[entry.target.id]; // undefined for the hero, which clears the highlight
        Object.keys(links).forEach(function (id) {
          links[id].classList.remove('is-active');
          links[id].removeAttribute('aria-current');
        });
        if (link) {
          link.classList.add('is-active');
          link.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).concat('top').forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });

    var reveal = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); obs.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { reveal.observe(el); });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { el.classList.add('in'); });
  }
})();
